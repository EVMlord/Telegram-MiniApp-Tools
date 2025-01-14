import type { CloudStorageGetItemCallback, CloudStorageGetItemsCallback, CloudStorageGetKeysCallback, CloudStorageItems, CloudStorageRemoveItemCallback, CloudStorageRemoveItemsCallback, CloudStorageSetItemCallback } from "../types/index.js";
export declare class CloudStorageUtility {
    private CloudStorageAPI;
    constructor();
    /**
     * Promise-based version of `getKeys`.
     */
    private getKeysPromise;
    /**
     * Removes multiple keys and values from the cloud storage.
     * @param keys An array of keys to remove.
     */
    private removeItemsPromise;
    /**
     * Stores a value in the cloud storage with the specified key.
     * @param key The key to store the value under (1-128 characters, A-Z, a-z, 0-9, _, -).
     * @param value The value to store (0-4096 characters).
     * @param callback Optional callback.
     */
    setItem(key: string, value: string, callback?: CloudStorageSetItemCallback): Promise<boolean> | void;
    /**
     * Retrieves a value from the cloud storage by key.
     * @param key The key of the value to retrieve.
     * @param callback Optional callback.
     */
    getItem(key: string, callback?: CloudStorageGetItemCallback): Promise<string> | void;
    /**
     * Retrieves multiple values from the cloud storage by their keys.
     * @param keys An array of keys to retrieve values for.
     * @param callback Optional callback.
     */
    getItems(keys: string[], callback?: CloudStorageGetItemsCallback): Promise<CloudStorageItems> | void;
    /**
     * Removes a value from the cloud storage by key.
     * @param key The key of the value to remove.
     * @param callback Optional callback.
     */
    removeItem(key: string, callback?: CloudStorageRemoveItemCallback): Promise<boolean> | void;
    /**
     * Removes multiple values from the cloud storage by their keys.
     * @param keys An array of keys to remove.
     * @param callback Optional callback.
     */
    removeItems(keys: string[], callback?: CloudStorageRemoveItemsCallback): Promise<boolean> | void;
    /**
     * Retrieves all keys stored in the cloud storage.
     * @param callback Optional callback.
     */
    getKeys(callback?: CloudStorageGetKeysCallback): Promise<string[]> | void;
    /**
     * Clears all keys and values in the cloud storage.
     * @returns A promise that resolves when all items are cleared.
     */
    clearAll(): Promise<boolean>;
    /**
     * Checks if a specific key exists in the cloud storage.
     * @param key The key to check.
     */
    hasKey(key: string): Promise<boolean>;
}
