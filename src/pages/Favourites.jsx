import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';
import '../css/Favourites.css'

const Favourites = () => {

  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className='movies-grid'>
          {favourites.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='favourite-empty'>
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourits and they will appear here</p>
      </div>
    );
  }
}

export default Favourites
