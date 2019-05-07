import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import { Multiselect } from 'react-widgets';
import { bindActionCreators } from 'redux';

import './Form.css';

import withTmdService from '../hoc';
import { fetchMovie } from '../../store/actions';
import { genres } from '../utils/genres';

class Form extends Component {
  onSubmitHandler = () => {
    this.props.fetchMovie(this.props.formData);
  };

  renderMultiselect = ({ input, data, valueField, textField }) => (
    <Multiselect
      {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []}
      data={data}
      valueField={valueField}
      textField={textField}
      containerClassName="align-middle"
    />
  );

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(() => this.onSubmitHandler())}>
        <div className="form-row">
          <div className="form-group col-10">
            <label htmlFor="sortBy">Sort By:</label>
            <Field
              name="sortBy"
              component="select"
              className="form-control form-control-lg"
              id="sortBy"
            >
              <option />
              <option value="popularity.desc">Popularity</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="vote_average.desc">Vote Average</option>
            </Field>
          </div>
          <div className="form-check col-2 d-inline-block ml-auto">
            <Field
              name="includeAdult"
              id="includeAdult"
              component="input"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="includeAdult" className="form-check-label">
              Include Adult
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="releaseDateGte">Release Date (Greater Than)</label>
            <Field
              name="releaseDateGte"
              component="input"
              type="number"
              placeholder="type year ex. '2010' "
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="releaseDateLte">Release Date (Less Than)</label>
            <Field
              name="releaseDateLte"
              component="input"
              type="number"
              placeholder="type year ex. '2000' "
              className="form-control form-control-lg"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Genres:</label>
            <Field
              name="genres"
              component={this.renderMultiselect}
              data={genres}
              valueField="id"
              textField="name"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6 ">
            <label htmlFor="voteCount">Vote Count (Greater Than)</label>
            <Field
              name="voteCountGte"
              component="select"
              className="form-control form-control-lg"
            >
              <option />
              <option value="100">100</option>
              <option value="1000">1000</option>
            </Field>
          </div>
        </div>

        <div className="form-group justify-content-end row mr-1">
          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-info btn-lg my-0"
          >
            Search
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="btn btn-secondary btn-lg"
          >
            Clear Inputs
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { tmdService }) => {
  return bindActionCreators(
    {
      fetchMovie: fetchMovie(tmdService)
    },
    dispatch
  );
};

const mapStateToProps = state => {
  const {
    form: { movie }
  } = state;

  return {
    formData: movie
  };
};

Form = withTmdService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);

export default reduxForm({ form: 'movie' })(Form);
