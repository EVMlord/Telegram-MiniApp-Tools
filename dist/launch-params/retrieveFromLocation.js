"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveFromLocation = retrieveFromLocation;
var retrieveFromUrl_js_1 = require("./retrieveFromUrl.js");
/**
 * @returns Launch parameters from the current window location hash.
 * @throws Error if function was unable to extract launch parameters from the window location hash.
 */
function retrieveFromLocation() {
    // console.log("Attempting to retrieve params from location...");
    return (0, retrieveFromUrl_js_1.retrieveFromUrl)(window.location.href);
}
