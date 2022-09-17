import React from "react";
import s from "./BreedDetail.module.css";

const BreedCard = (props) => {
  let text = [];
  props.temper.map((o) => {
    text.push(" " + o.name);
  });

  return (
    <div className={s.cardcontainer}>
      <img className={s.img} src={props.img} alt="not found" />
      <div className={s.textbox}>
        <h2>{props.name}</h2>
        <h3>{text.toString(",").trim() + "."}</h3>
      </div>
    </div>
  );
};

export default BreedCard;
