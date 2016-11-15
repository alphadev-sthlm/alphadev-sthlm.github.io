import React from "react";
import Header from "./Header";
import Service from "./Services";
import Welcome from "./Welcome";
import Consultants from "./Consultants";
import Contact from "./Contact";

export default function () {
  return (
    <div>
      <Header />
      <Welcome />
      <Service />
      <Consultants />
      <Contact />
    </div>
  );
}
