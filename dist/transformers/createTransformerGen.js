import { ERR_PARSE } from "../errors/errors.js";
import { TypedError } from "../errors/TypedError.js";
/**
 * Creates transformer generator using the passed transform function as a base.
 * @param transform - transform function.
 * @param name - custom transformer name.
 */
export function createTransformerGen(name, transform) {
    return (optional) => {
        const parse = ((value) => {
            if (optional && value === undefined) {
                return;
            }
            try {
                return transform(value);
            }
            catch (cause) {
                throw new TypedError(ERR_PARSE, {
                    message: `"${name}" transformer failed to parse the value`,
                    cause,
                });
            }
        });
        return /* #__PURE__ */ Object.assign(parse, {
            isValid(value) {
                try {
                    parse(value);
                    return true;
                }
                catch {
                    return false;
                }
            },
        });
    };
}
