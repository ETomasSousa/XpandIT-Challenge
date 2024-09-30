import { useState, useEffect } from 'react';

const useMovieSelection = () => {
	const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

	useEffect(() => {
		document.body.style.overflow = selectedMovie ? 'hidden' : 'auto';
	}, [selectedMovie]);

	const handleMovieSelect = (movieId: string) => {
		setSelectedMovie(movieId);
	};

	const handleClosePopup = () => {
		setSelectedMovie(null);
	};

	return { selectedMovie, handleMovieSelect, handleClosePopup };
};

export default useMovieSelection;
