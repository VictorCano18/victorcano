import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [cube, setCube] = useState("");

  return (
    <UserContext.Provider
      value={{
        cube,
        setCube,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
