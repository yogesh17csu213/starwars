import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Movies from "./pages/listing/movies";
import Actors from "./pages/listing/actors";
import Planets from "./pages/listing/planets";
import Starships from "./pages/listing/starships";
import "react-loading-skeleton/dist/skeleton.css";
import MovieDetail from "./pages/detail/movie-detail";
import ActorDetail from "./pages/detail/actor-detail";
import StarshipDetail from "./pages/detail/startship-detail";
import PlanetDetail from "./pages/detail/planet-detail";
function App(props) {
  axios.defaults.baseURL =
    process.env.REACT_APP_API_BASE_URL || "https://swapi.dev";

  return (
    <div className="App bg-dark text-light">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/actors/:id" element={<ActorDetail />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<StarshipDetail />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetDetail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
