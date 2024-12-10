"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineEventHandlers = defineEventHandlers;
var emitMiniAppsEvent_1 = require("./emitMiniAppsEvent");
/**
 * Defines special handlers by known paths, which Telegram recognizes as ports to receive events.
 */
function defineEventHandlers() {
    // Iterate over each path, where "receiveEvent" function should be
    // defined. This function is called by external environment in case,
    // it wants to emit some event.
    [
        ["TelegramGameProxy_receiveEvent"], // Windows Phone.
        ["TelegramGameProxy", "receiveEvent"], // Desktop.
        ["Telegram", "WebView", "receiveEvent"], // Android and iOS.
    ].forEach(function (path) {
        // Path starts from the "window" object.
        var pointer = window;
        path.forEach(function (item, idx, arr) {
            // We are on the last iteration, where function property name is passed.
            if (idx === arr.length - 1) {
                pointer[item] = emitMiniAppsEvent_1.emitMiniAppsEvent;
                return;
            }
            if (!(item in pointer)) {
                pointer[item] = {};
            }
            pointer = pointer[item];
        });
    });
}
