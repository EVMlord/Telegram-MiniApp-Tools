import { createTransformerGen } from "./createTransformerGen.js";
import { parseBySchema } from "./parseBySchema.js";
import { toRecord } from "./toRecord.js";
export function object(schema, name) {
    return createTransformerGen(name || "object", (v) => {
        const record = toRecord(v);
        return parseBySchema(schema, (f) => record[f]);
    });
}
