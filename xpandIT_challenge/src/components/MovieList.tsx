// Mostra a lista de filmes
import React from 'react'
import MovieItem from './MovieItem'
import './../styles/MovieList.css'

export default function MovieList() {
  return (
    <div>
        <table className='movies-list'>
            <tr>
                <th>RANKING</th>
                <th>TITLE</th>
                <th>YEAR</th>
                <th>REVENUE</th>
                <th></th>
            </tr>
            <MovieItem/>
        </table>
    </div>
  )
}
