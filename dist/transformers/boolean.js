"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolean = void 0;
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
exports.boolean = (0, createTransformerGen_js_1.createTransformerGen)("boolean", function (v) {
    if (typeof v === "boolean") {
        return v;
    }
    var str = String(v);
    if (str === "1" || str === "true") {
        return true;
    }
    if (str === "0" || str === "false") {
        return false;
    }
    (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
});
