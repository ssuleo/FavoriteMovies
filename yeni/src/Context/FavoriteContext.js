import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const useFavoriteFilms = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavorites = (movie) => {
    if (!favoriteMovies?.some((favMovie) => favMovie.id === movie.id)) {
      setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favoriteMovies?.filter(
      (favMovie) => favMovie?.id !== movie?.id
    );
    setFavoriteMovies(updatedFavorites);
  };

  //   const isMovieFavorite = (movie) => {
  //     return favoriteMovies.some((favMovie) => favMovie.l === movie.l);
  //   };

  const favoriteContextValue = {
    favoriteMovies,
    addToFavorites,
    removeFromFavorites,
    // isMovieFavorite,
  };

  return (
    <div>
      <FavoriteContext.Provider value={favoriteContextValue}>
        {children}
      </FavoriteContext.Provider>

      {/* {favoriteMovies.map((movie) => (
        <li key={movie.l}>{movie.title}</li>
              <span onClick={() => removeFromFavorites(movie)}>
        {movie.l ? "❤️" : "🤍"}
      </span>
      ))} */}
    </div>
  );
};
{
  /* <span onClick={handleFavoriteClick}>{isFavorite ? "❤️" : "🤍"} </span> */
}
