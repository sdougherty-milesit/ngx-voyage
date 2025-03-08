export interface File {
    isDirectory: boolean;
    isFile: boolean;
    isSymbolicLink: boolean;
    name: string;
    size: number;
    modifiedDate: Date;
    type?: string;
}
export type FileSortFields = 'name' | 'size' | 'modifiedDate' | 'type';
export declare function isFileEqual(f1: File, f2: File): boolean;
export declare function isFileSortField(field?: string | null): field is FileSortFields;
export type FilePreviewOutput = {
    path: string;
    cb: (data: any) => void;
};
export declare function getFileExtension(file: File): string | undefined;
export declare function getExtension(name: string): string | undefined;
export declare function sortFiles(files: File[], field?: FileSortFields, order?: number): File[];
export declare function addType(file: File): void;
