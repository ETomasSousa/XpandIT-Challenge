// Popup que apresenta os detalhes de um filme especifico
import { MovieDetailsProps } from '../types/Movie';
import close from '../assets/close.svg'
import popupLine from '../assets/popup-line.svg';
import styles from './../styles/MovieDetails.module.css';

const MovieDetails = ({ movieDetails, onClose }: MovieDetailsProps) => {

	if (!movieDetails) return null;

	return (
		<>
			<div className={styles.popupBackdrop}></div>
			<div className={styles.popupOverlay}>
				<div className={styles.popupContent}>
					<div className={styles.popupHeader}>
						<h2>{movieDetails.title}</h2>
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
						<label>Year</label>
						<p className={styles.popupDetail}>{movieDetails.year}</p>
						<label>Genre</label>
						<p className={styles.popupDetail}>{movieDetails.genre || 'N/A'}</p>
						<label>Description</label>
						<p className={styles.popupDetail}>{movieDetails.description}</p>
						<div className={styles.popupCast}>
							<div>
								<label>Director</label>
								<p className={styles.popupDetail}>{movieDetails.director}</p>
							</div>
							<div>
								<label>Actors</label>
								<p className={styles.popupDetail}>{movieDetails.actors.split(',')}</p>
							</div>
						</div>
						<label>Runtime</label>
						<p className={styles.popupDetail}>{movieDetails.runtime} mins</p>
						<label>Rating</label>
						<p className={styles.popupDetail}>{movieDetails.rating || 'N/A'}</p>
						<label>Votes</label>
						<p className={styles.popupDetail}>{movieDetails.votes}</p>
						<label>Revenue</label>
						<p className={styles.popupDetail}>${movieDetails.revenue || 'N/A'}</p>
						<label>Metascore</label>
						<p className={styles.popupDetail}>{movieDetails.metascore}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
