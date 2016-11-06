import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WatchListComponent } from './watch-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'list',
                component: WatchListComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class WatchListRoutingModule { }