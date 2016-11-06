import { Component }              from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
}                                 from 'angular2/router';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';

@RouteConfig([
    {
        path     : '/:medium',
        component: MediaItemListComponent,
        name     : 'List'
    },
    {
        path     : '/add',
        component: MediaItemFormComponent,
        name     : 'AddMediaItem'
    }
])
@Component({
    selector   : 'media-tracker-app',
    templateUrl: 'app/app.component.html',
    styleUrls  : ['app/app.component.css'],
    directives : [ROUTER_DIRECTIVES]
})
export class AppComponent {}