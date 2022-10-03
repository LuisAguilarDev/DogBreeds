import React from "react";
import Breeds from "../Breeds/Breeds";
import SidePanel from "../SidePanel/SidePanel";
import Dropbtn from "./dropbtn/dropbtn";
import s from "./GlobalContainer.module.css";
import { connect } from "react-redux";
import jpg from "./../../assets/loading.gif";
import Nav from "../../components/Nav/Nav.jsx";

const GlobalContainer = (props) => {
  let loading = props.loading;
  return (
    <div>
      <Nav />
      <div className={s.globalContainer}>
        <SidePanel />

        {loading ? (
          <div className={s.loading}>
            <img className={s.img} src={jpg} alt="not Found" />
          </div>
        ) : (
          <div className={s.secondpanel}>
            <Dropbtn />
            <Breeds />
          </div>
        )}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(GlobalContainer);
