import { ThemeParams } from "../types/index.js";
import type { CamelCaseThemeParams } from "../types/misc.js";
/**
 * Transforms an object with snake_case keys to camelCase keys.
 * @param obj - The object to transform.
 * @returns A new object with camelCase keys.
 */
export declare function transformThemeParams(obj: ThemeParams): CamelCaseThemeParams;
