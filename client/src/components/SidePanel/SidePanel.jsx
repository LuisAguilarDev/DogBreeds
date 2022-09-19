import React from "react";
import s from "./SidePanel.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as actionCreators from "./../../redux/actions";

const SidePanel = (props) => {
  const dispatch = useDispatch();
  useState(() => {
    dispatch(actionCreators.getTemperaments());
  }, []);
  console.log(props.temperaments);
  const [filtros, setFiltros] = useState([]);
  function handleClick(e) {
    setFiltros([...filtros, e.target.innerHTML]);
  }
  function handleFilter(e) {
    let actualFilter = [...filtros];
    actualFilter.splice([e.target.id], 1);
    setFiltros(actualFilter);
  }

  return (
    <div className={s.panel}>
      {filtros.length > 0 ? (
        <div>
          <div>Filtros Actuales</div>
          {filtros.map((f, i) => {
            return (
              <div key={i} id={i} onClick={handleFilter}>
                {f}
                <button>X</button>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      {filtros.length === 0 ? (
        <div>
          <div>Filtrar</div>
          <div>Por Fuente</div>
          <div onClick={handleClick} name="API">
            API
          </div>
          <div onClick={handleClick} name="CREADOS POR USUARIOS">
            Creados por Usuarios
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <div>Filter By temperaments</div>
        <select>
          {props.temperaments.map((o, i) => {
            return (
              <option name={o.name} key={i} value={o.name}>
                {o.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    temperaments: state.temperaments,
  };
};

export default connect(mapStateToProps, null)(SidePanel);
