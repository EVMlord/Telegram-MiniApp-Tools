/**
 * Converts a passed storage key to the formatted state.
 * @param key - storage key.
 */
function formatKey(key) {
    return `tapps/${key}`;
}
/**
 * Saves value in the storage.
 * @param key - storage key.
 * @param value - storage value.
 */
export function setStorageValue(key, value) {
    sessionStorage.setItem(formatKey(key), JSON.stringify(value));
}
/**
 * Extracts value from the storage.
 * @param key - storage key.
 */
export function getStorageValue(key) {
    const value = sessionStorage.getItem(formatKey(key));
    try {
        return value ? JSON.parse(value) : undefined;
    }
    catch { }
}
