import { Component }          from 'angular2/core';
import {
    RouteParams,
    ROUTER_DIRECTIVES
}                             from 'angular2/router';
import { MediaItemComponent } from '../media-item/media-item.component';
import { CategoryListPipe }   from '../category-list.pipe';
import { MediaItemsService }  from '../media-item.service';


@Component({
    selector   : 'media-item-list',
    templateUrl: './app/media-item-list/media-item-list.component.html',
    styleUrls  : ['./app/media-item-list/media-item-list.component.css'],
    pipes      : [CategoryListPipe],
    directives : [MediaItemComponent, ROUTER_DIRECTIVES],
})
export class MediaItemListComponent {
    constructor(
        private mediaItemsService: MediaItemsService,
        private routeParams      : RouteParams
        ) {}

    medium     = '';
    mediaItems = [];

    ngOnInit() {
        this.medium = this.routeParams.get('medium');
        this.getMediaItems(this.medium);
    }

    getMediaItems(medium) {
        this.medium = medium;
        this.mediaItemsService
            .get(medium)
            .subscribe(mediaItems => {
                this.mediaItems = mediaItems;
            });
    }

    onMediaItemDeleted(mediaItem) {
        this.mediaItemsService
            .delete(mediaItem)
            .subscribe(() => {
                this.getMediaItems(this.medium)
            });
    }

}