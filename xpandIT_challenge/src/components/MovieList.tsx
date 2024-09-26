// Mostra a lista de filmes
import React from 'react';
import MovieItem from './MovieItem';
import { MovieListProps } from '../types/Movie';
import './../styles/MovieList.css';

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      <table className='movies-list'>
        <thead>
          <tr>
            <th>RANKING</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>REVENUE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;

