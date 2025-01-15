"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeParams = exports.launchParams = void 0;
exports.camelToKebab = camelToKebab;
exports.camelToSnake = camelToSnake;
exports.snakeToCamel = snakeToCamel;
exports.serializeThemeParams = serializeThemeParams;
exports.serializeLaunchParams = serializeLaunchParams;
var searchParams_js_1 = require("./searchParams.js");
var string_js_1 = require("./string.js");
var boolean_js_1 = require("./boolean.js");
var initData_js_1 = require("./initData.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
var toRecord_js_1 = require("./toRecord.js");
var rgb_js_1 = require("./rgb.js");
var parseParams_js_1 = require("../utils/parseParams.js");
/**
 * Converts value from camel case to kebab case.
 * @param value - value to convert.
 */
function camelToKebab(value) {
    return value.replace(/[A-Z]/g, function (match) { return "-".concat(match.toLowerCase()); });
}
/**
 * Converts value from camel case to snake case.
 * @param value - value to convert.
 */
function camelToSnake(value) {
    return value.replace(/[A-Z]/g, function (match) { return "_".concat(match.toLowerCase()); });
}
/**
 * Converts value from snake case to camel case.
 * @param value - value to convert.
 * @returns The string converted to camelCase.
 */
function snakeToCamel(value) {
    // return value.replace(/_[a-z]/g, (m) => m[1].toUpperCase());
    return value.replace(/_([a-z])/g, function (_, letter) {
        return letter.toUpperCase();
    });
}
/**
 * Serializes theme parameters to representation sent from the Telegram application.
 */
// #__NO_SIDE_EFFECTS__
function serializeThemeParams(themeParams) {
    return JSON.stringify(Object.fromEntries(Object.entries(themeParams).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [
            camelToSnake(key),
            value,
        ];
    })));
}
/**
 * Serializes launch parameters to representation sent from the Telegram application.
 */
// #__NO_SIDE_EFFECTS__
function serializeLaunchParams(lp) {
    var initDataRaw = lp.initDataRaw, startParam = lp.startParam, showSettings = lp.showSettings, botInline = lp.botInline;
    var params = new URLSearchParams();
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
var launchParams = function (optional) {
    var string = (0, string_js_1.string)();
    var stringOptional = (0, string_js_1.string)(true);
    var boolOptional = (0, boolean_js_1.boolean)(true);
    return (0, searchParams_js_1.searchParams)({
        botInline: ["tgWebAppBotInline", boolOptional],
        initData: ["tgWebAppData", (0, initData_js_1.initData)(true)],
        initDataRaw: ["tgWebAppData", stringOptional],
        platform: ["tgWebAppPlatform", string],
        showSettings: ["tgWebAppShowSettings", boolOptional],
        startParam: ["tgWebAppStartParam", stringOptional],
        themeParams: ["tgWebAppThemeParams", (0, exports.themeParams)()],
        version: ["tgWebAppVersion", string],
    }, "launchParams")(optional);
};
exports.launchParams = launchParams;
exports.themeParams = (0, createTransformerGen_js_1.createTransformerGen)("themeParams", function (value) {
    var rgbOptional = (0, rgb_js_1.rgb)(true);
    var themeParamsValue = Object.entries((0, toRecord_js_1.toRecord)(value)).reduce(function (acc, _a) {
        var key = _a[0], val = _a[1];
        acc[key] = rgbOptional(val); // Ensure val is a string
        return acc;
    }, {});
    return (0, parseParams_js_1.transformThemeParams)(themeParamsValue);
});
