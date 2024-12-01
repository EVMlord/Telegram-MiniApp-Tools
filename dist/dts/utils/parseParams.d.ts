import type { InitData, LaunchParams, ParsedThemeParams, ThemeParams } from "../types/index.js";
/**
 * Transforms Telegram theme parameters (ThemeParams) into ParsedThemeParams with camelCase keys.
 * @param telegramThemeParams - The theme parameters object from Telegram.
 * @returns The transformed theme parameters object with camelCase keys.
 */
export declare function transformThemeParams(telegramThemeParams: ThemeParams): ParsedThemeParams;
/**
 * Transforms ParsedThemeParams with camelCase keys back to ThemeParams with snake_case keys.
 * @param parsedThemeParams - The theme parameters object with camelCase keys.
 * @returns The transformed theme parameters object with snake_case keys.
 */
export declare function reverseTransformThemeParams(parsedThemeParams: ParsedThemeParams): ThemeParams;
/**
 * Parses the `initData` string into an `InitData` object.
 * @param initData - The raw `initData` string from `WebApp.initData`.
 * @returns An object of type `InitData`.
 */
/**
 * Parses an incoming value as init data.
 * @param value - value to check.
 * @throws {} Parsing errors.
 */
export declare function parseInitData(value: unknown): InitData;
/**
 * Parses a string value into LaunchParams.
 * @param value - The raw string to parse.
 * @returns The parsed LaunchParams object.
 * @throws Error if the input value is invalid or cannot be parsed.
 */
/**
 * Parses value as launch parameters.
 * @param value - value to parse.
 */
export declare function parseLaunchParams(value: unknown): LaunchParams;
