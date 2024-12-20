import { LaunchParams } from "../types/index.js";
/**
 * @param urlString - URL to extract launch parameters from.
 * @returns Launch parameters from the specified URL.
 * @throws Error if function was unable to extract launch parameters from the passed URL.
 */
export declare function retrieveFromUrl(urlString: string): LaunchParams;
