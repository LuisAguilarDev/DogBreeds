const initialState = {
  breeds: [],
  search: [],
  createdBreeds: [],
  pages: 0,
  temperaments: [],
  loading: true,
  filter: {},
  redirect: false,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === "getBreeds") {
    return {
      ...state,
      pages: action.payload.pop(),
      breeds: action.payload,
      loading: false,
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
      search: action.payload,
      redirect: true,
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
