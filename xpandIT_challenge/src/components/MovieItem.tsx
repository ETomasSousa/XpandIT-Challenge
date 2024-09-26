// Um elemento Filme apresentado na lista
import React from 'react'
import view from './../assets/view.svg'
import './../styles/MovieItem.css'

export default function MovieItem() {
  return (
    <tr>
        <td>1</td>
        <td>The Flash</td>
        <td>2012</td>
        <td>$500,000,000</td>
        <td><img className='view-logo' src={view} alt="View"/></td>
    </tr>
  )
}
