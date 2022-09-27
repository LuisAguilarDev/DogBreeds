const initialState = {
  breeds: [],
  search: [],
  createdBreeds: [],
  pages: 0,
  temperaments: [],
  loading: true,
  redirect: false,
  detail: [],
  pageSearch: 1,
  filter: {},
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
  if (action.type === "getByID") {
    return {
      ...state,
      detail: action.payload,
    };
  }
  if (action.type === "setPageSearch") {
    return {
      ...state,
      pageSearch: action.payload,
    };
  }
  if (action.type === "setFilter") {
    return {
      ...state,
      filter: { ...state.filter, ...action.payload },
    };
  }
  if (action.type === "deleteTemper") {
    const { temper, ...rest } = state.filter;
    return {
      ...state,
      filter: { ...rest },
    };
  }
  return state;
}
