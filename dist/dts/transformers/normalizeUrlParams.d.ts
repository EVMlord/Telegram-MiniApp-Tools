/**
 * Normalizes a URL to combine query and hash parameters into a unified query string format.
 * Ensures that query parameters have precedence over hash parameters.
 * This treats both `?` and `#` as delimiters for key-value pairs and returns a valid query string.
 *
 * @param url - The input URL to normalize.
 * @returns A unified query string (e.g., "key1=value1&key2=value2").
 */
export declare function normalizeUrlParams(url: string): string;
