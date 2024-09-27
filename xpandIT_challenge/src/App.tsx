import { useState, useEffect } from 'react';
import { getMovies } from './api/moviesApi';
import {Movie} from './types/Movie'
import FilterButtons from './components/FilterButtons';
import MovieList from './components/MovieList';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMovies();
        console.log(fetchedMovies)
        setMovies(fetchedMovies);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <header className='header'>
      </header>
      <div className="container">
        <p>Movie ranking</p>
        <FilterButtons />
        {isLoading ? <div>Loading...</div> : <MovieList movies={movies}/>}
      </div>
    </>
  );
}

export default App;
