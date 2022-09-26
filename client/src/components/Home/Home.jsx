import React from "react";
import img from "../../assets/home.jpg";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.padre}>
      <img className={s.img} src={img} alt="Not Found" />

      <div className={s.entrar}>
        <Link className={s.link} to="/dogs">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default Home;
