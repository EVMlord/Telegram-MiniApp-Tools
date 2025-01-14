[**Telegram MiniApp Tools v0.2.10-beta.3**](README.md)

***

[Home](README.md) / index

# index

The library provides direct access to the Telegram WebApp and environment variables.

## Example

```typescript
import telegram, { webApp } from "telegram-miniapp-tools";

console.log(webApp.initData);
console.log(telegram);
```

## Variables

### default

```ts
const default: Telegram;
```

Represents the Telegram global object available on the `window`.

Provides access to Telegram Web App features and methods.

#### See

https://core.telegram.org/bots/webapps

***

### webApp

```ts
const webApp: WebApp = telegram.WebApp;
```

Represents the Telegram Web App instance.

Provides methods and properties specific to the Web App interface.

#### See

https://core.telegram.org/bots/webapps
