"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRGB = isRGB;
/**
 * Returns true in case, passed value has #RRGGBB format.
 * @param value - value to check.
 */
function isRGB(value) {
    return /^#[\da-f]{6}$/i.test(value);
}
