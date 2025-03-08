export interface Message {
    text: string;
    type: 'info' | 'warn' | 'error';
}
export declare function isMessage(m: any): m is Message;
