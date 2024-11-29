import { createTransformerGen } from "./createTransformerGen.js";
import { string } from "./string.js";
import { toRGB } from "./toRGB.js";
export const rgb = createTransformerGen("rgb", (v) => toRGB(string()(v)));
