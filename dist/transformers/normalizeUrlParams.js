/**
 * Normalizes a URL to combine query and hash parameters into a unified query string format.
 * Ensures that query parameters have precedence over hash parameters.
 * This treats both `?` and `#` as delimiters for key-value pairs and returns a valid query string.
 *
 * @param url - The input URL to normalize.
 * @returns A unified query string (e.g., "key1=value1&key2=value2").
 */
export function normalizeUrlParams(url) {
    // Parse the URL
    const urlObj = new URL(url, "https://example.com"); // Base URL for relative URLs
    // Extract query and hash parameters
    const queryParams = urlObj.search.replace(/^\?/, ""); // Remove leading '?'
    let hashParams = urlObj.hash.replace(/^#/, ""); // Remove leading '#'
    // Remove any plain hash values (without '=')
    hashParams = hashParams
        .split(/[?#&]/)
        .filter((fragment) => fragment.includes("="))
        .join("&");
    // Combine parameters, putting hash parameters first
    const combinedParams = `${hashParams}&${queryParams}`.replace(/^[&]+|[&]+$/g, "");
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
