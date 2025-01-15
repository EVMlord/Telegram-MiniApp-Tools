"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
exports.fn = (0, createTransformerGen_js_1.createTransformerGen)("fn", function (v) {
    if (typeof v === "function") {
        return v;
    }
    (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
});
