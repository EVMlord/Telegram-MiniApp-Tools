import type { LaunchParams } from "../types/index.js";
/**
 * @returns Launch parameters based on the first navigation entry.
 * @throws Error if function was unable to extract launch parameters from the navigation entry.
 */
export declare function retrieveFromPerformance(): LaunchParams;
