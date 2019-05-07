const movieRequested = () => {
  return {
    type: 'FETCH_MOVIE_REQUEST'
  };
};

const movieLoaded = movie => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie
  };
};

const movieError = error => {
  return {
    type: 'FETCH_MOVIE_FAILURE',
    payload: error
  };
};

const fetchMovie = tmdService => (formData, page) => dispatch => {
  dispatch(movieRequested());
  tmdService
    .getMovie(formData, page)
    .then(data => dispatch(movieLoaded(data)))
    .catch(error => dispatch(movieError(error)));
};

export { fetchMovie };
