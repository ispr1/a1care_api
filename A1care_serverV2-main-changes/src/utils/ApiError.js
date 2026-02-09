export class ApiError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        // Restore prototype chain (important when extending built-ins)
        Object.setPrototypeOf(this, new.target.prototype);
        // Capture stack trace (Node.js specific)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
//# sourceMappingURL=ApiError.js.map