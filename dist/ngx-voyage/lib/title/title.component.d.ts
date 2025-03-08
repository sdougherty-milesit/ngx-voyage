import * as i0 from "@angular/core";
export declare class TitleComponent {
    path: import("@angular/core").InputSignal<string>;
    pathWithRoot: import("@angular/core").Signal<{
        name: string;
        path: string;
    }[]>;
    navigate: import("@angular/core").OutputEmitterRef<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "ngx-voyage-title", never, { "path": { "alias": "path"; "required": true; "isSignal": true; }; }, { "navigate": "navigate"; }, never, never, true, never>;
}
