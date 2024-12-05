"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareVersions = compareVersions;
exports.versionLessOrEqual = versionLessOrEqual;
function parts(a) {
    return a.split(".").map(Number);
}
/**
 * @param a - first version.
 * @param b - second version.
 * @returns
 * - `1` if the version "a" is greater than "b".
 * - `0` the version "a" is equal to "b".
 * - `-1` the version "a" is lower than "b".
 */
function compareVersions(a, b) {
    var aParts = parts(a);
    var bParts = parts(b);
    var len = Math.max(aParts.length, bParts.length);
    // Iterate over each part of versions and compare them. In case, part is
    // missing, assume its value is equal to 0.
    for (var i = 0; i < len; i += 1) {
        var aVal = aParts[i] || 0;
        var bVal = bParts[i] || 0;
        if (aVal === bVal) {
            continue;
        }
        return aVal > bVal ? 1 : -1;
    }
    return 0;
}
/**
 * Returns true if "a" version is less than or equal to "b" version.
 * @param a
 * @param b
 */
function versionLessOrEqual(a, b) {
    return compareVersions(a, b) <= 0;
}
