//MainBranch
import './App.css';
import './css/main.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import MoviePage from './components/MoviePage';
import SearchRes from './components/SearchResult';


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=2b4982d`)
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)

  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SearchRes movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Route>
    </Routes>

  );
}

export default App;
