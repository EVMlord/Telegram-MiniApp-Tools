"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStorageValue = setStorageValue;
exports.getStorageValue = getStorageValue;
/**
 * Converts a passed storage key to the formatted state.
 * @param key - storage key.
 */
function formatKey(key) {
    return "tapps/".concat(key);
}
/**
 * Saves value in the storage.
 * @param key - storage key.
 * @param value - storage value.
 */
function setStorageValue(key, value) {
    sessionStorage.setItem(formatKey(key), JSON.stringify(value));
}
/**
 * Extracts value from the storage.
 * @param key - storage key.
 */
function getStorageValue(key) {
    var value = sessionStorage.getItem(formatKey(key));
    try {
        return value ? JSON.parse(value) : undefined;
    }
    catch (_a) { }
}
