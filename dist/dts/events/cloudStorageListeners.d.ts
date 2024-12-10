interface CloudStorageEventDetail {
    req_id: string;
    method?: string;
    params?: {};
    res?: any;
    err?: any;
}
export declare function attachCloudStorageListeners(callback: (eventName: string, detail: CloudStorageEventDetail) => void): () => void;
export {};
