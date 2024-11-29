import { searchParams } from "./searchParams.js";
import { string as createString } from "./string.js";
import { boolean as createBoolean } from "./boolean.js";
import { initData } from "./initData.js";
import { createTransformerGen } from "./createTransformerGen.js";
import { toRecord } from "./toRecord.js";
import { rgb } from "./rgb.js";
import { transformThemeParams } from "../utils/parseParams.js";
/**
 * Converts value from camel case to kebab case.
 * @param value - value to convert.
 */
export function camelToKebab(value) {
    return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
/**
 * Converts value from camel case to snake case.
 * @param value - value to convert.
 */
export function camelToSnake(value) {
    return value.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}
/**
 * Converts value from snake case to camel case.
 * @param value - value to convert.
 * @returns The string converted to camelCase.
 */
export function snakeToCamel(value) {
    // return value.replace(/_[a-z]/g, (m) => m[1].toUpperCase());
    return value.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
/**
 * Serializes theme parameters to representation sent from the Telegram application.
 */
// #__NO_SIDE_EFFECTS__
export function serializeThemeParams(themeParams) {
    return JSON.stringify(Object.fromEntries(Object.entries(themeParams).map(([key, value]) => [
        camelToSnake(key),
        value,
    ])));
}
/**
 * Serializes launch parameters to representation sent from the Telegram application.
 */
// #__NO_SIDE_EFFECTS__
export function serializeLaunchParams(lp) {
    const { initDataRaw, startParam, showSettings, botInline } = lp;
    const params = new URLSearchParams();
    // console.log({ initDataRaw });
    params.set("tgWebAppPlatform", lp.platform);
    params.set("tgWebAppThemeParams", serializeThemeParams(lp.themeParams));
    params.set("tgWebAppVersion", lp.version);
    initDataRaw && params.set("tgWebAppData", initDataRaw);
    startParam && params.set("tgWebAppStartParam", startParam);
    typeof showSettings === "boolean" &&
        params.set("tgWebAppShowSettings", showSettings ? "1" : "0");
    typeof botInline === "boolean" &&
        params.set("tgWebAppBotInline", botInline ? "1" : "0");
    // params.set(
    //   "tgWebAppSignature",
    //   initData ? initData.signature : "defaultsignature"
    // );
    // console.log({ params: params.toString() });
    return params.toString();
}
export const launchParams = (optional) => {
    const string = createString();
    const stringOptional = createString(true);
    const boolOptional = createBoolean(true);
    return searchParams({
        botInline: ["tgWebAppBotInline", boolOptional],
        initData: ["tgWebAppData", initData(true)],
        initDataRaw: ["tgWebAppData", stringOptional],
        platform: ["tgWebAppPlatform", string],
        showSettings: ["tgWebAppShowSettings", boolOptional],
        startParam: ["tgWebAppStartParam", stringOptional],
        themeParams: ["tgWebAppThemeParams", themeParams()],
        version: ["tgWebAppVersion", string],
    }, "launchParams")(optional);
};
export const themeParams = createTransformerGen("themeParams", (value) => {
    const rgbOptional = rgb(true);
    const themeParamsValue = Object.entries(toRecord(value)).reduce((acc, [key, val]) => {
        acc[key] = rgbOptional(val); // Ensure val is a string
        return acc;
    }, {});
    return transformThemeParams(themeParamsValue);
});
