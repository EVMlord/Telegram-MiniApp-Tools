"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectSignal = collectSignal;
exports.computed = computed;
var signal_js_1 = require("./signal.js");
var collectContexts = [];
function collectSignal(signal) {
    collectContexts.length &&
        collectContexts[collectContexts.length - 1].add(signal);
}
/**
 * Creates a signal, which wil be automatically updated if some of its dependant signals were
 * modified.
 * @param fn - computation function.
 * @param options - additional functions.
 */
// #__NO_SIDE_EFFECTS__
function computed(fn, options) {
    var deps = new Set();
    // An underlying signal.
    var $signal;
    function s() {
        return $signal || ($signal = (0, signal_js_1.signal)(compute(), options));
    }
    function update() {
        s().set(compute());
    }
    function compute() {
        // As long as in this iteration, we may receive new signals as dependencies, we stop
        // listening to the previous signals.
        deps.forEach(function (s) {
            s.unsub(update, { signal: true });
        });
        // Signals we collected during current computation.
        var collectedSignals = new Set();
        var result;
        // Add this set to the global variable, so dependant signals will be catched.
        collectContexts.push(collectedSignals);
        try {
            // Run the function and collect all called signals.
            result = fn();
        }
        finally {
            // Remember to untrack the reactive context.
            collectContexts.pop();
        }
        // Start tracking for all dependencies' changes and re-compute the computed value.
        collectedSignals.forEach(function (s) {
            s.sub(update, { signal: true });
        });
        deps = collectedSignals;
        return result;
    }
    return Object.assign(function computed() {
        return s()();
    }, {
        destroy: function () {
            s().destroy();
        },
        sub: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = s()).sub.apply(_a, args);
        },
        unsub: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = s()).unsub.apply(_a, args);
        },
        unsubAll: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = s()).unsubAll.apply(_a, args);
        },
    });
}
