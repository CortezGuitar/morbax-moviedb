const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_MOVIE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
