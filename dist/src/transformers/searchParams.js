"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParams = searchParams;
var createTransformerGen_js_1 = require("./createTransformerGen.js");
var parseBySchema_js_1 = require("./parseBySchema.js");
var throwUnexpectedValue_js_1 = require("../errors/throwUnexpectedValue.js");
function searchParams(schema, name) {
    return (0, createTransformerGen_js_1.createTransformerGen)(name || "searchParams", function (v) {
        if (typeof v !== "string" && !(v instanceof URLSearchParams)) {
            (0, throwUnexpectedValue_js_1.throwUnexpectedValue)(v);
        }
        var params = typeof v === "string" ? new URLSearchParams(v) : v;
        return (0, parseBySchema_js_1.parseBySchema)(schema, function (field) {
            var paramValue = params.get(field);
            return paramValue === null ? undefined : paramValue;
        });
    });
}
