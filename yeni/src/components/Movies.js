import React from "react";
import Moviesfetch from "./Movies-fetch";
// import MovieCard from "./Movie-card";

const Movies = () => {
  return (
    <div>
      <Moviesfetch />
      {/* <MovieCard
        movie={{ title: "Example Movie", description: "Example Description" }}
      /> */}
    </div>
  );
};

export default Movies;
