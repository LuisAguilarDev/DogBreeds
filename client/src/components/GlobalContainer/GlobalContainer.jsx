import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Breeds from "../Breeds/Breeds";
import SidePanel from "../SidePanel/SidePanel";
import Dropbtn from "./dropbtn/dropbtn";
import s from "./GlobalContainer.module.css";
import * as actionCreators from "./../../redux/actions";
// import Dropbtn from "./dropbtn/dropbtn";

const GlobalContainer = (props) => {
  const dispatch = useDispatch();
  useState(() => {
    console.log("entre");
    dispatch(actionCreators.getBreeds());
  });

  return (
    <div className={s.globalContainer}>
      <SidePanel />
      <Dropbtn />
      <Breeds />
    </div>
  );
};

export default GlobalContainer;
