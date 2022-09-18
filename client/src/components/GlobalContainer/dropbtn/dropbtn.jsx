import React from "react";
import s from "./dropbtn.module.css";
// import { useDispatch } from "react-redux";
// import * as actionCreators from "./../../../redux/actions";

const Dropbtn = (props) => {
  const values = ["Selecccionar", "A-Z", "Z-A"];
  // var [show, setShow] = useState(false);
  // const dispacth = useDispatch();
  function handleClick(e) {
    console.log(e.target.value);

    // dispacth(actionCreators.sortAlphabeticallyAZ());
  }
  return (
    <div className={s.display}>
      <form>
        <label className={s.displayName}>Ordenar alfabeticamente:</label>
        <select onChange={handleClick} className={s.select}>
          {values.map((o, i) => {
            return (
              <option name={o} key={i} value={o}>
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
