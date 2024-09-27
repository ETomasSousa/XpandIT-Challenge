// Botôes para filtrar os filmes
import React from 'react';
import './../styles/FilterActions.css'

export default function FilterButtons() {
  return (
    <div className='filters-container'>
        <button className='filter'>Top 10 Revenue</button>
        <div>
            <select className='filter'>
              <option value="">Top Revenue per Year</option>
            </select>
        </div>
    </div>
  )
}
