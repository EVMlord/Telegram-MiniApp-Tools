"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCloudStorageListeners = attachCloudStorageListeners;
var onMiniAppEvent_1 = require("./onMiniAppEvent");
// Exported function to add multiple listeners
function attachCloudStorageListeners(callback) {
    return (0, onMiniAppEvent_1.onWindowMultiEvent)([
        "web_app_invoke_custom_method",
        "webAppInvokeCustomMethod",
        "custom_method_invoked",
        "customMethodInvoked",
    ], // List of events to listen for
    function (eventName, event) {
        console.log("Event received: ".concat(eventName), event.detail);
        callback(eventName, event.detail);
    });
}
