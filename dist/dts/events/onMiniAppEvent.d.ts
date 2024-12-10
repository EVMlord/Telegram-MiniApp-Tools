type MultiEventCallback<T> = (eventName: string, event: CustomEvent<T>) => void;
export declare function onWindowMultiEvent<T>(eventNames: string[], callback: MultiEventCallback<T>, options?: boolean | AddEventListenerOptions): () => void;
export {};
