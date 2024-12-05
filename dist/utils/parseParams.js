"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformThemeParams = transformThemeParams;
exports.reverseTransformThemeParams = reverseTransformThemeParams;
exports.parseInitData = parseInitData;
exports.parseLaunchParams = parseLaunchParams;
var initData_js_1 = require("../transformers/initData.js");
var serializeParams_js_1 = require("../transformers/serializeParams.js");
/**
 * Transforms Telegram theme parameters (ThemeParams) into ParsedThemeParams with camelCase keys.
 * @param telegramThemeParams - The theme parameters object from Telegram.
 * @returns The transformed theme parameters object with camelCase keys.
 */
function transformThemeParams(telegramThemeParams) {
    var transformedParams = {};
    Object.entries(telegramThemeParams).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var camelCaseKey = (0, serializeParams_js_1.snakeToCamel)(key);
        transformedParams[camelCaseKey] = value;
    });
    return transformedParams;
}
/**
 * Transforms ParsedThemeParams with camelCase keys back to ThemeParams with snake_case keys.
 * @param parsedThemeParams - The theme parameters object with camelCase keys.
 * @returns The transformed theme parameters object with snake_case keys.
 */
function reverseTransformThemeParams(parsedThemeParams) {
    var transformedParams = {};
    Object.entries(parsedThemeParams).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var snakeCaseKey = (0, serializeParams_js_1.camelToSnake)(key);
        transformedParams[snakeCaseKey] = value;
    });
    return transformedParams;
}
/**
 * Parses the `initData` string into an `InitData` object.
 * @param initData - The raw `initData` string from `WebApp.initData`.
 * @returns An object of type `InitData`.
 */
// export function parseInitData(initData: string | URLSearchParams): InitData {
//   const params = new URLSearchParams(initData);
//   // Parse the `user` field, which is a JSON string
//   const userJson = params.get("user");
//   if (!userJson) {
//     throw new Error("Missing user field in initData.");
//   }
//   const user = JSON.parse(decodeURIComponent(userJson));
//   // Construct the InitData object
//   const res: InitData = {
//     user: {
//       id: user.id,
//       firstName: user.first_name,
//       lastName: user.last_name || undefined,
//       username: user.username || undefined,
//       languageCode: user.language_code || undefined,
//       isPremium: user.is_premium || undefined,
//       allowsWriteToPm: user.allows_write_to_pm || undefined,
//       photoUrl: user.photo_url || undefined,
//     },
//     chatInstance: params.get("chat_instance") || "",
//     chatType: params.get("chat_type") || "",
//     authDate: new Date(parseInt(params.get("auth_date") || "0", 10) * 1000), // Convert to Date
//     signature: params.get("signature") || "signature",
//     hash: params.get("hash") || "",
//   };
//   // console.log({ res });
//   return res;
// }
/**
 * Parses an incoming value as init data.
 * @param value - value to check.
 * @throws {} Parsing errors.
 */
function parseInitData(value) {
    // console.log({ parseInitDataValue: value });
    return (0, initData_js_1.initData)()(value);
}
/**
 * Parses a string value into LaunchParams.
 * @param value - The raw string to parse.
 * @returns The parsed LaunchParams object.
 * @throws Error if the input value is invalid or cannot be parsed.
 */
// export function parseLaunchParams(value: string): LaunchParams {
//   try {
//     // Parse the JSON string into an object
//     const parsedValue = JSON.parse(value);
//     console.log({ parsedValue });
//     // Perform any necessary validation or type assertions here
//     if (typeof parsedValue !== "object" || parsedValue === null) {
//       throw new Error("Parsed value is not a valid object.");
//     }
//     // Assuming LaunchParams is well-defined, you might perform checks
//     // or transformations on specific fields here as needed.
//     return parsedValue as LaunchParams;
//   } catch (error) {
//     throw new Error(`Failed to parse LaunchParams: ${error}`);
//   }
// }
/**
 * Parses value as launch parameters.
 * @param value - value to parse.
 */
function parseLaunchParams(value) {
    return (0, serializeParams_js_1.launchParams)()(value);
}
