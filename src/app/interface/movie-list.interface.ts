import { IMovie } from './movie.interface';

export interface IMovieList {
    items: Array<IMovie>;
    add(movie: IMovie): Array<IMovie>;
    remove(movie: IMovie): Array<IMovie>;
}