import { signal } from "./signal.js";
const collectContexts = [];
export function collectSignal(signal) {
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
export function computed(fn, options) {
    let deps = new Set();
    // An underlying signal.
    let $signal;
    function s() {
        return $signal || ($signal = signal(compute(), options));
    }
    function update() {
        s().set(compute());
    }
    function compute() {
        // As long as in this iteration, we may receive new signals as dependencies, we stop
        // listening to the previous signals.
        deps.forEach((s) => {
            s.unsub(update, { signal: true });
        });
        // Signals we collected during current computation.
        const collectedSignals = new Set();
        let result;
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
        collectedSignals.forEach((s) => {
            s.sub(update, { signal: true });
        });
        deps = collectedSignals;
        return result;
    }
    return Object.assign(function computed() {
        return s()();
    }, {
        destroy() {
            s().destroy();
        },
        sub(...args) {
            return s().sub(...args);
        },
        unsub(...args) {
            s().unsub(...args);
        },
        unsubAll(...args) {
            s().unsubAll(...args);
        },
    });
}
