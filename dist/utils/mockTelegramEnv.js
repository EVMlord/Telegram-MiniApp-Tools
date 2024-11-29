import { saveToStorage } from "../launch-params/storage.js";
import { parseInitData, reverseTransformThemeParams, transformThemeParams, } from "../transformers/index.js";
/**
 * Parses initDataRaw string into an object (initDataUnsafe).
 * @param initDataRaw The raw initData string from URLSearchParams
 */
export function parseMockInitData(initDataRaw) {
    const params = new URLSearchParams(initDataRaw);
    const initDataUnsafe = {
        user: JSON.parse(params.get("user") || "{}"),
        hash: params.get("hash") || "",
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
export function mockTelegramEnv(options) {
    // Ensure the global window.Telegram.WebApp is defined
    if (typeof window !== "object" || window === null) {
        throw new Error("Cannot mock Telegram environment: window is not accessible.");
    }
    // console.log({ options });
    const webAppEventHandlers = {};
    // Default theme parameters
    const defaultThemeParams = {
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
    const transformedThemeParams = options.themeParams
        ? transformThemeParams(options.themeParams)
        : {};
    // Combine defaultThemeParams and transformed options.themeParams
    const combinedThemeParams = {
        ...defaultThemeParams,
        ...transformedThemeParams,
    };
    // Parse initData if not provided in options
    let parsedInitData = options.initData;
    let updatedInitDataRaw = options.initDataRaw || "";
    if (!parsedInitData) {
        if (options.initDataRaw) {
            parsedInitData = parseInitData(options.initDataRaw);
        }
        else {
            // If neither initData nor initDataRaw is provided, initialize an empty object
            parsedInitData = {};
        }
    }
    // Add signature if it's not already included
    if (parsedInitData && !parsedInitData.signature) {
        parsedInitData.signature = "unsigned"; // Use a mock signature or generate one if necessary
    }
    // Add the signature to initDataRaw if not already present
    const initDataParams = new URLSearchParams(updatedInitDataRaw);
    // Check if the signature exists in initDataRaw
    if (!initDataParams.has("signature")) {
        initDataParams.append("signature", parsedInitData.signature);
        updatedInitDataRaw = initDataParams.toString(); // Update initDataRaw with the signature
    }
    // Create the mock LaunchParams object
    const launchParams = {
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
    saveToStorage(launchParams);
    // Mock the WebApp object
    const webApp = {
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
        isVersionAtLeast: (version) => {
            const [major1, minor1 = "0"] = webApp.version.split(".").map(Number);
            const [major2, minor2 = "0"] = version.split(".").map(Number);
            return major1 > major2 || (major1 === major2 && minor1 >= minor2);
        },
        setHeaderColor: () => { },
        setBackgroundColor: () => { },
        setBottomBarColor: () => { },
        enableClosingConfirmation: () => { },
        disableClosingConfirmation: () => { },
        onEvent: (eventType, eventHandler) => {
            webAppEventHandlers[eventType] = eventHandler;
        },
        offEvent: (eventType, eventHandler) => {
            if (webAppEventHandlers[eventType] === eventHandler) {
                delete webAppEventHandlers[eventType];
            }
        },
        sendData: () => { },
        switchInlineQuery: () => { },
        openLink: () => { },
        openTelegramLink: () => { },
        openInvoice: () => { },
        showPopup: () => { },
        showAlert: () => { },
        showConfirm: () => { },
        showScanQrPopup: () => { },
        closeScanQrPopup: () => { },
        shareToStory: () => { },
        readTextFromClipboard: () => { },
        requestWriteAccess: () => { },
        requestContact: () => { },
        ready: () => { },
        expand: () => { },
        close: () => { },
        isVerticalSwipesEnabled: true,
        enableVerticalSwipes: () => { },
        disableVerticalSwipes: () => { },
        requestFullscreen: () => { },
        exitFullscreen: () => { },
        lockOrientation: () => { },
        unlockOrientation: () => { },
        addToHomeScreen: () => { },
        checkHomeScreenStatus: () => { },
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
        const { eventType, eventData } = JSON.parse(data);
        switch (eventType) {
            case "themeChanged":
                // Update theme parameters, reverse-transform to ThemeParams (snake_case)
                webApp.themeParams = {
                    ...webApp.themeParams,
                    ...reverseTransformThemeParams(themeParams),
                };
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
    const proxyPostEvent = window.TelegramWebviewProxy?.postEvent;
    window.TelegramWebviewProxy = {
        postEvent(eventType, eventData) {
            imitatePostEvent(transformThemeParams(webApp.themeParams), // Transform to ParsedThemeParams (camelCase)
            JSON.stringify({ eventType, eventData }));
            proxyPostEvent?.(eventType, eventData);
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
export function parseMockInitDataAsLaunchParams(initDataRaw) {
    const params = new URLSearchParams(initDataRaw);
    // Parse the `user` field, which is a JSON string
    const userJson = params.get("user");
    if (!userJson) {
        throw new Error("Missing user field in initDataRaw.");
    }
    const user = JSON.parse(userJson);
    // Extract other fields
    const initData = {
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
        initData,
        initDataRaw,
        platform: params.get("platform") || "unknown", // Adjust platform type if necessary
        showSettings: params.get("show_settings") === "true",
        startParam: params.get("start_param") || "",
        themeParams: {}, // Adjust based on your theme handling logic
        version: "1.0", // Adjust based on your app's default or parsed version
    };
}
