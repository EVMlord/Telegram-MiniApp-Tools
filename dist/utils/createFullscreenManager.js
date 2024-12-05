"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFullscreenManager = createFullscreenManager;
var index_js_1 = require("../index.js");
/**
 * Creates a fullscreen manager that handles fullscreen state
 * and provides methods to request and exit fullscreen mode.
 *
 * @returns {FullscreenManager | null} The fullscreen manager object or null if Telegram WebApp is not available.
 */
function createFullscreenManager() {
    if (!index_js_1.webApp) {
        console.warn("Telegram WebApp is not available.");
        return null;
    }
    // State variables
    var isFullscreen = index_js_1.webApp.isFullscreen;
    var error = null;
    // Event handlers
    var fullscreenChangeHandlers = new Set();
    var errorHandlers = new Set();
    // Internal event listeners
    function handleFullscreenChanged() {
        isFullscreen = index_js_1.webApp.isFullscreen;
        fullscreenChangeHandlers.forEach(function (callback) { return callback(isFullscreen); });
    }
    function handleFullscreenFailed(errorObj) {
        error = errorObj.error;
        errorHandlers.forEach(function (callback) { return callback(error); });
    }
    // Subscribe to events
    index_js_1.webApp.onEvent("fullscreenChanged", handleFullscreenChanged);
    index_js_1.webApp.onEvent("fullscreenFailed", handleFullscreenFailed);
    // Public methods
    function getIsFullscreen() {
        return isFullscreen;
    }
    function getError() {
        return error;
    }
    function requestFullscreen() {
        error = null; // Reset error
        try {
            index_js_1.webApp.requestFullscreen();
        }
        catch (e) {
            console.error(e);
            error = e.message || "Unknown error";
            errorHandlers.forEach(function (callback) { return callback(error); });
        }
    }
    function exitFullscreen() {
        error = null; // Reset error
        try {
            index_js_1.webApp.exitFullscreen();
        }
        catch (e) {
            console.error(e);
            error = e.message || "Unknown error";
            errorHandlers.forEach(function (callback) { return callback(error); });
        }
    }
    function onFullscreenChange(callback) {
        fullscreenChangeHandlers.add(callback);
    }
    function offFullscreenChange(callback) {
        fullscreenChangeHandlers.delete(callback);
    }
    function onError(callback) {
        errorHandlers.add(callback);
    }
    function offError(callback) {
        errorHandlers.delete(callback);
    }
    function destroy() {
        index_js_1.webApp.offEvent("fullscreenChanged", handleFullscreenChanged);
        index_js_1.webApp.offEvent("fullscreenFailed", handleFullscreenFailed);
        fullscreenChangeHandlers.clear();
        errorHandlers.clear();
    }
    return {
        getIsFullscreen: getIsFullscreen,
        getError: getError,
        requestFullscreen: requestFullscreen,
        exitFullscreen: exitFullscreen,
        onFullscreenChange: onFullscreenChange,
        offFullscreenChange: offFullscreenChange,
        onError: onError,
        offError: offError,
        destroy: destroy,
    };
}
