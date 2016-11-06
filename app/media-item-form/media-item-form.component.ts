import { Component, Inject }       from 'angular2/core';
import { Validators, FormBuilder } from 'angular2/common';
import { Router }                  from 'angular2/router';
import { MediaItemsService }       from '../media-item.service';
import { LOOKUP_LISTS }            from '../providers';


@Component({
    selector   : 'media-item-form',
    templateUrl: 'app/media-item-form/media-item-form.component.html',
    styleUrls  : ['app/media-item-form/media-item-form.component.css'],
})
export class MediaItemFormComponent {
    form;

    constructor(
        private formBuilder: FormBuilder,
        private mediaItemService: MediaItemsService,
        @Inject(LOOKUP_LISTS) public lookupLists,
        private router: Router,
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            medium  : new this.formBuilder.control('Movies'),
            name    : new this.formBuilder.control('', Validators.compose([
                        Validators.required,
                        Validators.pattern('[\\w\\-\\s\\/]+')
                      ])
            ),
            category: new this.formBuilder.control(''),
            year    : new this.formBuilder.control('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) return null;

        const year    = parseInt(control.value);
        const minYear = 1800;
        const maxYear = 2500;

        if (year >= minYear && year <= maxYear) return null;

        return {'year': {'min': minYear, 'max': maxYear}};
    }

    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem).subscribe(() => {
            this.router.navigate(['../List', { medium: mediaItem.medium }]);
        });
    }
}