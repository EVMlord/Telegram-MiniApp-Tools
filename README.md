# Telegram Miniapp Tools

A utility package designed to simplify the development of Telegram Mini Apps (unofficial). This package includes tools and types for seamless interaction with the Telegram WebApp environment.

## Installation

### React/Node.js (NPM/Yarn)

To add `telegram-miniapp-tools` to your Node.js/React project, use the following command:

```bash
npm install telegram-miniapp-tools
```

or

```bash
yarn add telegram-miniapp-tools
```

### Deno

For Deno users, the package is available as `@smartearnersteam/tapp-tools` and can be imported directly from [jsr.io](https://jsr.io/@smartearnersteam/tapp-tools):

```typescript
import {
  init,
  createAddIconToHomeScreen,
} from "https://jsr.io/@smartearnersteam/tapp-tools";
```

## Features

- Utilities to manage Telegram Mini App environments and parameters.
- Functions for custom functionality like adding an icon to the home screen.
- Strongly typed interfaces for Telegram WebApp parameters.
- Modular and lightweight implementation for modern web development.

## Usage

### Utilities

The following utilities are available for managing your Telegram Mini App:

More details in [/docs/md/utils.md](https://github.com/EVMlord/Telegram-MiniApp-Tools/tree/main/docs/md/utils.md)

#### Initialization

Calling `init()`Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into the document synchronously, ensures the script is only loaded once and is placed before other scripts.

```typescript
import { init } from "telegram-miniapp-tools/utils";

init();
```

For Deno:

```typescript
import { init } from "https://jsr.io/@smartearnersteam/tapp-tools";

init();
```

Alternatively, you can simply add the Telegram Web App script https://telegram.org/js/telegram-web-app.js?56 into the document head of your pages directly.

```html
<script src="https://telegram.org/js/telegram-web-app.js?56"></script>
```

#### Adding an Icon to the Home Screen

```typescript
import { createAddIconToHomeScreen } from "telegram-miniapp-tools/utils";

const homeScreenManager = createAddIconToHomeScreen();
```

For Deno:

```typescript
import { createAddIconToHomeScreen } from "https://jsr.io/@smartearnersteam/tapp-tools";

const homeScreenManager = createAddIconToHomeScreen();
```

In use:

```typescript
const status: HomeScreenStatus = homeScreenManager.getStatus();

if (status !== "added") {
  homeScreenManager.addToHomeScreen();
  // Optionally, listen for status changes
  const onStatusChange = (newStatus: HomeScreenStatus) => {
    if (newStatus === "added") {
      // do something here
      homeScreenManager.offStatusChange(onStatusChange);
    }
  };
  homeScreenManager.onStatusChange(onStatusChange);
}
```

#### Parsing Initialization Data

```typescript
import { parseInitData } from "telegram-miniapp-tools/utils";
// Let's imagine, we have init data in a raw format like this. Telegram application is
// sending it in the exact same format.
const initDataString = "user=%7B%22id%22%3A13707702%2C%22first_name%22%3A%22EVMlord%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22EVMlord%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FlR3FXmzCS9q3lI-K-WLLiUstzaM7ri38rvrU6hLA.svg%22%7D&chat_instance=604945030034165&chat_type=sender&auth_date=1732636784&signature=1oewsopfbyF6LnZtb0HY6-XmGe8mc1rUUUIklSXGlrPsVeetK_4pb-v3L6rPr3mwheJtyjSLawxqDyGQpimCAw&hash=f0981624e433a75f60559592609ac345699c635942bdcbc869c8b5e60264fad2",

// Extract init data.
console.log(parseInitData(initDataString));
// or
console.log(parseInitData(new URLSearchParams(initDataString)));

// Output:
// {
//     "authDate": "2024-11-26T15:59:44.000Z",
//     "chatInstance": "60494508300341655",
//     "chatType": "sender",
//     "hash": "f0981624e433a75f60559592609ac345699c635942bdcbc869c8b5e60264fad2",
//     "signature": "1oewsopfbyF6LnZtb0HY6-XmGe8mc1rUUUIklSXGlrPsVeetK_4pb-v3L6rPr3mwheJtyjSLawxqDyGQpimCAw",
//     "user": {
//         "allowsWriteToPm": true,
//         "firstName": "EVMlord",
//         "id": 13707702,
//         "isPremium": true,
//         "languageCode": "en",
//         "lastName": "",
//         "photoUrl": "https://t.me/i/userpic/320/lR3FXmzCS9q3lI-K-WLLiUstzaM7ri38rvrU6hLA.svg",
//         "username": "EVMlord"
//     }
// }

```

The function extracts the required parameters and automatically validates their types. If a property has an invalid type or value, it will throw an error.

#### Mocking Telegram Environment (for testing)

The `mockTelegramEnv` function imitates the WebApp environment provided by Telegram. It helps developers start building applications even without creating a mini app record in [BotFather](https://t.me/botfather).

```typescript
import { mockTelegramEnv } from "telegram-miniapp-tools/utils";

mockTelegramEnv({
  themeParams: {
    accentTextColor: "#6ab2f2",
    bgColor: "#17212b",
    buttonColor: "#5288c1",
    buttonTextColor: "#ffffff",
    destructiveTextColor: "#ec3942",
    headerBgColor: "#17212b",
    hintColor: "#708499",
    linkColor: "#6ab3f3",
    secondaryBgColor: "#232e3c",
    sectionBgColor: "#17212b",
    sectionHeaderTextColor: "#6ab3f3",
    subtitleTextColor: "#708499",
    textColor: "#f5f5f5",
  },
  initData: parseInitData(initDataString),
  initDataString,
  version: "7.2",
  platform: "tdesktop",
});
```

<div style="background-color: #f9f6d9; border-left: 4px solid #f1c40f; padding: 1em;">
  <strong>⚠️ Warning</strong><br>
  This function only imitates Telegram environment behavior. It doesn't send any real requests or perform actions that will only be visible in the Telegram application..
</div>

#### Retrieving Launch Parameters

```typescript
import { retrieveLaunchParams } from "telegram-miniapp-tools/utils";

const MainContent: FC = () => {
  const { initData, themeParams } = retrieveLaunchParams();

  return (
    <>
      // content here
      <div className="pt-8">Something goes here</div>
    </>
  );
};
```

#### Managing Back Button Behavior

```typescript
import createBackButtonManager from "telegram-miniapp-tools/utils";

const backButtonManager = createBackButtonManager();

if (backButtonManager) {
  // Show the back button
  backButtonManager.show();

  // Add a click event handler
  function handleBackButtonClick() {
    console.log("Back button clicked!");
    // Perform any action, e.g., navigate to the previous page
  }

  backButtonManager.onClick(handleBackButtonClick);

  // Optionally, remove the event handler later
  // backButtonManager.offClick(handleBackButtonClick);

  // Hide the back button when not needed
  // backButtonManager.hide();
} else {
  console.error("BackButton is not available.");
}
```

#### Managing Cloud Storage

```typescript
import { createCloudStorageManager } from "telegram-miniapp-tools/utils";

const cloudStorage = createCloudStorageManager();

// Attempt to save `token` to cloud storage.
try {
  if (cloudStorage) {
    await cloudStorage.setItem("token", JSON.stringify({ token, expiresAt })); // Consistently store as JSON
  }
  // console.log("Token successfully saved to cloud storage.");
} catch (cloudError) {
  console.error("Error saving token to cloud storage:", cloudError);
}

// Attemt to retrieve `token` from cloud storage
const storedTokenStr = await cloudStorage?.getItem("token");
```

#### Managing Fullscreen

This function manages the fullscreen state and provides `requestFullscreen` and `exitFullscreen` methods.

##### Public Methods:

- **getIsFullscreen()**: Returns the current fullscreen state.
- **getError()**: Returns the current error state.
- **requestFullscreen()**: Attempts to enter fullscreen mode and resets any previous errors.
- **exitFullscreen()**: Attempts to exit fullscreen mode and resets any previous errors.
- **onFullscreenChange(callback)**: Registers a callback to be called when the fullscreen state changes.
- **offFullscreenChange(callback)**: Unregisters a previously registered fullscreen change callback.
- **onError(callback)**: Registers a callback to be called when an error occurs.
- **offError(callback)**: Unregisters a previously registered error callback.
- **destroy()**: Cleans up event listeners and handlers. Should be called when the manager is no longer needed.

```typescript
import { createFullscreenManager } from "telegram-miniapp-tools/utils";

const fullscreenManager = createFullscreenManager();

if (fullscreenManager) {
  // Get the current fullscreen state
  const isFullscreen = fullscreenManager.getIsFullscreen();
  console.log(`Is fullscreen: ${isFullscreen}`);

  // Listen for fullscreen changes
  const handleFullscreenChange = (isFullscreen: boolean) => {
    console.log(`Fullscreen state changed: ${isFullscreen}`);
  };
  fullscreenManager.onFullscreenChange(handleFullscreenChange);

  // Listen for errors
  const handleError = (error: FullscreenError | null) => {
    if (error) {
      console.error(`Fullscreen error: ${error}`);
    }
  };
  fullscreenManager.onError(handleError);

  // Request fullscreen
  fullscreenManager.requestFullscreen();

  // Later, when you want to exit fullscreen
  // fullscreenManager.exitFullscreen();

  // When you're done, clean up
  // fullscreenManager.offFullscreenChange(handleFullscreenChange);
  // fullscreenManager.offError(handleError);
  // fullscreenManager.destroy();
} else {
  console.error("Fullscreen manager is not available.");
}
```

### Types

Strongly typed interfaces are available to enhance TypeScript support for Telegram Mini Apps.

More details in [/docs/md/types.md](https://github.com/EVMlord/Telegram-MiniApp-Tools/tree/main/docs/md/types.md)

```typescript
import type { InitData, LaunchParams, ParsedThemeParams } from 'telegram-miniapp-tools/types';

// Example usage
const initData: InitData = { ... };
```

### Exported Variables

The library provides direct access to the Telegram WebApp and environment variables.

```typescript
import telegram, { webApp } from "telegram-miniapp-tools";

console.log(webApp.initData);
console.log(telegram);
```

You will find more details in the [Telegram-MiniApp-Tools Documentation](https://github.com/EVMlord/Telegram-MiniApp-Tools/tree/main/docs/md/README.md)

## Contributing

We welcome contributions! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This package is open source and licensed under the Apache-2.0 License. See the `LICENSE` file for details.

## Credits

This package was inspired by the amazing work done in:

- [telegram-apps/sdk](https://github.com/Telegram-Mini-Apps/telegram-apps)
- [grammyjs/web-app](https://github.com/grammyjs/web-app)

A big thank you to the developers and contributors of these projects for their invaluable work!

```

```
