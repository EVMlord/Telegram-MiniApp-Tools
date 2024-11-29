import { createTransformerGen } from "./createTransformerGen.js";
import { parseBySchema } from "./parseBySchema.js";
import { throwUnexpectedValue } from "../errors/throwUnexpectedValue.js";
export function searchParams(schema, name) {
    return createTransformerGen(name || "searchParams", (v) => {
        if (typeof v !== "string" && !(v instanceof URLSearchParams)) {
            throwUnexpectedValue(v);
        }
        const params = typeof v === "string" ? new URLSearchParams(v) : v;
        return parseBySchema(schema, (field) => {
            const paramValue = params.get(field);
            return paramValue === null ? undefined : paramValue;
        });
    });
}
