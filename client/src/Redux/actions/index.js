const axios = require("axios").default;

export function getBreeds(page = 1) {
  if (!page) return;
  const requestUrl = `http://localhost:3001/dogs?page=${page}`;
  return function (dispatch) {
    console.log("entre", requestUrl);
    axios.get(requestUrl).then(async (response) => {
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
// export function getMovieDetail(idMovie) {
//   return function (dispatch) {
//     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "getMovieDetail", payload: data });
//       });
//   };
// }
// export function addMovieFavorite(payload) {
//   return {
//     type: "addMovieFavorite",
//     payload,
//   };
// }

// export function removeMovieFavorite(id) {
//   return {
//     type: "removeMovieFavorite",
//     payload: id,
//   };
// }
