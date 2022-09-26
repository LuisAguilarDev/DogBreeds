// import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import BreedCard from "../BreedCard/BreedCard.jsx";
import s from "./Breeds.module.css";
import Pagination from "../Pagination/Pagination.jsx";
import { useParams } from "react-router-dom";
import PaginationSearch from "../PaginationSearch/PaginationSearch.jsx";

const Breeds = (props) => {
  let { search } = useParams();

  if (search === undefined) {
    search = true;
  } else {
    search = false;
  }
  let min = props.pageSearch * 8 - 8;
  let max = min + 8;
  return (
    <div>
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
              : props.search?.slice(min, max)?.map((b) => {
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
        <div>{search ? <Pagination /> : <PaginationSearch />}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);
