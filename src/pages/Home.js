// Home.js
import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";

const Home = ({
  movies,
  onAddMovie,
  onToggleWatched,
  onRemoveMovie,
  onSearch,
  searchResults,
}) => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Movie Watchlist</h1>
        <p>
          Keep track of movies you want to watch and those you've already seen.
        </p>
        <SearchBar onSearch={onSearch} />
      </header>

      <div className="content-container">
        <section className="featured-movies">
          <h2>Featured Movies</h2>
          {searchResults.length > 0 ? (
            <MovieList
              movies={searchResults}
              onToggleWatched={onToggleWatched}
              onRemoveMovie={onRemoveMovie}
              filter="all"
            />
          ) : (
            <MovieList
              movies={movies.slice(0, 3)}
              onToggleWatched={onToggleWatched}
              onRemoveMovie={onRemoveMovie}
              filter="all"
            />
          )}
        </section>

        <aside className="add-movie-sidebar">
          <AddMovieForm onAddMovie={onAddMovie} />
        </aside>
      </div>
    </div>
  );
};

export default Home;
