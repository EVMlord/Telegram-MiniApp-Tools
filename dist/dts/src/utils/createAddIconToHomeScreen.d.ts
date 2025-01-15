import type { HomeScreenStatus } from "../types/index.js";
/**
 * This function returns an object containing the current `HomeScreenStatus`
 * and methods to check the `HomeScreenStatus` and prompt the user to add the MiniApp to the home screen.
 */
export declare function createAddIconToHomeScreen(): {
    getStatus: () => HomeScreenStatus;
    addToHomeScreen: () => void;
    onStatusChange: (listener: (status: HomeScreenStatus) => void) => void;
    offStatusChange: (listener: (status: HomeScreenStatus) => void) => void;
};
