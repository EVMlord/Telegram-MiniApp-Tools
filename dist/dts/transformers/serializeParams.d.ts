import type { LaunchParams, ParsedThemeParams, ThemeParams } from "../types/index.js";
import { TransformerGen } from "./types.js";
/**
 * Converts value from camel case to kebab case.
 * @param value - value to convert.
 */
export declare function camelToKebab(value: string): string;
/**
 * Converts value from camel case to snake case.
 * @param value - value to convert.
 */
export declare function camelToSnake(value: string): string;
/**
 * Converts value from snake case to camel case.
 * @param value - value to convert.
 * @returns The string converted to camelCase.
 */
export declare function snakeToCamel(value: string): string;
/**
 * Serializes theme parameters to representation sent from the Telegram application.
 */
export declare function serializeThemeParams(themeParams: ThemeParams): string;
/**
 * Serializes launch parameters to representation sent from the Telegram application.
 */
export declare function serializeLaunchParams(lp: LaunchParams): string;
export declare const launchParams: TransformerGen<LaunchParams>;
export declare const themeParams: TransformerGen<ParsedThemeParams>;
