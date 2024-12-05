"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRGBShort = isRGBShort;
/**
 * Returns true in case, passed value has #RGB format.
 * @param value - value to check.
 */
function isRGBShort(value) {
    return /^#[\da-f]{3}$/i.test(value);
}
