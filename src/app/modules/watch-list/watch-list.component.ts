import { Component, OnInit } from '@angular/core';


import { MovieService } from '../../shared/services';

@Component({
    selector: '.page-movies--list',
    templateUrl: 'watch-list.component.html'
})
export class WatchListComponent implements OnInit {

    public movies: Array<Object> = [];
    
    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movies = this.movieService.getFavourites();
    }

    public removeFromFavourites(movie: any) {
        if (confirm('Are you sure?')) {
            this.movies = this.movieService.removeFromFavourites(movie);
        }
    }
}
