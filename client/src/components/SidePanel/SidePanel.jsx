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

  const [filtros, setFiltros] = useState({});

  function handleClickCreation(e) {
    let actualFilter = { ...filtros, ...props.filter };
    actualFilter = { ...actualFilter, createdBy: e.target.innerHTML };
    console.log(actualFilter);
    setFiltros({ ...actualFilter });
    props.getBreeds(actualFilter);
    props.setFilter(actualFilter);
  }

  function handleFilter(e) {
    let filtered = { ...filtros, ...props.filter };
    delete filtered[e.target.name];
    setFiltros(filtered);
    props.getBreeds(filtered);
    props.setFilter(filtered);
    if (!filtered.temper) props.deleteTemper();
  }

  function handleChangeTemper(e) {
    let actualFilter = { ...filtros, ...props.filter };
    actualFilter = { ...actualFilter, temper: e.target.value };
    setFiltros(actualFilter);
    props.getBreeds(actualFilter);
    props.setFilter(actualFilter);
  }
  return (
    <div className={s.panel}>
      <div className={s.titlePrincipal}>Filtrar</div>
      {Object.keys(filtros).length > 0 ? (
        <div>
          <div className={s.title}>Filtros Aplicados</div>
          {filtros.createdBy ? (
            <div className={s.filters}>
              <div className={s.option}>Source: {filtros.createdBy}</div>
              <button
                name={"createdBy"}
                className={s.button}
                onClick={handleFilter}
              >
                x
              </button>
            </div>
          ) : (
            <div></div>
          )}
          {filtros.temper ? (
            <div className={s.filters}>
              <div className={s.option}>Temper: {filtros.temper}</div>
              <button
                name={"temper"}
                className={s.button}
                onClick={handleFilter}
              >
                x
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
      {filtros.createdBy ? (
        <div></div>
      ) : (
        <div>
          <div className={s.title}>Por Fuente</div>
          <div className={s.option} onClick={handleClickCreation} name="API">
            API
          </div>
          <div
            className={s.option}
            onClick={handleClickCreation}
            name="CREADOS POR USUARIOS"
          >
            Created By Users
          </div>
        </div>
      )}
      <div>
        {filtros.temper ? (
          <div></div>
        ) : (
          <div>
            <div className={s.title}>Filter By temperaments</div>
            <select className={s.select} onChange={handleChangeTemper}>
              {props.temperaments.map((o, i) => {
                return (
                  <option name={o.name} key={i} value={o.name}>
                    {o.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
export const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    temperaments: state.temperaments,
    filter: state.filter,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => dispatch(actionCreators.setFilter(value)),
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
    deleteTemper: () => dispatch(actionCreators.deleteTemper()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
