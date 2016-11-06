import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from '../favorite.directive';

@Component({
    selector: 'media-item',
    templateUrl: 'app/media-item/media-item.component.html',
    styleUrls: ['app/media-item/media-item.component.css'],
    directives: [FavoriteDirective]
})
export class MediaItemComponent {
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}