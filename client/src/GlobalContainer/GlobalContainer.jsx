import React from "react";
import Breeds from "../Breeds/Breeds";
import SidePanel from "../SidePanel/SidePanel";
import s from "./GlobalContainer.module.css";
// import Dropbtn from "./dropbtn/dropbtn";

const GlobalContainer = (props) => {
  return (
    <div className={s.globalContainer}>
      <SidePanel />
      <Breeds />
    </div>
  );
};

export default GlobalContainer;
