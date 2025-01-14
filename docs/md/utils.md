[**Telegram MiniApp Tools v0.2.10-beta.6**](README.md)

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

## Classes

### CloudStorageUtility

#### Constructors

##### new CloudStorageUtility()

```ts
new CloudStorageUtility(): CloudStorageUtility
```

###### Returns

[`CloudStorageUtility`](utils.md#cloudstorageutility)

#### Methods

##### clearAll()

```ts
clearAll(): Promise<boolean>
```

Clears all keys and values in the cloud storage.

###### Returns

`Promise`\<`boolean`\>

A promise that resolves when all items are cleared.

##### getItem()

```ts
getItem(key, callback?): void | Promise<string>
```

Retrieves a value from the cloud storage by key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the value to retrieve. |
| `callback`? | [`CloudStorageGetItemCallback`](types.md#cloudstoragegetitemcallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<`string`\>

##### getItems()

```ts
getItems(keys, callback?): void | Promise<CloudStorageItems>
```

Retrieves multiple values from the cloud storage by their keys.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | `string`[] | An array of keys to retrieve values for. |
| `callback`? | [`CloudStorageGetItemsCallback`](types.md#cloudstoragegetitemscallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<[`CloudStorageItems`](types.md#cloudstorageitems)\>

##### getKeys()

```ts
getKeys(callback?): void | Promise<string[]>
```

Retrieves all keys stored in the cloud storage.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | [`CloudStorageGetKeysCallback`](types.md#cloudstoragegetkeyscallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<`string`[]\>

##### hasKey()

```ts
hasKey(key): Promise<boolean>
```

Checks if a specific key exists in the cloud storage.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to check. |

###### Returns

`Promise`\<`boolean`\>

##### removeItem()

```ts
removeItem(key, callback?): void | Promise<boolean>
```

Removes a value from the cloud storage by key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the value to remove. |
| `callback`? | [`CloudStorageRemoveItemCallback`](types.md#cloudstorageremoveitemcallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<`boolean`\>

##### removeItems()

```ts
removeItems(keys, callback?): void | Promise<boolean>
```

Removes multiple values from the cloud storage by their keys.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | `string`[] | An array of keys to remove. |
| `callback`? | [`CloudStorageRemoveItemsCallback`](types.md#cloudstorageremoveitemscallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<`boolean`\>

##### setItem()

```ts
setItem(
   key, 
   value, 
callback?): void | Promise<boolean>
```

Stores a value in the cloud storage with the specified key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to store the value under (1-128 characters, A-Z, a-z, 0-9, _, -). |
| `value` | `string` | The value to store (0-4096 characters). |
| `callback`? | [`CloudStorageSetItemCallback`](types.md#cloudstoragesetitemcallback) | Optional callback. |

###### Returns

`void` \| `Promise`\<`boolean`\>

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
