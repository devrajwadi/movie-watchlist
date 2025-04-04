// MovieCard.js
import React from "react";

const MovieCard = ({ movie, onToggleWatched, onRemoveMovie }) => {
  const { id, title, director, year, poster, watched } = movie;

  return (
    <div className={`movie-card ${watched ? "watched" : ""}`}>
      <div className="movie-poster">
        <img src={poster} alt={`${title} poster`} />
        {watched && <div className="watched-badge">Watched</div>}
      </div>

      <div className="movie-details">
        <h3>{title}</h3>
        {director && <p className="director">Director: {director}</p>}
        {year && <p className="year">Year: {year}</p>}

        <div className="movie-actions">
          <button
            className={`btn ${watched ? "btn-outline" : "btn-primary"}`}
            onClick={() => onToggleWatched(id)}
          >
            {watched ? "Mark Unwatched" : "Mark Watched"}
          </button>

          <button className="btn btn-danger" onClick={() => onRemoveMovie(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
