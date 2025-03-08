import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PdfComponent implements AfterViewInit, OnDestroy {
    data: import("@angular/core").InputSignal<Blob>;
    iframe: import("@angular/core").Signal<ElementRef<HTMLIFrameElement> | undefined>;
    objectUrl?: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfComponent, "ngx-voyage-pdf", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
