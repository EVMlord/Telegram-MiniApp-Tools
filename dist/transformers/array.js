"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = array;
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
var createTransformerGen_js_1 = require("./createTransformerGen.js");
function array(of, name) {
    return (0, createTransformerGen_js_1.createTransformerGen)(name || "array", function (v) {
        var a;
        if (Array.isArray(v)) {
            a = v;
        }
        else if (typeof v === "string") {
            try {
                var json = JSON.parse(v);
                if (Array.isArray(json)) {
                    a = json;
                }
            }
            catch (_a) { }
        }
        if (!a) {
            (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
        }
        return a.map(of);
    });
}
