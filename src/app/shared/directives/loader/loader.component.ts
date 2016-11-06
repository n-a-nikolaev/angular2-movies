import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'loader',
    styleUrls: ['loader.component.css'],
    templateUrl: 'loader.component.html'
})
export class LoaderComponent implements OnInit {

    @Input('show') loading: boolean;

    constructor() { }

    ngOnInit() {

    }

}