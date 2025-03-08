import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ImgComponent implements AfterViewInit, OnDestroy {
    data: import("@angular/core").InputSignal<Blob>;
    iframe: import("@angular/core").Signal<ElementRef<HTMLIFrameElement> | undefined>;
    objectUrl: string | undefined;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImgComponent, "ngx-voyage-img", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
