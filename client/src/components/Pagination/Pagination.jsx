import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import s from "./Pagination.module.css";

const Pagination = (props) => {
  let actualPage = props.pages.actualPage;
  let lastPage = props.pages.lastPage;
  let siblings = 1;
  function onClickNext(e) {
    props.getBreeds(5);
  }
  return (
    <div className={s.pagination}>
      {actualPage === 1 ? null : <div className={s.notactive}>&laquo;</div>}
      {actualPage === 1 ? null : <div>...</div>}
      {actualPage === 1 ? null : (
        <div className={s.notactive}>{actualPage - siblings}</div>
      )}
      <div className={s.active}>{actualPage}</div>
      <div className={s.notactive}>{actualPage + siblings}</div>
      {actualPage === lastPage - 1 ? null : <div>...</div>}
      {actualPage === lastPage ? null : (
        <div className={s.notactive}>{lastPage}</div>
      )}
      {actualPage === lastPage ? null : (
        <div onClick={onClickNext} className={s.notactive}>
          &raquo;
        </div>
      )}
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(actionCreators.getBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
