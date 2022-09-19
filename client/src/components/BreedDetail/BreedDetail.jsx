import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import s from "./BreedDetail.module.css";

const BreedDetail = (props) => {
  let { id } = useParams();
  let text = [];
  props.breeds[id].tempers.map((o) => text.push(" " + o.name));
  console.log();
  return (
    <div className={s.container}>
      <div className={s.columnas}>
        <img className={s.img} src={props.breeds[id].img} alt="not found" />
      </div>
      <div className={s.columnas}>
        <div className={s.textBox}>
          <div className={s.title}>{props.breeds[id].name}</div>
          <div className={s.detail}>
            -Life Span: {props.breeds[id].life_span}
          </div>
          <div className={s.detail}>-Weight: {props.breeds[id].weight}</div>
          <div className={s.detail}>-Height: {props.breeds[id].height}</div>
          <div className={s.detail}>
            -Temperament: {text.toString(",").trim() + "."}
          </div>
        </div>
      </div>
    </div>
  );
};
export const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
  };
};

export default connect(mapStateToProps, null)(BreedDetail);
