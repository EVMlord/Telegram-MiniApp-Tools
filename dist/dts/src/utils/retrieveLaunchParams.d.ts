import type { LaunchParams } from "../types/index.js";
/**
 * @returns Launch parameters from any known source.
 * @throws {TypedError} ERR_RETRIEVE_LP_FAILED
 */
export declare function retrieveLaunchParams(): LaunchParams;
