import React, { useState } from "react";
import Home from "./Home";
import { useFavoriteFilms } from "../Context/FavoriteContext";
import MovieCard from "./Movie-card";

const Favorite = () => {
  const { favoriteMovies, removeFromFavorites } = useFavoriteFilms();

  const removeFavorites = () => {
    removeFromFavorites();
    console.log("object");
  };
 




  return (
    <div className="favorites-page">
      <Home />

      <ul>
        {favoriteMovies.map((item, index, movie) => (
          <div key={index} className="movie-item">
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>

            <MovieCard
              key={index}
              movie={item}
              addToFavorites={removeFavorites}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
