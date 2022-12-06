import axios from 'axios';
import { useRef } from 'react';
import './Header.css';

const Header = ({ setMovie, search, setSearch }) => {

  const inputRef = useRef();

  const inputHandler = e => {
    setSearch(e.target.value);
  }

  const titleHandler = e => {
    e.preventDefault();
    setMovie([]);
    setSearch('');
    inputRef.current.value = '';
  }

  const formHandler = e => {
    e.preventDefault();
    if (search !== "") {
      (async _ => {
        const response = await axios.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`);
        const data = response.data?.Search;
        setMovie(data);
        setSearch('');
        inputRef.current.value = '';
      })();
    }
  }


  return (
    <div className="header">
      <h1 className='title' onClick={titleHandler}>Movie Listing</h1>
      <form className='search' onSubmit={formHandler}>
        <input type={"text"} ref={inputRef} placeholder="Search movies" onChange={inputHandler} />
        <input type={"submit"} value="Search" />
      </form>
    </div>
  );
}

export default Header;