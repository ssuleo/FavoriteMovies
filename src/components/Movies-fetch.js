import React, { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import Home from "./Home";
import "./Movies.css";
import MovieCard from "./Movie-card";
import Favorite from "./Favorite";

const Movies = () => {
  const [endPoint, setEndPoints] = useState("");
  const [container, setContainer] = useState([]);
  const [movie, setMovie] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavoritesFunction = (movie) => {
    const isAlreadyFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (!favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favoriteMovies.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    setFavoriteMovies(updatedFavorites);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9a1ac1a3e5mshdd9fd08582f9d2ep1299bajsn3de5ffb2e306",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setContainer(data.d || []);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <Home />
      <form onSubmit={submitHandler}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Input
            className="input-movie"
            placeholder="Search"
            onChange={onChangeHandler}
            value={endPoint}
            borderWidth="2px"
            borderColor="gray.300"
            type="text"
            margin="30px"
            width="500px"
            height="45px"
            borderRadius="5px"
          />
          <Button
            type="submit"
            textAlign="center"
            colorScheme="teal"
            padding="10px"
            margin="5px"
            size="md"
            borderRadius="5px"
          >
            Submit
          </Button>
        </div>
      </form>
      <div className="movie-container">
        {container &&
          container.map((item, index) => (
            <div key={index} className="movie-item">
              <img src={item.i.imageUrl} alt={item.l} />
              <p>{item.l}</p>

              <MovieCard
                key={movie.l}
                movie={item}
                addToFavorites={addToFavoritesFunction}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movies;
