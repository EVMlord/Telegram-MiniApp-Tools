import { throwUnexpectedValue } from "../errors/throwUnexpectedValue.js";
import { createTransformerGen } from "./createTransformerGen.js";
export const boolean = createTransformerGen("boolean", (v) => {
    if (typeof v === "boolean") {
        return v;
    }
    const str = String(v);
    if (str === "1" || str === "true") {
        return true;
    }
    if (str === "0" || str === "false") {
        return false;
    }
    throwUnexpectedValue(v);
});
