"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformThemeParams = transformThemeParams;
var serializeParams_js_1 = require("../transformers/serializeParams.js");
/**
 * Transforms an object with snake_case keys to camelCase keys.
 * @param obj - The object to transform.
 * @returns A new object with camelCase keys.
 */
function transformThemeParams(obj) {
    var result = {};
    for (var key in obj) {
        var camelKey = (0, serializeParams_js_1.snakeToCamel)(key);
        result[camelKey] = obj[key];
    }
    return result;
}
