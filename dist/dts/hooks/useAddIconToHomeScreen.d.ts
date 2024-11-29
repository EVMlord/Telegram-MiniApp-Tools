import type { HomeScreenStatus } from "../types/index.js";
/**
 * A hook that leverages the `addToHomeScreen` and `checkHomeScreenStatus` methods,
 * as well as the `homeScreenAdded` and `homeScreenChecked` events provided by the Telegram Web App.
 *
 * This hook will help you manage the home screen shortcut functionality in your Mini App.
 * */
export declare function useAddIconToHomeScreen(): {
    status: HomeScreenStatus;
    addToHomeScreen: () => void;
};
