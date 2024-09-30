import { useState, useEffect } from 'react';
import { getMovies, getMovieDetail, getTop10Movies } from './../api/moviesApi';
import { Movie, MovieDetail } from './../types/Movie';

const useFetchMovies = (year: number, selectedMovieId: string | null, page: number) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
	const [error, setError] = useState<string | null>(null);

	const removeDuplicates = (movies: Movie[]) => {
		const movieMap = new Map(movies.map(movie => [movie.id, movie]));
		return Array.from(movieMap.values());
	};

	useEffect(() => {
		const fetchMovies = async () => {
			setError(null);
			try {
				if (year) {
					const top10Movies = await getTop10Movies(year);
					setMovies(top10Movies);
				} else {
					const fetchedMovies = await getMovies(page);

					if (page === 0) {
						setMovies(fetchedMovies);
					} else {
						setMovies((prevMovies) => removeDuplicates([...prevMovies, ...fetchedMovies]));
					}
				}
			} catch (err) {
				setError('Failed to fetch movies');
			}
		};

		fetchMovies();
	}, [year, page]);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			if (selectedMovieId) {
				setError(null);
				try {
					const details = await getMovieDetail(selectedMovieId);
					setMovieDetails(details);
				} catch (err) {
					setError('Failed to fetch movie details');
				}
			} else {
				setMovieDetails(null);
			}
		};

		fetchMovieDetails();
	}, [selectedMovieId]);

	return { movies, movieDetails, error };
};

export default useFetchMovies;
