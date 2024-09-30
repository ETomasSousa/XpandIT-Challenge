import React from 'react';
import { MovieItemProps } from '../types/Movie';
import view from './../assets/view.svg';
import styles from './../styles/MovieItem.module.css';

const MovieItem = React.memo(({ movie, rank, onMovieSelect }: MovieItemProps) => {

	const {
		title,
		year,
		revenue,
	} = movie;

	return (
		<tr className={styles.movieItem}>
			<td>{rank}</td>
			<td>{title}</td>
			<td>{year}</td>
			<td>{revenue ? `$${revenue.toFixed(2)}` : '-'}</td>
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
});

export default MovieItem;
