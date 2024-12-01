import type { BackButtonManager } from "../types/index.js";
/**
 * Manages the Telegram WebApp BackButton functionality.
 * This manager ensures only one instance exists throughout the application.
 *
 * **Usage Example:**
 *
 * ```typescript
 * import createBackButtonManager from 'telegram-miniapp-tools/utils';
 *
 * const backButtonManager = createBackButtonManager();
 *
 * if (backButtonManager) {
 *   // Show the back button
 *   backButtonManager.show();
 *
 *   // Add a click event handler
 *   function handleBackButtonClick() {
 *     console.log('Back button clicked!');
 *     // Perform any action, e.g., navigate to the previous page
 *   }
 *
 *   backButtonManager.onClick(handleBackButtonClick);
 *
 *   // Optionally, remove the event handler later
 *   // backButtonManager.offClick(handleBackButtonClick);
 *
 *   // Hide the back button when not needed
 *   // backButtonManager.hide();
 * } else {
 *   console.error('BackButton is not available.');
 * }
 * ```
 *
 * @returns {BackButtonManager | null} The BackButton manager object or null if BackButton is not available.
 */
export declare const createBackButtonManager: () => BackButtonManager | null;
