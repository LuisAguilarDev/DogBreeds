import React from "react";
import s from "./Nav.module.css";
import logo from "./../resources/threedogs.png";
import mg from "./../resources/MG.png";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <div>
          <img className={s.img} src={logo} alt="Not Found" />
        </div>
        <div>
          <h6 className={s.pagename}>DogBreeds</h6>
        </div>
      </div>
      <div>
        <input
          className={s.input}
          type="search"
          placeholder="Search by Breed"
          aria-label="Search"
        />
        <button type="input" className={s.iconcont}>
          <img className={s.icon} src={mg} alt="Not Found" />
        </button>
      </div>
      <div></div>
    </nav>
  );
};

export default Nav;
