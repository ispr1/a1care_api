import { Document, Types } from "mongoose";
export interface SubServiceDocument extends Document {
    name: string;
    description: string;
    isActive: boolean;
    serviceId: Types.ObjectId;
    imageUrl: string;
}
export declare const SubService: import("mongoose").Model<SubServiceDocument, {}, {}, {}, Document<unknown, {}, SubServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & SubServiceDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, SubServiceDocument>;
//# sourceMappingURL=subService.model.d.ts.map