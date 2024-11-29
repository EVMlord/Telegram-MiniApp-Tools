/**
 * A hook that utilizes the `webApp.isFullscreen` boolean,
 * listens for the `fullscreenChanged` and `fullscreenFailed` events,
 * and provides `requestFullscreen` and `exitFullscreen` functions.
 *
 * This hook can be integrated into your settings modal,
 * and used to manage fullscreen behavior.
 */
export declare function useDetectFullscreen(): {
    isFullscreen: boolean;
    error: string | null;
    requestFullscreen: () => void;
    exitFullscreen: () => void;
};
