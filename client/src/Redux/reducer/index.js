const initialState = {
  breeds: [],
  createdBreeds: [],
  pages: 0,
  temperaments: [],
  loading: false,
  filter: {},
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
  if (action.type === "getTemperaments") {
    return {
      ...state,
      temperaments: action.payload,
    };
  }
  return state;
}
