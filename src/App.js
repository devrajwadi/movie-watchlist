// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WatchlistPage from "./pages/WatchlistPage";
import "./index.css";

// Sample initial movies - use the imported images
const initialMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: "2008",
    poster: "../public/images/darknight.jpeg",
    watched: true,
  },
  {
    id: 2,
    title: "Inception",
    director: "Christopher Nolan",
    year: "2010",
    poster: "../public/images/inception.jpeg",
    watched: false,
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: "2014",
    poster: "../public/images/interstellar.jpeg",
    watched: false,
  },
];

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("watchlist");
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });

  const [searchResults, setSearchResults] = useState([]);

  // Save to localStorage whenever movies change
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(movies));
  }, [movies]);

  // Add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Toggle the watched status of a movie
  const handleToggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  // Remove a movie from the list
  const handleRemoveMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Search for movies
  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">MovieWatchlist</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">My Watchlist</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={movies}
                  onAddMovie={handleAddMovie}
                  onToggleWatched={handleToggleWatched}
                  onRemoveMovie={handleRemoveMovie}
                  onSearch={handleSearch}
                  searchResults={searchResults}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <WatchlistPage
                  movies={movies}
                  onToggleWatched={handleToggleWatched}
                  onRemoveMovie={handleRemoveMovie}
                />
              }
            />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Movie Watchlist</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
