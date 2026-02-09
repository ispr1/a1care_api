import crypto from "crypto";
export function hmacHash(value) {
    return crypto
        .createHmac("sha256", process.env.AUTH_SECRET_TOKEN)
        .update(value)
        .digest("hex");
}
//# sourceMappingURL=Hmac.js.map