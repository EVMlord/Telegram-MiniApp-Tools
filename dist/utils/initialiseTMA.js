"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialiseTMA = initialiseTMA;
/**
 * Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into
 * the document and returns a Promise that resolves when the script has loaded.
 *
 * Ensures the script is only loaded once and is placed before other scripts.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
function initialiseTMA() {
    return new Promise(function (resolve, reject) {
        var scriptSrc = "https://telegram.org/js/telegram-web-app.js?56";
        // Check if the script is already included
        var script = document.querySelector("script[src=\"".concat(scriptSrc, "\"]"));
        if (script) {
            if (typeof window.Telegram !== "object" || window.Telegram === null) {
                // Script is included but not yet loaded, wait for it
                script.addEventListener("load", function () { return resolve(); });
                script.addEventListener("error", function () {
                    return reject(new Error("Failed to load the Telegram Web App script"));
                });
            }
            else {
                // Script is already loaded
                resolve();
            }
        }
        else {
            script = document.createElement("script");
            script.src = scriptSrc;
            script.async = false; // Note: This does not make the script load synchronously when added dynamically
            script.onload = function () { return resolve(); };
            script.onerror = function () {
                return reject(new Error("Failed to load the Telegram Web App script"));
            };
            var head = document.head || document.getElementsByTagName("head")[0];
            head.insertBefore(script, head.firstChild); // Insert at the beginning of <head>
        }
    });
}
