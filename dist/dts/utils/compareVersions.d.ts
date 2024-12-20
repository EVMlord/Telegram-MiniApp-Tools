import type { Version } from "../types/index.js";
/**
 * @param a - first version.
 * @param b - second version.
 * @returns
 * - `1` if the version "a" is greater than "b".
 * - `0` the version "a" is equal to "b".
 * - `-1` the version "a" is lower than "b".
 */
export declare function compareVersions(a: Version, b: Version): number;
/**
 * Returns true if "a" version is less than or equal to "b" version.
 * @param a
 * @param b
 */
export declare function versionLessOrEqual(a: Version, b: Version): boolean;
