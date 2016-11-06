import { Injectable } from 'angular2/core';
import {
    Http,
    URLSearchParams,
    Headers
}                     from 'angular2/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemsService {
    constructor(private http: Http) {
    }

    get(medium) {
        const searchParams = new URLSearchParams();

        searchParams.append('medium', medium);

        return this.http
            .get('mediaitems', {
                search: searchParams
            })
            .map(response => response.json().mediaItems);
    }

    add(mediaItem) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post('mediaitems', JSON.stringify(mediaItem), {
                headers
            })
            .map(response => {});
    }

    delete(mediaItem) {
        return this.http
            .delete(`mediaitems/${mediaItem.id}`)
            .map(response => {})
    }
}