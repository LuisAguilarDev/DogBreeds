import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import s from "./PaginationSearch.module.css";

const PaginationSearch = (props) => {
  let actualPage = props.pageSearch;
  let lastPage = Math.ceil(props.search.length / 8);
  useEffect(() => console.log(), [props.search]);

  let siblings = 1;
  function onClickNext(e) {
    props.setPageSearch(actualPage + 1);
  }
  function onClickPrevious(e) {
    props.setPageSearch(actualPage - 1);
  }
  function onClickFirst(e) {
    props.setPageSearch(1);
  }
  function onClickLast(e) {
    props.setPageSearch(lastPage);
  }
  return (
    <div className={s.panel}>
      {lastPage <= 1 ? (
        <div></div>
      ) : (
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
          {actualPage >= lastPage - 2 ? null : (
            <div className={s.dots}>...</div>
          )}
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
      )}
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    pageSearch: state.pageSearch,
    search: state.searchFS,
    page: state.page,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setPageSearch: (value) => dispatch(actionCreators.setPageSearch(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationSearch);
