import mongoose from "mongoose";
declare const serviceAcceptanceModal: mongoose.Model<{
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        price: number;
        status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
        roleId: mongoose.Types.ObjectId;
        patientId: mongoose.Types.ObjectId;
        providerId: mongoose.Types.ObjectId;
        serviceRequestId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        price: number;
        status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
        roleId: mongoose.Types.ObjectId;
        patientId: mongoose.Types.ObjectId;
        providerId: mongoose.Types.ObjectId;
        serviceRequestId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    price: number;
    status: "COMPLETED" | "ACCEPTED" | "REJECTED" | "EXPIRED";
    roleId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    providerId: mongoose.Types.ObjectId;
    serviceRequestId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default serviceAcceptanceModal;
//# sourceMappingURL=serviceAcceptance.model.d.ts.map