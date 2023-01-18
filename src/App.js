import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //variable with api key
  const apiKey = "98e3fb1f"

  //state to handle movie data
  const [ movie, setMovie ] = useState(null)

  //function to get movie data
  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (error) {
      console.error(error)
    }

    
  };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);


  return (
    <div className="App">
     <Form movieSearch={getMovie}/>
     <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
