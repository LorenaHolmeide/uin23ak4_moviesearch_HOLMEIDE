//MainBranch
import './App.css';
import './css/main.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import MoviePage from './components/MoviePage';
import SearchResult from './components/SearchResult';


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')
  const [error, setError] = useState(false)

  const getMovies = async () => {

    fetch(`https://www.omdbapi.com/?apikey=2b4982d&s=${search}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setError(false)
      })
      .catch(error => {
        console.log(error)
        setError(true)
      });

  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SearchResult error={error} search={search} movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Route>
    </Routes>

  );
}

export default App;
