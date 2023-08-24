import React from "react";
import "./Movies.css";
import { useFavoriteFilms } from "../Context/FavoriteContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites, favoriteMovies, removeFromFavorites } =
    useFavoriteFilms();

  const isFavorite =
    favoriteMovies.length > 0 &&
    favoriteMovies.some((favMovie) => favMovie?.id === movie?.id);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      addToFavorites(movie);
      console.log("item", movie);
    } else {
      removeFromFavorites(movie);
    }
  };

  return (
    <div className="movie-item">
      <span
        className={`favorite-heart ${isFavorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "❤️" : "🤍"}
      </span>
    </div>
  );
};

export default MovieCard;
