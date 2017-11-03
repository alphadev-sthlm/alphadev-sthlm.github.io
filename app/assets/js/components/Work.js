import React from "react";
import WorkHeader from "./WorkHeader";
import CoolGang from "./CoolGang";
import Consultants from "./Consultants";
import Contact from "./Contact";

export default function () {
  return (
    <div>
      <WorkHeader />
      <div style={{height: `${80}px`}}/>
      <CoolGang />
      <Consultants snazz={true}/>
      <Contact />
    </div>
  );
}
