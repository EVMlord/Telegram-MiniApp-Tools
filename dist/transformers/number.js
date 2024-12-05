"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
exports.number = (0, createTransformerGen_js_1.createTransformerGen)("number", function (v) {
    if (typeof v === "number") {
        return v;
    }
    if (typeof v === "string") {
        var num = Number(v);
        if (!Number.isNaN(num)) {
            return num;
        }
    }
    (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
});
