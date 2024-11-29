import type { CloudStorageGetItemCallback, CloudStorageGetItemsCallback, CloudStorageGetKeysCallback, CloudStorageRemoveItemCallback, CloudStorageRemoveItemsCallback, CloudStorageSetItemCallback } from "../types/index.js";
/**
 * Creates a manager for Telegram WebApp's CloudStorage API.
 *
 * Provides simplified, promise-based methods for interacting with cloud storage.
 */
export declare function createCloudStorageManager(): {
    setItem: (key: string, value: string, callback?: CloudStorageSetItemCallback) => Promise<true> | void;
    getItem: (key: string, callback?: CloudStorageGetItemCallback) => Promise<string> | void;
    getItems: (keys: string[], callback?: CloudStorageGetItemsCallback) => Promise<Record<string, string>> | void;
    removeItem: (key: string, callback?: CloudStorageRemoveItemCallback) => Promise<true> | void;
    removeItems: (keys: string[], callback?: CloudStorageRemoveItemsCallback) => Promise<true> | void;
    getKeys: (callback?: CloudStorageGetKeysCallback) => Promise<string[]> | void;
} | null;
