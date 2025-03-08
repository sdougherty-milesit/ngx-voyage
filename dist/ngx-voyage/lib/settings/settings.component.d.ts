import * as i0 from "@angular/core";
export declare class SettingsComponent {
    store: {
        showHiddenFiles: import("@angular/core").Signal<boolean>;
        toggleHiddenFiles: () => void;
    } & import("@ngrx/signals").StateSource<{
        showHiddenFiles: boolean;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingsComponent, "ngx-voyage-settings", never, {}, {}, never, never, true, never>;
}
