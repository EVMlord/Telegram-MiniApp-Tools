"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
var createTransformerGen_js_1 = require("./createTransformerGen.js");
var number_js_1 = require("./number.js");
exports.date = (0, createTransformerGen_js_1.createTransformerGen)("date", function (v) {
    return v instanceof Date ? v : new Date((0, number_js_1.number)()(v) * 1000);
});
