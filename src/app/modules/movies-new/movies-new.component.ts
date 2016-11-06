import { Component, OnInit } from '@angular/core';


import { MovieService } from '../../shared/services';

@Component({
    selector: '.page-movies--new',
    templateUrl: 'movies-new.component.html'
})
export class MoviesNewComponent implements OnInit {
    public loading: boolean = true;
    public serverError: boolean = false;

    public movies: Array<Object> = [];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movieService
            .getBatman()
            .subscribe(response => {
                if (response.Response == "True") {
                    if (response.Search.length > 0) {
                        setTimeout(() => {
                            this.movies = response.Search;
                            this.loading = false;
                        }, 2000)
                    }
                } else {
                    this.serverError = true;
                }
            });
    }

    public addToFavourites(movie: any) {
        this.movieService.addToFavourites(movie);
    }

}