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
        <h2>{props.name}</h2>
        {text.length === 0 ? (
          <h3>{defaultText}</h3>
        ) : (
          <h3>{text.toString(",").trim() + "."}</h3>
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
