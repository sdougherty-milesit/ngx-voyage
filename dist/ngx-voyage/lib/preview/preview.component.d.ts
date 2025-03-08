import * as i0 from "@angular/core";
export declare class PreviewComponent {
    data: import("@angular/core").InputSignal<any>;
    name: import("@angular/core").InputSignal<string>;
    close: import("@angular/core").OutputEmitterRef<void>;
    onKeydownHandler(): void;
    isPdf(): boolean;
    isImage(): boolean;
    isText(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PreviewComponent, "ngx-voyage-preview", never, { "data": { "alias": "data"; "required": true; "isSignal": true; }; "name": { "alias": "name"; "required": true; "isSignal": true; }; }, { "close": "close"; }, never, never, true, never>;
}
