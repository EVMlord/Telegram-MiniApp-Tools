import type { LaunchParams, WebAppInitData } from "../types/index.js";
/**
 * Parses initDataRaw string into an object (initDataUnsafe).
 * @param initDataRaw The raw initData string from URLSearchParams
 */
export declare function parseMockInitData(initDataRaw: string): WebAppInitData;
/**
 * Mocks the Telegram Web App environment.
 * @param options Configuration for the mock environment.
 */
export declare function mockTelegramEnv(options: LaunchParams): void;
/**
 * Parses the raw initData string and returns an object of type LaunchParams.
 * @param initDataRaw - The raw initData string from the URL query parameters.
 * @returns An object of type LaunchParams.
 */
export declare function parseMockInitDataAsLaunchParams(initDataRaw: string): LaunchParams;
