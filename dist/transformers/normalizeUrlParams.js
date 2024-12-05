"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeUrlParams = normalizeUrlParams;
/**
 * Normalizes a URL to combine query and hash parameters into a unified query string format.
 * Ensures that query parameters have precedence over hash parameters.
 * This treats both `?` and `#` as delimiters for key-value pairs and returns a valid query string.
 *
 * @param url - The input URL to normalize.
 * @returns A unified query string (e.g., "key1=value1&key2=value2").
 */
function normalizeUrlParams(url) {
    // Parse the URL
    var urlObj = new URL(url, "https://example.com"); // Base URL for relative URLs
    // Extract query and hash parameters
    var queryParams = urlObj.search.replace(/^\?/, ""); // Remove leading '?'
    var hashParams = urlObj.hash.replace(/^#/, ""); // Remove leading '#'
    // Remove any plain hash values (without '=')
    hashParams = hashParams
        .split(/[?#&]/)
        .filter(function (fragment) { return fragment.includes("="); })
        .join("&");
    // Combine parameters, putting hash parameters first
    var combinedParams = "".concat(hashParams, "&").concat(queryParams).replace(/^[&]+|[&]+$/g, "");
    // Replace any remaining '?' and '#' with '&' in case they appear in the hash
    return combinedParams.replace(/[?#]/g, "&");
    // return (
    //   url
    //     // Remove everything before the first `?` or `#`
    //     .replace(/^[^?#]*[?#]/, "")
    //     // Replace all `?` and `#` with `&`, to make it look like some search params.
    //     .replace(/[?#]/g, "&")
    // );
}
