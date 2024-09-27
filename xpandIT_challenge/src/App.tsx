import { useState, useEffect } from 'react';
import { getMovies, getTop10Movies } from './api/moviesApi';
import {Movie} from './types/Movie'
import MovieList from './components/MovieList';
import reset from './assets/reset.svg'
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if(isFilterSelected) {
          const fetchedMovies = await getTop10Movies(2016);
          setMovies(fetchedMovies);
        }
        else {
          const fetchedMovies =  await getMovies();
          setMovies(fetchedMovies);
        }
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [isFilterSelected]);

  const handleFilterSelection = () => {
    setIsFilterSelected(true);
  }

  const handleFilterReset = () => {
    setIsFilterSelected(false);
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <header className='header'>
      </header>
      <div className="container">
        <p>Movie ranking</p>
        <div className='filters-container'>
          <button className='filter' onClick={handleFilterSelection}>Top 10 Revenue</button>
          <select className='filter'>
            <option value="">Top Revenue per Year</option>
          </select>
          {isFilterSelected && <img className='reset-logo' style={{cursor:"pointer"}} src={reset} alt="Reset" onClick={handleFilterReset}/>}
        </div>
        {isLoading ? <div>Loading...</div> : <MovieList movies={movies}/>}
      </div>
    </>
  );
}

export default App;
