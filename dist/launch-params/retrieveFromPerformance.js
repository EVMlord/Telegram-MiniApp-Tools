import { retrieveFromUrl } from "./retrieveFromUrl.js";
/**
 * @returns Launch parameters based on the first navigation entry.
 * @throws Error if function was unable to extract launch parameters from the navigation entry.
 */
export function retrieveFromPerformance() {
    // console.log("Attempting to retrieve params from navigation performance...");
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    if (!navigationEntry) {
        throw new Error("Unable to get first navigation entry.");
    }
    return retrieveFromUrl(navigationEntry.name);
}
