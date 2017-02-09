import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Service from "./Services";
import Welcome from "./Welcome";
import Consultants from "./Consultants";
import Contact from "./Contact";

export default function () {
  return (
    <div>
      <Header />
      <Intro />
      <Welcome />
      <Service />
      <Consultants />
      <Contact />
    </div>
  );
}
