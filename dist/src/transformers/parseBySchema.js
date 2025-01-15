"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBySchema = parseBySchema;
var errors_js_1 = require("../errors/errors.js");
var TypedError_js_1 = require("../errors/TypedError.js");
/**
 * Parses external value by specified schema. Functions iterates over each schema field
 * and uses getField function to get its value from the external source.
 * @param schema - object schema.
 * @param getField - function which gets external value by its field name.
 */
function parseBySchema(schema, getField) {
    var result = {};
    for (var field in schema) {
        var definition = schema[field];
        if (!definition) {
            continue;
        }
        var from = void 0;
        var transform = void 0;
        if (typeof definition === "function") {
            from = field;
            transform = definition;
        }
        else {
            from = definition[0], transform = definition[1];
        }
        try {
            var parsedValue = transform(getField(from));
            if (parsedValue !== undefined) {
                result[field] = parsedValue;
            }
        }
        catch (cause) {
            throw new TypedError_js_1.TypedError(errors_js_1.ERR_PARSE, "Parser for \"".concat(field, "\" property failed").concat(from === field ? "" : ". Source field: \"".concat(from, "\"")), cause);
        }
    }
    return result;
}
