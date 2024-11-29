import { collectSignal } from "./computed.js";
import { runInBatchMode } from "./batch.js";
// #__NO_SIDE_EFFECTS__
export function signal(initialValue, options) {
    options || (options = {});
    const equals = options.equals || Object.is;
    let listeners = [];
    let value = initialValue;
    const set = (v) => {
        if (!equals(value, v)) {
            const prev = value;
            value = v;
            // We are making a copy of listeners as long as they may mutate the listeners' array,
            // leading to an unexpected behavior.
            //
            // We want the setter to make sure that all listeners will be called in predefined
            // order within a single update frame.
            runInBatchMode(s, () => {
                [...listeners].forEach(([fn, once]) => {
                    fn(v, prev);
                    // Remove "once" listeners.
                    if (once) {
                        unsub(fn, true);
                    }
                });
            });
        }
    };
    function formatSubOptions(onceOrOptions) {
        const options = typeof onceOrOptions !== "object"
            ? { once: onceOrOptions }
            : onceOrOptions;
        return {
            once: options.once || false,
            signal: options.signal || false,
        };
    }
    const unsub = (fn, onceOrOptions) => {
        const options = formatSubOptions(onceOrOptions);
        const idx = listeners.findIndex(([listener, lOptions]) => {
            return (listener === fn &&
                lOptions.once === options.once &&
                lOptions.signal === options.signal);
        });
        if (idx >= 0) {
            listeners.splice(idx, 1);
        }
    };
    const s = Object.assign(function get() {
        collectSignal(s);
        return value;
    }, {
        destroy() {
            listeners = [];
        },
        set,
        reset() {
            set(initialValue);
        },
        sub(fn, onceOrOptions) {
            listeners.push([fn, formatSubOptions(onceOrOptions)]);
            return () => unsub(fn, onceOrOptions);
        },
        unsub,
        unsubAll() {
            listeners = listeners.filter((l) => l[1].signal);
        },
    });
    return s;
}
