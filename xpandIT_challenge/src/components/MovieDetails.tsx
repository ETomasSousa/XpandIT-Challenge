// Popup que apresenta os detalhes de um filme especifico
import React, { useEffect, useState } from 'react';
import { getMovieDetail } from '../api/moviesApi';
import { MovieDetail, MovieDetailsProps } from '../types/Movie';
import close from '../assets/close.svg'
import popupLine from '../assets/popup-line.svg';
import './../styles/MovieDetails.css';

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId, onClose }) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const data = await getMovieDetail(movieId);
      setMovieDetail(data);
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!movieDetail) return null;

  return (
    <>
      <div className='popup-backdrop'></div>
        <div className='popup-overlay'>
          <div className='popup-content'>
            <div className='popup-header'>
              <h2>{movieDetail.title}</h2>
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
              <p className="popup-detail">{movieDetail.year}</p>
              <label>Genre</label>
              <p className="popup-detail">{movieDetail.genre || 'N/A'}</p>
              <label>Description</label>
              <p className="popup-detail">{movieDetail.description}</p>
              <div className='popup-cast'>
                <div>
                  <label>Director</label>
                  <p className="popup-detail">{movieDetail.director}</p>
                </div>
                <div>
                  <label>Actors</label>
                  <p className="popup-detail">{movieDetail.actors.split(',')}</p>
                </div>
              </div>
              <label>Runtime</label>
              <p className="popup-detail">{movieDetail.runtime} mins</p>
              <label>Rating</label>
              <p className="popup-detail">{movieDetail.rating || 'N/A'}</p>
              <label>Votes</label>
              <p className="popup-detail">{movieDetail.votes}</p>
              <label>Revenue</label>
              <p className="popup-detail">$ {movieDetail.revenue || 'N/A'}</p>
              <label>Metascore</label>
              <p className="popup-detail">{movieDetail.metascore}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default MovieDetails;
