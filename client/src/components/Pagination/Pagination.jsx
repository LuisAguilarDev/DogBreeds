import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/index.js";
import s from "./Pagination.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Pagination = (props) => {
  let { search } = useParams();
  useEffect(() => console.log(), [search]);
  let actualPage = parseInt(props.pages.actualPage);
  let lastPage = props.pages.lastPage;
  let siblings = 1;
  function onClickNext(e) {
    props.getBreeds({ ...props.filter, page: actualPage + 1 });
  }
  function onClickPrevious(e) {
    props.getBreeds({ ...props.filter, page: actualPage - 1 });
  }
  function onClickFirst(e) {
    props.getBreeds({ ...props.filter, page: 1 });
  }
  function onClickLast(e) {
    props.getBreeds({ ...props.filter, page: lastPage });
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
          {actualPage >= lastPage - 1 ? null : (
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
    pages: state.pages,
    filter: state.filter,
    searchFS: state.searchFS,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
