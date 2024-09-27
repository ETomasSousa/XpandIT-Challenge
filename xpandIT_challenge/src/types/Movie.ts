export interface Movie {
    id:	string,
    title:	string,
    year: number,
    rank:	number,
    revenue: number,
}

export interface MovieDetails extends Movie {
    id:	string,
    title:	string,
    year: number,
    rank:	number,
    revenue: number,
}

export interface MovieArrayProps {
    movies: Movie[];
}

export interface MovieProps {
    movie: Movie;
}


