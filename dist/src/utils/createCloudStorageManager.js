"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCloudStorageManager = createCloudStorageManager;
var index_js_1 = require("../index.js");
/**
 * Creates a manager for Telegram WebApp's CloudStorage API.
 *
 * Provides simplified, promise-based methods for interacting with cloud storage.
 */
function createCloudStorageManager() {
    var CloudStorageAPI = index_js_1.webApp.CloudStorage;
    if (!CloudStorageAPI) {
        console.warn("CloudStorage is not available.");
        return null;
    }
    // Convert callback-based methods to Promise-based methods
    /**
     * Stores a value in the cloud storage with the specified key.
     * @param key The key to store the value under (1-128 characters, A-Z, a-z, 0-9, _, -).
     * @param value The value to store (0-4096 characters).
     * @returns A promise that resolves when the value is successfully stored.
     * @example
     * cloudStorageManager.setItem("username", "JohnDoe")
     *   .then(() => console.log("Stored successfully"))
     *   .catch(console.error);
     */
    function setItem(key, value, callback) {
        if (callback) {
            CloudStorageAPI.setItem(key, value, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.setItem(key, value, function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new Error("Unknown error occurred while setting item."));
                    }
                });
            });
        }
    }
    /**
     * Retrieves a value from the cloud storage by key.
     * @param key The key of the value to retrieve.
     * @returns A promise that resolves with the retrieved value or null if not found.
     * @example
     * cloudStorageManager.getItem("username")
     *   .then(value => console.log("Retrieved value:", value))
     *   .catch(console.error);
     */
    function getItem(key, callback) {
        if (callback) {
            // If a callback is provided, use the original callback-based approach.
            CloudStorageAPI.getItem(key, callback);
        }
        else {
            // Return a promise.
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.getItem(key, function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new Error("".concat(key, " not found.")));
                    }
                });
            });
        }
    }
    /**
     * Retrieves multiple values from the cloud storage by their keys.
     * @param keys An array of keys to retrieve values for.
     * @returns A promise that resolves with a record of key-value pairs or null if not found.
     * @example
     * cloudStorageManager.getItems(["username", "email"])
     *   .then(values => console.log("Retrieved values:", values))
     *   .catch(console.error);
     */
    function getItems(keys, callback) {
        if (callback) {
            CloudStorageAPI.getItems(keys, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.getItems(keys, function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        resolve({});
                    }
                });
            });
        }
    }
    /**
     * Removes a value from the cloud storage by key.
     * @param key The key of the value to remove.
     * @returns A promise that resolves when the value is successfully removed.
     * @example
     * cloudStorageManager.removeItem("username")
     *   .then(() => console.log("Removed successfully"))
     *   .catch(console.error);
     */
    function removeItem(key, callback) {
        if (callback) {
            CloudStorageAPI.removeItem(key, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.removeItem(key, function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new Error("Unknown error occurred while removing item."));
                    }
                });
            });
        }
    }
    /**
     * Removes multiple values from the cloud storage by their keys.
     * @param keys An array of keys to remove.
     * @returns A promise that resolves when the values are successfully removed.
     * @example
     * cloudStorageManager.removeItems(["username", "email"])
     *   .then(() => console.log("Removed successfully"))
     *   .catch(console.error);
     */
    function removeItems(keys, callback) {
        if (callback) {
            CloudStorageAPI.removeItems(keys, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.removeItems(keys, function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new Error("Unknown error occurred while removing items."));
                    }
                });
            });
        }
    }
    /**
     * Retrieves all keys stored in the cloud storage.
     * @returns A promise that resolves with an array of keys or null if none exist.
     * @example
     * cloudStorageManager.getKeys()
     *   .then(keys => console.log("Keys in storage:", keys))
     *   .catch(console.error);
     */
    function getKeys(callback) {
        if (callback) {
            CloudStorageAPI.getKeys(callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                CloudStorageAPI.getKeys(function (error, result) {
                    if (error) {
                        reject(new Error(error));
                    }
                    else if (result) {
                        resolve(result);
                    }
                    else {
                        resolve([]);
                    }
                });
            });
        }
    }
    return {
        setItem: setItem,
        getItem: getItem,
        getItems: getItems,
        removeItem: removeItem,
        removeItems: removeItems,
        getKeys: getKeys,
    };
}
