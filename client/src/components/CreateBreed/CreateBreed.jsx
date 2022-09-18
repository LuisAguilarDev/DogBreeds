import React from "react";
import s from "./CreateBreed.module.css";
import { useState } from "react";

const CreateBreed = (props) => {
  const [data, setData] = useState({ createdByUser: true });
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {}
  return (
    <div className={s.top}>
      <form
        action=""
        method="post"
        className={s.formPost}
        onSubmit={handleSubmit}
      >
        <div className={s.title}>Create Your Own Breed</div>
        <p className={s.parrafo}>
          <div>
            <label for="POST-name">Name:</label>
          </div>
          <div>
            <input
              id="POST-name"
              type="text"
              name="name"
              className={s.input}
              onChange={handleChange}
              placeholder="Enter the name of the breed"
            />
          </div>
        </p>
        <p className={s.parrafo}>
          <label for="POST-life_span">Life span:</label>
          <input
            id="POST-life_span"
            type="text"
            name="life_span"
            className={s.input}
            onChange={handleChange}
            placeholder="3-10 years"
          />
        </p>
        <p className={s.parrafo}>
          <label for="POST-weight">Weight:</label>
          <input
            id="POST-weight"
            type="text"
            name="weight"
            className={s.input}
            onChange={handleChange}
            placeholder="2-10 kg"
          />
        </p>
        <p className={s.parrafo}>
          <label for="POST-height">Height:</label>
          <input
            id="POST-height"
            type="text"
            name="height"
            className={s.input}
            onChange={handleChange}
            placeholder="30-40 cm"
          />
        </p>
        <p className={s.parrafo}>
          <label for="POST-img">Image:</label>
          <input
            id="POST-img"
            type="text"
            name="img"
            placeholder="www.... your image url route"
            className={s.input}
            onChange={handleChange}
          />
        </p>
        <p className={s.parrafo}>
          <input type="submit" value="Create" />
        </p>
      </form>
    </div>
  );
};

//name: life_span: weight: height: img:

export default CreateBreed;
