// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onToggleWatched, onRemoveMovie, filter }) => {
  // Filter movies based on the current filter
  const filteredMovies =
    filter === "all"
      ? movies
      : filter === "watched"
      ? movies.filter((movie) => movie.watched)
      : movies.filter((movie) => !movie.watched);

  if (filteredMovies.length === 0) {
    return (
      <div className="empty-list">
        <p>No movies in your {filter} list yet.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onRemoveMovie={onRemoveMovie}
        />
      ))}
    </div>
  );
};

export default MovieList;
