// WatchlistPage.js
import React from "react";
import Watchlist from "../components/Watchlist";

const WatchlistPage = ({ movies, onToggleWatched, onRemoveMovie }) => {
  const watchedCount = movies.filter((movie) => movie.watched).length;
  const unwatchedCount = movies.length - watchedCount;

  return (
    <div className="watchlist-page">
      <header>
        <h1>My Watchlist</h1>
        <div className="stats">
          <span>{movies.length} total movies</span>
          <span>{watchedCount} watched</span>
          <span>{unwatchedCount} to watch</span>
        </div>
      </header>

      <Watchlist
        movies={movies}
        onToggleWatched={onToggleWatched}
        onRemoveMovie={onRemoveMovie}
      />
    </div>
  );
};

export default WatchlistPage;
