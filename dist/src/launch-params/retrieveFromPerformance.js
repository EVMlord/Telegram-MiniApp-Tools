"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveFromPerformance = retrieveFromPerformance;
var retrieveFromUrl_js_1 = require("./retrieveFromUrl.js");
/**
 * @returns Launch parameters based on the first navigation entry.
 * @throws Error if function was unable to extract launch parameters from the navigation entry.
 */
function retrieveFromPerformance() {
    // console.log("Attempting to retrieve params from navigation performance...");
    var navigationEntry = performance.getEntriesByType("navigation")[0];
    if (!navigationEntry) {
        throw new Error("Unable to get first navigation entry.");
    }
    return (0, retrieveFromUrl_js_1.retrieveFromUrl)(navigationEntry.name);
}
