/**
 * Returns true in case, passed value has #RRGGBB format.
 * @param value - value to check.
 */
export function isRGB(value) {
    return /^#[\da-f]{6}$/i.test(value);
}
