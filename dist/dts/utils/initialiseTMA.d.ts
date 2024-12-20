/**
 * Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into
 * the document and returns a Promise that resolves when the script has loaded.
 *
 * Ensures the script is only loaded once and is placed before other scripts.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
export declare function initialiseTMA(): Promise<void>;
