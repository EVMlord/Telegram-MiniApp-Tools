"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwUnexpectedValue = throwUnexpectedValue;
var errors_js_1 = require("./errors.js");
var TypedError_js_1 = require("./TypedError.js");
function throwUnexpectedValue(value) {
    throw new TypedError_js_1.TypedError(errors_js_1.ERR_UNEXPECTED_TYPE, "Unexpected value received: ".concat(JSON.stringify(value)));
}
