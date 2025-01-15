"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSearchParams = toSearchParams;
/**
 * Creates search parameters from the specified JSON object.
 * @param json - JSON object.
 */
function toSearchParams(json) {
    var params = new URLSearchParams();
    Object.entries(json).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value === "object") {
            params.set(key, JSON.stringify(value));
            return;
        }
        if (typeof value === "boolean") {
            params.set(key, String(Number(value)));
            return;
        }
        params.set(key, String(value));
    });
    return params.toString();
}
