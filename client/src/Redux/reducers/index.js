const initialState = {
  Breeds: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === "getMovies") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === "addMovieFavorite") {
    return {
      ...state,
      moviesFavourites: [...state.moviesFavourites, action.payload],
    };
  }
  if (action.type === "removeMovieFavorite") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(
        (movie) => movie.imdbID !== action.payload
      ),
    };
  }
  if (action.type === "getMovieDetail") {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  return state;
}
