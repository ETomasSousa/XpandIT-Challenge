import React from 'react';
import MovieItem from './MovieItem';
import { MovieListProps } from '../types/Movie';
import './../styles/MovieList.css';


const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
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
          {movies.map((movie, index) => (
            <MovieItem key={movie.id} movie={movie} rank={index + 1} onMovieSelect={onMovieSelect} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
