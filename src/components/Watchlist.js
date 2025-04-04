// Watchlist.js
import React from "react";
import MovieList from "./MovieList";

const Watchlist = ({ movies, onToggleWatched, onRemoveMovie }) => {
  const [filter, setFilter] = React.useState("all");

  return (
    <div className="watchlist-container">
      <div className="filter-controls">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Movies
        </button>
        <button
          className={`filter-btn ${filter === "watched" ? "active" : ""}`}
          onClick={() => setFilter("watched")}
        >
          Watched
        </button>
        <button
          className={`filter-btn ${filter === "unwatched" ? "active" : ""}`}
          onClick={() => setFilter("unwatched")}
        >
          To Watch
        </button>
      </div>

      <MovieList
        movies={movies}
        onToggleWatched={onToggleWatched}
        onRemoveMovie={onRemoveMovie}
        filter={filter}
      />
    </div>
  );
};

export default Watchlist;
