import axios from "axios";
import qs from "qs";

let cancel = {
  source: null,
  id: null
};

const getURI = endpoint => {
  let apiHost = process.env.REACT_APP_API_HOST;

  apiHost = apiHost ? apiHost : "api";

  return `${apiHost}/${endpoint}`;
};

const getJWT = () => {
  return window.localStorage.getItem("jwt");
};

const get = async (
  endpoint,
  auth = true,
  queryParams = {},
  responseType = "json",
  headers = {},
  id = ""
) => {
  let config = null;

  if (auth) {
    if (cancel.id === id) {
      cancel.source.cancel();
    }

    cancel.source = axios.CancelToken.source();
    if (id !== "") {
      cancel.id = id;
    }

    config = {
      headers: {
        ...headers,
        Authorization: `Bearer ${getJWT()}`
      },
      cancelToken: cancel.source.token,
      data: {},
      params: queryParams,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: "brackets" });
      }
    };
  }

  const uri = `${getURI(endpoint)}`;
  return await axios.get(uri, config, responseType);
};

const post = async (
  endpoint,
  data,
  auth = true,
  headers = {},
  responseType = null,
  queryParams = {}
) => {
  let config = null;

  if (auth) {
    config = {
      headers: {
        ...headers,
        Authorization: `Bearer ${getJWT()}`
      },
      params: queryParams,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: "brackets" });
      }
    };

    if (responseType) {
      config["responseType"] = responseType;
    }
  }

  return await axios.post(getURI(endpoint), data, config);
};

const patch = async (endpoint, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${getJWT()}`
    }
  };

  return await axios.patch(getURI(endpoint), data, config);
};

export const api = {
  get: get,
  post: post,
  patch: patch
};
