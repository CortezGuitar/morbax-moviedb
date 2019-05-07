import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import MovieCard from '../MovieCard';
import Pagination from '../Pagination';
import withTmdService from '../hoc';
import { fetchMovie } from '../../store/actions';

class MovieList extends Component {
  onPageChangeHandler = page => {
    const { fetchMovie, formData } = this.props;
    fetchMovie(formData, page);
  };

  render() {
    if (this.props.movies) {
      const { results, total_pages } = this.props.movies;
      return (
        <Fragment>
          <Pagination
            perPage={total_pages}
            getPage={this.onPageChangeHandler}
          />
          <div className="d-flex justify-content-between flex-wrap row">
            {results.map(res => (
              <MovieCard {...res} key={res.id} />
            ))}
          </div>
        </Fragment>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  const {
    movies: { movies },
    form: { movie }
  } = state;
  return {
    movies,
    formData: movie
  };
};

const mapDispatchToProps = (dispatch, { tmdService }) => {
  return bindActionCreators(
    {
      fetchMovie: fetchMovie(tmdService)
    },
    dispatch
  );
};

MovieList = withTmdService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieList)
);

export default reduxForm({ form: 'movie' })(MovieList);
