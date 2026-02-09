import { Document } from "mongoose";
export interface ServiceDocument extends Document {
    name: string;
    title: string;
    type: "SELECT" | "ASSIGN";
    imageUrl: string;
    isActive: boolean;
}
export declare const Service: import("mongoose").Model<ServiceDocument, {}, {}, {}, Document<unknown, {}, ServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & ServiceDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ServiceDocument>;
//# sourceMappingURL=service.model.d.ts.map