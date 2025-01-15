"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./index.js");
var app = index_js_1.webApp;
app.ready();
if (!app.isExpanded) {
    app.expand(); // $ExpectType void
}
var mainButton = app.MainButton; // $ExpectType BottomButton
mainButton.text = ((_b = (_a = app.initDataUnsafe.user) === null || _a === void 0 ? void 0 : _a.first_name) !== null && _b !== void 0 ? _b : "you") + " r 2 close";
mainButton.onClick(function () {
    app.close();
});
// mainButton.onClick(() => {
//   return () => {
//     app.close();
//   };
// });
var secondaryButton = app.SecondaryButton; // $ExpectType BottomButton
secondaryButton.text =
    ((_d = (_c = app.initDataUnsafe.user) === null || _c === void 0 ? void 0 : _c.last_name) !== null && _d !== void 0 ? _d : "you") + " r 2 expand";
secondaryButton.onClick(function () {
    app.expand();
});
// secondaryButton.onClick(() => {
//   return () => {
//     app.expand();
//   };
// });
app.onEvent("viewportChanged", function (_a) {
    var isStateStable = _a.isStateStable;
    if (isStateStable)
        console.log("Done at", app.viewportHeight);
    else
        console.log("Changing, currently at ", app.viewportHeight);
});
app.showPopup({
    message: "Hello",
    buttons: [{ type: "default", text: "Button text", id: "btn_id" }],
}, function (btn_id) { return console.log(btn_id); });
app.onEvent("popupClosed", function (e) {
    console.log(e.button_id);
});
app.switchInlineQuery("query", ["users"]);
app.setHeaderColor("#ff0010");
app.setHeaderColor("bg_color");
app.CloudStorage.setItem("key", "value", function (err, success) {
    if (err)
        console.error(err);
    if (success) {
        console.log("success");
    }
});
app.CloudStorage.getItem("key", function (err, val) {
    if (err)
        console.error(err);
    if (val) {
        var test = val; // $ExpectType string
        console.log(test);
    }
});
app.CloudStorage.getItems(["key1", "key2"], function (err, vals) {
    if (err)
        console.error(err);
    if (vals) {
        var test = vals; // $ExpectType Record<string, string>
        console.log(test);
    }
});
app.CloudStorage.getKeys(function (err, keys) {
    if (err)
        console.error(err);
    if (keys) {
        var test = keys; // $ExpectType string[]
        console.log(test);
    }
});
app.requestWriteAccess(function (success) {
    var test = success; // $ExpectType boolean
    console.log(test);
});
app.onEvent("writeAccessRequested", function (_a) {
    var status = _a.status;
    console.log(status);
});
app.SettingsButton.show();
app.requestContact(function (success, req) {
    console.log(success);
    if (req.status === "sent") {
        // no error
        req.response;
    }
    else {
        // @ts-expect-error
        req.response;
        req.status; // $ExpectType "cancelled"
    }
});
app.onEvent("contactRequested", function (req) {
    if (req.status === "sent") {
        // no error
        req.response;
    }
    else {
        // @ts-expect-error
        req.response;
        req.status; // $ExpectType "cancelled"
    }
});
app.BiometricManager.init(function () { return console.log("init"); });
app.BiometricManager.openSettings();
app.isVerticalSwipesEnabled; // $ExpectType boolean
app.enableVerticalSwipes();
app.disableVerticalSwipes();
app.shareToStory("url", {
    text: "txt",
    widget_link: { name: "name", url: "url" },
});
app.openInvoice("url", function (status) {
    var test = status; // $ExpectType "paid" | "cancelled" | "failed" | "pending"
    console.log(test);
});
