import React from "react";
import Breeds from "../Breeds/Breeds";
import SidePanel from "../SidePanel/SidePanel";
import Dropbtn from "./dropbtn/dropbtn";
import s from "./GlobalContainer.module.css";

const GlobalContainer = (props) => {
  return (
    <div className={s.globalContainer}>
      <SidePanel />
      <Dropbtn />
      <Breeds />
    </div>
  );
};

export default GlobalContainer;
