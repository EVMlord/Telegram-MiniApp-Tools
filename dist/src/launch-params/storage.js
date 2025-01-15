"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveFromStorage = retrieveFromStorage;
exports.saveToStorage = saveToStorage;
var storage_js_1 = require("../storage/storage.js");
var serializeParams_js_1 = require("../transformers/serializeParams.js");
var parseParams_js_1 = require("../utils/parseParams.js");
var STORAGE_KEY = "launchParams";
/**
 * @returns Launch parameters stored in the session storage.
 * @throws Error if function was unable to extract launch parameters from the window location hash.
 */
function retrieveFromStorage() {
    // console.log({
    //   retrieveFromStorage: parseLaunchParams(getStorageValue(STORAGE_KEY) || ""),
    // });
    return (0, parseParams_js_1.parseLaunchParams)((0, storage_js_1.getStorageValue)(STORAGE_KEY) || "");
}
/**
 * Saves specified launch parameters in the session storage.
 * @param value - launch params to save.
 */
function saveToStorage(value) {
    (0, storage_js_1.setStorageValue)("launchParams", (0, serializeParams_js_1.serializeLaunchParams)(value));
}
