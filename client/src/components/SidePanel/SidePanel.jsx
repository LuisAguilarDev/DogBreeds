import React from "react";
import s from "./SidePanel.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./../../redux/actions";

const SidePanel = () => {
  // const dispatch = useDispatch();
  // // useState(() => {
  // //   dispatch(actionCreators.getTemperaments());
  // // }, []);

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
    </div>
  );
};

export default SidePanel;
