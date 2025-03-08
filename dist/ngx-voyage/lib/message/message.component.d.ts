import { Message } from '../model/message';
import * as i0 from "@angular/core";
export declare class MessageComponent {
    message: import("@angular/core").InputSignal<Message | undefined>;
    classes: {
        error: {
            bg: string;
            text: string;
            icon: string;
        };
        warn: {
            bg: string;
            text: string;
            icon: string;
        };
        info: {
            bg: string;
            text: string;
            icon: string;
        };
    };
    type: import("@angular/core").Signal<"info" | "warn" | "error">;
    get bgColor(): string;
    get textColor(): string;
    get icon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageComponent, "ngx-voyage-message", never, { "message": { "alias": "message"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
