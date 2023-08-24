import "./App.css";
import React from "react";
import Router from "./Routers";
import { FavoriteProvider } from "./Context/FavoriteContext";

function App() {
  return (
    <div>
      <FavoriteProvider>
        <Router />
      </FavoriteProvider>
    </div>
  );
}

export default App;
