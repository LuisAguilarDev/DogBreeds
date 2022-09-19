import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import s from "./Pagination.module.css";

const Pagination = (props) => {
  let actualPage = props.pages.actualPage;
  let lastPage = props.pages.lastPage;
  let siblings = 1;
  function onClickNext(e) {
    props.getBreeds(actualPage + 1);
  }
  function onClickPrevious(e) {
    props.getBreeds(actualPage - 1);
  }
  function onClickFirst(e) {
    props.getBreeds(1);
  }
  function onClickLast(e) {
    props.getBreeds(lastPage);
  }
  return (
    <div className={s.panel}>
      <div></div>
      <div className={s.pagination}>
        {actualPage === 1 ? null : (
          <div onClick={onClickPrevious} className={s.notactive}>
            &laquo;
          </div>
        )}
        {actualPage <= 2 ? null : (
          <div className={s.notactive} onClick={onClickFirst}>
            1
          </div>
        )}
        {actualPage <= 3 ? null : <div className={s.dots}>...</div>}
        {actualPage === 1 ? null : (
          <div onClick={onClickPrevious} className={s.notactive}>
            {actualPage - siblings}
          </div>
        )}
        <div className={s.active}>{actualPage}</div>
        {actualPage >= lastPage - 1 ? null : (
          <div onClick={onClickNext} className={s.notactive}>
            {actualPage + siblings}
          </div>
        )}
        {actualPage >= lastPage - 1 ? null : <div className={s.dots}>...</div>}
        {actualPage === lastPage ? null : (
          <div onClick={onClickLast} className={s.notactive}>
            {lastPage}
          </div>
        )}
        {actualPage === lastPage ? null : (
          <div onClick={onClickNext} className={s.notactive}>
            &raquo;
          </div>
        )}
      </div>
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
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
