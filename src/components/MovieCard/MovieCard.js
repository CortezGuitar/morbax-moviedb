import React, { useState } from 'react';
import { genres } from '../utils/genres';

import './MovieCard.css';

const MovieCard = ({
  poster_path,
  original_title,
  genre_ids,
  release_date,
  overview
}) => {
  const [display, setOverview] = useState('none');

  const displayGenres = (currentGenres, allGenres) => {
    const filteredArr = allGenres.filter(g => currentGenres.includes(g.id));

    return filteredArr.map(g => g.name).join(', ');
  };

  return (
    <div className="card mx-auto my-2 moviecard" style={{}}>
      {poster_path && (
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="movie"
        />
      )}
      <div className="card-body">
        <h4 className="card-title">{original_title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          {displayGenres(genre_ids, genres)}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {release_date.slice(0, 4)}
        </h6>
        <p className="card-text" style={{ display: display }}>
          {overview}
        </p>
        <button
          className="btn btn-outline-info"
          onClick={() => {
            if (display === 'none') {
              setOverview('block');
            } else {
              setOverview('none');
            }
          }}
        >
          Overview
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
