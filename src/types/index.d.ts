export interface IMedium {
    name: string;
    cover: string;
    languages: string[];
    id: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
export declare enum IStatus {
    ERROR = "error",
    READY = "ready",
    TRANSCRIBING = "transcribing"
}
