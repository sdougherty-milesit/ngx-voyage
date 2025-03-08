import { File } from './model';
export declare function getFileIcon(file: File): string;
export declare const ImageExtensions: string[];
export declare const TextExtensions: string[];
export declare const PreviewExtensions: string[];
export declare function canPreviewFile(file: File): boolean;
export declare const fileTypes: Record<string, {
    icon: string;
    description: string;
}>;
