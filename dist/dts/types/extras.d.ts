import type { BackButtonClickedCallback, CloudStorageGetItemCallback, CloudStorageGetItemsCallback, CloudStorageGetKeysCallback, CloudStorageRemoveItemCallback, CloudStorageRemoveItemsCallback, CloudStorageSetItemCallback, FullscreenError } from "./index.js";
/**
 * The custom `BackButton` manager interface.
 */
export interface BackButtonManager {
    /**
     * Shows the BackButton.
     */
    show: () => void;
    /**
     * Hides the BackButton.
     */
    hide: () => void;
    /**
     * Toggles the visibility of the BackButton.
     */
    toggle: () => void;
    /**
     * Registers a callback for the BackButton click event.
     * @param callback - The function to call when the BackButton is clicked.
     */
    onClick: (callback: BackButtonClickedCallback) => void;
    /**
     * Unregisters a callback from the BackButton click event.
     * @param callback - The callback function to remove.
     */
    offClick: (callback: BackButtonClickedCallback) => void;
    /**
     * Gets the current visibility state of the BackButton.
     * @returns True if the BackButton is visible, false otherwise.
     */
    getVisibility: () => boolean;
    /**
     * Removes all registered click event listeners.
     */
    removeAllListeners: () => void;
}
/**
 * Interface for managing cloud storage operations, providing methods to store,
 * retrieve, remove, and list items in the cloud storage. These methods support
 * both callback-based and Promise-based patterns.
 */
export interface CloudStorageManager {
    /**
     * Stores a value in the cloud storage with the specified key.
     *
     * @param key - The key to store the value under (1-128 characters, A-Z, a-z, 0-9, _, -).
     * @param value - The value to store (0-4096 characters).
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to `true` when the value is successfully stored, or `void` if a callback is provided.
     */
    setItem: (key: string, value: string, callback?: CloudStorageSetItemCallback) => Promise<true> | void;
    /**
     * Retrieves a value from the cloud storage by key.
     *
     * @param key - The key of the value to retrieve.
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to the retrieved value as a string, or `void` if a callback is provided.
     */
    getItem: (key: string, callback?: CloudStorageGetItemCallback) => Promise<string> | void;
    /**
     * Retrieves multiple values from the cloud storage by their keys.
     *
     * @param keys - An array of keys to retrieve values for.
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to an object containing key-value pairs, or `void` if a callback is provided.
     */
    getItems: (keys: string[], callback?: CloudStorageGetItemsCallback) => Promise<Record<string, string>> | void;
    /**
     * Removes a value from the cloud storage by key.
     *
     * @param key - The key of the value to remove.
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to `true` when the value is successfully removed, or `void` if a callback is provided.
     */
    removeItem: (key: string, callback?: CloudStorageRemoveItemCallback) => Promise<true> | void;
    /**
     * Removes multiple values from the cloud storage by their keys.
     *
     * @param keys - An array of keys to remove.
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to `true` when the values are successfully removed, or `void` if a callback is provided.
     */
    removeItems: (keys: string[], callback?: CloudStorageRemoveItemsCallback) => Promise<true> | void;
    /**
     * Retrieves all keys stored in the cloud storage.
     *
     * @param callback - Optional callback to handle the result of the operation.
     * @returns A promise that resolves to an array of strings representing the keys in the cloud storage, or `void` if a callback is provided.
     */
    getKeys: (callback?: CloudStorageGetKeysCallback) => Promise<string[]> | void;
}
/**
 * Manages the fullscreen state and provides methods to control it.
 */
export interface FullscreenManager {
    /**
     * Retrieves the current fullscreen state.
     * @returns {boolean} `true` if the app is in fullscreen mode, `false` otherwise.
     */
    getIsFullscreen: () => boolean;
    /**
     * Retrieves the current error state.
     * @returns {FullscreenError | null} The current error message, or `null` if there's no error.
     */
    getError: () => FullscreenError | null;
    /**
     * Requests the app to enter fullscreen mode.
     * If the request fails, the error can be retrieved using `getError`.
     */
    requestFullscreen: () => void;
    /**
     * Requests the app to exit fullscreen mode.
     * If the request fails, the error can be retrieved using `getError`.
     */
    exitFullscreen: () => void;
    /**
     * Registers a callback function to be called when the fullscreen state changes.
     * @param callback - A function that receives the new fullscreen state (`true` or `false`).
     */
    onFullscreenChange: (callback: (isFullscreen: boolean) => void) => void;
    /**
     * Unregisters a previously registered fullscreen change callback function.
     * @param callback - The callback function to remove.
     */
    offFullscreenChange: (callback: (isFullscreen: boolean) => void) => void;
    /**
     * Registers a callback function to be called when a fullscreen error occurs.
     * @param callback - A function that receives the error message.
     */
    onError: (callback: (error: FullscreenError | null) => void) => void;
    /**
     * Unregisters a previously registered error callback function.
     * @param callback - The callback function to remove.
     */
    offError: (callback: (error: FullscreenError | null) => void) => void;
    /**
     * Cleans up event listeners and internal state.
     * Should be called when the manager is no longer needed to prevent memory leaks.
     */
    destroy: () => void;
}
