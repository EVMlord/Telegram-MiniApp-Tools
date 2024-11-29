import { throwUnexpectedValue } from "../errors/throwUnexpectedValue.js";
import { createTransformerGen } from "./createTransformerGen.js";
export const fn = createTransformerGen("fn", (v) => {
    if (typeof v === "function") {
        return v;
    }
    throwUnexpectedValue(v);
});
