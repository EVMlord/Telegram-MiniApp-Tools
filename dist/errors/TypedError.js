export class TypedError extends Error {
    constructor(type, messageOrOptions, cause) {
        super(typeof messageOrOptions === "object"
            ? messageOrOptions.message
            : messageOrOptions || type, {
            cause: typeof messageOrOptions === "object" ? messageOrOptions.cause : cause,
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        Object.setPrototypeOf(this, TypedError.prototype);
    }
}
