// Popup que apresenta os detalhes de um filme especifico
import { MovieDetailsProps } from '../types/Movie';
import close from '../assets/close.svg'
import popupLine from '../assets/popup-line.svg';
import './../styles/MovieDetails.module.css';

const MovieDetails = ({ movieDetails, onClose }: MovieDetailsProps) => {

	if (!movieDetails) return null;

	return (
		<>
			<div className='popup-backdrop'></div>
			<div className='popup-overlay'>
				<div className='popup-content'>
					<div className='popup-header'>
						<h2>{movieDetails.title}</h2>
						<div>
							<img
								className='close-logo'
								src={close}
								alt="Close"
								onClick={onClose}
							/>
							<p className='close-text'>CLOSE</p>
						</div>
					</div>
					<img className='line-logo' src={popupLine} alt="Popup Line" />
					<div>
						<label>Year</label>
						<p className="popup-detail">{movieDetails.year}</p>
						<label>Genre</label>
						<p className="popup-detail">{movieDetails.genre || 'N/A'}</p>
						<label>Description</label>
						<p className="popup-detail">{movieDetails.description}</p>
						<div className='popup-cast'>
							<div>
								<label>Director</label>
								<p className="popup-detail">{movieDetails.director}</p>
							</div>
							<div>
								<label>Actors</label>
								<p className="popup-detail">{movieDetails.actors.split(',')}</p>
							</div>
						</div>
						<label>Runtime</label>
						<p className="popup-detail">{movieDetails.runtime} mins</p>
						<label>Rating</label>
						<p className="popup-detail">{movieDetails.rating || 'N/A'}</p>
						<label>Votes</label>
						<p className="popup-detail">{movieDetails.votes}</p>
						<label>Revenue</label>
						<p className="popup-detail">${movieDetails.revenue || 'N/A'}</p>
						<label>Metascore</label>
						<p className="popup-detail">{movieDetails.metascore}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
