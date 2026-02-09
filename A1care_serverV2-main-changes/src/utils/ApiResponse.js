export class ApiResponse {
    statusCode;
    message;
    data;
    constructor(statusCode, message, data = null) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}
//# sourceMappingURL=ApiResponse.js.map