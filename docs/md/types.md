[**Telegram MiniApp Tools v0.2.10-beta.8**](README.md)

***

[Home](README.md) / types

# types

The `types` module defines all TypeScript types and interfaces used across
the Telegram MiniApp project. These type definitions ensure type safety and
clarity when interacting with the Telegram Web App API and MiniApp data.

## Key Definitions:
- `init-data.js`: Initialization data for the Telegram Web App.
- `launch-params.js`: Launch parameters for the MiniApp.
- `theme-params.js`: Theme settings for the Telegram Web App.
- `telegram-web-app.js`: API objects for the Telegram Web App.

## Interfaces

### BackButton

This object controls the back button, which can be displayed in the header of
the Web App in the Telegram interface.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isVisible` | `boolean` | Shows whether the button is visible. Set to false by default. |

#### Methods

##### hide()

```ts
hide(): BackButton
```

A method to hide the button.

###### Returns

[`BackButton`](types.md#backbutton)

##### offClick()

```ts
offClick(callback): BackButton
```

A method that removes the button press event handler. An alias for
 Telegram.WebApp.offEvent('backButtonClicked', callback)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `VoidFunction` |

###### Returns

[`BackButton`](types.md#backbutton)

##### onClick()

```ts
onClick(callback): BackButton
```

A method that sets the button press event handler. An alias for
Telegram.WebApp.onEvent('backButtonClicked', callback)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `VoidFunction` |

###### Returns

[`BackButton`](types.md#backbutton)

##### show()

```ts
show(): BackButton
```

A method to make the button active and visible.

###### Returns

[`BackButton`](types.md#backbutton)

***

### BackButtonManager

The custom `BackButton` manager interface.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `getVisibility` | () => `boolean` | Gets the current visibility state of the BackButton. |
| `hide` | () => `void` | Hides the BackButton. |
| `offClick` | (`callback`: [`BackButtonClickedCallback`](types.md#backbuttonclickedcallback)) => `void` | Unregisters a callback from the BackButton click event. |
| `onClick` | (`callback`: [`BackButtonClickedCallback`](types.md#backbuttonclickedcallback)) => `void` | Registers a callback for the BackButton click event. |
| `removeAllListeners` | () => `void` | Removes all registered click event listeners. |
| `show` | () => `void` | Shows the BackButton. |
| `toggle` | () => `void` | Toggles the visibility of the BackButton. |

***

### BiometricAuthenticateParams

This object describes the native popup for authenticating the user using
biometrics.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `reason?` | `string` | The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters. |

***

### BiometricManager

This object controls biometrics on the device. Before the first use of this
object, it needs to be initialized using the init method.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `biometricType` | `string` | The type of biometrics currently available on the device. Can be one of these values: - finger, fingerprint-based biometrics, - face, face-based biometrics, - unknown, biometrics of an unknown type. |
| `deviceId` | `string` | A unique device identifier that can be used to match the token to the device. |
| `isAccessGranted` | `boolean` | Shows whether permission to use biometrics has been granted. |
| `isAccessRequested` | `boolean` | Shows whether permission to use biometrics has been requested. |
| `isBiometricAvailable` | `boolean` | Shows whether biometrics is available on the current device. |
| `isBiometricTokenSaved` | `boolean` | Shows whether the token is saved in secure storage on the device. |
| `isInited` | `boolean` | Shows whether biometrics object is initialized. |

#### Methods

##### authenticate()

```ts
authenticate(params, callback?): BiometricManager
```

A method that authenticates the user using biometrics according to the
params argument of type BiometricAuthenticateParams. If an optional
callback parameter was passed, the callback function will be called and
the first argument will be a boolean indicating whether the user
authenticated successfully.

If so, the second argument will be a biometric token.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BiometricAuthenticateParams`](types.md#biometricauthenticateparams) |
| `callback`? | [`BiometricAuthenticateCallback`](types.md#biometricauthenticatecallback) |

###### Returns

[`BiometricManager`](types.md#biometricmanager)

##### init()

```ts
init(callback?): BiometricManager
```

A method that initializes the BiometricManager object. It should be
called before the object's first use. If an optional callback parameter
was passed, the callback function will be called when the object is
initialized.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback`? | () => `void` |

###### Returns

[`BiometricManager`](types.md#biometricmanager)

##### openSettings()

```ts
openSettings(): BiometricManager
```

A method that opens the biometric access settings for bots. Useful when
you need to request biometrics access to users who haven't granted it
yet.

Note that this method can be called only in response to user interaction
with the Mini App interface (e.g. a click inside the Mini App or on the
main button)

###### Returns

[`BiometricManager`](types.md#biometricmanager)

##### requestAccess()

```ts
requestAccess(params, callback?): BiometricManager
```

A method that requests permission to use biometrics according to the
params argument of type BiometricRequestAccessParams. If an optional
callback parameter was passed, the callback function will be called and
the first argument will be a boolean indicating whether the user granted
access.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BiometricRequestAccessParams`](types.md#biometricrequestaccessparams) |
| `callback`? | [`BiometricRequestAccessCallback`](types.md#biometricrequestaccesscallback) |

###### Returns

[`BiometricManager`](types.md#biometricmanager)

##### updateBiometricToken()

```ts
updateBiometricToken(token, callback?): BiometricManager
```

A method that updates the biometric token in secure storage on the
device. To remove the token, pass an empty string. If an optional
callback parameter was passed, the callback function will be called and
the first argument will be a boolean indicating whether the token was
updated.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |
| `callback`? | [`BiometricUpdateBiometricTokenCallback`](types.md#biometricupdatebiometrictokencallback) |

###### Returns

[`BiometricManager`](types.md#biometricmanager)

***

### BiometricRequestAccessParams

This object describes the native popup for requesting permission to use
biometrics.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `reason?` | `string` | The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters. |

***

### BottomButton

This object controls the main button, which is displayed at the bottom of the
Web App in the Telegram interface.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `color` | `string` | Current button color. Set to themeParams.button_color by default. |
| `hasShineEffect` | `boolean` | Shows whether the button has a shine effect. Set to false by default. |
| `isActive` | `boolean` | Shows whether the button is active. Set to true by default. |
| `isProgressVisible` | `boolean` | Readonly. Shows whether the button is displaying a loading indicator. |
| `isVisible` | `boolean` | Shows whether the button is visible. Set to false by default. |
| `position?` | `"left"` \| `"top"` \| `"bottom"` \| `"right"` | Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to left by default. Supported values: - left, displayed to the left of the main button, - right, displayed to the right of the main button, - top, displayed above the main button, - bottom, displayed below the main button. |
| `text` | `string` | Current button text. Set to CONTINUE by default. |
| `textColor` | `string` | Current button text color. Set to themeParams.button_text_color by default. |

#### Methods

##### disable()

```ts
disable(): BottomButton
```

A method to disable the button.

###### Returns

[`BottomButton`](types.md#bottombutton)

##### enable()

```ts
enable(): BottomButton
```

A method to enable the button.

###### Returns

[`BottomButton`](types.md#bottombutton)

##### hide()

```ts
hide(): BottomButton
```

A method to hide the button.

###### Returns

[`BottomButton`](types.md#bottombutton)

##### hideProgress()

```ts
hideProgress(): BottomButton
```

A method to hide the loading indicator.

###### Returns

[`BottomButton`](types.md#bottombutton)

##### offClick()

```ts
offClick(callback): BottomButton
```

A method that deletes a previously set handler

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

###### Returns

[`BottomButton`](types.md#bottombutton)

##### onClick()

```ts
onClick(callback): BottomButton
```

A method that sets the button press event handler. An alias for
Telegram.WebApp.onEvent('mainButtonClicked', callback)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

###### Returns

[`BottomButton`](types.md#bottombutton)

##### setParams()

```ts
setParams(params): BottomButton
```

A method to set the button parameters. The params parameter is an object
containing one or several fields that need to be changed:
- text - button text;
- color - button color;
- text_color - button text color;
- is_active - enable the button;
- is_visible - show the button.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`MainButtonParams`](types.md#mainbuttonparams) |

###### Returns

[`BottomButton`](types.md#bottombutton)

##### setText()

```ts
setText(text): BottomButton
```

A method to set the button text.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

###### Returns

[`BottomButton`](types.md#bottombutton)

##### show()

```ts
show(): BottomButton
```

A method to make the button visible. Note that opening the Web App from
the attachment menu hides the main button until the user interacts with
the Web App interface.

###### Returns

[`BottomButton`](types.md#bottombutton)

##### showProgress()

```ts
showProgress(leaveActive?): BottomButton
```

A method to show a loading indicator on the button. It is recommended to
display loading progress if the action tied to the button may take a long
time. By default, the button is disabled while the action is in progress.
If the parameter leaveActive=true is passed, the button remains enabled.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `leaveActive`? | `boolean` |

###### Returns

[`BottomButton`](types.md#bottombutton)

***

### Chat

Describes Telegram Mini Apps [Chat](https://docs.telegram-mini-apps.com/platform/init-data#chat) type.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Unique identifier for this chat. |
| `photoUrl?` | `string` | URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu. |
| `title` | `string` | Title of the chat. |
| `type` | `string` | Type of the chat. |
| `username?` | `string` | Username of the chat. |

***

### CloudStorage

This object controls the cloud storage.
Each bot can store up to 1024 items per user in the cloud storage.

#### Methods

##### getItem()

```ts
getItem(key, callback?): void
```

A method that receives a value from the cloud storage using the specified
key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
| `callback`? | [`CloudStorageGetItemCallback`](types.md#cloudstoragegetitemcallback) | In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the value will be passed as the second argument. |

###### Returns

`void`

##### getItems()

```ts
getItems(keys, callback?): void
```

A method that receives values from the cloud storage using the specified
keys.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | `string`[] | The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
| `callback`? | [`CloudStorageGetItemsCallback`](types.md#cloudstoragegetitemscallback) | In case of an error, the callback? function will be called and the first argument will contain the error. In case of success, the first argument will be null and the values will be passed as the second argument. |

###### Returns

`void`

##### getKeys()

```ts
getKeys(callback?): void
```

A method that receives the list of all keys stored in the cloud storage.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | [`CloudStorageGetKeysCallback`](types.md#cloudstoragegetkeyscallback) | In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the list of keys will be passed as the second argument. |

###### Returns

`void`

##### removeItem()

```ts
removeItem(key, callback?): void
```

A method that removes a value from the cloud storage using the specified
key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
| `callback`? | [`CloudStorageRemoveItemCallback`](types.md#cloudstorageremoveitemcallback) | If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed. |

###### Returns

`void`

##### removeItems()

```ts
removeItems(keys, callback?): void
```

A method that removes values from the cloud storage using the specified
keys.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keys` | `string`[] | The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
| `callback`? | [`CloudStorageRemoveItemsCallback`](types.md#cloudstorageremoveitemscallback) | If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the values were removed. |

###### Returns

`void`

##### setItem()

```ts
setItem(
   key, 
   value, 
   callback?): void
```

A method that stores a value in the cloud storage using the specified
key.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
| `value` | `string` | The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage. |
| `callback`? | [`CloudStorageSetItemCallback`](types.md#cloudstoragesetitemcallback) | If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored. |

###### Returns

`void`

***

### CloudStorageItems

#### Indexable

 \[`key`: `string`\]: `string`

***

### CloudStorageManager

Interface for managing cloud storage operations, providing methods to store,
retrieve, remove, and list items in the cloud storage. These methods support
both callback-based and Promise-based patterns.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `getItem` | (`key`: `string`, `callback`?: [`CloudStorageGetItemCallback`](types.md#cloudstoragegetitemcallback)) => `void` \| `Promise`\<`string`\> | Retrieves a value from the cloud storage by key. |
| `getItems` | (`keys`: `string`[], `callback`?: [`CloudStorageGetItemsCallback`](types.md#cloudstoragegetitemscallback)) => `void` \| `Promise`\<[`CloudStorageItems`](types.md#cloudstorageitems)\> | Retrieves multiple values from the cloud storage by their keys. |
| `getKeys` | (`callback`?: [`CloudStorageGetKeysCallback`](types.md#cloudstoragegetkeyscallback)) => `void` \| `Promise`\<`string`[]\> | Retrieves all keys stored in the cloud storage. |
| `removeItem` | (`key`: `string`, `callback`?: [`CloudStorageRemoveItemCallback`](types.md#cloudstorageremoveitemcallback)) => `void` \| `Promise`\<`boolean`\> | Removes a value from the cloud storage by key. |
| `removeItems` | (`keys`: `string`[], `callback`?: [`CloudStorageRemoveItemsCallback`](types.md#cloudstorageremoveitemscallback)) => `void` \| `Promise`\<`boolean`\> | Removes multiple values from the cloud storage by their keys. |
| `setItem` | (`key`: `string`, `value`: `string`, `callback`?: [`CloudStorageSetItemCallback`](types.md#cloudstoragesetitemcallback)) => `void` \| `Promise`\<`boolean`\> | Stores a value in the cloud storage with the specified key. |

***

### ContentSafeAreaInset

This object represents the content-defined safe area insets,
providing padding values to ensure content remains within visible boundaries,
avoiding overlap with Telegram UI elements.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `bottom` | `number` | The bottom inset in pixels, representing the space to avoid at the bottom of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-bottom). |
| `left` | `number` | The left inset in pixels, representing the space to avoid on the left side of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-left). |
| `right` | `number` | The right inset in pixels, representing the space to avoid on the right side of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-right). |
| `top` | `number` | The top inset in pixels, representing the space to avoid at the top of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-top). |

***

### FullscreenManager

Manages the fullscreen state and provides methods to control it.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `destroy` | () => `void` | Cleans up event listeners and internal state. Should be called when the manager is no longer needed to prevent memory leaks. |
| `exitFullscreen` | () => `void` | Requests the app to exit fullscreen mode. If the request fails, the error can be retrieved using `getError`. |
| `getError` | () => `null` \| `string` | Retrieves the current error state. |
| `getIsFullscreen` | () => `boolean` | Retrieves the current fullscreen state. |
| `offError` | (`callback`: (`error`) => `void`) => `void` | Unregisters a previously registered error callback function. |
| `offFullscreenChange` | (`callback`: (`isFullscreen`) => `void`) => `void` | Unregisters a previously registered fullscreen change callback function. |
| `onError` | (`callback`: (`error`) => `void`) => `void` | Registers a callback function to be called when a fullscreen error occurs. |
| `onFullscreenChange` | (`callback`: (`isFullscreen`) => `void`) => `void` | Registers a callback function to be called when the fullscreen state changes. |
| `requestFullscreen` | () => `void` | Requests the app to enter fullscreen mode. If the request fails, the error can be retrieved using `getError`. |

***

### HapticFeedback

This object controls haptic feedback.

#### Methods

##### impactOccurred()

```ts
impactOccurred(style): () => void
```

A method tells that an impact occurred. The Telegram app may play the
appropriate haptics based on style value passed. Style can be one of
these values:
- light, indicates a collision between small or lightweight UI objects,
- medium, indicates a collision between medium-sized or medium-weight UI
  objects,
- heavy, indicates a collision between large or heavyweight UI objects,
- rigid, indicates a collision between hard or inflexible UI objects,
- soft, indicates a collision between soft or flexible UI objects.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | \| `"medium"` \| `"light"` \| `"heavy"` \| `"rigid"` \| `"soft"` |

###### Returns

`Function`

###### Returns

`void`

##### notificationOccurred()

```ts
notificationOccurred(type): () => void
```

A method tells that a task or action has succeeded, failed, or produced a
warning. The Telegram app may play the appropriate haptics based on type
value passed. Type can be one of these values:
- error, indicates that a task or action has failed,
- success, indicates that a task or action has completed successfully,
- warning, indicates that a task or action produced a warning.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `"error"` \| `"success"` \| `"warning"` |

###### Returns

`Function`

###### Returns

`void`

##### selectionChanged()

```ts
selectionChanged(): void
```

A method tells that the user has changed a selection. The Telegram app
may play the appropriate haptics.

Do not use this feedback when the user makes or confirms a selection; use
it only when the selection changes.

###### Returns

`void`

***

### InitData

Describes Telegram Mini Apps [InitData](https://docs.telegram-mini-apps.com/platform/init-data#parameters-list)
type.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `authDate` | `Date` | Init data generation date. |
| `canSendAfter?` | `number` | The number of seconds after which a message can be sent via the method [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery). |
| `chat?` | [`Chat`](types.md#chat) | An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Mini Apps launched via the attachment menu. |
| `chatInstance?` | `string` | A global identifier indicating the chat from which Mini App was opened. Returned only for applications opened by direct link. |
| `chatType?` | `string` | The type of chat from which Mini App was opened. |
| `hash` | `string` | A hash of all passed parameters, which the bot server can use to check their [validity](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app). |
| `queryId?` | `string` | A unique identifier for the Mini App session, required for sending messages via the [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery) method. |
| `receiver?` | [`User`](types.md#user) | An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Mini Apps launched via the attachment menu. |
| `signature` | `string` | A signature of all passed parameters (except hash), which the third party can use to [check their validity](https://core.telegram.org/bots/webapps#validating-data-for-third-party-use). |
| `startParam?` | `string` | The value of the `startattach` or `startapp` parameter, passed via link. |
| `user?` | [`User`](types.md#user) | An object containing data about the current user. |

***

### LaunchParams

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `botInline?` | `boolean` | True if Mini App is currently launched in inline mode. |
| `initData?` | [`InitData`](types.md#initdata) | Current launch init data. Can be missing in case, application was launched via KeyboardButton. |
| `initDataRaw?` | `string` | The same as initData but in initial, raw format. |
| `platform` | `string` | Current Telegram application identifier. |
| `showSettings?` | `boolean` | True if application is required to show the Settings Button. |
| `startParam?` | `string` | Start parameter passed in the application link. |
| `themeParams` | [`ParsedThemeParams`](types.md#parsedthemeparams) | Mini App palette settings. |
| `version` | `string` | Current Mini Apps version. |

***

### MainButtonParams

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `color?` | [`Color`](types.md#color) | button color |
| `has_shine_effect?` | `boolean` | enable shine effect |
| `is_active?` | `boolean` | enable the button |
| `is_visible?` | `boolean` | show the button |
| `position?` | `"left"` \| `"top"` \| `"bottom"` \| `"right"` | position of the secondary button |
| `text?` | `string` | button text |
| `text_color?` | [`Color`](types.md#color) | button text color |

***

### OpenLinkOptions

Options for configuring how a link is opened in an external browser.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `tryBrowser?` | [`OpenLinkBrowser`](types.md#openlinkbrowser) | Specifies the preferred browser to open the link in. Possible values include: - 'google-chrome', 'chrome' - 'mozilla-firefox', 'firefox' - 'microsoft-edge', 'edge' - 'opera', 'opera-mini' - 'brave', 'brave-browser' - 'duckduckgo', 'duckduckgo-browser' - 'samsung', 'samsung-browser' - 'vivaldi', 'vivaldi-browser' - 'kiwi', 'kiwi-browser' - 'uc', 'uc-browser' - 'tor', 'tor-browser' |
| `tryInstantView?` | `boolean` | Attempts to use the Instant View mode, if supported by the browser and link. |

***

### ParsedThemeParams

Application [theme parameters](https://docs.telegram-mini-apps.com/platform/theming).
Defines palette used by the Telegram application.

#### Indexable

 \[`key`: `string`\]: `undefined` \| \`#$\{string\}\`

***

### PopupParams

This object describes the native popup.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `buttons?` | [`PopupButton`](types.md#popupbutton)[] | List of buttons to be displayed in the popup, 1-3 buttons. Set to [{“type”:“close”}] by default. |
| `message` | `string` | The message to be displayed in the body of the popup, 1-256 characters. |
| `title?` | `string` | The text to be displayed in the popup title, 0-64 characters. |

***

### RequestContactResponseCancelled

This object only contains a status to indicate the cancellation.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `status` | `"cancelled"` | Status 'cancelled', indicates that user cancelled the contact share request. |

***

### RequestContactResponseSent

This object describes contact information shared when requestContact was
approved by the user.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` | Hash to verify data authenticity. |
| `response` | `string` | A status message or result as a string. |
| `responseUnsafe` | \{ `auth_date`: `string`; `contact`: [`Contact`](types.md#contact); \} | Contains sensitive information shared upon user consent. WARNING: Data from this field should not be trusted. You should only use data from `response` on the bot's server and only after it has been validated. |
| `responseUnsafe.auth_date` | `string` | Authorization date for sharing contact information. |
| `responseUnsafe.contact` | [`Contact`](types.md#contact) | Object holding user's contact details. |
| `status` | `"sent"` | Status 'sent' indicates that contact information has been shared. |

***

### SafeAreaInset

This object represents the system-defined safe area insets,
providing padding values to ensure content remains within visible boundaries,
avoiding overlap with system UI elements like notches or navigation bars.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `bottom` | `number` | The bottom inset in pixels, representing the space to avoid at the bottom of the screen. Also available as the CSS variable var(--tg-safe-area-inset-bottom). |
| `left` | `number` | The left inset in pixels, representing the space to avoid on the left side of the screen. Also available as the CSS variable var(--tg-safe-area-inset-left). |
| `right` | `number` | The right inset in pixels, representing the space to avoid on the right side of the screen. Also available as the CSS variable var(--tg-safe-area-inset-right). |
| `top` | `number` | The top inset in pixels, representing the space to avoid at the top of the screen. Also available as the CSS variable `var(--tg-safe-area-inset-top)`. |

***

### ScanQrPopupParams

This object describes the native popup for scanning QR codes.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `text?` | `string` | The text to be displayed under the 'Scan QR' heading, 0-64 characters. |

***

### SettingsButton

This object controls the Settings item in the context menu of the Mini App in
the Telegram interface.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isVisible` | `boolean` | Shows whether the context menu item is visible. Set to false by default. |

#### Methods

##### hide()

```ts
hide(): SettingsButton
```

**Bot API 7.0+** A method to hide the Settings item in the context menu.

###### Returns

[`SettingsButton`](types.md#settingsbutton)

##### offClick()

```ts
offClick(callback): SettingsButton
```

**Bot API 7.0+** A method that removes the press event handler from the
Settings item in the context menu. An alias for
`Telegram.WebApp.offEvent('settingsButtonClicked', callback)`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

###### Returns

[`SettingsButton`](types.md#settingsbutton)

##### onClick()

```ts
onClick(callback): SettingsButton
```

**Bot API 7.0+** A method that sets the press event handler for the
Settings item in the context menu. An alias for
`Telegram.WebApp.onEvent('settingsButtonClicked', callback)`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

###### Returns

[`SettingsButton`](types.md#settingsbutton)

##### show()

```ts
show(): SettingsButton
```

**Bot API 7.0+** A method to make the Settings item in the context menu
visible.

###### Returns

[`SettingsButton`](types.md#settingsbutton)

***

### StoryShareParams

This object describes additional sharing settings for the native story
editor.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `text?` | `string` | The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for premium subscribers. |
| `widget_link?` | [`StoryWidgetLink`](types.md#storywidgetlink) | An object that describes a widget link to be included in the story. Note that only premium subscribers can post stories with links. |

***

### StoryWidgetLink

This object describes a widget link to be included in the story.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `name?` | `string` | The name to be displayed for the widget link, 0-48 characters. |
| `url` | `string` | The URL to be included in the story. |

***

### Telegram

The Telegram global object available on the `window`.

Provides access to Telegram Web App features and methods.

#### Properties

| Property | Type |
| ------ | ------ |
| `WebApp` | [`WebApp`](types.md#webapp) |

***

### ThemeParams

Web Apps can adjust the appearance of the interface to match the Telegram
user's app in real time. This object contains the user's current theme
settings:

#### Indexable

 \[`key`: `string`\]: `undefined` \| `string`

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `accent_text_color?` | `string` | **Bot API 7.0+** Accent text color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-accent-text-color)`. |
| `bg_color?` | `string` | Background color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-bg-color)`. |
| `bottom_bar_bg_color?` | `string` | **Bot API 7.10+** Bottom background color in the #RRGGBB format. Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color). |
| `button_color?` | `string` | Button color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-button-color)`. |
| `button_text_color?` | `string` | Button text color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-button-text-color)`. |
| `destructive_text_color?` | `string` | **Bot API 7.0+** Text color for destructive actions in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-destructive-text-color)`. |
| `header_bg_color?` | `string` | **Bot API 7.0+** Header background color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-header-bg-color)`. |
| `hint_color?` | `string` | Hint text color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-hint-color)`. |
| `link_color?` | `string` | Link color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-link-color)`. |
| `secondary_bg_color?` | `string` | **Bot API 6.1+** Secondary background color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`. |
| `section_bg_color?` | `string` | **Bot API 7.0+** Background color for the section in the `#RRGGBB` format. It is recommended to use this in conjunction with *secondary_bg_color*. Also available as the CSS variable `var(--tg-theme-section-bg-color)`. |
| `section_header_text_color?` | \`#$\{string\}\` | **Bot API 7.0+** Header text color for the section in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-section-header-text-color)`. |
| `section_separator_color?` | `string` | **Bot API 7.6+** Section separator color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-section-separator-color)`. |
| `subtitle_text_color?` | `string` | **Bot API 7.0+** Subtitle text color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-subtitle-text-color)`. |
| `text_color?` | `string` | Main text color in the `#RRGGBB` format. Also available as the CSS variable `var(--tg-theme-text-color)`. |

***

### User

Describes Telegram Mini Apps [User](https://docs.telegram-mini-apps.com/platform/init-data#user) type.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `addedToAttachmentMenu?` | `boolean` | True, if this user added the bot to the attachment menu. |
| `allowsWriteToPm?` | `boolean` | True, if this user allowed the bot to message them. |
| `firstName` | `string` | First name of the user or bot. |
| `id` | `number` | A unique identifier for the user or bot. |
| `isBot?` | `boolean` | True, if this user is a bot. Returned in the `receiver` field only. **See** InitData.receiver |
| `isPremium?` | `boolean` | True, if this user is a Telegram Premium user. |
| `languageCode?` | `string` | [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language. Returns in user field only. |
| `lastName?` | `string` | Last name of the user or bot. |
| `photoUrl?` | `string` | URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu. |
| `username?` | `string` | Username of the user or bot. |

***

### WebApp

The Telegram Web App interface

Provides methods and properties specific to the Web App interface.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `BackButton` | [`BackButton`](types.md#backbutton) | An object for controlling the back button which can be displayed in the header of the Web App in the Telegram interface. |
| `backgroundColor` | `string` | Current background color in the #RRGGBB format. |
| `BiometricManager` | [`BiometricManager`](types.md#biometricmanager) | An object for controlling biometrics on the device. |
| `bottomBarColor` | `string` | Current bottom bar color in the #RRGGBB format. |
| `CloudStorage` | [`CloudStorage`](types.md#cloudstorage) | An object for controlling cloud storage. |
| `colorScheme` | `"light"` \| `"dark"` | The color scheme currently used in the Telegram app. Either “light” or “dark”. Also available as the CSS variable var(--tg-color-scheme). |
| `contentSafeAreaInset` | [`ContentSafeAreaInset`](types.md#contentsafeareainset) | **Bot API 8.0+** An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements. |
| `HapticFeedback` | [`HapticFeedback`](types.md#hapticfeedback) | An object for controlling haptic feedback. |
| `headerColor` | `string` | Current header color in the #RRGGBB format. |
| `initData` | `string` | A string with raw data transferred to the Web App, convenient for validating data. WARNING: Validate data from this field before using it on the bot's server. |
| `initDataUnsafe` | [`WebAppInitData`](types.md#webappinitdata) | An object with input data transferred to the Web App. WARNING: Data from this field should not be trusted. You should only use data from initData on the bot's server and only after it has been validated. |
| `isClosingConfirmationEnabled` | `boolean` | True, if the confirmation dialog is enabled while the user is trying to close the Web App. False, if the confirmation dialog is disabled. |
| `isExpanded` | `boolean` | True if the Web App is expanded to the maximum available height. False, if the Web App occupies part of the screen and can be expanded to the full height using the expand() method. |
| `isFullscreen` | `boolean` | **Bot API 8.0+** True, if the Mini App is currently being displayed in fullscreen mode. |
| `isVerticalSwipesEnabled` | `boolean` | `True`, if vertical swipes to close or minimize the Mini App are enabled. `False`, if vertical swipes to close or minimize the Mini App are disabled. In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header. |
| `MainButton` | [`BottomButton`](types.md#bottombutton) | An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface. |
| `platform` | `string` | The name of the platform of the user's Telegram app. |
| `safeAreaInset` | [`SafeAreaInset`](types.md#safeareainset) | **Bot API 8.0+** An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars. |
| `SecondaryButton` | [`BottomButton`](types.md#bottombutton) | An object for controlling the secondary button, which is displayed at the bottom of the Mini App in the Telegram interface. |
| `SettingsButton` | [`SettingsButton`](types.md#settingsbutton) | An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface. |
| `themeParams` | [`ThemeParams`](types.md#themeparams) | An object containing the current theme settings used in the Telegram app. |
| `version` | `string` | The version of the Bot API available in the user's Telegram app. |
| `viewportHeight` | `number` | The current height of the visible area of the Web App. Also available in CSS as the variable var(--tg-viewport-height). The application can display just the top part of the Web App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Web App to its maximum height, while the bot can do the same by calling the expand() method. As the position of the Web App changes, the current height value of the visible area will be updated in real time. Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window. It should not be used to pin interface elements to the bottom of the visible area. It's more appropriate to use the value of the viewportStableHeight field for this purpose. |
| `viewportStableHeight` | `number` | The height of the visible area of the Web App in its last stable state. Also available in CSS as a variable var(--tg-viewport-stable-height). The application can display just the top part of the Web App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Web App to its maximum height, while the bot can do the same by calling the expand() method. Unlike the value of viewportHeight, the value of viewportStableHeight does not change as the position of the Web App changes with user gestures or during animations. The value of viewportStableHeight will be updated after all gestures and animations are completed and the Web App reaches its final size. Note the event viewportChanged with the passed parameter isStateStable=true, which will allow you to track when the stable state of the height of the visible area changes. |

#### Methods

##### addToHomeScreen()

```ts
addToHomeScreen(): void
```

**Bot API 8.0+** A method that prompts the user to add the Mini App to
the home screen.

After successfully adding the icon, the `homeScreenAdded` event will be
triggered if supported by the device. Note that if the device cannot
determine the installation status, the event may not be received even
if the icon has been added.

###### Returns

`void`

##### checkHomeScreenStatus()

```ts
checkHomeScreenStatus(callback?): void
```

**Bot API 8.0+** A method that checks if adding to the home screen
is supported and if the Mini App has already been added.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | (`status`) => `void` | If an optional callback parameter was passed, the callback function will be called with a single argument **status**, which is a string indicating the home screen status. |

###### Returns

`void`

##### close()

```ts
close(): void
```

A method that closes the Web App.

###### Returns

`void`

##### closeScanQrPopup()

```ts
closeScanQrPopup(): void
```

A method that closes the native popup for scanning a QR code opened with
the showScanQrPopup method. Run it if you received valid data in the
event qrTextReceived.

###### Returns

`void`

##### disableClosingConfirmation()

```ts
disableClosingConfirmation(): void
```

A method that disables the confirmation dialog while the user is trying
to close the Web App.

###### Returns

`void`

##### disableVerticalSwipes()

```ts
disableVerticalSwipes(): void
```

**Bot API 7.7+** A method that disables vertical swipes to close or
minimize the Mini App. This method is useful if your Mini App uses swipe
gestures that may conflict with the gestures for minimizing and closing
the app.

###### Returns

`void`

##### downloadFile()

```ts
downloadFile(params, callback?): void
```

**Bot API 8.0+** A method that displays a native popup prompting the user to download a
file specified by the params argument of type DownloadFileParams.

If an optional callback parameter is provided, the callback function
will be called when the popup is closed, with the first argument as a
boolean indicating whether the user accepted the download request.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`DownloadFileParams`](types.md#downloadfileparams) |  |
| `callback`? | (`isAccepted`) => `unknown` |  |

###### Returns

`void`

##### enableClosingConfirmation()

```ts
enableClosingConfirmation(): void
```

A method that enables a confirmation dialog while the user is trying to
close the Web App.

###### Returns

`void`

##### enableVerticalSwipes()

```ts
enableVerticalSwipes(): void
```

**Bot API 7.7+** A method that enables vertical swipes to close or
minimize the Mini App. For user convenience, it is recommended to always
enable swipes unless they conflict with the Mini App's own gestures.

###### Returns

`void`

##### exitFullscreen()

```ts
exitFullscreen(): void
```

**Bot API 8.0+** A method that requests exiting fullscreen mode.

###### Returns

`void`

##### expand()

```ts
expand(): void
```

A method that expands the Web App to the maximum available height. To
find out if the Web App is expanded to the maximum height, refer to the
value of the Telegram.WebApp.isExpanded parameter

###### Returns

`void`

##### isVersionAtLeast()

```ts
isVersionAtLeast(version): boolean
```

Returns true if the user's app supports a version of the Bot API that is
equal to or higher than the version passed as the parameter.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `string` |

###### Returns

`boolean`

##### lockOrientation()

```ts
lockOrientation(): void
```

**Bot API 8.0+** A method that locks the Mini App’s orientation
to its current mode (either portrait or landscape). Once locked,
the orientation remains fixed, regardless of device rotation.
This is useful if a stable orientation is needed during specific interactions.

###### Returns

`void`

##### offEvent()

```ts
offEvent<T>(eventType, eventHandler): void
```

A method that deletes a previously set event handler.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`EventParams`](types.md#eventparams) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventType` | `T` |
| `eventHandler` | [`EventParams`](types.md#eventparams)\[`T`\] |

###### Returns

`void`

##### onEvent()

```ts
onEvent<T>(eventType, eventHandler): void
```

A method that sets the app event handler. Check the list of available
events.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`EventParams`](types.md#eventparams) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventType` | `T` |
| `eventHandler` | [`EventParams`](types.md#eventparams)\[`T`\] |

###### Returns

`void`

##### openInvoice()

```ts
openInvoice(url, callback?): void
```

A method that opens an invoice using the link url. The Web App will
 receive the event invoiceClosed when the invoice is closed. If an
 optional callback parameter was passed, the callback function will be
 called and the invoice status will be passed as the first argument.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `callback`? | (`status`) => `unknown` |

###### Returns

`void`

##### openLink()

```ts
openLink(url, options?): void
```

A method that opens a link in an external browser. The Web App will not
be closed. If the optional `options` parameter is passed, additional
preferences for opening the link can be specified.

Note that this method can be called only in response to user interaction
with the Web App interface (e.g., a click inside the Web App or on the
main button).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to be opened. |
| `options`? | [`OpenLinkOptions`](types.md#openlinkoptions) | Optional settings for opening the link. |

###### Returns

`void`

##### openTelegramLink()

```ts
openTelegramLink(url): void
```

A method that opens a telegram link inside Telegram app. The Web App will
be closed.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

`void`

##### readTextFromClipboard()

```ts
readTextFromClipboard(callback?): void
```

A method that requests text from the clipboard. The Web App will receive
the event clipboardTextReceived. If an optional callback parameter was
passed, the callback function will be called and the text from the
clipboard will be passed as the first argument.

Note: this method can be called only for Web Apps launched from the
attachment menu and only in response to a user interaction with the Web
App interface (e.g. a click inside the Web App or on the main button).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback`? | (`data`) => `void` |

###### Returns

`void`

##### ready()

```ts
ready(): void
```

A method that informs the Telegram app that the Web App is ready to be
displayed. It is recommended to call this method as early as possible, as
soon as all essential interface elements are loaded. Once this method is
called, the loading placeholder is hidden and the Web App is shown. If
the method is not called, the placeholder will be hidden only when the
page is fully loaded.

###### Returns

`void`

##### requestContact()

```ts
requestContact(callback?): void
```

A method that shows a native popup prompting the user for their phone
number.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | (`success`, `response`) => `unknown` | If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number. The second argument, contingent upon success, will be an object detailing the shared contact information or a cancellation response. |

###### Returns

`void`

##### requestEmojiStatusAccess()

```ts
requestEmojiStatusAccess(callback?): void
```

**Bot API 8.0+** A method that shows a native popup requesting permission
for the bot to manage user's emoji status.

If an optional callback parameter is passed, the callback function
will be called when the popup is closed and the first argument will
be a boolean indicating whether the user granted this access.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | (`isGranted`) => `unknown` | Optional callback function, called with a boolean indicating if access was granted. |

###### Returns

`void`

##### requestFullscreen()

```ts
requestFullscreen(): void
```

**Bot API 8.0+** A method that requests opening the Mini App in fullscreen mode.
Although the header is transparent in fullscreen mode, it is recommended that
the Mini App sets the header color using the setHeaderColor method. This color
helps determine a contrasting color for the status bar and other UI controls.

###### Returns

`void`

##### requestWriteAccess()

```ts
requestWriteAccess(callback?): void
```

A method that shows a native popup requesting permission for the bot to
send messages to the user.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | (`success`) => `unknown` | If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access. |

###### Returns

`void`

##### sendData()

```ts
sendData(data): void
```

A method used to send data to the bot. When this method is called, a
service message is sent to the bot containing the data data of the length
up to 4096 bytes, and the Web App is closed. See the field web_app_data
in the class Message.

This method is only available for Web Apps launched via a Keyboard
button.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |

###### Returns

`void`

##### setBackgroundColor()

```ts
setBackgroundColor(color): void
```

A method that sets the app background color in the `#RRGGBB` format or
you can use keywords bg_color, secondary_bg_color instead.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `string` & \{\} \| `"bg_color"` \| `"secondary_bg_color"` \| `"bottom_bar_bg_color"` |

###### Returns

`void`

##### setBottomBarColor()

```ts
setBottomBarColor(color): void
```

A method that sets the app's bottom bar color in the #RRGGBB format.
You can also use the keywords bg_color, secondary_bg_color and bottom_bar_bg_color.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `string` & \{\} \| `"bg_color"` \| `"secondary_bg_color"` |

###### Returns

`void`

##### setEmojiStatus()

```ts
setEmojiStatus(
   customEmojiId, 
   params?, 
   callback?): void
```

**Bot API 8.0+** A method that opens a dialog allowing the user
to set the specified custom emoji as their status. An optional
params argument of type `EmojiStatusParams` specifies additional settings,
such as duration. If an optional callback parameter is provided,
the callback function will be called with a boolean as the first argument,
indicating whether the status was set.

Note: this method opens a native dialog and cannot be used to set the emoji
status without manual user interaction. For fully programmatic changes,
you should instead use the Bot API method `setUserEmojiStatus` after
obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customEmojiId` | `string` | The ID of the custom emoji to set as status. |
| `params`? | [`EmojiStatusParams`](types.md#emojistatusparams) | Optional settings for the status, such as duration. |
| `callback`? | (`isSet`) => `unknown` | Optional callback function, called with a boolean indicating if the status was set. |

###### Returns

`void`

##### setHeaderColor()

```ts
setHeaderColor(color): void
```

A method that sets the app header color in the `#RRGGBB` format. You can
also use keywords bg_color and secondary_bg_color.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `string` & \{\} \| `"bg_color"` \| `"secondary_bg_color"` |

###### Returns

`void`

##### shareMessage()

```ts
shareMessage(msgId, callback?): void
```

**Bot API 8.0+** A method that opens a dialog allowing the user
to share a message provided by the bot. If an optional callback
parameter is provided, the callback function will be called with
a boolean as the first argument, indicating whether the message
was successfully sent. The message id passed to this method must
belong to a `PreparedInlineMessage` previously obtained via the
Bot API method `savePreparedInlineMessage`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msgId` | `string` |  |
| `callback`? | (`isSent`) => `unknown` | Optional callback function, called with a boolean indicating if the message was sent. |

###### Returns

`void`

##### shareToStory()

```ts
shareToStory(media_url, params?): void
```

A method that opens the native story editor with the media specified in
the media_url parameter as an HTTPS URL. An optional params argument of
the type StoryShareParams describes additional sharing settings.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `media_url` | `string` |
| `params`? | [`StoryShareParams`](types.md#storyshareparams) |

###### Returns

`void`

##### showAlert()

```ts
showAlert(message, callback?): void
```

A method that shows message in a simple alert with a 'Close' button. If
an optional callback parameter was passed, the callback function will be
called when the popup is closed.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `callback`? | () => `void` |

###### Returns

`void`

##### showConfirm()

```ts
showConfirm(message, callback?): void
```

A method that shows message in a simple confirmation window with 'OK' and
'Cancel' buttons. If an optional callback parameter was passed, the
callback function will be called when the popup is closed and the first
argument will be a boolean indicating whether the user pressed the 'OK'
button.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `callback`? | (`ok`) => `void` |

###### Returns

`void`

##### showPopup()

```ts
showPopup(params, callback?): void
```

A method that shows a native popup described by the params argument of
the type PopupParams. The Web App will receive the event popupClosed when
the popup is closed. If an optional callback parameter was passed, the
callback function will be called and the field id of the pressed button
will be passed as the first argument.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`PopupParams`](types.md#popupparams) |
| `callback`? | (`button_id`) => `void` |

###### Returns

`void`

##### showScanQrPopup()

```ts
showScanQrPopup(params, callback?): void
```

A method that shows a native popup for scanning a QR code described by
the params argument of the type ScanQrPopupParams. The Web App will
receive the event qrTextReceived every time the scanner catches a code
with text data. If an optional callback parameter was passed, the
callback function will be called and the text from the QR code will be
passed as the first argument. Returning true inside this callback
function causes the popup to be closed. Starting from **Bot API 7.7**,
the Mini App will receive the scanQrPopupClosed event if the user closes
the native popup for scanning a QR code.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`ScanQrPopupParams`](types.md#scanqrpopupparams) |
| `callback`? | (`data`) => `void` |

###### Returns

`void`

##### switchInlineQuery()

```ts
switchInlineQuery(query, choose_chat_types?): void
```

A method that inserts the bot's username and the specified inline query
in the current chat's input field. Query may be empty, in which case only
the bot's username will be inserted. If an optional choose_chat_types
parameter was passed, the client prompts the user to choose a specific
chat, then opens that chat and inserts the bot's username and the
specified inline query in the input field. You can specify which types of
chats the user will be able to choose from. It can be one or more of the
following types: users, bots, groups, channels.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `choose_chat_types`? | (`"groups"` \| `"users"` \| `"bots"` \| `"channels"`)[] |

###### Returns

`void`

##### unlockOrientation()

```ts
unlockOrientation(): void
```

**Bot API 8.0+** A method that unlocks the Mini App’s orientation,
allowing it to follow the device's rotation freely. Use this to restore
automatic orientation adjustments based on the device orientation.

###### Returns

`void`

***

### WebAppChat

This object represents a chat.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| `photo_url?` | `string` | URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu. |
| `title` | `string` | Title of the chat |
| `type` | `"channel"` \| `"group"` \| `"supergroup"` | Type of chat, can be either “group”, “supergroup” or “channel” |
| `username?` | `string` | Username of the chat |

***

### WebAppInitData

This object contains data that is transferred to the Web App when it is
opened. It is empty if the Web App was launched from a keyboard button.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `auth_date` | `number` | Unix time when the form was opened. |
| `can_send_after?` | `number` | Time in seconds, after which a message can be sent via the answerWebAppQuery method. |
| `chat?` | [`WebAppChat`](types.md#webappchat) | An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Web Apps launched via the attachment menu. |
| `chat_instance?` | `string` | Global identifier, uniquely corresponding to the chat from which the Web App was opened. Returned only for Web Apps launched from a direct link. |
| `chat_type?` | `string` | Type of the chat from which the Web App was opened. Can be either “sender” for a private chat with the user opening the link, “private”, “group”, “supergroup”, or “channel”. Returned only for Web Apps launched from direct links. |
| `hash` | `string` | A hash of all passed parameters, which the bot server can use to check their validity. |
| `query_id?` | `string` | A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method. |
| `receiver?` | [`WebAppUser`](types.md#webappuser) | An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for Web Apps launched via the attachment menu. |
| `signature` | `string` | A signature of all passed parameters (except hash), which the third party can use to [check their validity](https://core.telegram.org/bots/webapps#validating-data-for-third-party-use). |
| `start_param?` | `string` | The value of the startattach parameter, passed via link. Only returned for Web Apps when launched from the attachment menu via link. The value of the start_param parameter will also be passed in the GET-parameter tgWebAppStartParam, so the Web App can load the correct interface right away. |
| `user?` | [`WebAppUser`](types.md#webappuser) | An object containing data about the current user. |

***

### WebAppUser

This object contains the data of the Web App user.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `added_to_attachment_menu?` | `boolean` | True, if this user added the bot to the attachment menu. |
| `allows_write_to_pm?` | `boolean` | True, if this user allowed the bot to message them. |
| `first_name` | `string` | First name of the user or bot. |
| `id` | `number` | A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a double-precision float type is safe for storing this identifier. |
| `is_bot?` | `boolean` | True, if this user is a bot. Returns in the receiver field only. |
| `is_premium?` | `boolean` | True, if this user is a Telegram Premium user. |
| `language_code?` | `string` | IETF language tag of the user's language. Returns in user field only. |
| `last_name?` | `string` | Last name of the user or bot. |
| `photo_url?` | `string` | URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu. |
| `username?` | `string` | Username of the user or bot. |

## Type Aliases

### AccelerometerChangedCallback()

```ts
type AccelerometerChangedCallback: () => void;
```

#### Returns

`void`

***

### AccelerometerFailedCallback()

```ts
type AccelerometerFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: `"UNSUPPORTED"`; \} |
| `eventData.error` | `"UNSUPPORTED"` |

#### Returns

`void`

***

### AccelerometerStartedCallback()

```ts
type AccelerometerStartedCallback: () => void;
```

#### Returns

`void`

***

### AccelerometerStoppedCallback()

```ts
type AccelerometerStoppedCallback: () => void;
```

#### Returns

`void`

***

### ActivatedCallback()

```ts
type ActivatedCallback: () => void;
```

#### Returns

`void`

***

### BackButtonClickedCallback()

```ts
type BackButtonClickedCallback: () => void;
```

#### Returns

`void`

***

### BiometricAuthenticateCallback()

```ts
type BiometricAuthenticateCallback: (isAuthenticated, biometricToken?) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isAuthenticated` | `boolean` |
| `biometricToken`? | `string` |

#### Returns

`void`

***

### BiometricAuthRequestedCallback()

```ts
type BiometricAuthRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `biometricToken`: `string`; `isAuthenticated`: `boolean`; \} |
| `eventData.biometricToken`? | `string` |
| `eventData.isAuthenticated` | `boolean` |

#### Returns

`void`

***

### BiometricManagerUpdatedCallback()

```ts
type BiometricManagerUpdatedCallback: () => void;
```

#### Returns

`void`

***

### BiometricRequestAccessCallback()

```ts
type BiometricRequestAccessCallback: (isAccessGranted) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isAccessGranted` | `boolean` |

#### Returns

`void`

***

### BiometricTokenUpdatedCallback()

```ts
type BiometricTokenUpdatedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `isUpdated`: `boolean`; \} |
| `eventData.isUpdated` | `boolean` |

#### Returns

`void`

***

### BiometricUpdateBiometricTokenCallback()

```ts
type BiometricUpdateBiometricTokenCallback: (applied) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `applied` | `boolean` |

#### Returns

`void`

***

### BiometryType

```ts
type BiometryType: "finger" | "face" | "unknown" | string;
```

***

### ChatType

```ts
type ChatType: 
  | "sender"
  | "private"
  | "group"
  | "supergroup"
  | "channel"
  | string;
```

Known type of chat.

***

### ClipboardTextReceivedCallback()

```ts
type ClipboardTextReceivedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `data`: `string` \| `null`; \} |
| `eventData.data` | `string` \| `null` |

#### Returns

`void`

***

### CloudStorageGetItemCallback()

```ts
type CloudStorageGetItemCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | `string` |

#### Returns

`unknown`

***

### CloudStorageGetItemsCallback()

```ts
type CloudStorageGetItemsCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | [`CloudStorageItems`](types.md#cloudstorageitems) |

#### Returns

`unknown`

***

### CloudStorageGetKeysCallback()

```ts
type CloudStorageGetKeysCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | `string`[] |

#### Returns

`unknown`

***

### CloudStorageRemoveItemCallback()

```ts
type CloudStorageRemoveItemCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | `boolean` |

#### Returns

`unknown`

***

### CloudStorageRemoveItemsCallback()

```ts
type CloudStorageRemoveItemsCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | `boolean` |

#### Returns

`unknown`

***

### CloudStorageSetItemCallback()

```ts
type CloudStorageSetItemCallback: (error, result?) => unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `string` \| `null` |
| `result`? | `boolean` |

#### Returns

`unknown`

***

### Color

```ts
type Color: string | false;
```

***

### Contact

```ts
type Contact: {
  first_name: string;
  last_name: string;
  phone_number: string;
  user_id: number;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `first_name` | `string` | User's first name. |
| `last_name`? | `string` | Optional. User's last name. |
| `phone_number` | `string` | User's phone number. |
| `user_id` | `number` | Unique identifier of the user. |

***

### ContactRequestedCallback()

```ts
type ContactRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | [`RequestContactResponse`](types.md#requestcontactresponse) |

#### Returns

`void`

***

### ContentSafeAreaChangedCallback()

```ts
type ContentSafeAreaChangedCallback: () => void;
```

#### Returns

`void`

***

### CustomMethodInvokedCallback()

```ts
type CustomMethodInvokedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `req_id`: `string`; `result`: `Record`\<`string`, `unknown`\>; \} |
| `eventData.req_id` | `string` |
| `eventData.result` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

***

### DeactivatedCallback()

```ts
type DeactivatedCallback: () => void;
```

#### Returns

`void`

***

### DeviceOrientationChangedCallback()

```ts
type DeviceOrientationChangedCallback: () => void;
```

#### Returns

`void`

***

### DeviceOrientationFailedCallback()

```ts
type DeviceOrientationFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: `"UNSUPPORTED"`; \} |
| `eventData.error` | `"UNSUPPORTED"` |

#### Returns

`void`

***

### DeviceOrientationStartedCallback()

```ts
type DeviceOrientationStartedCallback: () => void;
```

#### Returns

`void`

***

### DeviceOrientationStoppedCallback()

```ts
type DeviceOrientationStoppedCallback: () => void;
```

#### Returns

`void`

***

### DownloadFileParams

```ts
type DownloadFileParams: {
  file_name: string;
  url: string;
};
```

This object describes the parameters for the file download request.

Note: To ensure consistent file download behavior across platforms, 
it is recommended to include the HTTP header `Content-Disposition: attachment; filename="<file_name>"` 
in the server response. This header helps prompt the download action 
and suggests a file name for the downloaded file, especially on web platforms 
where forced downloads cannot always be guaranteed.

#### Type declaration

| Name | Type |
| ------ | ------ |
| `file_name` | `string` |
| `url` | `string` |

***

### EmojiStatusAccessRequestedCallback()

```ts
type EmojiStatusAccessRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `status`: `"allowed"` \| `"cancelled"`; \} |
| `eventData.status` | `"allowed"` \| `"cancelled"` |

#### Returns

`void`

***

### EmojiStatusFailedCallback()

```ts
type EmojiStatusFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: \| `"UNSUPPORTED"` \| `"SUGGESTED_EMOJI_INVALID"` \| `"DURATION_INVALID"` \| `"USER_DECLINED"` \| `"SERVER_ERROR"` \| `"UNKNOWN_ERROR"`; \} |
| `eventData.error` | \| `"UNSUPPORTED"` \| `"SUGGESTED_EMOJI_INVALID"` \| `"DURATION_INVALID"` \| `"USER_DECLINED"` \| `"SERVER_ERROR"` \| `"UNKNOWN_ERROR"` |

#### Returns

`void`

***

### EmojiStatusParams

```ts
type EmojiStatusParams: {
  duration: number;
};
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `duration`? | `number` | Duration in seconds for how long the emoji status should last. |

***

### EmojiStatusSetCallback()

```ts
type EmojiStatusSetCallback: () => void;
```

#### Returns

`void`

***

### EventNames

```ts
type EventNames: keyof EventParams;
```

***

### EventParams

```ts
type EventParams: {
  accelerometerChanged: AccelerometerChangedCallback;
  accelerometerFailed: AccelerometerFailedCallback;
  accelerometerStarted: AccelerometerStartedCallback;
  accelerometerStopped: AccelerometerStoppedCallback;
  activated: ActivatedCallback;
  backButtonClicked: BackButtonClickedCallback;
  clipboardTextReceived: ClipboardTextReceivedCallback;
  contactRequested: ContactRequestedCallback;
  contentSafeAreaChanged: ContentSafeAreaChangedCallback;
  customMethodInvoked: CustomMethodInvokedCallback;
  deactivated: DeactivatedCallback;
  deviceOrientationChanged: DeviceOrientationChangedCallback;
  deviceOrientationFailed: DeviceOrientationFailedCallback;
  deviceOrientationStarted: DeviceOrientationStartedCallback;
  deviceOrientationStopped: DeviceOrientationStoppedCallback;
  emojiStatusAccessRequested: EmojiStatusAccessRequestedCallback;
  emojiStatusFailed: EmojiStatusFailedCallback;
  emojiStatusSet: EmojiStatusSetCallback;
  fileDownloadRequested: FileDownloadRequestedCallback;
  fullscreenChanged: FullscreenChangedCallback;
  fullscreenFailed: FullscreenFailedCallback;
  gyroscopeChanged: GyroscopeChangedCallback;
  gyroscopeFailed: GyroscopeFailedCallback;
  gyroscopeStarted: GyroscopeStartedCallback;
  gyroscopeStopped: GyroscopeStoppedCallback;
  homeScreenAdded: HomeScreenAddedCallback;
  homeScreenChecked: HomeScreenCheckedCallback;
  invoiceClosed: InvoiceClosedCallback;
  locationManagerUpdated: LocationManagerUpdatedCallback;
  locationRequested: LocationRequestedCallback;
  mainButtonClicked: MainButtonClickedCallback;
  popupClosed: PopupClosedCallback;
  qrTextReceived: QrTextReceivedCallback;
  safeAreaChanged: SafeAreaChangedCallback;
  scanQrPopupClosed: ScanQrPopupClosedCallback;
  secondaryButtonClicked: SecondaryButtonClickedCallback;
  settingsButtonClicked: SettingsButtonClickedCallback;
  shareMessageFailed: ShareMessageFailedCallback;
  shareMessageSent: ShareMessageSentCallback;
  themeChanged: ThemeChangedCallback;
  viewportChanged: ViewportChangedCallback;
  writeAccessRequested: WriteAccessRequestedCallback;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `accelerometerChanged` | [`AccelerometerChangedCallback`](types.md#accelerometerchangedcallback) |
| `accelerometerFailed` | [`AccelerometerFailedCallback`](types.md#accelerometerfailedcallback) |
| `accelerometerStarted` | [`AccelerometerStartedCallback`](types.md#accelerometerstartedcallback) |
| `accelerometerStopped` | [`AccelerometerStoppedCallback`](types.md#accelerometerstoppedcallback) |
| `activated` | [`ActivatedCallback`](types.md#activatedcallback) |
| `backButtonClicked` | [`BackButtonClickedCallback`](types.md#backbuttonclickedcallback) |
| `clipboardTextReceived` | [`ClipboardTextReceivedCallback`](types.md#clipboardtextreceivedcallback) |
| `contactRequested` | [`ContactRequestedCallback`](types.md#contactrequestedcallback) |
| `contentSafeAreaChanged` | [`ContentSafeAreaChangedCallback`](types.md#contentsafeareachangedcallback) |
| `customMethodInvoked` | [`CustomMethodInvokedCallback`](types.md#custommethodinvokedcallback) |
| `deactivated` | [`DeactivatedCallback`](types.md#deactivatedcallback) |
| `deviceOrientationChanged` | [`DeviceOrientationChangedCallback`](types.md#deviceorientationchangedcallback) |
| `deviceOrientationFailed` | [`DeviceOrientationFailedCallback`](types.md#deviceorientationfailedcallback) |
| `deviceOrientationStarted` | [`DeviceOrientationStartedCallback`](types.md#deviceorientationstartedcallback) |
| `deviceOrientationStopped` | [`DeviceOrientationStoppedCallback`](types.md#deviceorientationstoppedcallback) |
| `emojiStatusAccessRequested` | [`EmojiStatusAccessRequestedCallback`](types.md#emojistatusaccessrequestedcallback) |
| `emojiStatusFailed` | [`EmojiStatusFailedCallback`](types.md#emojistatusfailedcallback) |
| `emojiStatusSet` | [`EmojiStatusSetCallback`](types.md#emojistatussetcallback) |
| `fileDownloadRequested` | [`FileDownloadRequestedCallback`](types.md#filedownloadrequestedcallback) |
| `fullscreenChanged` | [`FullscreenChangedCallback`](types.md#fullscreenchangedcallback) |
| `fullscreenFailed` | [`FullscreenFailedCallback`](types.md#fullscreenfailedcallback) |
| `gyroscopeChanged` | [`GyroscopeChangedCallback`](types.md#gyroscopechangedcallback) |
| `gyroscopeFailed` | [`GyroscopeFailedCallback`](types.md#gyroscopefailedcallback) |
| `gyroscopeStarted` | [`GyroscopeStartedCallback`](types.md#gyroscopestartedcallback) |
| `gyroscopeStopped` | [`GyroscopeStoppedCallback`](types.md#gyroscopestoppedcallback) |
| `homeScreenAdded` | [`HomeScreenAddedCallback`](types.md#homescreenaddedcallback) |
| `homeScreenChecked` | [`HomeScreenCheckedCallback`](types.md#homescreencheckedcallback) |
| `invoiceClosed` | [`InvoiceClosedCallback`](types.md#invoiceclosedcallback) |
| `locationManagerUpdated` | [`LocationManagerUpdatedCallback`](types.md#locationmanagerupdatedcallback) |
| `locationRequested` | [`LocationRequestedCallback`](types.md#locationrequestedcallback) |
| `mainButtonClicked` | [`MainButtonClickedCallback`](types.md#mainbuttonclickedcallback) |
| `popupClosed` | [`PopupClosedCallback`](types.md#popupclosedcallback) |
| `qrTextReceived` | [`QrTextReceivedCallback`](types.md#qrtextreceivedcallback) |
| `safeAreaChanged` | [`SafeAreaChangedCallback`](types.md#safeareachangedcallback) |
| `scanQrPopupClosed` | [`ScanQrPopupClosedCallback`](types.md#scanqrpopupclosedcallback) |
| `secondaryButtonClicked` | [`SecondaryButtonClickedCallback`](types.md#secondarybuttonclickedcallback) |
| `settingsButtonClicked` | [`SettingsButtonClickedCallback`](types.md#settingsbuttonclickedcallback) |
| `shareMessageFailed` | [`ShareMessageFailedCallback`](types.md#sharemessagefailedcallback) |
| `shareMessageSent` | [`ShareMessageSentCallback`](types.md#sharemessagesentcallback) |
| `themeChanged` | [`ThemeChangedCallback`](types.md#themechangedcallback) |
| `viewportChanged` | [`ViewportChangedCallback`](types.md#viewportchangedcallback) |
| `writeAccessRequested` | [`WriteAccessRequestedCallback`](types.md#writeaccessrequestedcallback) |

***

### FileDownloadRequestedCallback()

```ts
type FileDownloadRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `status`: `"downloading"` \| `"cancelled"`; \} |
| `eventData.status` | `"downloading"` \| `"cancelled"` |

#### Returns

`void`

***

### FullscreenChangedCallback()

```ts
type FullscreenChangedCallback: () => void;
```

#### Returns

`void`

***

### FullscreenError

```ts
type FullscreenError: "UNSUPPORTED" | "ALREADY_FULLSCREEN" | string;
```

***

### FullscreenFailedCallback()

```ts
type FullscreenFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: [`FullscreenError`](types.md#fullscreenerror); \} |
| `eventData.error` | [`FullscreenError`](types.md#fullscreenerror) |

#### Returns

`void`

***

### GyroscopeChangedCallback()

```ts
type GyroscopeChangedCallback: () => void;
```

#### Returns

`void`

***

### GyroscopeFailedCallback()

```ts
type GyroscopeFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: `"UNSUPPORTED"`; \} |
| `eventData.error` | `"UNSUPPORTED"` |

#### Returns

`void`

***

### GyroscopeStartedCallback()

```ts
type GyroscopeStartedCallback: () => void;
```

#### Returns

`void`

***

### GyroscopeStoppedCallback()

```ts
type GyroscopeStoppedCallback: () => void;
```

#### Returns

`void`

***

### HomeScreenAddedCallback()

```ts
type HomeScreenAddedCallback: () => void;
```

#### Returns

`void`

***

### HomeScreenCheckedCallback()

```ts
type HomeScreenCheckedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `status`: [`HomeScreenStatus`](types.md#homescreenstatus); \} |
| `eventData.status` | [`HomeScreenStatus`](types.md#homescreenstatus) |

#### Returns

`void`

***

### HomeScreenStatus

```ts
type HomeScreenStatus: "unsupported" | "unknown" | "added" | "missed";
```

***

### InvoiceClosedCallback()

```ts
type InvoiceClosedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `status`: [`InvoiceStatus`](types.md#invoicestatus); `url`: `string`; \} |
| `eventData.status` | [`InvoiceStatus`](types.md#invoicestatus) |
| `eventData.url` | `string` |

#### Returns

`void`

***

### InvoiceStatus

```ts
type InvoiceStatus: 
  | "paid"
  | "failed"
  | "pending"
  | "cancelled"
  | string;
```

***

### LocationData

```ts
type LocationData: {
  altitude: number;
  course: number;
  course_accuracy: number;
  horizontal_accuracy: number;
  latitude: number;
  longitude: number;
  speed: number;
  speed_accuracy: number;
  vertical_accuracy: number;
};
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `altitude` | `number` |
| `course` | `number` |
| `course_accuracy` | `number` |
| `horizontal_accuracy` | `number` |
| `latitude` | `number` |
| `longitude` | `number` |
| `speed` | `number` |
| `speed_accuracy` | `number` |
| `vertical_accuracy` | `number` |

***

### LocationManagerUpdatedCallback()

```ts
type LocationManagerUpdatedCallback: () => void;
```

#### Returns

`void`

***

### LocationRequestedCallback()

```ts
type LocationRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `locationData`: [`LocationData`](types.md#locationdata); \} |
| `eventData.locationData` | [`LocationData`](types.md#locationdata) |

#### Returns

`void`

***

### MainButtonClickedCallback()

```ts
type MainButtonClickedCallback: () => void;
```

#### Returns

`void`

***

### OpenLinkBrowser

```ts
type OpenLinkBrowser: 
  | "google-chrome"
  | "chrome"
  | "mozilla-firefox"
  | "firefox"
  | "microsoft-edge"
  | "edge"
  | "opera"
  | "opera-mini"
  | "brave"
  | "brave-browser"
  | "duckduckgo"
  | "duckduckgo-browser"
  | "samsung"
  | "samsung-browser"
  | "vivaldi"
  | "vivaldi-browser"
  | "kiwi"
  | "kiwi-browser"
  | "uc"
  | "uc-browser"
  | "tor"
  | "tor-browser";
```

Supported browser values for the `tryBrowser` option in `OpenLinkOptions`.

***

### Platform

```ts
type Platform: 
  | "android"
  | "android_x"
  | "ios"
  | "macos"
  | "tdesktop"
  | "unigram"
  | "unknown"
  | "web"
  | "weba"
  | string;
```

Telegram application platform name.

***

### PopupButton

```ts
type PopupButton: {
  id: string;
  text: string;
  type:   | "default"
     | "ok"
     | "close"
     | "cancel"
     | "destructive";
 } & {
  text: string;
  type: "default" | "destructive";
 } | {
  text: string;
  type: "ok" | "close" | "cancel";
};
```

This object describes the native popup button.

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `id`? | `string` | Identifier of the button, 0-64 characters. Set to empty string by default. If the button is pressed, its id is returned in the callback and the popupClosed event. |
| `text`? | `string` | The text to be displayed on the button, 0-64 characters. Required if type is default or destructive. Irrelevant for other types. |
| `type`? | \| `"default"` \| `"ok"` \| `"close"` \| `"cancel"` \| `"destructive"` | Type of the button. Set to default by default. Can be one of these values: - `default`, a button with the default style, - `ok`, a button with the localized text “OK”, - `close`, a button with the localized text “Close”, - `cancel`, a button with the localized text “Cancel”, - `destructive`, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.). |

***

### PopupClosedCallback()

```ts
type PopupClosedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `button_id`: `string` \| `null`; \} |
| `eventData.button_id` | `string` \| `null` |

#### Returns

`void`

***

### QrTextReceivedCallback()

```ts
type QrTextReceivedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `data`: `string`; \} |
| `eventData.data` | `string` |

#### Returns

`void`

***

### RequestContactResponse

```ts
type RequestContactResponse: RequestContactResponseSent | RequestContactResponseCancelled;
```

***

### RGB

```ts
type RGB: `#${string}`;
```

Color in format #RRGGBB.

***

### RGBShort

```ts
type RGBShort: `#${string}`;
```

Color in format #RGB.

***

### SafeAreaChangedCallback()

```ts
type SafeAreaChangedCallback: () => void;
```

#### Returns

`void`

***

### ScanQrPopupClosedCallback()

```ts
type ScanQrPopupClosedCallback: () => void;
```

#### Returns

`void`

***

### SecondaryButtonClickedCallback()

```ts
type SecondaryButtonClickedCallback: () => void;
```

#### Returns

`void`

***

### SettingsButtonClickedCallback()

```ts
type SettingsButtonClickedCallback: () => void;
```

#### Returns

`void`

***

### ShareMessageFailedCallback()

```ts
type ShareMessageFailedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `error`: \| `"UNSUPPORTED"` \| `"MESSAGE_EXPIRED"` \| `"MESSAGE_SEND_FAILED"` \| `"USER_DECLINED"` \| `"UNKNOWN_ERROR"`; \} |
| `eventData.error` | \| `"UNSUPPORTED"` \| `"MESSAGE_EXPIRED"` \| `"MESSAGE_SEND_FAILED"` \| `"USER_DECLINED"` \| `"UNKNOWN_ERROR"` |

#### Returns

`void`

***

### ShareMessageSentCallback()

```ts
type ShareMessageSentCallback: () => void;
```

#### Returns

`void`

***

### ThemeChangedCallback()

```ts
type ThemeChangedCallback: () => void;
```

#### Returns

`void`

***

### ThemeParamsKey

```ts
type ThemeParamsKey: 
  | "accentTextColor"
  | "bgColor"
  | "buttonColor"
  | "buttonTextColor"
  | "bottomBarBgColor"
  | "destructiveTextColor"
  | "headerBgColor"
  | "hintColor"
  | "linkColor"
  | "secondaryBgColor"
  | "sectionBgColor"
  | "sectionHeaderTextColor"
  | "sectionSeparatorColor"
  | "subtitleTextColor"
  | "textColor";
```

***

### Version

```ts
type Version: string;
```

Telegram Mini Apps version in format like "\d+.\d+".

#### Example

```ts
"7.0"
```

***

### ViewportChangedCallback()

```ts
type ViewportChangedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `isStateStable`: `boolean`; \} |
| `eventData.isStateStable` | `boolean` |

#### Returns

`void`

***

### WriteAccessRequestedCallback()

```ts
type WriteAccessRequestedCallback: (eventData) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventData` | \{ `status`: [`WriteAccessRequestedStatus`](types.md#writeaccessrequestedstatus); \} |
| `eventData.status` | [`WriteAccessRequestedStatus`](types.md#writeaccessrequestedstatus) |

#### Returns

`void`

***

### WriteAccessRequestedStatus

```ts
type WriteAccessRequestedStatus: "allowed" | "cancelled" | string;
```
