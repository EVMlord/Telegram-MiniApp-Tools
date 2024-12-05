"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.object = object;
var createTransformerGen_js_1 = require("./createTransformerGen.js");
var parseBySchema_js_1 = require("./parseBySchema.js");
var toRecord_js_1 = require("./toRecord.js");
function object(schema, name) {
    return (0, createTransformerGen_js_1.createTransformerGen)(name || "object", function (v) {
        var record = (0, toRecord_js_1.toRecord)(v);
        return (0, parseBySchema_js_1.parseBySchema)(schema, function (f) { return record[f]; });
    });
}
