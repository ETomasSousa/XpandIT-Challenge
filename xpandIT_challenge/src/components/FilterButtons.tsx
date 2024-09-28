import React from 'react';
import reset from './../assets/reset.svg';
import {FilterButtonsProps} from './../types/Movie'
import './../styles/FilterButtons.css';


const FilterButtons: React.FC<FilterButtonsProps> = ({ year, onFilterChange, onReset }) => {
  return (
    <div className='filters-container'>
      <button className={`filter${year === 1 ? '-active' : ''}`} onClick={() => onFilterChange(1)}>
        Top 10 Revenue
      </button>
      <select
        id="yearSelect"
        className={`filter${year >= 2 ? '-active' : ''}`}
        value={year}
        onChange={(e) => onFilterChange(parseInt(e.target.value))}
      >
        <option value="">Top 10 Revenue per Year</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
      </select>
      {year ? (
        <img className='reset-logo' style={{ cursor: "pointer" }} src={reset} alt="Reset" onClick={onReset} />
      ) : null}
    </div>
  );
};

export default FilterButtons;
