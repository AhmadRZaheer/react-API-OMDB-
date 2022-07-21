import { useEffect, useState } from "react";
import "./App.css";
import Search from "./search.svg";
import MovieCard from "./MovieCard";
//5d683c91

const API = "http://www.omdbapi.com?apikey=5d683c91";
const movie1 = {
  Title: "Spiderman in Cannes",
  Year: "2016",
  imdbID: "tt5978586",
  Type: "Movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
};

const App = () => {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMOvies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMOvies("spiderman");
  }, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Search}
          alt="search"
          onClick={() => searchMOvies(searchTerm)}
        />
      </div>
      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
