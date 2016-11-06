import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routes';

import { MovieService } from '../../shared/services';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SearchRoutingModule
    ],
    providers: [
        MovieService
    ],
    declarations: [
        SearchComponent
    ]
})
export class SearchModule { }