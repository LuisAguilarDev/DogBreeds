import React from "react";
import s from "./Nav.module.css";
import logo from "./../../assets/threedogs.png";
import mg from "./../../assets/MG.png";

const Nav = (props) => {
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
          className={s.input}
          type="search"
          placeholder="Search by Breed"
          aria-label="Search"
        />
        <button type="input" className={s.iconcont}>
          <img className={s.icon} src={mg} alt="Not Found" />
        </button>
      </div>
      <div className={s.links}>
        <div className={s.home}>Home</div>
        <div className={s.home}>Create Breed</div>
      </div>
    </nav>
  );
};

export default Nav;
