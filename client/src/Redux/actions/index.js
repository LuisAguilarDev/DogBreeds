const axios = require("axios").default;

export function getBreeds() {
  return async function (dispatch) {
    console.log("mecalcule");
    return await axios.get(`http://localhost:3001/dogs`).then((response) => {
      dispatch({ type: "getBreeds", payload: response.data });
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
