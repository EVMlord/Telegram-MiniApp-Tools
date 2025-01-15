"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signal = signal;
var computed_js_1 = require("./computed.js");
var batch_js_1 = require("./batch.js");
// #__NO_SIDE_EFFECTS__
function signal(initialValue, options) {
    options || (options = {});
    var equals = options.equals || Object.is;
    var listeners = [];
    var value = initialValue;
    var set = function (v) {
        if (!equals(value, v)) {
            var prev_1 = value;
            value = v;
            // We are making a copy of listeners as long as they may mutate the listeners' array,
            // leading to an unexpected behavior.
            //
            // We want the setter to make sure that all listeners will be called in predefined
            // order within a single update frame.
            (0, batch_js_1.runInBatchMode)(s, function () {
                __spreadArray([], listeners, true).forEach(function (_a) {
                    var fn = _a[0], once = _a[1];
                    fn(v, prev_1);
                    // Remove "once" listeners.
                    if (once) {
                        unsub(fn, true);
                    }
                });
            });
        }
    };
    function formatSubOptions(onceOrOptions) {
        var options = typeof onceOrOptions !== "object"
            ? { once: onceOrOptions }
            : onceOrOptions;
        return {
            once: options.once || false,
            signal: options.signal || false,
        };
    }
    var unsub = function (fn, onceOrOptions) {
        var options = formatSubOptions(onceOrOptions);
        var idx = listeners.findIndex(function (_a) {
            var listener = _a[0], lOptions = _a[1];
            return (listener === fn &&
                lOptions.once === options.once &&
                lOptions.signal === options.signal);
        });
        if (idx >= 0) {
            listeners.splice(idx, 1);
        }
    };
    var s = Object.assign(function get() {
        (0, computed_js_1.collectSignal)(s);
        return value;
    }, {
        destroy: function () {
            listeners = [];
        },
        set: set,
        reset: function () {
            set(initialValue);
        },
        sub: function (fn, onceOrOptions) {
            listeners.push([fn, formatSubOptions(onceOrOptions)]);
            return function () { return unsub(fn, onceOrOptions); };
        },
        unsub: unsub,
        unsubAll: function () {
            listeners = listeners.filter(function (l) { return l[1].signal; });
        },
    });
    return s;
}
