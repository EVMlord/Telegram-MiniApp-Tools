import type { Schema, TransformerGen } from "./types.js";
export declare function object<T>(schema: Schema<T>, name?: string): TransformerGen<T>;
