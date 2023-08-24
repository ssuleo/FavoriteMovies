import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";
import Contact from "./components/Contact";
// import { favoriteMovies, removeFromFavorites } from "./components/Favorite";
import Favorite from "./components/Favorite";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/About Us" element={<AboutUs />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Favorite" element={<Favorite />} />
      {/* <Route
        path="/Favorite"
        element={
          <Favorite
            favoriteMovies={favoriteMovies}
            removeFromFavorites={removeFromFavorites}
          />
        }
      /> */}
    </Routes>
  );
};

export default Router;
