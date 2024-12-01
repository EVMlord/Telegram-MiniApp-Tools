/**
 * Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into the document synchronously.
 * Ensures the script is only loaded once and is placed before other scripts.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
export function initialiseTMA() {
    const scriptSrc = "https://telegram.org/js/telegram-web-app.js?56";
    // Check if the script is already included
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = false; // Load synchronously
        const head = document.head || document.getElementsByTagName("head")[0];
        head.insertBefore(script, head.firstChild); // Insert at the beginning of <head>
    }
}
