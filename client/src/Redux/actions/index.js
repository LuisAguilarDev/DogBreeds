const axios = require("axios").default;

export function getBreeds(filter) {
  let back = "?";

  for (const prop in filter) {
    back = back + `${prop}=${filter[prop]}&`;
  }
  let requestUrl = `http://localhost:3001/dogs` + back.slice(0, -1);
  console.log(requestUrl);
  return function (dispatch) {
    axios.get(requestUrl).then(async (response) => {
      // axios.get(requestUrl, [headers]).then(async (response) => {
      const apiResponse = await response.data;
      dispatch({ type: "getBreeds", payload: apiResponse });
    });
  };
}

export function getByID(id) {
  let requestUrl = `http://localhost:3001/dogs/${id}`;
  return function (dispatch) {
    axios.get(requestUrl).then(async (response) => {
      // axios.get(requestUrl, [headers]).then(async (response) => {
      const apiResponse = await response.data;
      dispatch({ type: "getByID", payload: apiResponse });
    });
  };
}

export function sortAlphabeticallyAZ(data) {
  return function (dispatch) {
    if (data.length <= 1) return;
    let sorted = data.sort((a, b) => b.name.localeCompare(a.name));
    dispatch({ type: "sortAlphabetically", payload: sorted });
  };
}

export function search(raza_perro, filter) {
  console.log(filter);
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs?name=${raza_perro}`)
      .then(async (response) => {
        const apiResponse = await response.data;
        console.log(apiResponse);
        dispatch({ type: "search", payload: apiResponse });
      });
  };
}

export function getTemperaments() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/temperaments`).then(async (response) => {
      const apiResponse = await response.data;
      dispatch({ type: "getTemperaments", payload: apiResponse });
    });
  };
}
export function setFilter(filter) {
  return function (dispatch) {
    dispatch({ type: "setFilter", payload: filter });
  };
}
export function setPageSearch(page) {
  return function (dispatch) {
    dispatch({ type: "setPageSearch", payload: page });
  };
}
export function deleteTemper() {
  return function (dispatch) {
    dispatch({ type: "deleteTemper", payload: null });
  };
}
