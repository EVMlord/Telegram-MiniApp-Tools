"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackButtonManager = void 0;
var index_js_1 = require("../index.js");
/**
 * Manages the Telegram WebApp BackButton functionality.
 * This manager ensures only one instance exists throughout the application.
 *
 * **Usage Example:**
 *
 * ```typescript
 * import createBackButtonManager from 'telegram-miniapp-tools/utils';
 *
 * const backButtonManager = createBackButtonManager();
 *
 * if (backButtonManager) {
 *   // Show the back button
 *   backButtonManager.show();
 *
 *   // Add a click event handler
 *   function handleBackButtonClick() {
 *     console.log('Back button clicked!');
 *     // Perform any action, e.g., navigate to the previous page
 *   }
 *
 *   backButtonManager.onClick(handleBackButtonClick);
 *
 *   // Optionally, remove the event handler later
 *   // backButtonManager.offClick(handleBackButtonClick);
 *
 *   // Hide the back button when not needed
 *   // backButtonManager.hide();
 * } else {
 *   console.error('BackButton is not available.');
 * }
 * ```
 *
 * @returns {BackButtonManager | null} The BackButton manager object or null if BackButton is not available.
 */
exports.createBackButtonManager = (function () {
    var instance = null;
    /**
     * Creates the BackButton manager.
     * @returns {BackButtonManager | null}
     */
    function createManager() {
        if (!index_js_1.webApp.BackButton) {
            console.warn("BackButton is not available.");
            return null;
        }
        // State to track the visibility of the back button
        var isVisible = index_js_1.webApp.BackButton.isVisible;
        // Handlers storage to manage multiple callbacks
        var clickHandlers = new Set();
        /**
         * Shows the BackButton.
         */
        function show() {
            index_js_1.webApp.BackButton.show();
            isVisible = true;
        }
        /**
         * Hides the BackButton.
         */
        function hide() {
            index_js_1.webApp.BackButton.hide();
            isVisible = false;
        }
        /**
         * Toggles the visibility of the BackButton.
         */
        function toggle() {
            if (isVisible) {
                hide();
            }
            else {
                show();
            }
        }
        /**
         * Registers a callback for the BackButton click event.
         * @param callback - The function to call when the BackButton is clicked.
         */
        function onClick(callback) {
            if (!clickHandlers.has(callback)) {
                clickHandlers.add(callback);
                index_js_1.webApp.BackButton.onClick(callback);
            }
        }
        /**
         * Unregisters a callback from the BackButton click event.
         * @param callback - The callback function to remove.
         */
        function offClick(callback) {
            if (clickHandlers.has(callback)) {
                clickHandlers.delete(callback);
                index_js_1.webApp.BackButton.offClick(callback);
            }
        }
        /**
         * Removes all registered click event listeners.
         */
        function removeAllListeners() {
            clickHandlers.forEach(function (callback) {
                index_js_1.webApp.BackButton.offClick(callback);
            });
            clickHandlers.clear();
        }
        /**
         * Gets the current visibility state of the BackButton.
         * @returns True if the BackButton is visible, false otherwise.
         */
        function getVisibility() {
            return isVisible;
        }
        return {
            show: show,
            hide: hide,
            toggle: toggle,
            onClick: onClick,
            offClick: offClick,
            getVisibility: getVisibility,
            removeAllListeners: removeAllListeners,
        };
    }
    return function getInstance() {
        if (instance) {
            return instance;
        }
        instance = createManager();
        return instance;
    };
})();
