import { ERR_PARSE } from "../errors/errors.js";
import { TypedError } from "../errors/TypedError.js";
/**
 * Parses external value by specified schema. Functions iterates over each schema field
 * and uses getField function to get its value from the external source.
 * @param schema - object schema.
 * @param getField - function which gets external value by its field name.
 */
export function parseBySchema(schema, getField) {
    const result = {};
    for (const field in schema) {
        const definition = schema[field];
        if (!definition) {
            continue;
        }
        let from;
        let transform;
        if (typeof definition === "function") {
            from = field;
            transform = definition;
        }
        else {
            [from, transform] = definition;
        }
        try {
            const parsedValue = transform(getField(from));
            if (parsedValue !== undefined) {
                result[field] = parsedValue;
            }
        }
        catch (cause) {
            throw new TypedError(ERR_PARSE, `Parser for "${field}" property failed${from === field ? "" : `. Source field: "${from}"`}`, cause);
        }
    }
    return result;
}
