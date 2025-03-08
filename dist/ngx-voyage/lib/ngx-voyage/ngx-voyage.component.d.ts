import { Message } from '../model/message';
import { File, FilePreviewOutput } from '../model/model';
import * as i0 from "@angular/core";
export declare class NgxVoyageComponent {
    path: import("@angular/core").InputSignal<string>;
    files: import("@angular/core").InputSignalWithTransform<File[], File[]>;
    message: import("@angular/core").InputSignal<Message | undefined>;
    loading: import("@angular/core").InputSignal<boolean>;
    openFolder: import("@angular/core").OutputEmitterRef<string>;
    openFile: import("@angular/core").OutputEmitterRef<string>;
    previewFile: import("@angular/core").OutputEmitterRef<FilePreviewOutput>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxVoyageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxVoyageComponent, "ngx-voyage", never, { "path": { "alias": "path"; "required": true; "isSignal": true; }; "files": { "alias": "files"; "required": true; "isSignal": true; }; "message": { "alias": "message"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; }, { "openFolder": "openFolder"; "openFile": "openFile"; "previewFile": "previewFile"; }, never, never, true, never>;
}
