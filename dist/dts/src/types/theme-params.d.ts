/**
 * Color in format #RRGGBB.
 */
export type RGB = `#${string}`;
/**
 * Color in format #RGB.
 */
export type RGBShort = `#${string}`;
export type ThemeParamsKey = "accentTextColor" | "bgColor" | "buttonColor" | "buttonTextColor" | "bottomBarBgColor" | "destructiveTextColor" | "headerBgColor" | "hintColor" | "linkColor" | "secondaryBgColor" | "sectionBgColor" | "sectionHeaderTextColor" | "sectionSeparatorColor" | "subtitleTextColor" | "textColor";
/**
 * Application [theme parameters](https://docs.telegram-mini-apps.com/platform/theming).
 * Defines palette used by the Telegram application.
 */
export interface ParsedThemeParams {
    [key: ThemeParamsKey | string]: RGB | undefined;
}
