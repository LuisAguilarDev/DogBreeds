import React from "react";
import s from "./Nav.module.css";
import logo from "./../../assets/threedogs.png";
import mg from "./../../assets/MG.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./../../redux/actions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useState(() => {
    dispatch(actionCreators.getBreeds());
  }, []);

  const [search, setSearch] = useState();

  function handleClick(e) {
    dispatch(actionCreators.search(search, props.filter));
    dispatch(actionCreators.setPageSearch(1));
    navigate("/search");
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <div>
          <img className={s.img} src={logo} alt="Not Found" />
        </div>
        <div>
          <h6 className={s.pagename}>Dog Breeds</h6>
        </div>
      </div>
      <div>
        <input
          name="search"
          className={s.input}
          type="search"
          placeholder="Search by breed"
          aria-label="Search"
          onChange={handleChange}
        />
        <button onClick={handleClick} type="input" className={s.iconcont}>
          <img className={s.icon} src={mg} alt="Not Found" />
        </button>
      </div>
      <div className={s.links}>
        <Link to="/dogs" className={s.home}>
          <div>Home</div>
        </Link>
        <Link to="/CreateBreed" className={s.home}>
          <div>Create Breed</div>
        </Link>
      </div>
    </nav>
  );
};

export const mapStateToProps = (state) => {
  return {
    redirect: state.redirect,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(Nav);
