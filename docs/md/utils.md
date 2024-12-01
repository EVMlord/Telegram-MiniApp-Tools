[**Telegram MiniApp Tools v0.1.1**](README.md)

***

[Home](README.md) / utils

# utils

## Functions

### createAddIconToHomeScreen()

```ts
function createAddIconToHomeScreen(): {
  addToHomeScreen: () => void;
  getStatus: () => HomeScreenStatus;
  offStatusChange: (listener) => void;
  onStatusChange: (listener) => void;
}
```

This function returns an object containing the current `HomeScreenStatus`
and methods to check the `HomeScreenStatus` and prompt the user to add the MiniApp to the home screen.

#### Returns

```ts
{
  addToHomeScreen: () => void;
  getStatus: () => HomeScreenStatus;
  offStatusChange: (listener) => void;
  onStatusChange: (listener) => void;
}
```

| Name | Type |
| ------ | ------ |
| `addToHomeScreen` | () => `void` |
| `getStatus` | () => [`HomeScreenStatus`](types.md#homescreenstatus) |
| `offStatusChange` | (`listener`) => `void` |
| `onStatusChange` | (`listener`) => `void` |

***

### createBackButtonManager()

```ts
function createBackButtonManager(): null | BackButtonManager
```

Manages the Telegram WebApp BackButton functionality.
This manager ensures only one instance exists throughout the application.

**Usage Example:**

```typescript
import createBackButtonManager from 'telegram-miniapp-tools/utils';

const backButtonManager = createBackButtonManager();

if (backButtonManager) {
  // Show the back button
  backButtonManager.show();

  // Add a click event handler
  function handleBackButtonClick() {
    console.log('Back button clicked!');
    // Perform any action, e.g., navigate to the previous page
  }

  backButtonManager.onClick(handleBackButtonClick);

  // Optionally, remove the event handler later
  // backButtonManager.offClick(handleBackButtonClick);

  // Hide the back button when not needed
  // backButtonManager.hide();
} else {
  console.error('BackButton is not available.');
}
```

#### Returns

`null` \| [`BackButtonManager`](types.md#backbuttonmanager)

The BackButton manager object or null if BackButton is not available.

***

### createCloudStorageManager()

```ts
function createCloudStorageManager(): null | {
  getItem: (key, callback?) => Promise<string> | void;
  getItems: (keys, callback?) => Promise<Record<string, string>> | void;
  getKeys: (callback?) => Promise<string[]> | void;
  removeItem: (key, callback?) => Promise<true> | void;
  removeItems: (keys, callback?) => Promise<true> | void;
  setItem: (key, value, callback?) => Promise<true> | void;
}
```

Creates a manager for Telegram WebApp's CloudStorage API.

Provides simplified, promise-based methods for interacting with cloud storage.

#### Returns

`null` \| \{
  `getItem`: (`key`, `callback`?) => `Promise`\<`string`\> \| `void`;
  `getItems`: (`keys`, `callback`?) => `Promise`\<`Record`\<`string`, `string`\>\> \| `void`;
  `getKeys`: (`callback`?) => `Promise`\<`string`[]\> \| `void`;
  `removeItem`: (`key`, `callback`?) => `Promise`\<`true`\> \| `void`;
  `removeItems`: (`keys`, `callback`?) => `Promise`\<`true`\> \| `void`;
  `setItem`: (`key`, `value`, `callback`?) => `Promise`\<`true`\> \| `void`;
 \}

***

### init()

```ts
function init(): void
```

Loads the Telegram Web App script [https://telegram.org/js/telegram-web-app.js?56] into the document synchronously.
Ensures the script is only loaded once and is placed before other scripts.

#### Returns

`void`

#### See

https://core.telegram.org/bots/webapps#initializing-mini-apps

***

### mockTelegramEnv()

```ts
function mockTelegramEnv(options): void
```

Mocks the Telegram Web App environment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`LaunchParams`](types.md#launchparams) | Configuration for the mock environment. |

#### Returns

`void`

***

### parseInitData()

```ts
function parseInitData(value): InitData
```

Parses an incoming value as init data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | value to check. |

#### Returns

[`InitData`](types.md#initdata)

#### Throws

Parsing errors.

***

### retrieveLaunchParams()

```ts
function retrieveLaunchParams(): LaunchParams
```

#### Returns

[`LaunchParams`](types.md#launchparams)

Launch parameters from any known source.

#### Throws

ERR_RETRIEVE_LP_FAILED
