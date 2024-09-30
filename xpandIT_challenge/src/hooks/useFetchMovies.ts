// Trata de ir buscar informação à api
import { useState, useEffect } from 'react';
import { getMovies, getTop10Movies, getMovieDetail } from './../api/moviesApi';
import { Movie, MovieDetail } from './../types/Movie';

const useFetchMovies = (year: number, selectedMovieId: string | null) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMovies = async () => {
			setError(null);

			try {
				if (year) {
					const fetchedMovies = await getTop10Movies(year);
					setMovies(fetchedMovies);
				} else {
					const fetchedMovies = await getMovies();
					setMovies(fetchedMovies);
				}
			} catch (err) {
				setError('Failed to fetch movies');
			}
		};

		fetchMovies();
	}, [year]);

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
