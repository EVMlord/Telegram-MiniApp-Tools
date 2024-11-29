import { throwUnexpectedValue } from "../errors/throwUnexpectedValue.js";
import { createTransformerGen } from "./createTransformerGen.js";
export const string = createTransformerGen("string", (v) => {
    if (typeof v === "string" || typeof v === "number") {
        return v.toString();
    }
    throwUnexpectedValue(v);
});
