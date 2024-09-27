// Comunicação com a API para receber data sobre os filmes
import axios from 'axios';
import {Movie} from './../types/Movie'

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies`);
    const fetchedMovies = await response.data.content;
    return fetchedMovies;
};
  
export const getMovieDetail = async (id: string) => {
    await axios.get(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies/${id}`)
    .then((response) => {
        return response.data;
        })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
};
  
  export const getTop10Movies = async (year: number): Promise<Movie[]> => {
    const movies = await getMovies();
    const sortedMovies = movies.sort((a: any, b: any) => {
            if (a.revenue === null) return 1;
            if (b.revenue === null) return -1;
            return b.revenue - a.revenue;
    });
    if(year){
        const filteredMovies = sortedMovies.filter((movie) => movie.year === year);
        return filteredMovies.slice(0,10);
    }
    return sortedMovies.slice(0, 10);
  };