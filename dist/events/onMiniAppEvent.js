"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onWindowMultiEvent = onWindowMultiEvent;
function onWindowMultiEvent(eventNames, callback, options) {
    var listeners = [];
    eventNames.forEach(function (eventName) {
        var listener = function (event) {
            if (event instanceof CustomEvent) {
                callback(eventName, event);
            }
        };
        window.addEventListener(eventName, listener, options);
        // Store cleanup function for this event
        listeners.push(function () {
            return window.removeEventListener(eventName, listener, options);
        });
    });
    // Return a cleanup function for all listeners
    return function () { return listeners.forEach(function (cleanup) { return cleanup(); }); };
}
