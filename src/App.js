import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import {useState } from 'react';


const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setMovie={setMovie} search={search} setSearch={setSearch}/>
      <MovieList movie={movie}/>
      <Footer />
    </>
  );
}

export default App;
