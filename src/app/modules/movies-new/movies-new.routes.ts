import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesNewComponent } from './movies-new.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'batman',
                component: MoviesNewComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesNewRoutingModule { }