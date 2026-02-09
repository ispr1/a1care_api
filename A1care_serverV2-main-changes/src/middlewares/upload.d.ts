import multer from "multer";
interface UploadOptions {
    folder: string;
    allowedMimeTypes: string[];
    maxSizeMB: number;
}
export declare function createS3Upload(options: UploadOptions): multer.Multer;
export declare const uploadServiceImage: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const UploadProfileImage: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export {};
//# sourceMappingURL=upload.d.ts.map