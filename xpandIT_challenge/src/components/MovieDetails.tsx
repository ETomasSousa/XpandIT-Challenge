// Popup que apresenta os detalhes de um filme especifico
import React, { useEffect, useState } from 'react';
import { getMovieDetail } from '../api/moviesApi';
import { MovieDetail, MovieDetailsProps } from '../types/Movie';
import popupLine from '../assets/popup-line.svg'
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

  if (!movieDetail) return <></>;

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <div className='popup-header'>
          <h2>{movieDetail.title}</h2>
          <button className='popup-close' onClick={onClose}>X</button>
        </div>
        <img  className='line-logo'
              src={popupLine}
        />
        <div>
          <label>Year</label>
          <p>{movieDetail.year}</p>
          <label>Genre</label>
          <p>{movieDetail.genre || 'N/A'}</p>
          <label>Description</label>
          <p>{movieDetail.description}</p>
          <div className='popup-cast'>
            <div>
              <label>Director</label>
              <p> {movieDetail.director}</p>
            </div>
            <div>
              <label>Actors</label>
              <p>{movieDetail.actors.split(',')}</p> 
            </div>   
          </div>
          <label>Runtime</label>
          <p>{movieDetail.runtime} mins</p>
          <label>Rating</label>
          <p>{movieDetail.rating || 'N/A'}</p>
          <label>Votes</label>
          <p>{movieDetail.votes}</p>
          <label>Revenue</label>
          <p>$ {movieDetail.revenue || 'N/A'}</p>
          <label>Metascore</label>
          <p>{movieDetail.metascore}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

