import mongoose, { Schema, Document } from "mongoose";
export interface ChildServiceDocument extends Document {
    name: string;
    description: string;
    serviceId: Schema.Types.ObjectId;
    subServiceId: Schema.Types.ObjectId;
    price: number;
    bookingType: "SELECT" | "ASSIGN";
    isActive: boolean;
    allowedRoleIds: string[];
    imageUrl: string;
}
export declare const ChildServiceModel: mongoose.Model<ChildServiceDocument, {}, {}, {}, mongoose.Document<unknown, {}, ChildServiceDocument, {}, mongoose.DefaultSchemaOptions> & ChildServiceDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ChildServiceDocument>;
//# sourceMappingURL=childService.model.d.ts.map