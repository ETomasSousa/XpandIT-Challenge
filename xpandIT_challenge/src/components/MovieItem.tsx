import React from 'react';
import { MovieItemProps } from '../types/Movie';
import view from './../assets/view.svg';
import './../styles/MovieItem.css';

const MovieItem: React.FC<MovieItemProps> = ({ movie, rank, onMovieSelect }) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>{movie.revenue ? `$${movie.revenue}` : '-'}</td>
      <td>
        <img
          className='view-logo'
          style={{ cursor: 'pointer' }}
          src={view}
          alt="View"
          onClick={() => onMovieSelect(movie.id)}
        />
      </td>
    </tr>
  );
};

export default MovieItem;
