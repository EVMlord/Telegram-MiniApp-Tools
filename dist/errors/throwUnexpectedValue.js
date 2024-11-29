import { ERR_UNEXPECTED_TYPE } from "./errors.js";
import { TypedError } from "./TypedError.js";
export function throwUnexpectedValue(value) {
    throw new TypedError(ERR_UNEXPECTED_TYPE, `Unexpected value received: ${JSON.stringify(value)}`);
}
