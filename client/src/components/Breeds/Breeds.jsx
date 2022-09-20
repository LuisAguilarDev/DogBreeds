// import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import BreedCard from "../BreedCard/BreedCard.jsx";
import s from "./Breeds.module.css";
import Pagination from "../Pagination/Pagination.jsx";
import { useParams } from "react-router-dom";

const Breeds = (props) => {
  let { search } = useParams();
  if (search === undefined) {
    search = true;
  } else {
    search = false;
  }
  console.log(props.search);
  return (
    <div className={s.view}>
      <div className={s.panel}>
        <div className={s.container}>
          {search
            ? props.breeds?.slice(0, 8)?.map((b) => {
                return (
                  <BreedCard
                    key={b.id}
                    id={b.id}
                    img={b.img}
                    name={b.name}
                    temper={b.tempers}
                  />
                );
              })
            : props.search?.slice(0, 8)?.map((b) => {
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
    search: state.search,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(actionCreators.getBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);
