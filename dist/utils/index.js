"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFullscreenManager = exports.createCloudStorageManager = exports.createBackButtonManager = exports.retrieveLaunchParams = exports.mockTelegramEnv = exports.parseInitData = exports.createAddIconToHomeScreen = void 0;
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
// export { initialiseTMA as init } from "./initialiseTMA.js";
var createAddIconToHomeScreen_js_1 = require("./createAddIconToHomeScreen.js");
Object.defineProperty(exports, "createAddIconToHomeScreen", { enumerable: true, get: function () { return createAddIconToHomeScreen_js_1.createAddIconToHomeScreen; } });
var parseParams_js_1 = require("./parseParams.js");
Object.defineProperty(exports, "parseInitData", { enumerable: true, get: function () { return parseParams_js_1.parseInitData; } });
var mockTelegramEnv_js_1 = require("./mockTelegramEnv.js");
Object.defineProperty(exports, "mockTelegramEnv", { enumerable: true, get: function () { return mockTelegramEnv_js_1.mockTelegramEnv; } });
var retrieveLaunchParams_js_1 = require("./retrieveLaunchParams.js");
Object.defineProperty(exports, "retrieveLaunchParams", { enumerable: true, get: function () { return retrieveLaunchParams_js_1.retrieveLaunchParams; } });
var createBackButtonManager_js_1 = require("./createBackButtonManager.js");
Object.defineProperty(exports, "createBackButtonManager", { enumerable: true, get: function () { return createBackButtonManager_js_1.createBackButtonManager; } });
var createCloudStorageManager_js_1 = require("./createCloudStorageManager.js");
Object.defineProperty(exports, "createCloudStorageManager", { enumerable: true, get: function () { return createCloudStorageManager_js_1.createCloudStorageManager; } });
var createFullscreenManager_js_1 = require("./createFullscreenManager.js");
Object.defineProperty(exports, "createFullscreenManager", { enumerable: true, get: function () { return createFullscreenManager_js_1.createFullscreenManager; } });
