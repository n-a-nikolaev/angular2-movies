import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable()
export class MovieService {

    private apiUrl = 'http://www.omdbapi.com/';
    private isBrowser: boolean = !!(typeof window != 'undefined' && window.document);

    constructor(private http: HttpService) {

    }

    search(name: string) {
        return this.http.get(this.apiUrl, { s: name })
    }

    getBatman() {
        return this.search('batman');
    }

    addToFavourites(movie: Object) {
        let favs: Array<Object> = this.getFavourites();

        let found = favs.find((obj) => {
            return obj['imdbID'] == movie['imdbID'];
        });

        if (found) {
            alert('You already added this movie to favourites');
        } else {
            favs.push(movie);
        }
        if (this.isBrowser) {
            localStorage.setItem('favourites', JSON.stringify(favs));
        }
    }

    getFavourites(): Array<Object> {
        if (this.isBrowser) {
            return JSON.parse(localStorage.getItem('favourites')) || [];
        }
    }

    removeFromFavourites(movie: any): Array<Object> {
        let favs: Array<Object> = this.getFavourites();

        let found = favs.find((obj) => {
            return obj['imdbID'] == movie['imdbID'];
        });

        favs.splice(favs.indexOf(found), 1);

        if (this.isBrowser) {
            localStorage.setItem('favourites', JSON.stringify(favs));
        }

        return favs || [];
    }

    public checkBrowser() {
        return this.isBrowser;
    }
}