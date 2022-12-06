import './MovieCard.css';

function MovieCard({ele}) {
    return (
        <div className='movie-card' style={{background:`url(${ele.Poster})`}}>
        </div>
    );
}

export default MovieCard;