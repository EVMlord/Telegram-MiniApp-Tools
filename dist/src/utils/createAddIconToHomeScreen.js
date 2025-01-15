"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddIconToHomeScreen = createAddIconToHomeScreen;
var index_js_1 = require("../index.js");
/**
 * This function returns an object containing the current `HomeScreenStatus`
 * and methods to check the `HomeScreenStatus` and prompt the user to add the MiniApp to the home screen.
 */
function createAddIconToHomeScreen() {
    var status = "unknown";
    var statusListeners = [];
    if (!index_js_1.webApp) {
        console.warn("Telegram WebApp is not available.");
        status = "unsupported";
    }
    else {
        // Handler for home screen status checks
        var handleHomeScreenChecked_1 = function (data) {
            status = data.status;
            notifyStatusListeners(status);
        };
        // Handler for when the Mini App is added to the home screen
        var handleHomeScreenAdded_1 = function () {
            status = "added";
            notifyStatusListeners(status);
        };
        // Subscribe to events
        index_js_1.webApp.onEvent("homeScreenChecked", handleHomeScreenChecked_1);
        index_js_1.webApp.onEvent("homeScreenAdded", handleHomeScreenAdded_1);
        // Initial check of home screen status
        index_js_1.webApp.checkHomeScreenStatus(function (initialStatus) {
            status = initialStatus;
            notifyStatusListeners(status);
        });
        // Function to clean up event listeners
        var cleanup = function () {
            index_js_1.webApp.offEvent("homeScreenChecked", handleHomeScreenChecked_1);
            index_js_1.webApp.offEvent("homeScreenAdded", handleHomeScreenAdded_1);
        };
        // Ensure cleanup when the window is unloaded
        window.addEventListener("unload", cleanup);
    }
    function addToHomeScreen() {
        if (!index_js_1.webApp) {
            console.warn("Telegram WebApp is not available.");
            return;
        }
        index_js_1.webApp.addToHomeScreen();
    }
    function getStatus() {
        return status;
    }
    function onStatusChange(listener) {
        statusListeners.push(listener);
    }
    function offStatusChange(listener) {
        var index = statusListeners.indexOf(listener);
        if (index !== -1) {
            statusListeners.splice(index, 1);
        }
    }
    function notifyStatusListeners(newStatus) {
        statusListeners.forEach(function (listener) { return listener(newStatus); });
    }
    return {
        getStatus: getStatus,
        addToHomeScreen: addToHomeScreen,
        onStatusChange: onStatusChange,
        offStatusChange: offStatusChange,
    };
}
