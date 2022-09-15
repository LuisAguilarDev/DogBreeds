import React from "react";
import { useState } from "react";
import s from "./dropbtn.module.css";
const Dropbtn = (props) => {
  const values = ["seleccionar", "A-Z", "Z-A"];
  var [show, setShow] = useState(false);
  function handleClick() {
    console.log("click", show);
    show ? setShow(false) : setShow(true);
    console.log(show);
  }
  return (
    // <div>
    //   <button onClick={handleClick}>Ordenar</button>
    //   <select className={show ? s.mostra : s.nomostra} size={values.length + 1}>
    //     <optgroup label="Ordenar">
    //       {values.map((o, i) => {
    //         return (
    //           <option key={i} value={o}>
    //             {o}
    //           </option>
    //         );
    //       })}
    //     </optgroup>
    //   </select>
    //   <div>{Boolean.prototype.toString(show)}</div>
    // </div>

    //otro
    <div className={s.display}>
      <form>
        <label className={s.displayName}>Ordenar alfabeticamente:</label>
        <select className={s.select}>
          {values.map((o, i) => {
            return (
              <option key={i} value={o}>
                {o}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default Dropbtn;
