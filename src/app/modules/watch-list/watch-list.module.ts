import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchListComponent } from './watch-list.component';
import { WatchListRoutingModule } from './watch-list.routes';
import { SharedModule } from '../../shared/shared.module';

import { MovieService } from '../../shared/services';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WatchListRoutingModule
    ],
    providers: [
        MovieService
    ],
    declarations: [
        WatchListComponent
    ]
})
export class WatchListModule { }