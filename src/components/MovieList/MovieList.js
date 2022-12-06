import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import prev from './back.png';
import next from './next.png';
import { useRef } from 'react';


const BankList = ({ movie }) => {

  const slider = useRef();
  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 800;
  };

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 800;
  };

  return (
    <>
    
      {movie.length>0 ? <div className='container' ref={slider}>
      <img className='pointer prev' onClick={slideLeft} src={prev} alt="prev" />
        {movie.map((ele, idx) => {
          return (
            <MovieCard key={idx} ele={ele}/>
          )
        })}<img className='pointer next' onClick={slideRight} src={next} alt="next" />
        </div>
        : <div className="search-for">Search for any movie using searchbox to show</div>}
    </>
  );
}

export default BankList;
