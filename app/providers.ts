import { OpaqueToken } from 'angular2/core';


export const LOOKUP_LISTS = new OpaqueToken('LookupLists');

export const lookupLists = {
    mediums: ['Movies', 'Series']
};