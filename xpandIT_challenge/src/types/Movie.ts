export interface Movie {
	id:	string,
	title:	string,
	year: number,
	rank:	number,
	revenue: number,
}

export interface MovieDetail extends Movie {
	id: string,
	title: string,
	year: number,
	rank: number,
	revenue: number,
	genre: string,
	description: string,
	director: string,
	actors: string,
	runtime: number,
	rating:	number,
	votes:	number,
	metascore: number,
}

export interface FilterButtonsProps {
	year: number;
	onFilterChange: (filter: number) => void;
	onReset: () => void;
}

export interface MovieListProps {
	movies: Movie[];
	onMovieSelect: (movieId: string) => void;
}

export interface MovieItemProps {
	movie: Movie;
	rank: number;
	onMovieSelect: (movieId: string) => void;
}

export interface MovieDetailsProps {
	movieDetails: MovieDetail | null;
	onClose: () => void;
}


