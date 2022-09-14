import React from "react";
import { useState } from "react";
import { useDispatch, connect } from "react-redux";
import * as actionCreators from "../redux/actions/index.js";
import BreedCard from "./../BreedDetail/BreedDetail.jsx";
import s from "./Breed.module.css";

const Breeds = (props) => {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(actionCreators.getBreeds());
  }, []);

  //   setTimeout(console.log(this.props), 3000);
  //   if (this.state.breeds) return <div>Hola</div>;
  return (
    <div className={s.panel}>
      <div className={s.container}>
        {props.breeds?.slice(0, 8).map((b) => {
          return (
            <BreedCard
              key={b.id}
              img={b.image.url}
              name={b.name}
              temper={b.temperament}
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
