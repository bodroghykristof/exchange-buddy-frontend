// simple interface for generic usage in case of operations
// with possible successful and failed outcomes
export interface OperationResult {
    data?: MessageEvent<string>;
    error?: Event;
}
