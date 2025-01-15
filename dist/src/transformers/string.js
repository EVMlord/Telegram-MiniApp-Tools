"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
exports.string = (0, createTransformerGen_js_1.createTransformerGen)("string", function (v) {
    if (typeof v === "string" || typeof v === "number") {
        return v.toString();
    }
    (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
});
