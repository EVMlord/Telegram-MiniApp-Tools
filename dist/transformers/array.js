import { throwUnexpectedValue } from "../errors/throwUnexpectedValue.js";
import { createTransformerGen } from "./createTransformerGen.js";
export function array(of, name) {
    return createTransformerGen(name || "array", (v) => {
        let a;
        if (Array.isArray(v)) {
            a = v;
        }
        else if (typeof v === "string") {
            try {
                const json = JSON.parse(v);
                if (Array.isArray(json)) {
                    a = json;
                }
            }
            catch { }
        }
        if (!a) {
            throwUnexpectedValue(v);
        }
        return a.map(of);
    });
}
