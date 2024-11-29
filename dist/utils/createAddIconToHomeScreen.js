import { webApp } from "../index.js";
/**
 * This function returns an object containing the current `HomeScreenStatus`
 * and methods to check the `HomeScreenStatus` and prompt the user to add the MiniApp to the home screen.
 */
export function createAddIconToHomeScreen() {
    let status = "unknown";
    const statusListeners = [];
    if (!webApp) {
        console.warn("Telegram WebApp is not available.");
        status = "unsupported";
    }
    else {
        // Handler for home screen status checks
        const handleHomeScreenChecked = (data) => {
            status = data.status;
            notifyStatusListeners(status);
        };
        // Handler for when the Mini App is added to the home screen
        const handleHomeScreenAdded = () => {
            status = "added";
            notifyStatusListeners(status);
        };
        // Subscribe to events
        webApp.onEvent("homeScreenChecked", handleHomeScreenChecked);
        webApp.onEvent("homeScreenAdded", handleHomeScreenAdded);
        // Initial check of home screen status
        webApp.checkHomeScreenStatus((initialStatus) => {
            status = initialStatus;
            notifyStatusListeners(status);
        });
        // Function to clean up event listeners
        const cleanup = () => {
            webApp.offEvent("homeScreenChecked", handleHomeScreenChecked);
            webApp.offEvent("homeScreenAdded", handleHomeScreenAdded);
        };
        // Ensure cleanup when the window is unloaded
        window.addEventListener("unload", cleanup);
    }
    function addToHomeScreen() {
        if (!webApp) {
            console.warn("Telegram WebApp is not available.");
            return;
        }
        webApp.addToHomeScreen();
    }
    function getStatus() {
        return status;
    }
    function onStatusChange(listener) {
        statusListeners.push(listener);
    }
    function offStatusChange(listener) {
        const index = statusListeners.indexOf(listener);
        if (index !== -1) {
            statusListeners.splice(index, 1);
        }
    }
    function notifyStatusListeners(newStatus) {
        statusListeners.forEach((listener) => listener(newStatus));
    }
    return {
        getStatus,
        addToHomeScreen,
        onStatusChange,
        offStatusChange,
    };
}
