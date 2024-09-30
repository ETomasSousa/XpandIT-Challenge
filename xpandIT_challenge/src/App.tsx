import { useState, useEffect } from 'react';
import useFetchMovies from './hooks/useFetchMovies';
import GhostElement from './components/GhostElement';
import Error from './components/Error'
import FilterButtons from './components/FilterButtons';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './styles/App.css';

function App() {
	const [year, setYear] = useState(0);
	const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { movies, movieDetails, error } = useFetchMovies(year, selectedMovie);

	useEffect(() => {
		setIsLoading(!isLoading);
	}, [year, movies, error])

	const handleYearChange = (year: number) => {
		setYear(year);
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
			<header className="header"></header>
			<div className="container">
				{isLoading ? (
					<GhostElement />
				) : error ? (
					<Error message={error} />
				) : (
					<>
						<p className="head-title">Movie ranking</p>
						<FilterButtons year={year} onFilterChange={handleYearChange} onReset={handleFilterReset} />
						<MovieList movies={movies} onMovieSelect={handleMovieSelect} />
						{selectedMovie && <MovieDetails movieDetails={movieDetails} onClose={closePopup} />}
					</>
				)}
			</div>
		</>
	);
}

export default App;
