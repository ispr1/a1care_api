import mongoose from "mongoose";
declare const serviceRequestModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        price: number;
        bookingType: "SCHEDULED" | "ON_DEMAND";
        fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
        childServiceId: mongoose.Types.ObjectId;
        status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
        location?: {
            lat?: number | null;
            lng?: number | null;
        } | null;
        scheduledSlot?: {
            startTime?: NativeDate | null;
            endTime?: NativeDate | null;
        } | null;
        addressId?: mongoose.Types.ObjectId | null;
        assignedProviderId?: mongoose.Types.ObjectId | null;
        assignedRoleId?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        userId: mongoose.Types.ObjectId;
        price: number;
        bookingType: "SCHEDULED" | "ON_DEMAND";
        fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
        childServiceId: mongoose.Types.ObjectId;
        status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
        location?: {
            lat?: number | null;
            lng?: number | null;
        } | null;
        scheduledSlot?: {
            startTime?: NativeDate | null;
            endTime?: NativeDate | null;
        } | null;
        addressId?: mongoose.Types.ObjectId | null;
        assignedProviderId?: mongoose.Types.ObjectId | null;
        assignedRoleId?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    price: number;
    bookingType: "SCHEDULED" | "ON_DEMAND";
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    childServiceId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "BROADCASTED" | "ACCEPTED" | "IN_PROGRESS" | "CANCELLED";
    location?: {
        lat?: number | null;
        lng?: number | null;
    } | null;
    scheduledSlot?: {
        startTime?: NativeDate | null;
        endTime?: NativeDate | null;
    } | null;
    addressId?: mongoose.Types.ObjectId | null;
    assignedProviderId?: mongoose.Types.ObjectId | null;
    assignedRoleId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default serviceRequestModel;
//# sourceMappingURL=serviceRequest.model.d.ts.map