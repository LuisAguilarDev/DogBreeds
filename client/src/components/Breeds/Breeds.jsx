// import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import BreedCard from "./../BreedDetail/BreedDetail.jsx";
import s from "./Breed.module.css";

const Breeds = (props) => {
  // useState(() => {
  //   console.log("entre");
  //   props.getBreeds();
  // }, []);

  return (
    <div className={s.panel}>
      <div className={s.container}>
        {props.breeds?.slice(0, 8).map((b) => {
          return (
            <BreedCard
              key={b.id}
              img={b.img}
              name={b.name}
              temper={b.tempers}
            />
          );
        })}
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
