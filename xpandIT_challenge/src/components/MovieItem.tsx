// Um elemento Filme apresentado na lista
import React from 'react'
import { MovieProps } from '../types/Movie'
import view from './../assets/view.svg'
import './../styles/MovieItem.css'

const MovieItem: React.FC<MovieProps> = ({movie}) => {
  return (
    <tr>
        <td>{movie.rank}</td>
        <td>{movie.title}</td>
        <td>{movie.year}</td>
        <td>{movie.revenue ? `$ ${movie.revenue}` : '-'}</td>
        <td><img className='view-logo' style={{cursor:"pointer"}} src={view} alt="View" /></td>
    </tr>
  )
}

export default MovieItem
