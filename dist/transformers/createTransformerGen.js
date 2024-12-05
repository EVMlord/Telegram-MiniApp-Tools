"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransformerGen = createTransformerGen;
var errors_js_1 = require("../errors/errors.js");
var TypedError_js_1 = require("../errors/TypedError.js");
/**
 * Creates transformer generator using the passed transform function as a base.
 * @param transform - transform function.
 * @param name - custom transformer name.
 */
function createTransformerGen(name, transform) {
    return function (optional) {
        var parse = (function (value) {
            if (optional && value === undefined) {
                return;
            }
            try {
                return transform(value);
            }
            catch (cause) {
                throw new TypedError_js_1.TypedError(errors_js_1.ERR_PARSE, {
                    message: "\"".concat(name, "\" transformer failed to parse the value"),
                    cause: cause,
                });
            }
        });
        return /* #__PURE__ */ Object.assign(parse, {
            isValid: function (value) {
                try {
                    parse(value);
                    return true;
                }
                catch (_a) {
                    return false;
                }
            },
        });
    };
}
