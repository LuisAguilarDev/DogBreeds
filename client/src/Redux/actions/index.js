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

export function search(raza_perro) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/dogs?name=${raza_perro}`)
      .then(async (response) => {
        const apiResponse = await response.data;
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
export function createBreed(breed) {
  console.log("soy el dispatch");
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/dogs/create`, breed)
      .then((x) => console.log(x))
      .catch((error) => console.log(error));
    dispatch({ type: "createBreed", payload: null });
  };
}
export function sortSearch(data) {
  let order = data.pop();
  let sorted;
  if (order === "ASC") {
    sorted = data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (order === "DESC") {
    sorted = data.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  return function (dispatch) {
    dispatch({ type: "sortSearch", payload: sorted });
  };
}

export function filterSearch(data, temper) {
  let dataFiltered = data.filter((x) => {
    return x.tempers.some((temperamento) => temperamento.name === temper);
  });
  return function (dispatch) {
    dispatch({ type: "filterSearch", payload: dataFiltered });
  };
}

export function setBase(data) {
  return function (dispatch) {
    dispatch({ type: "setBase", payload: data });
  };
}

export function filterCreatedByUser(data) {
  return function (dispatch) {
    dispatch({ type: "setBase", payload: data });
  };
}

export function filterByUser(data, parametro) {
  let dataFiltered = data.filter((x) => {
    return x.createdByUser === parametro;
  });
  return function (dispatch) {
    dispatch({ type: "filterByUser", payload: dataFiltered });
  };
}
