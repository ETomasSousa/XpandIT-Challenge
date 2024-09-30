import MovieItem from './MovieItem';
import { MovieListProps } from '../types/Movie';
import styles from './../styles/MovieList.module.css';


const MovieList = ({ movies, onMovieSelect }: MovieListProps) => {
	return (
		<div className={styles.moviesList}>
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
