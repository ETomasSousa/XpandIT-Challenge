import axios from 'axios';
import { Movie } from './../types/Movie'

const API_URL = 'http://movie-challenge-api-xpand.azurewebsites.net/api/movies';

export const getMovies = async (page: number): Promise<Movie[]> => {
	const response = await axios.get(`${API_URL}?size=50&page=${page}`);
	const fetchedMovies = await response.data.content;
	return fetchedMovies;
};

export const getMovieDetail = async (id: string) => {
	const response = await axios.get(`${API_URL}/${id}`)
	const fetchedDetails = await response.data;
	return fetchedDetails;
};

export const getTop10Movies = async (year: number): Promise<Movie[]> => {
	const response = await axios.get(`${API_URL}`);
	const movies = await response.data.content;
	const sortedMovies = movies.sort((a: any, b: any) => {
		if (a.revenue === null) return 1;
		if (b.revenue === null) return -1;
		return b.revenue - a.revenue;
	});
	if (year > 1) {
		const filteredMovies = sortedMovies.filter((movie: Movie) => movie.year === year);
		return filteredMovies.slice(0, 10);
	}
	return sortedMovies.slice(0, 10);
};