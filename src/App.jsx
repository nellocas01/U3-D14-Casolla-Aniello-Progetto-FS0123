import React from "react";
import "./App.css";
import Home from "./components/Home";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album-page" element={<AlbumPage />} />
        <Route path="/artist-page" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
