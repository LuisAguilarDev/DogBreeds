// import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import BreedCard from "../BreedCard/BreedCard.jsx";
import s from "./Breed.module.css";
import { useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";

const Breeds = (props) => {
  useState(() => {
    let page = 1;
    props.getBreeds(page);
  }, []);

  return (
    <div>
      <div className={s.panel}>
        <div className={s.container}>
          {props.breeds?.slice(0, 8).map((b) => {
            return (
              <BreedCard
                key={b.id}
                id={b.id}
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
