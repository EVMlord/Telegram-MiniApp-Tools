import { webApp } from "../index.js";
/**
 * Creates a fullscreen manager that handles fullscreen state
 * and provides methods to request and exit fullscreen mode.
 *
 * @returns {FullscreenManager | null} The fullscreen manager object or null if Telegram WebApp is not available.
 */
export function createFullscreenManager() {
    if (!webApp) {
        console.warn("Telegram WebApp is not available.");
        return null;
    }
    // State variables
    let isFullscreen = webApp.isFullscreen;
    let error = null;
    // Event handlers
    const fullscreenChangeHandlers = new Set();
    const errorHandlers = new Set();
    // Internal event listeners
    function handleFullscreenChanged() {
        isFullscreen = webApp.isFullscreen;
        fullscreenChangeHandlers.forEach((callback) => callback(isFullscreen));
    }
    function handleFullscreenFailed(errorObj) {
        error = errorObj.error;
        errorHandlers.forEach((callback) => callback(error));
    }
    // Subscribe to events
    webApp.onEvent("fullscreenChanged", handleFullscreenChanged);
    webApp.onEvent("fullscreenFailed", handleFullscreenFailed);
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
            webApp.requestFullscreen();
        }
        catch (e) {
            console.error(e);
            error = e.message || "Unknown error";
            errorHandlers.forEach((callback) => callback(error));
        }
    }
    function exitFullscreen() {
        error = null; // Reset error
        try {
            webApp.exitFullscreen();
        }
        catch (e) {
            console.error(e);
            error = e.message || "Unknown error";
            errorHandlers.forEach((callback) => callback(error));
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
        webApp.offEvent("fullscreenChanged", handleFullscreenChanged);
        webApp.offEvent("fullscreenFailed", handleFullscreenFailed);
        fullscreenChangeHandlers.clear();
        errorHandlers.clear();
    }
    return {
        getIsFullscreen,
        getError,
        requestFullscreen,
        exitFullscreen,
        onFullscreenChange,
        offFullscreenChange,
        onError,
        offError,
        destroy,
    };
}
