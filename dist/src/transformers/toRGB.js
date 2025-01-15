"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRGB = toRGB;
var isRGB_js_1 = require("../validators/isRGB.js");
var isRGBShort_js_1 = require("../validators/isRGBShort.js");
/**
 * Converts passed value to #RRGGBB format. Accepts following color formats:
 * - `#RGB`
 * - `#RRGGBB`
 * - `rgb(1,2,3)`
 * - `rgba(1,2,3,4)`
 * @param value - value to convert.
 * @throws {Error} Passed value does not satisfy any of known RGB formats.
 */
function toRGB(value) {
    // Remove all spaces.
    var clean = value.replace(/\s/g, "").toLowerCase();
    // Value already has required format.
    if ((0, isRGB_js_1.isRGB)(clean)) {
        return clean;
    }
    // Convert from #RGB.
    if ((0, isRGBShort_js_1.isRGBShort)(clean)) {
        var color = "#";
        for (var i = 0; i < 3; i += 1) {
            color += clean[1 + i].repeat(2);
        }
        return color;
    }
    // Example valid values: rgb(0,3,10) rgba(32,114,8,0)
    var match = clean.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) ||
        clean.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
    // In case, this didn't work as well, we can't extract RGB color from passed
    // text.
    if (!match) {
        throw new Error("Value \"".concat(value, "\" does not satisfy any of known RGB formats."));
    }
    // Otherwise, take R, G and B components, convert to hex and create #RRGGBB
    // string.
    return match.slice(1).reduce(function (acc, component) {
        var formatted = parseInt(component, 10).toString(16);
        return acc + (formatted.length === 1 ? "0" : "") + formatted;
    }, "#");
}
