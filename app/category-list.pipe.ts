import { Pipe } from 'angular2/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe {
    transform(list) {
        return list.reduce((categories, { category }) => {
            if (!(categories).includes(category)) {
                categories.push(category);
            }

            return categories;
        }, []).join(', ');
    }
}