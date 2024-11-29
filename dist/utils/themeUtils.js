import { snakeToCamel } from "../transformers/serializeParams.js";
/**
 * Transforms an object with snake_case keys to camelCase keys.
 * @param obj - The object to transform.
 * @returns A new object with camelCase keys.
 */
export function transformThemeParams(obj) {
    const result = {};
    for (const key in obj) {
        const camelKey = snakeToCamel(key);
        result[camelKey] = obj[key];
    }
    return result;
}
