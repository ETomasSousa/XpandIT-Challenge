import { useState, useEffect } from 'react';
import { getMovies, getTop10Movies } from './api/moviesApi';
import {Movie} from './types/Movie'
import MovieList from './components/MovieList';
import reset from './assets/reset.svg'
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [year, setYear] = useState(0);
  const [filterSelected, setFilterSelected] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if(filterSelected) {
          const fetchedMovies = await getTop10Movies(year);
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
  }, [filterSelected]);

  const handleFilterSelection = (filter: number) => {
    if (filter === 1) setYear(0);
    else setYear(filter);
    setFilterSelected(filter);
  }

  const handleFilterReset = () => {
    setYear(0);
    setFilterSelected(0);
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
          <button className={`filter${filterSelected === 1 ? '-active' : ''}`} onClick={() => handleFilterSelection(1)}>Top 10 Revenue</button>
          <select 
            id="yearSelect"
            className={`filter${filterSelected === 2 ? '-active' : ''}`} 
            value={year} 
            onChange={(e) => handleFilterSelection(parseInt(e.target.value))}
          >
            <option value="">Top 10 Revenue per Year</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
          {filterSelected ? <img className='reset-logo' style={{cursor:"pointer"}} src={reset} alt="Reset" onClick={handleFilterReset}/> : <></>}
        </div>
        {isLoading ? <div>Loading...</div> : <MovieList movies={movies}/>}
      </div>
    </>
  );
}

export default App;
