import React from "react";
import s from "./CreateBreed.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./../../redux/actions";
import NAV from "./../Nav/Nav";

const CreateBreed = (props) => {
  let imgSrc = [
    "https://static01.nyt.com/images/2022/08/25/science/25DogDementia-08/25DogDementia-08-videoSixteenByNine3000.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
    "https://scx2.b-cdn.net/gfx/news/2021/dog.jpg",
    "https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg",
    "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2019/11/Petfinder_Resize_485x250_teddybeardog.jpg?bust=1574877513",
  ];
  const [data, setData] = useState({
    createdByUser: true,
    tempers: [],
    img: imgSrc[Math.floor(Math.random() * 6)],
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.createBreed(data);
  }
  function handleChangeTemper(e) {
    let obj = { ...data };
    let obj2 = { ...obj, tempers: [...obj.tempers, e.target.value] };
    setData(obj2);
  }
  function handleDelete(e) {
    let filtered = data.tempers;
    filtered.splice(e.target.id, 1);
    setData({ ...data, tempers: filtered });
  }

  return (
    <div>
      <NAV />
      <div className={s.top}>
        <form className={s.formPost} onSubmit={handleSubmit}>
          <div className={s.title}>Create Your Own Breed</div>
          <p className={s.parrafo}>
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                className={s.input}
                onChange={handleChange}
                placeholder="Enter the name of the breed"
              />
            </div>
          </p>
          <p className={s.parrafo}>
            <label>Life span:</label>
            <input
              type="text"
              name="life_span"
              className={s.input}
              onChange={handleChange}
              placeholder="3-10 years"
            />
          </p>
          <p className={s.parrafo}>
            <label>Weight:</label>
            <input
              type="text"
              name="weight"
              className={s.input}
              onChange={handleChange}
              placeholder="2-10 kg"
            />
          </p>
          <p className={s.parrafo}>
            <label>Height:</label>
            <input
              type="text"
              name="height"
              className={s.input}
              onChange={handleChange}
              placeholder="30-40 cm"
            />
          </p>

          <div>
            <div className={s.title}>Add the temperaments</div>
            <select className={s.select} onChange={handleChangeTemper}>
              {props.temperaments.map((o, i) => {
                return (
                  <option id={i} name={o.name} key={i} value={o.name}>
                    {o.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={s.parrafo}>
            {data.tempers?.length === 0 ? (
              <div></div>
            ) : (
              <div>
                {data.tempers?.map((t, i) => {
                  return (
                    <div className={s.options}>
                      <div key={i}>{t}</div>
                      <button onClick={handleDelete} id={i}>
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <p className={s.parrafo}>
            <input type="submit" value="Create" />
          </p>
        </form>
        <img className={s.img} src={data.img} alt="Not Found" />
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    temperaments: state.temperaments,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => dispatch(actionCreators.setFilter(value)),
    getBreeds: (value) => dispatch(actionCreators.getBreeds(value)),
    createBreed: (breed) => dispatch(actionCreators.createBreed(breed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBreed);
