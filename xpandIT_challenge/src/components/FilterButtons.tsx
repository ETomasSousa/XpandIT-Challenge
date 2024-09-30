import { useState, useRef } from 'react';
import { FilterButtonsProps } from './../types/Movie';
import useOutsideClick from '../hooks/useOutsideClick';
import reset from './../assets/reset.svg';
import './../styles/FilterButtons.module.css';

const years = Array.from({ length: 17 }, (_, i) => 2016 - i);
const dropdownRef = useRef<HTMLDivElement>(null);

const FilterButtons = ({ year, onFilterChange, onReset }: FilterButtonsProps) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	useOutsideClick(dropdownRef, () => setDropdownOpen(false));

	const handleDropdownToggle = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const handleYearSelect = (selectedYear: number) => {
		onFilterChange(selectedYear);
		setDropdownOpen(false);
	};

	return (
		<div className='filters-container'>
			<div className={`filter${year === 1 ? '-active' : ''}`} onClick={() => onFilterChange(1)}>
				Top 10 Revenue
			</div>
			<div style={{ position: 'relative' }} ref={dropdownRef}>
				<div className={`filter${year > 1 ? '-active' : ''}`} onClick={handleDropdownToggle}>
					{year > 1 ? `Top 10 Revenue ${year}` : 'Top 10 Revenue per Year'}
				</div>
				{isDropdownOpen && (
					<>
						<div className='filter-backdrop' onClick={() => setDropdownOpen(false)} />
						<div className='filter-dropdown-menu'>
							<p>Select a year</p>
							{years.map((yearOption) => (
								<div
									key={yearOption}
									className='filter-dropdown-option'
									onClick={() => handleYearSelect(yearOption)}
								>
									{yearOption}
								</div>
							))}
						</div>
					</>
				)}
			</div>
			{year ? (
				<img className='reset-logo' style={{ cursor: "pointer" }} src={reset} alt="Reset" onClick={onReset} />
			) : null}
		</div>
	);
};

export default FilterButtons;
