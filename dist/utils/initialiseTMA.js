/**
 * Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into
 * the document and returns a Promise that resolves when the script has loaded.
 *
 * Ensures the script is only loaded once and is placed before other scripts.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
export function initialiseTMA() {
    return new Promise((resolve, reject) => {
        const scriptSrc = "https://telegram.org/js/telegram-web-app.js?56";
        // Check if the script is already included
        let script = document.querySelector(`script[src="${scriptSrc}"]`);
        if (script) {
            if (typeof window.Telegram !== "object" || window.Telegram === null) {
                // Script is included but not yet loaded, wait for it
                script.addEventListener("load", () => resolve());
                script.addEventListener("error", () => reject(new Error("Failed to load the Telegram Web App script")));
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
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load the Telegram Web App script"));
            const head = document.head || document.getElementsByTagName("head")[0];
            head.insertBefore(script, head.firstChild); // Insert at the beginning of <head>
        }
    });
}
