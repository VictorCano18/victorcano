import React from "react";
import "../index.css";
import NavBar from "../components/Navbar/Navbar";
import Summary from "../components/Summary/Summary";

export default function Home() {
  return (
    <div>
      <NavBar className="row d-flex align-items-center justify-content-center"/>
      <Summary />
    </div>
  );
}
