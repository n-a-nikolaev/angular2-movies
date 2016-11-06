import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesNewComponent } from './movies-new.component';
import { MoviesNewRoutingModule } from './movies-new.routes';
import { SharedModule } from '../../shared/shared.module';

import { MovieService } from '../../shared/services';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MoviesNewRoutingModule
    ],
    providers: [
        MovieService
    ],
    declarations: [
        MoviesNewComponent
    ]
})
export class MoviesNewModule { }