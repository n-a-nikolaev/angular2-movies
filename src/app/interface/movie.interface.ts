export interface IMovie {
    title: string;
    year: string | number;
    runtime: string;
    genre: Array<string>;
    director: string;
    writer: string;
    actors: Array<string>;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    imdbRating: string;
}