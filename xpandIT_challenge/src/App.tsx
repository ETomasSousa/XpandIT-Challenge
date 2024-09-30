import { useEffect, useState } from 'react';
import useFetchMovies from './hooks/useFetchMovies';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import useMovieSelection from './hooks/useMovieSelection';
import GhostElement from './components/GhostElement';
import Error from './components/Error'
import FilterButtons from './components/FilterButtons';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
	const [year, setYear] = useState(0);
	const [page, setPage] = useState(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { selectedMovie, handleMovieSelect, handleClosePopup } = useMovieSelection();
	const { movies, movieDetails, error } = useFetchMovies(year, selectedMovie, page);

	const handleFetchMore = () => {
		if (!isFetching) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	const [isFetching] = useInfiniteScroll(handleFetchMore);

	useEffect(() => {
		if (error || (movies.length > 0 && movies.length <= 50)) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}, [year, movies, error]);

	const handleYearChange = (year: number) => {
		setYear(year);
	};

	const handleFilterReset = () => {
		setYear(0);
		setPage(0);
	};

	return (
		<>
			<header className="header" id="top"></header>
			<div className="container">
				{isLoading ? (
					<GhostElement />
				) : error ? (
					<Error message={`${error};Try refresh the page!`}/>
				) : (
					<>
						<p className="head-title">Movie ranking</p>
						<FilterButtons year={year} onFilterChange={handleYearChange} onReset={handleFilterReset} />
						<MovieList movies={movies} onMovieSelect={handleMovieSelect} />
						{selectedMovie && movieDetails && <MovieDetails movieDetails={movieDetails} onClose={handleClosePopup} />}
					</>
				)}
			</div>
			<ScrollToTop />
		</>
	);
}

export default App;
