import { ThemeParams, WebApp } from "./index.js";
/**
 * Convert snake_case string to camelCase at the type level.
 */
type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<SnakeToCamelCase<U>>}` : S;
/**
 * Mapped type to convert ThemeParams keys to camelCase.
 */
export type CamelCaseThemeParams = {
    [K in keyof ThemeParams as SnakeToCamelCase<K & string>]: ThemeParams[K];
};
/**
 * Extended WebApp interface with camelCase themeParams.
 */
export interface WebAppCamelCase extends Omit<WebApp, "themeParams"> {
    /**
     * An object containing the current theme settings used in the Telegram app.
     * Transformed to use camelCase keys.
     */
    themeParams: CamelCaseThemeParams;
}
export {};
