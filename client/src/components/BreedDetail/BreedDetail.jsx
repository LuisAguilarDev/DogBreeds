import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import s from "./BreedDetail.module.css";
import * as actionCreators from "../../redux/actions/index.js";
import back from "./../../assets/goBack.png";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const BreedDetail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let text = [];
  let defaultText = "-Temperament: This has not yet been determined.";
  useState(() => {
    props.getByID(id);
  }, []);
  let length = props.detail.length === 1;
  props.detail[0]?.tempers?.map((o) => text.push(" " + o.name));

  return (
    <div>
      <div>
        <Nav />
      </div>
      <Link onClick={() => navigate(-1)} className={s.home}>
        <img src={back} alt="not Found" className={s.return} />
      </Link>
      {length ? (
        <div className={s.container}>
          <div className={s.columnas}>
            <img className={s.img} src={props.detail[0].img} alt="not found" />
          </div>
          <div className={s.columnas}>
            <div className={s.textBox}>
              <div className={s.title}>{props.detail[0].name}</div>
              <div className={s.detail}>
                -Life Span: {props.detail[0].life_span}
              </div>
              <div className={s.detail}>-Weight: {props.detail[0].weight}</div>
              <div className={s.detail}>-Height: {props.detail[0].height}</div>
              <div className={s.detail}>
                {text.length === 0
                  ? defaultText
                  : `-Temperament: ${text.toString(",").trim() + "."}`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    getByID: (id) => dispatch(actionCreators.getByID(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetail);
