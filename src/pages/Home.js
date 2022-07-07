import React, { useState, useEffect } from "react";
import "../index.css";
import Summary from "../components/Summary/Summary";
import AboutMe from "../components/About/AboutMe";
import Contact from "../components/Contact/Contact";
import ContactXS from "../components/Contact/ContactXS";
import Projects from "../components/Projects/Projects";

function useWindowsSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default function Home() {
  let [width] = useWindowsSize();
  return (
    <div>
      <Summary />
      <AboutMe />
      <Projects />
      {{ width }.width <= 1200 ? <ContactXS /> : <Contact />}
    </div>
  );
}
