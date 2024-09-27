// Mostra a lista de filmes
import React from 'react';
import MovieItem from './MovieItem';
import { MovieArrayProps } from '../types/Movie';
import './../styles/MovieList.css';

const MovieList: React.FC<MovieArrayProps> = ({ movies }) => {
  return (
    <div className='movies-list'>
      <table>
        <thead>
          <tr>
            <th>RANKING</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>REVENUE</th>
            <th></th>
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

