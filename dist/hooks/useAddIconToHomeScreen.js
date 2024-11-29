import { useState, useEffect } from "react";
import { webApp } from "../index.js";
/**
 * A hook that leverages the `addToHomeScreen` and `checkHomeScreenStatus` methods,
 * as well as the `homeScreenAdded` and `homeScreenChecked` events provided by the Telegram Web App.
 *
 * This hook will help you manage the home screen shortcut functionality in your Mini App.
 * */
export function useAddIconToHomeScreen() {
    const [status, setStatus] = useState("unknown");
    useEffect(() => {
        if (!webApp) {
            console.warn("Telegram WebApp is not available.");
            setStatus("unsupported");
            return;
        }
        // Handler for home screen status checks
        const handleHomeScreenChecked = (data) => {
            setStatus(data.status);
        };
        // Handler for when the Mini App is added to the home screen
        const handleHomeScreenAdded = () => {
            setStatus("added");
        };
        // Subscribe to events
        webApp.onEvent("homeScreenChecked", handleHomeScreenChecked);
        webApp.onEvent("homeScreenAdded", handleHomeScreenAdded);
        // Initial check of home screen status
        webApp.checkHomeScreenStatus((status) => {
            setStatus(status);
        });
        // Cleanup on unmount
        return () => {
            webApp.offEvent("homeScreenChecked", handleHomeScreenChecked);
            webApp.offEvent("homeScreenAdded", handleHomeScreenAdded);
        };
    }, []);
    // Function to prompt the user to add the Mini App to the home screen
    const addToHomeScreen = () => {
        if (!webApp) {
            console.warn("Telegram WebApp is not available.");
            return;
        }
        webApp.addToHomeScreen();
    };
    return { status, addToHomeScreen };
}
