import { FileSortFields } from './model';
export declare const LocalstorageKeys: {
    sort: string;
    field: string;
};
export declare function getSortOrderFromLocalstorage(): number;
export declare function getSortFieldFromLocalstorage(): FileSortFields | undefined;
export declare function writeSortToLocalstorage(order: number | undefined, field: string | undefined): void;
