import { getStorageValue, setStorageValue } from "../storage/storage.js";
import { serializeLaunchParams } from "../transformers/serializeParams.js";
import { parseLaunchParams } from "../utils/parseParams.js";
const STORAGE_KEY = "launchParams";
/**
 * @returns Launch parameters stored in the session storage.
 * @throws Error if function was unable to extract launch parameters from the window location hash.
 */
export function retrieveFromStorage() {
    // console.log({
    //   retrieveFromStorage: parseLaunchParams(getStorageValue(STORAGE_KEY) || ""),
    // });
    return parseLaunchParams(getStorageValue(STORAGE_KEY) || "");
}
/**
 * Saves specified launch parameters in the session storage.
 * @param value - launch params to save.
 */
export function saveToStorage(value) {
    setStorageValue("launchParams", serializeLaunchParams(value));
}
