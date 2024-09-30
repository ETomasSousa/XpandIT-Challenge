import { useEffect, useState } from 'react';
import useFetchMovies from './hooks/useFetchMovies';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import GhostElement from './components/GhostElement';
import FilterButtons from './components/FilterButtons';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
	const [year, setYear] = useState(0);
	const [page, setPage] = useState(0);
	const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const { movies, movieDetails, error } = useFetchMovies(year, selectedMovie, page);

	const handleFetchMore = () => {
		if (!isFetching) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	const [isFetching] = useInfiniteScroll(handleFetchMore);

	useEffect(() => {
		if (error) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
			return;
		}
		if (movies.length > 0 && movies.length <= 50) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}, [year, movies, error]);

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


	const handleYearChange = (year: number) => {
		setYear(year);
	};

	const handleFilterReset = () => {
		setYear(0);
		setPage(0);
	};

	const handleMovieSelect = (movieId: string) => {
		setSelectedMovie(movieId);
	};

	const handleClosePopup = () => {
		setSelectedMovie(null);
	};


	return (
		<>
			<header className="header" id="top"></header>
			<div className="container">
				{isLoading ? (
					<GhostElement />
				) : error ? (
					<div>{error}</div>
				) : (
					<>
						<p className="head-title">Movie ranking</p>
						<FilterButtons year={year} onFilterChange={handleYearChange} onReset={handleFilterReset} />
						<MovieList movies={movies} onMovieSelect={handleMovieSelect} />
						{selectedMovie && <MovieDetails movieDetails={movieDetails} onClose={handleClosePopup} />}
					</>
				)}
			</div>
			<ScrollToTop />
		</>
	);
}

export default App;
