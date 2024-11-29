import { Telegram, WebApp } from "./types/index.js";
/**
 * Represents the Telegram global object available on the `window`.
 *
 * Provides access to Telegram Web App features and methods.
 *
 * @see https://core.telegram.org/bots/webapps
 */
declare const telegram: Telegram;
/**
 * Represents the Telegram Web App instance.
 *
 * Provides methods and properties specific to the Web App interface.
 *
 * @see https://core.telegram.org/bots/webapps
 */
declare const webApp: WebApp;
export type { Telegram, WebApp };
export { webApp, telegram as default };
