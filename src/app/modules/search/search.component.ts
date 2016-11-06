import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../../shared/services';

@Component({
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    public loading = true;
    public serverError = false;
    public movieTitle: string = '';
    public resultsCount: number = 0;
    public movies: Array<Object> = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private movieService: MovieService
    ) { }

    ngOnInit() {
        if (this.movieService.checkBrowser()) {
            this.route.queryParams.subscribe(params => {
                this.movieTitle = params['title'];

                this.movieService
                    .search(this.movieTitle)
                    .subscribe(response => {
                        if (response.Response == "True") {
                            if (response.Search.length > 0) {
                                setTimeout(() => {
                                    this.resultsCount = response.totalResults;
                                    this.movies = response.Search;
                                    this.loading = false;
                                }, 2000)
                            }
                        } else {
                            this.serverError = true;
                        }
                    })
            });
        }
    }

    public addToFavourites(movie: any) {
        this.movieService.addToFavourites(movie);
    }

}