import { PipeTransform } from '@angular/core';
import { Messages } from '../i18n/en';
import * as i0 from "@angular/core";
export declare class TranslatePipe implements PipeTransform {
    transform(value: keyof Messages): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslatePipe, "translate", true>;
}
