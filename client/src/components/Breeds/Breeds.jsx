// import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import BreedCard from "../BreedCard/BreedCard.jsx";
import s from "./Breeds.module.css";
import Pagination from "../Pagination/Pagination.jsx";

const Breeds = (props) => {
  return (
    <div className={s.view}>
      <div className={s.panel}>
        <div className={s.container}>
          {props.breeds?.slice(0, 8).map((b, i) => {
            return (
              <BreedCard
                key={b.id}
                id={i}
                img={b.img}
                name={b.name}
                temper={b.tempers}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(actionCreators.getBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);
