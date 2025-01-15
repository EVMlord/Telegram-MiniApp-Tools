"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRecord = toRecord;
var errors_js_1 = require("../errors/errors.js");
var TypedError_js_1 = require("../errors/TypedError.js");
/**
 * Converts value to a record.
 * @param value - value to convert.
 * @throws {TypedError} ERR_INVALID_VALUE
 * @throws {TypedError} ERR_UNEXPECTED_VALUE
 */
function toRecord(value) {
    var formattedValue = value;
    // Convert value to JSON in case, it is string. We expect value to be JSON string.
    if (typeof formattedValue === "string") {
        try {
            formattedValue = JSON.parse(formattedValue);
        }
        catch (cause) {
            throw new TypedError_js_1.TypedError(errors_js_1.ERR_INVALID_VALUE, { cause: cause });
        }
    }
    // We expect json to be a usual object.
    if (typeof formattedValue !== "object" ||
        !formattedValue ||
        Array.isArray(formattedValue)) {
        throw new TypedError_js_1.TypedError(errors_js_1.ERR_UNEXPECTED_VALUE);
    }
    return formattedValue;
}
