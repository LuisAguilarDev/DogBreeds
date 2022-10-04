import React from "react";
import s from "./BreedCard.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";

const BreedCard = (props) => {
  let text = [];
  props.temper.map((o) => text.push(" " + o.name));
  let defaultText = "This has not yet been determined.";
  return (
    <div className={s.cardcontainer}>
      <div className={s.container}>
        <Link to={`/BreedDetail/${props.id}`}>
          <img className={s.img} src={props.img} alt="not found" />
        </Link>
      </div>
      <div className={s.textbox}>
        <div className={s.title}>{props.name}</div>
        {text.length === 0 ? (
          <div className={s.tempertex}>{defaultText}</div>
        ) : (
          <div className={s.tempertex}>{text.toString(",").trim() + "."}</div>
        )}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    search: state.search,
    pageSearch: state.pageSearch,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(actionCreators.getBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedCard);
