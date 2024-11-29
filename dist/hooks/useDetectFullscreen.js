import { useState, useEffect } from "react";
import { webApp } from "../index.js";
/**
 * A hook that utilizes the `webApp.isFullscreen` boolean,
 * listens for the `fullscreenChanged` and `fullscreenFailed` events,
 * and provides `requestFullscreen` and `exitFullscreen` functions.
 *
 * This hook can be integrated into your settings modal,
 * and used to manage fullscreen behavior.
 */
export function useDetectFullscreen() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        try {
            if (!webApp) {
                console.warn("Telegram WebApp is not available.");
                return;
            }
            // Initialize the fullscreen state
            setIsFullscreen(webApp.isFullscreen);
            // Handler for fullscreen changes
            const handleFullscreenChanged = () => {
                setIsFullscreen(webApp.isFullscreen);
            };
            // Handler for fullscreen failures
            const handleFullscreenFailed = (errorObj) => {
                setError(errorObj.error);
            };
            // Subscribe to events
            webApp.onEvent("fullscreenChanged", handleFullscreenChanged);
            webApp.onEvent("fullscreenFailed", handleFullscreenFailed);
            // Cleanup on unmount
            return () => {
                webApp.offEvent("fullscreenChanged", handleFullscreenChanged);
                webApp.offEvent("fullscreenFailed", handleFullscreenFailed);
            };
        }
        catch (error) {
            console.error(error);
        }
    }, []);
    // Function to request fullscreen
    const requestFullscreen = () => {
        setError(null); // Reset any previous errors
        try {
            webApp.requestFullscreen();
        }
        catch (error) {
            console.error(error);
        }
    };
    // Function to exit fullscreen
    const exitFullscreen = () => {
        setError(null); // Reset any previous errors
        try {
            webApp.exitFullscreen();
        }
        catch (error) {
            console.error(error);
        }
    };
    return { isFullscreen, error, requestFullscreen, exitFullscreen };
}
