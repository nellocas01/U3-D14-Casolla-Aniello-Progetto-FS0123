import React from "react";
import "./App.css";
import Home from "./components/Home";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <AlbumPage />
        <ArtistPage />
      </header>
    </div>
  );
}

export default App;
