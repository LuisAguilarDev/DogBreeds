const initialState = {
  breeds: [],
  createdBreeds: [],
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  console.log("entre al estado de redux con", action.payload);
  if (action.type === "getBreeds") {
    return {
      ...state,
      breeds: action.payload,
    };
  }
  // if (action.type === "addMovieFavorite") {
  //   return {
  //     ...state,
  //     moviesFavourites: [...state.moviesFavourites, action.payload],
  //   };
  // }
  // if (action.type === "removeMovieFavorite") {
  //   return {
  //     ...state,
  //     moviesFavourites: state.moviesFavourites.filter(
  //       (movie) => movie.imdbID !== action.payload
  //     ),
  //   };
  // }
  // if (action.type === "getMovieDetail") {
  //   return {
  //     ...state,
  //     movieDetail: action.payload,
  //   };
  // }
  return state;
}
