import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextComponent implements AfterViewInit {
    data: import("@angular/core").InputSignal<Blob>;
    text: import("@angular/core").WritableSignal<string>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "ngx-voyage-text", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
