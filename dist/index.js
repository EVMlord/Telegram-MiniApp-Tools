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
import "./telegram-web-app.js";
// Assert that Telegram and WebApp exist and throw an error otherwise
if (typeof window !== "object" || window === null) {
    throw new Error("Telegram Web App is not running in a browser environment, window is not accessible!");
}
if (typeof window.Telegram !== "object" || window.Telegram === null) {
    throw new Error("Telegram Web App script has not run, see https://core.telegram.org/bots/webapps#initializing-web-apps");
}
// Since we've verified, we can confidently assert these are defined
/**
 * Represents the Telegram global object available on the `window`.
 *
 * Provides access to Telegram Web App features and methods.
 *
 * @see https://core.telegram.org/bots/webapps
 */
const telegram = window.Telegram;
/**
 * Represents the Telegram Web App instance.
 *
 * Provides methods and properties specific to the Web App interface.
 *
 * @see https://core.telegram.org/bots/webapps
 */
const webApp = telegram.WebApp;
console.log("Telegram WebApp initialized");
// Export WebApp and Telegram variables
export { webApp, telegram as default };
