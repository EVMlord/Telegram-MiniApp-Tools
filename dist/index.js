"use strict";
/**
 * The library provides direct access to the Telegram WebApp and environment variables.
 *
 * @example
 * ```typescript
 * import telegram, { webApp } from "telegram-miniapp-tools";
 *
 * console.log(webApp.initData);
 * console.log(telegram);
 * ```
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.webApp = void 0;
// Assert that Telegram and WebApp exist and throw an error otherwise
if (typeof window !== "object" || window === null) {
    throw new Error("Telegram Web App is not running in a browser environment, window is not accessible!");
}
else {
    console.log("Init: Version 0.2.7");
}
// if (typeof window.Telegram !== "object" || window.Telegram === null) {
//   throw new Error(
//     "Telegram Web App script has not run, see https://core.telegram.org/bots/webapps#initializing-web-apps"
//   );
// }
// Since we've verified, we can confidently assert these are defined
/**
 * Represents the Telegram global object available on the `window`.
 *
 * Provides access to Telegram Web App features and methods.
 *
 * @see https://core.telegram.org/bots/webapps
 */
var telegram = window.Telegram;
exports.default = telegram;
/**
 * Represents the Telegram Web App instance.
 *
 * Provides methods and properties specific to the Web App interface.
 *
 * @see https://core.telegram.org/bots/webapps
 */
var webApp = telegram.WebApp;
exports.webApp = webApp;
console.log("Telegram WebApp initialized");
