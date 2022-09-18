const initialState = {
  breeds: [],
  createdBreeds: [],
  pages: 0,
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === "getBreeds") {
    return {
      ...state,
      pages: action.payload.pop(),
      breeds: action.payload,
    };
  }
  if (action.type === "sortAlphabetically") {
    return {
      ...state,
      breeds: action.payload,
    };
  }
  if (action.type === "search") {
    return {
      ...state,
      breeds: action.payload,
    };
  }
  // if (action.type === "getMovieDetail") {
  //   return {
  //     ...state,
  //     movieDetail: action.payload,
  //   };
  // }
  return state;
}
