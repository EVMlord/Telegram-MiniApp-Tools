"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveFromUrl = retrieveFromUrl;
var index_js_1 = require("../transformers/index.js");
/**
 * @param urlString - URL to extract launch parameters from.
 * @returns Launch parameters from the specified URL.
 * @throws Error if function was unable to extract launch parameters from the passed URL.
 */
function retrieveFromUrl(urlString) {
    return (0, index_js_1.parseLaunchParams)((0, index_js_1.normalizeUrlParams)(urlString)
    // urlString
    //   // Replace everything before this first hashtag or question sign.
    //   .replace(/^[^?#]*[?#]/, "")
    //   // Replace all hashtags and question signs to make it look like some search params.
    //   .replace(/[?#]/g, "&")
    );
}
