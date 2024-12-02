import type { FullscreenManager } from "../types/index.js";
/**
 * Creates a fullscreen manager that handles fullscreen state
 * and provides methods to request and exit fullscreen mode.
 *
 * @returns {FullscreenManager | null} The fullscreen manager object or null if Telegram WebApp is not available.
 */
export declare function createFullscreenManager(): FullscreenManager | null;
