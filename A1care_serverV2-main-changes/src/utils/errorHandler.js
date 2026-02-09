import { ApiError } from "./ApiError.js";
export const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        console.error(`API Error: ${err.message}`);
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Unexpected Error:", err);
    return res.status(500).json({
        success: false,
        message,
    });
};
//# sourceMappingURL=errorHandler.js.map