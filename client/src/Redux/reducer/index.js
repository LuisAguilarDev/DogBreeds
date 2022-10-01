const initialState = {
  breeds: [],
  search: [],
  searchFS: [],
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
      searchFS: action.payload,
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
  if (action.type === "sortSearch") {
    return {
      ...state,
      searchFS: action.payload,
    };
  }
  if (action.type === "filterSearch") {
    return {
      ...state,
      searchFS: action.payload,
      pageSearch: 1,
    };
  }
  if (action.type === "filterByUser") {
    return {
      ...state,
      searchFS: action.payload,
      pageSearch: 1,
    };
  }
  if (action.type === "setFilter") {
    console.log("entre a actualizar la pagina");
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
  if (action.type === "setBase") {
    return {
      ...state,
      searchFS: action.payload,
      pages: { lastPage: Math.ceil(action.payload.length / 8), actualPage: 1 },
    };
  }
  return state;
}
