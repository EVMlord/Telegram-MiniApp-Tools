"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitMiniAppsEvent = emitMiniAppsEvent;
/**
 * Emits an event sent from the Telegram native application like it was sent in a default web
 * environment between two iframes.
 *
 * It dispatches a new MessageEvent and expects it to be handled via
 * the `window.addEventListener('message', ...)` call, as a developer would do it to handle
 * messages sent from the parent iframe.
 * @param eventType - event name.
 * @param eventData - event payload.
 */
function emitMiniAppsEvent(eventType, eventData) {
    window.dispatchEvent(new MessageEvent("message", {
        data: JSON.stringify({ eventType: eventType, eventData: eventData }),
        // We specify window.parent to imitate the case, the parent iframe sent us this event.
        source: window.parent,
    }));
}
