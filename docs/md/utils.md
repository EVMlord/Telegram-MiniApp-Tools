[**Telegram MiniApp Tools v0.2.10-beta.1**](README.md)

***

[Home](README.md) / utils

# utils

The `utils` module offers helper functions and utilities to streamline
application development within the Telegram MiniApp ecosystem. These
include initialization routines, parameter parsing, and environment mocking.

## Key Features:
- Initialization helpers for the Telegram MiniApp lifecycle.
- Parameter retrieval and parsing for the Web App.
- Telegram-specific utilities for features like cloud storage and back buttons.

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
function createCloudStorageManager(): CloudStorageManager | null
```

Creates a manager for Telegram WebApp's CloudStorage API.

Provides simplified, promise-based methods for interacting with cloud storage.

#### Returns

[`CloudStorageManager`](types.md#cloudstoragemanager) \| `null`

***

### createFullscreenManager()

```ts
function createFullscreenManager(): FullscreenManager | null
```

Creates a fullscreen manager that handles fullscreen state
and provides methods to request and exit fullscreen mode.

#### Returns

[`FullscreenManager`](types.md#fullscreenmanager) \| `null`

The fullscreen manager object or null if Telegram WebApp is not available.

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
