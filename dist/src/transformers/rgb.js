"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = void 0;
var createTransformerGen_js_1 = require("./createTransformerGen.js");
var string_js_1 = require("./string.js");
var toRGB_js_1 = require("./toRGB.js");
exports.rgb = (0, createTransformerGen_js_1.createTransformerGen)("rgb", function (v) {
    return (0, toRGB_js_1.toRGB)((0, string_js_1.string)()(v));
});
