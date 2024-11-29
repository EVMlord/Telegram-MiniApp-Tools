import { createTransformerGen } from "./createTransformerGen.js";
import { number } from "./number.js";
export const date = createTransformerGen("date", (v) => v instanceof Date ? v : new Date(number()(v) * 1000));
