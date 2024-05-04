import { useState, useEffect } from "react";
import "./App.css";
import APIKey from "./config";
import Movie from "./components/Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=";
const SearchURL = "https://api.themoviedb.org/3/search/movie?api_key=";

function App() {
  const [movieResults, setMovieResults] = useState([]);
  //const testArray = ['age',2,true,"aa"];

  useEffect(() => {
    fetch(APIURL + APIKey)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovieResults(data.results);
      });
  }, []);

  return (
    <>
      <header>
        <form>
          <input
            className="search"
            type="search"
            placeholder="search..."
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movieResults.map((element, index) => (
          <Movie key={element.id} {...element} />
        ))}
      </div>
    </>
  );
}

export default App;
