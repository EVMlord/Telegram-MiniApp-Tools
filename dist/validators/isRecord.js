/**
 * States that passed value is Record and not Array.
 * @param value - value to check.
 */
export function isRecord(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}
