import { webApp } from "./dist/dts/index.js";
import type { InvoiceStatus } from "./dist/dts/types/telegram-web-app.js";

webApp.ready();

if (!webApp.isExpanded) {
  webApp.expand(); // $ExpectType void
}

const mainButton = webApp.MainButton; // $ExpectType BottomButton

mainButton.text =
  (webApp.initDataUnsafe.user?.first_name ?? "you") + " r 2 close";

mainButton.onClick(() => {
  webApp.close();
});

const secondaryButton = webApp.SecondaryButton; // $ExpectType BottomButton

secondaryButton.text =
  (webApp.initDataUnsafe.user?.last_name ?? "you") + " r 2 expand";

secondaryButton.onClick(() => {
  webApp.expand();
});

webApp.onEvent("viewportChanged", (e) => {
  if (e.isStateStable) console.log("Done at", webApp.viewportHeight);
  else console.log("Changing, currently at ", webApp.viewportHeight);
});

webApp.showPopup(
  {
    message: "Hello",
    buttons: [{ type: "default", text: "Button text", id: "btn_id" }],
  },
  (btn_id) => console.log(btn_id)
);

webApp.onEvent("popupClosed", (e) => {
  console.log(e.button_id);
});

webApp.switchInlineQuery("query", ["users"]);

webApp.setHeaderColor("#ff0010");
webApp.setHeaderColor("bg_color");

webApp.CloudStorage.setItem("key", "value", (err, success): void => {
  if (err) console.error(err);
  if (success) {
    console.log("success");
  }
});

webApp.CloudStorage.getItem("key", (err, val) => {
  if (err) console.error(err);
  if (val) {
    const test = val; // $ExpectType string
    console.log(test);
  }
});

webApp.CloudStorage.getItems(["key1", "key2"], (err, vals) => {
  if (err) console.error(err);
  if (vals) {
    const test = vals; // $ExpectType Record<string, string>
    console.log(test);
  }
});

webApp.CloudStorage.getKeys((err, keys) => {
  if (err) console.error(err);
  if (keys) {
    const test = keys; // $ExpectType string[]
    console.log(test);
  }
});

webApp.requestWriteAccess((success) => {
  const test = success; // $ExpectType boolean
  console.log(test);
});

webApp.onEvent("writeAccessRequested", ({ status }) => {
  console.log(status);
});

webApp.SettingsButton.show();

webApp.requestContact((success, req) => {
  console.log(success);
  if (req.status === "sent") {
    // no error
    req.response;
  } else {
    // @ts-expect-error
    req.response;
    req.status; // $ExpectType "cancelled"
  }
});

webApp.onEvent("contactRequested", (req) => {
  if (req.status === "sent") {
    // no error
    req.response;
  } else {
    // @ts-expect-error
    req.response;
    req.status; // $ExpectType "cancelled"
  }
});

webApp.BiometricManager.init(() => console.log("init"));
webApp.BiometricManager.openSettings();

webApp.isVerticalSwipesEnabled; // $ExpectType boolean
webApp.enableVerticalSwipes();
webApp.disableVerticalSwipes();
webApp.shareToStory("url", {
  text: "txt",
  widget_link: { name: "name", url: "url" },
});

webApp.openInvoice("url", (status: InvoiceStatus) => {
  const test = status; // $ExpectType "paid" | "cancelled" | "failed" | "pending"
  console.log(test);
});
