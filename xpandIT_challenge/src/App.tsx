import { useState, useEffect } from 'react';
import { getMovies, getTop10Movies } from './api/moviesApi';
import { Movie } from './types/Movie';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FilterButtons from './components/FilterButtons';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [year, setYear] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (year) {
          const fetchedMovies = await getTop10Movies(year);
          setMovies(fetchedMovies);
        } else {
          const fetchedMovies = await getMovies();
          setMovies(fetchedMovies);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [year]);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedMovie]);

  const handleFilterSelection = (filter: number) => {
    setYear(filter);
  };

  const handleFilterReset = () => {
    setYear(0);
  };

  const handleMovieSelect = (movieId: string) => {
    setSelectedMovie(movieId);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <header className='header'></header>
      <div className="container">
        <p className='head-title'>Movie ranking</p>
        <FilterButtons
          year={year}
          onFilterChange={handleFilterSelection}
          onReset={handleFilterReset}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
            {selectedMovie && <MovieDetails movieId={selectedMovie} onClose={closePopup} />}
          </>
        )}
      </div>
    </>
  );
}

export default App;
