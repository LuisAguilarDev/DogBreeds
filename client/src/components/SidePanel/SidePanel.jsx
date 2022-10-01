import s from "./SidePanel.module.css";
import { React, useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import * as actionCreators from "./../../redux/actions";
import { useParams } from "react-router-dom";

const SidePanel = (props) => {
  const dispatch = useDispatch();
  const [filtros, setFiltros] = useState({});
  useState(() => {
    dispatch(actionCreators.getTemperaments());
  }, []);
  let { search } = useParams();
  console.log(search);
  if (search === undefined) {
    search = true;
  } else {
    search = false;
  }

  useEffect(() => {
    setFiltros({});
  }, [search]);

  function handleClickCreation(e) {
    //API null CREADOPORUSUARIO TRUE
    let parametros = { API: false, CreatedByUser: true };
    let actualFilter = { ...filtros, ...props.filter };
    actualFilter = { ...actualFilter, createdBy: e.target.innerHTML };
    setFiltros({ ...actualFilter });
    props.getBreeds({ ...actualFilter });
    props.filterByUser(props.searchFS, parametros[e.target.id]);
    if (search) {
    } else {
    }
  }

  function handleFilter(e) {
    if (search) {
      let filtered = { ...filtros, ...props.filter };
      delete filtered[e.target.name];
      setFiltros(filtered);
      props.getBreeds(filtered);
      props.setFilter(filtered);
      if (!filtered.temper) props.deleteTemper();
    } else {
      let filtered = { ...filtros, ...props.filter };
      delete filtered[e.target.name];
      setFiltros(filtered);
      props.setBase(props.search);
    }
  }

  function handleChangeTemper(e) {
    if (search) {
      let actualFilter = { ...filtros, ...props.filter };
      actualFilter = { ...actualFilter, temper: e.target.value };
      setFiltros(actualFilter);
      props.getBreeds(actualFilter);
      props.setFilter(actualFilter);
    } else {
      console.log("coloque un filtro");
      props.filterSearch(props.search, e.target.value);
      let actualFilter = { ...filtros, ...props.filter };
      actualFilter = { ...actualFilter, temper: e.target.value };
      setFiltros(actualFilter);
    }
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
          <div className={s.option} onClick={handleClickCreation} id={"API"}>
            API
          </div>
          <div
            className={s.option}
            onClick={handleClickCreation}
            id={"CreatedByUser"}
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
    search: state.search,
    searchFS: state.searchFS,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => dispatch(actionCreators.setFilter(value)),
    filterByUser: (value, parametro) =>
      dispatch(actionCreators.filterByUser(value, parametro)),
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
    deleteTemper: () => dispatch(actionCreators.deleteTemper()),
    filterSearch: (data, temper) =>
      dispatch(actionCreators.filterSearch(data, temper)),
    setBase: (value) => dispatch(actionCreators.setBase(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
