import { retrieveFromUrl } from "./retrieveFromUrl.js";
/**
 * @returns Launch parameters from the current window location hash.
 * @throws Error if function was unable to extract launch parameters from the window location hash.
 */
export function retrieveFromLocation() {
    // console.log("Attempting to retrieve params from location...");
    return retrieveFromUrl(window.location.href);
}
