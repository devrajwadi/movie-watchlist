import React, { useState } from "react";
const defaultPoster = "/images/default.jpg";


const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newMovie = {
      id: Date.now(),
      title,
      director,
      year,
      poster: poster || defaultPoster,
      watched: false,
    };

    onAddMovie(newMovie);

    setTitle('');
    setDirector('');
    setYear('');
    setPoster('');
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Release year"
          min="1900"
          max="2030"
        />
      </div>

      <div className="form-group">
        <label htmlFor="poster">Poster URL</label>
        <input
          type="text"
          id="poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          placeholder="Image URL (or leave blank for default)"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add to Watchlist
      </button>
    </form>
  );
};

export default AddMovieForm;