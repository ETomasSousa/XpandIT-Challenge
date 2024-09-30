// Popup que apresenta os detalhes de um filme específico
import { MovieDetailsProps } from '../types/Movie';
import close from '../assets/close.svg';
import popupLine from '../assets/popup-line.svg';
import styles from './../styles/MovieDetails.module.css';

const MovieDetails = ({ movieDetails, onClose }: MovieDetailsProps) => {
	if (!movieDetails) return null;

	const {
		title,
		year,
		genre,
		description,
		director,
		actors,
		runtime,
		rating,
		votes,
		revenue,
		metascore,
	} = movieDetails;

	return (
		<>
			<div className={styles.popupBackdrop}></div>
			<div className={styles.popupOverlay}>
				<div className={styles.popupContent}>
					<div className={styles.popupHeader}>
						<h2>{title}</h2>
						<div>
							<img
								className={styles.closeLogo}
								src={close}
								alt="Close"
								onClick={onClose}
							/>
							<p className={styles.closeText}>CLOSE</p>
						</div>
					</div>
					<img className={styles.lineLogo} src={popupLine} alt="Popup Line" />

					<div>
						<MovieDetail label="Year" value={year || 'N/A'} />
						<MovieDetail label="Genre" value={genre || 'N/A'} />
						<MovieDetail label="Description" value={description || 'N/A'} />
						<div className={styles.popupCast}>
							<div>
								<MovieDetail label="Director" value={director || 'N/A'} />
							</div>
							<div>
								<label>Actors</label>
								<div className={styles.popupActors}>
									{actors ? (
										actors.split(',').map((actor, index) => (
											<p key={index} className={styles.popupDetail}>{actor.trim()}</p>
										))
									) : (
										'N/A'
									)}
								</div>
							</div>
						</div>

						<MovieDetail label="Runtime" value={runtime ? `${runtime} mins` : 'N/A'} />
						<MovieDetail label="Rating" value={rating || 'N/A'} />
						<MovieDetail label="Votes" value={votes || 'N/A'} />
						<MovieDetail label="Revenue" value={revenue ? `$${revenue.toFixed(2)}` : 'N/A'} />
						<MovieDetail label="Metascore" value={metascore || 'N/A'} />
					</div>
				</div>
			</div>
		</>
	);
};

const MovieDetail = ({ label, value }: { label: string; value: string | number }) => (
	<>
		<label>{label}</label>
		<p className={styles.popupDetail}>{value}</p>
	</>
);

export default MovieDetails;
