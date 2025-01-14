/**
 * The `utils` module offers helper functions and utilities to streamline
 * application development within the Telegram MiniApp ecosystem. These
 * include initialization routines, parameter parsing, and environment mocking.
 *
 * ## Key Features:
 * - Initialization helpers for the Telegram MiniApp lifecycle.
 * - Parameter retrieval and parsing for the Web App.
 * - Telegram-specific utilities for features like cloud storage and back buttons.
 *
 * @module
 */
export { createAddIconToHomeScreen } from "./createAddIconToHomeScreen.js";
export { parseInitData } from "./parseParams.js";
export { mockTelegramEnv } from "./mockTelegramEnv.js";
export { retrieveLaunchParams } from "./retrieveLaunchParams.js";
export { createBackButtonManager } from "./createBackButtonManager.js";
export { createCloudStorageManager } from "./createCloudStorageManager.js";
export { CloudStorageUtility } from "./CloudStorageUtility.js";
export { createFullscreenManager } from "./createFullscreenManager.js";
