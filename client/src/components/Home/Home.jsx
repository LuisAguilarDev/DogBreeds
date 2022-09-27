import React from "react";
import img from "../../assets/home.jpg";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link className={s.link} to="/dogs">
      <div className={s.padre}>
        <img className={s.img} src={img} alt="Not Found" />

        <div className={s.entrar}>Entrar</div>
      </div>
    </Link>
  );
};

export default Home;
