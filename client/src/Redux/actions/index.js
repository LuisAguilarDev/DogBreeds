const axios = require("axios").default;

export function getBreeds(page) {
  let requestUrl;
  if (page === undefined) {
    requestUrl = `http://localhost:3001/dogs?loading=true`;
  } else {
    requestUrl = `http://localhost:3001/dogs?page=${page}`;
  }
  return function (dispatch) {
    axios.get(requestUrl).then(async (response) => {
      // axios.get(requestUrl, [headers]).then(async (response) => {
      const apiResponse = await response.data;
      dispatch({ type: "getBreeds", payload: apiResponse });
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

export function search(raza_perro) {
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
  // (API) => createdByUser;
  // (Temper) => Temper;
  return function (dispatch) {
    axios.get(`http://localhost:3001/temperaments`).then(async (response) => {
      const apiResponse = await response.data;
      dispatch({ type: "getTemperaments", payload: apiResponse });
    });
  };
}
