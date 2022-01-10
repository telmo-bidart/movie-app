import { useState, useEffect } from "react";
import { Movie } from "./components/Movie";
import "./App.css";

const FEATURED_API =
  "https://api.themoviedb.og/3/discover/movie?sort_by=popularity.desc&api_key=942277627f5c059768e1e4eda4c49345&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=942277627f5c059768e1e4eda4c49345&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const moviesResp = await fetch(FEATURED_API);
    const movies = await moviesResp.json();

    setMovies(movies);
  }, []);
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
