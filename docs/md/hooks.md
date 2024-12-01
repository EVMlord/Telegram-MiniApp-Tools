[**Telegram MiniApp Tools v0.1.1**](README.md)

***

[Home](README.md) / hooks

# hooks

## Functions

### useAddIconToHomeScreen()

```ts
function useAddIconToHomeScreen(): {
  addToHomeScreen: () => void;
  status: HomeScreenStatus;
}
```

A hook that leverages the `addToHomeScreen` and `checkHomeScreenStatus` methods,
as well as the `homeScreenAdded` and `homeScreenChecked` events provided by the Telegram Web App.

This hook will help you manage the home screen shortcut functionality in your Mini App.

#### Returns

```ts
{
  addToHomeScreen: () => void;
  status: HomeScreenStatus;
}
```

| Name | Type |
| ------ | ------ |
| `addToHomeScreen` | () => `void` |
| `status` | [`HomeScreenStatus`](types.md#homescreenstatus) |

***

### useDetectFullscreen()

```ts
function useDetectFullscreen(): {
  error: null | string;
  exitFullscreen: () => void;
  isFullscreen: boolean;
  requestFullscreen: () => void;
}
```

A hook that utilizes the `webApp.isFullscreen` boolean,
listens for the `fullscreenChanged` and `fullscreenFailed` events,
and provides `requestFullscreen` and `exitFullscreen` functions.

This hook can be integrated into your settings modal,
and used to manage fullscreen behavior.

#### Returns

```ts
{
  error: null | string;
  exitFullscreen: () => void;
  isFullscreen: boolean;
  requestFullscreen: () => void;
}
```

| Name | Type |
| ------ | ------ |
| `error` | `null` \| `string` |
| `exitFullscreen` | () => `void` |
| `isFullscreen` | `boolean` |
| `requestFullscreen` | () => `void` |
