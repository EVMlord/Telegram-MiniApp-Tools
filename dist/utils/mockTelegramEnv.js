"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMockInitData = parseMockInitData;
exports.mockTelegramEnv = mockTelegramEnv;
exports.parseMockInitDataAsLaunchParams = parseMockInitDataAsLaunchParams;
var storage_js_1 = require("../launch-params/storage.js");
var index_js_1 = require("../transformers/index.js");
/**
 * Parses initDataRaw string into an object (initDataUnsafe).
 * @param initDataRaw The raw initData string from URLSearchParams
 */
function parseMockInitData(initDataRaw) {
    var params = new URLSearchParams(initDataRaw);
    var initDataUnsafe = {
        user: JSON.parse(params.get("user") || "{}"),
        hash: params.get("hash") || "",
        signature: params.get("signature") || "defaultSignature",
        auth_date: parseInt(params.get("auth_date") || "0", 10),
        start_param: params.get("start_param") || "",
        chat_type: params.get("chat_type") || undefined,
        chat_instance: params.get("chat_instance") || undefined,
    };
    return initDataUnsafe;
}
/**
 * Mocks the Telegram Web App environment.
 * @param options Configuration for the mock environment.
 */
function mockTelegramEnv(options) {
    var _a;
    // Ensure the global window.Telegram.WebApp is defined
    if (typeof window !== "object" || window === null) {
        throw new Error("Cannot mock Telegram environment: window is not accessible.");
    }
    // console.log({ options });
    var webAppEventHandlers = {};
    // Default theme parameters
    var defaultThemeParams = {
        accentTextColor: "#000000",
        bgColor: "#ffffff",
        buttonColor: "#0000ff",
        buttonTextColor: "#ffffff",
        destructiveTextColor: "#ff0000",
        headerBgColor: "#ffffff",
        hintColor: "#888888",
        linkColor: "#0000ff",
        secondaryBgColor: "#f0f0f0",
        sectionBgColor: "#ffffff",
        sectionHeaderTextColor: "#000000",
        subtitleTextColor: "#888888",
        textColor: "#000000",
    };
    // Transform options.themeParams into ParsedThemeParams (camelCase)
    var transformedThemeParams = options.themeParams
        ? (0, index_js_1.transformThemeParams)(options.themeParams)
        : {};
    // Combine defaultThemeParams and transformed options.themeParams
    var combinedThemeParams = __assign(__assign({}, defaultThemeParams), transformedThemeParams);
    // Parse initData if not provided in options
    var parsedInitData = options.initData;
    var updatedInitDataRaw = options.initDataRaw || "";
    // Ensure the signature is added to initDataRaw if not already present
    var initDataParams = new URLSearchParams(updatedInitDataRaw);
    if (!initDataParams.has("signature")) {
        var signature = (parsedInitData === null || parsedInitData === void 0 ? void 0 : parsedInitData.signature) || "unsigned"; // Use existing signature or default to "unsigned"
        initDataParams.append("signature", signature);
        updatedInitDataRaw = initDataParams.toString(); // Update initDataRaw with the signature
    }
    // Parse initData using updated initDataRaw
    if (!parsedInitData) {
        if (updatedInitDataRaw) {
            parsedInitData = (0, index_js_1.parseInitData)(updatedInitDataRaw);
        }
        else {
            // If neither initData nor initDataRaw is provided, initialize an empty object
            parsedInitData = {};
        }
    }
    // Add signature to parsedInitData if not already present
    if (parsedInitData && !parsedInitData.signature) {
        parsedInitData.signature = "unsigned"; // Use a mock signature or generate one if necessary
    }
    // console.log({ parsedInitData });
    // Create the mock LaunchParams object
    var launchParams = {
        botInline: options.botInline || false,
        initData: parsedInitData,
        initDataRaw: updatedInitDataRaw,
        platform: options.platform || "unknown",
        showSettings: options.showSettings || false,
        startParam: options.startParam || "",
        themeParams: combinedThemeParams,
        version: options.version || "6.0",
    };
    // console.log({ launchParams });
    // Save the LaunchParams to storage
    (0, storage_js_1.saveToStorage)(launchParams);
    // Mock the WebApp object
    var webApp = {
        initData: launchParams.initDataRaw || "",
        initDataUnsafe: options.initDataRaw
            ? parseMockInitData(options.initDataRaw)
            : {},
        version: launchParams.version,
        platform: launchParams.platform,
        colorScheme: "light",
        themeParams: launchParams.themeParams,
        isExpanded: false,
        viewportHeight: 0,
        viewportStableHeight: 0,
        headerColor: launchParams.themeParams.headerBgColor || "#ffffff",
        backgroundColor: launchParams.themeParams.bgColor || "#ffffff",
        bottomBarColor: launchParams.themeParams.bgColor || "#ffffff",
        isClosingConfirmationEnabled: false,
        BackButton: {},
        MainButton: {},
        SecondaryButton: {},
        SettingsButton: {},
        HapticFeedback: {},
        CloudStorage: {},
        BiometricManager: {},
        isVersionAtLeast: function (version) {
            var _a = webApp.version.split(".").map(Number), major1 = _a[0], _b = _a[1], minor1 = _b === void 0 ? "0" : _b;
            var _c = version.split(".").map(Number), major2 = _c[0], _d = _c[1], minor2 = _d === void 0 ? "0" : _d;
            return major1 > major2 || (major1 === major2 && minor1 >= minor2);
        },
        setHeaderColor: function () { },
        setBackgroundColor: function () { },
        setBottomBarColor: function () { },
        enableClosingConfirmation: function () { },
        disableClosingConfirmation: function () { },
        onEvent: function (eventType, eventHandler) {
            webAppEventHandlers[eventType] = eventHandler;
        },
        offEvent: function (eventType, eventHandler) {
            if (webAppEventHandlers[eventType] === eventHandler) {
                delete webAppEventHandlers[eventType];
            }
        },
        sendData: function () { },
        switchInlineQuery: function () { },
        openLink: function () { },
        openTelegramLink: function () { },
        openInvoice: function () { },
        showPopup: function () { },
        showAlert: function () { },
        showConfirm: function () { },
        showScanQrPopup: function () { },
        closeScanQrPopup: function () { },
        shareToStory: function () { },
        readTextFromClipboard: function () { },
        requestWriteAccess: function () { },
        requestContact: function () { },
        ready: function () { },
        expand: function () { },
        close: function () { },
        isVerticalSwipesEnabled: true,
        enableVerticalSwipes: function () { },
        disableVerticalSwipes: function () { },
        requestFullscreen: function () { },
        exitFullscreen: function () { },
        lockOrientation: function () { },
        unlockOrientation: function () { },
        addToHomeScreen: function () { },
        checkHomeScreenStatus: function () { },
        isFullscreen: false,
    };
    /**
     * A mock function to imitate the postEvent behavior.
     * Intercepts the window.parent.postMessage call and performs pre-defined actions. For example,
     * it may handle the request theme request and emit the theme_changed event.
     * @param tp - Mocked theme parameters
     * @param data - Data for the event
     */
    function imitatePostEvent(themeParams, data) {
        var _a = JSON.parse(data), eventType = _a.eventType, eventData = _a.eventData;
        switch (eventType) {
            case "themeChanged":
                // Update theme parameters, reverse-transform to ThemeParams (snake_case)
                webApp.themeParams = __assign(__assign({}, webApp.themeParams), (0, index_js_1.reverseTransformThemeParams)(themeParams));
                if (webAppEventHandlers[eventType]) {
                    webAppEventHandlers[eventType]();
                }
                break;
            default:
                if (webAppEventHandlers[eventType]) {
                    webAppEventHandlers[eventType](JSON.parse(eventData));
                }
                break;
        }
    }
    // Define TelegramWebviewProxy to handle postEvent
    var proxyPostEvent = (_a = window.TelegramWebviewProxy) === null || _a === void 0 ? void 0 : _a.postEvent;
    window.TelegramWebviewProxy = {
        postEvent: function (eventType, eventData) {
            imitatePostEvent((0, index_js_1.transformThemeParams)(webApp.themeParams), // Transform to ParsedThemeParams (camelCase)
            JSON.stringify({ eventType: eventType, eventData: eventData }));
            proxyPostEvent === null || proxyPostEvent === void 0 ? void 0 : proxyPostEvent(eventType, eventData);
        },
    };
    // Apply any custom WebApp overrides from options
    Object.assign(webApp, options);
    // Set the global Telegram object
    window.Telegram = {
        WebApp: webApp,
    };
    console.info("Mock Telegram WebApp environment initialized.");
}
/**
 * Parses the raw initData string and returns an object of type LaunchParams.
 * @param initDataRaw - The raw initData string from the URL query parameters.
 * @returns An object of type LaunchParams.
 */
function parseMockInitDataAsLaunchParams(initDataRaw) {
    var params = new URLSearchParams(initDataRaw);
    // Parse the `user` field, which is a JSON string
    var userJson = params.get("user");
    if (!userJson) {
        throw new Error("Missing user field in initDataRaw.");
    }
    var user = JSON.parse(userJson);
    // Extract other fields
    var initData = {
        user: {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name || undefined,
            username: user.username || undefined,
            languageCode: user.language_code || undefined,
            isPremium: user.is_premium || undefined,
            allowsWriteToPm: user.allows_write_to_pm || undefined,
        },
        authDate: new Date(parseInt(params.get("auth_date") || "0", 10) * 1000),
        hash: params.get("hash") || "",
        signature: params.get("signature") || "",
    };
    return {
        botInline: params.get("bot_inline") === "true",
        initData: initData,
        initDataRaw: initDataRaw,
        platform: params.get("platform") || "unknown", // Adjust platform type if necessary
        showSettings: params.get("show_settings") === "true",
        startParam: params.get("start_param") || "",
        themeParams: {}, // Adjust based on your theme handling logic
        version: "1.0", // Adjust based on your app's default or parsed version
    };
}
