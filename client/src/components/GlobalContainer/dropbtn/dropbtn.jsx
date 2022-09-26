import React from "react";
import s from "./dropbtn.module.css";
import * as actionCreators from "./../../../redux/actions";
import { connect } from "react-redux";

const Dropbtn = (props) => {
  const values = ["Selecccionar", "A-Z", "Z-A"];
  const values2 = ["ASC", "ASC", "DESC"];
  function handleChange(e) {
    let index = values.findIndex((element) => element === e.target.value);
    console.log(index);
    props.setFilter({
      order: values2[index],
      orderColumn: "name",
      page: props.page.actualPage,
    });
    props.getBreeds({
      order: values2[index],
      orderColumn: "name",
      page: props.page.actualPage,
    });
  }
  console.log(props.filter);
  return (
    <div className={s.display}>
      <form>
        <label className={s.displayName}>Ordenar alfabeticamente:</label>
        <select onChange={handleChange} className={s.select}>
          {values.map((o, i) => {
            return (
              <option name={o} key={i} id={i} value={o}>
                {o}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    page: state.pages,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => dispatch(actionCreators.setFilter(value)),
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropbtn);
