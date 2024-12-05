"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveLaunchParams = retrieveLaunchParams;
var errors_js_1 = require("../errors/errors.js");
var TypedError_js_1 = require("../errors/TypedError.js");
var index_js_1 = require("../launch-params/index.js");
function unwrapError(e) {
    if (e instanceof Error) {
        return e.message + (e.cause ? "\n  ".concat(unwrapError(e.cause)) : "");
    }
    return JSON.stringify(e);
}
/**
 * @returns Launch parameters from any known source.
 * @throws {TypedError} ERR_RETRIEVE_LP_FAILED
 */
function retrieveLaunchParams() {
    var errors = [];
    for (var _i = 0, _a = [
        // Try to retrieve launch parameters from the current location. This method can return
        // nothing in case, location was changed, and then the page was reloaded.
        index_js_1.retrieveFromLocation,
        // Then, try using the lower level API - window.performance.
        index_js_1.retrieveFromPerformance,
        // Finally, try to extract launch parameters from the session storage.
        index_js_1.retrieveFromStorage,
    ]; _i < _a.length; _i++) {
        var retrieve = _a[_i];
        try {
            var lp = retrieve();
            // console.log({ lpFromRetrieval: lp });
            (0, index_js_1.saveToStorage)(lp); // Save the retrieved parameters to session storage for future use
            return lp;
        }
        catch (e) {
            errors.push(e);
        }
    }
    throw new TypedError_js_1.TypedError(errors_js_1.ERR_RETRIEVE_LP_FAILED, __spreadArray([
        "Unable to retrieve launch parameters from any known source. Perhaps, you have opened your app outside Telegram?",
        // "📖 Refer to docs for more information:",
        // "https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/environment",
        "Collected errors:"
    ], errors.map(function (e) { return "\u2014 ".concat(unwrapError(e)); }), true).join("\n"));
}
