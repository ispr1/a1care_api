import { Schema } from "mongoose";
export declare const UserAddressModel: import("mongoose").Model<{
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
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
        userId: import("mongoose").Types.ObjectId;
        label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
        state: string;
        city: string;
        pincode: string;
        isDeleted: boolean;
        location?: {
            lat: number;
            lng: number;
        } | null;
        moreInfo?: string | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        userId: import("mongoose").Types.ObjectId;
        label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
        state: string;
        city: string;
        pincode: string;
        isDeleted: boolean;
        location?: {
            lat: number;
            lng: number;
        } | null;
        moreInfo?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: import("mongoose").Types.ObjectId;
    label: "HOME" | "WORK" | "OTHERS" | "FRIEND" | "FAMILY";
    state: string;
    city: string;
    pincode: string;
    isDeleted: boolean;
    location?: {
        lat: number;
        lng: number;
    } | null;
    moreInfo?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=address.model.d.ts.map