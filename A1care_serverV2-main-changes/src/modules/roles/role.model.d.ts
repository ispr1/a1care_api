import { Schema } from "mongoose";
export declare const RoleModel: import("mongoose").Model<{
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        name: string;
        isActive: boolean;
        code: string;
        capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
        requiresLicense: boolean;
        description?: string | null;
        licenseType?: string | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        name: string;
        isActive: boolean;
        code: string;
        capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
        requiresLicense: boolean;
        description?: string | null;
        licenseType?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    isActive: boolean;
    code: string;
    capabilities: ("HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL")[];
    requiresLicense: boolean;
    description?: string | null;
    licenseType?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=role.model.d.ts.map