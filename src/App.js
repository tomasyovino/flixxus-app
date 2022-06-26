import { useState } from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from './components/Header/Header';
import IncomingMoviesList from "./views/Movies/MoviesLists/IncomingMoviesList";
import PopularMoviesList from "./views/Movies/MoviesLists/PopularMoviesList";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <Header movies={movies} setMovies={setMovies} search={search} setSearch={setSearch} />
      <PopularMoviesList movies={movies} setMovies={setMovies} />
      <IncomingMoviesList />
      <Form />
      <Footer />
    </>
  );
}

export default App;
