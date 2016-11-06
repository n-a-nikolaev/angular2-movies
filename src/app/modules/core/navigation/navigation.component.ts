import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
    selector: 'navigation',
    styleUrls: ['navigation.component.css'],
    templateUrl: 'navigation.component.html'
})
export class NavComponent {
    public menuIsVisible: boolean = false;
    private isBrowser: boolean = !!(typeof window != 'undefined' && window.document);
    constructor(private router: Router) {

    }
    search(title) {
        if (this.isBrowser) {
            let navigationExtras: NavigationExtras = {
                queryParams: { 'title': title },
            };
            this.router.navigate(['/search'], navigationExtras);
        }
    }
    toggleMenu() {
        this.menuIsVisible = !this.menuIsVisible;
    }
}