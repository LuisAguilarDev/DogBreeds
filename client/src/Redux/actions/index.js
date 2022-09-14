export function getBreeds() {
  return function (dispatch) {
    return fetch(`http://api.thedogapi.com/v1/breeds`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "getBreeds", payload: data });
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
