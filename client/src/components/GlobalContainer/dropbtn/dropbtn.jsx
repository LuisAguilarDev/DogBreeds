import React from "react";
import s from "./dropbtn.module.css";
import * as actionCreators from "./../../../redux/actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Dropbtn = (props) => {
  const values = ["A-Z", "Z-A"];
  const values2 = ["ASC", "DESC"];
  let { search } = useParams();

  if (search === undefined) {
    search = true;
  } else {
    search = false;
  }

  function handleChange(e) {
    let index = values.findIndex((element) => element === e.target.value);
    if (search) {
      props.setFilter({
        ...props.filter,
        order: values2[index],
        orderColumn: "name",
        page: props.page.actualPage,
      });
      props.setPageSearch(1);
      props.getBreeds({
        ...props.filter,
        order: values2[index],
        orderColumn: "name",
        page: 1,
      });
    } else {
      props.sortSearch([...props.searchFS, values2[index]]);
    }
  }
  return (
    <div className={s.display}>
      <div className={s.form}>
        <div className={s.displayName}>Order alphabetically:</div>
        <select onChange={handleChange} className={s.select}>
          <option selected disabled>
            Selecccionar
          </option>
          {values.map((o, i) => {
            return (
              <option name={o} key={i} id={i} value={o}>
                {o}
              </option>
            );
          })}
        </select>
        <span class={s.customArrow}></span>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    page: state.pages,
    pageSearch: state.pageSearch,
    search: state.search,
    searchFS: state.searchFS,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => dispatch(actionCreators.setFilter(value)),
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
    sortSearch: (value) => dispatch(actionCreators.sortSearch(value)),
    setPageSearch: (value) => dispatch(actionCreators.setPageSearch(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropbtn);
