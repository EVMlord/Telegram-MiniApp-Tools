"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecord = isRecord;
/**
 * States that passed value is Record and not Array.
 * @param value - value to check.
 */
function isRecord(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}
