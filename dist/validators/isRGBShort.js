/**
 * Returns true in case, passed value has #RGB format.
 * @param value - value to check.
 */
export function isRGBShort(value) {
    return /^#[\da-f]{3}$/i.test(value);
}
