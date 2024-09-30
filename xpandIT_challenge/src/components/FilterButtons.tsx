import { useState, useRef } from 'react';
import { FilterButtonsProps } from './../types/Movie';
import useOutsideClick from '../hooks/useOutsideClick';
import reset from './../assets/reset.svg';
import styles from './../styles/FilterButtons.module.css';


const FilterButtons = ({ year, onFilterChange, onReset }: FilterButtonsProps) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const years = Array.from({ length: 17 }, (_, i) => 2016 - i);

	const dropdownRef = useRef<HTMLDivElement>(null);
	
	useOutsideClick(dropdownRef, () => setDropdownOpen(false));

	const handleDropdownToggle = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const handleYearSelect = (selectedYear: number) => {
		onFilterChange(selectedYear);
		setDropdownOpen(false);
	};

	return (
		<div className={styles.filtersContainer}>
			<div className={year === 1 ? styles.filterActive : styles.filter} onClick={() => onFilterChange(1)}>
				Top 10 Revenue
			</div>
			<div style={{ position: 'relative' }} ref={dropdownRef}>
				<div className={year > 1 ? styles.filterActive : styles.filter} onClick={handleDropdownToggle}>
					{year > 1 ? `Top 10 Revenue ${year}` : 'Top 10 Revenue per Year'}
				</div>
				{isDropdownOpen && (
					<>
						<div className={styles.filterBackdrop} onClick={() => setDropdownOpen(false)} />
						<div className={styles.filterDropdownMenu}>
							<p>Select a year</p>
							{years.map((yearOption) => (
								<div
									key={yearOption}
									className={styles.filterDropdownOption}
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
				<img className={styles.resetLogo} style={{ cursor: "pointer" }} src={reset} alt="Reset" onClick={onReset} />
			) : null}
		</div>
	);
};

export default FilterButtons;
