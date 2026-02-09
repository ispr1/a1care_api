import mongoose, { Document } from "mongoose";
import * as z from 'zod';
export declare const doctoBlockTimeValidations: z.ZodObject<{
    doctorId: z.ZodString;
    startingTime: z.ZodString;
    endingTime: z.ZodString;
    reason: z.ZodString;
    weekDays: z.ZodArray<z.ZodNumber>;
    date: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export interface DoctorBlockTimeDocument extends Document {
    doctorId: mongoose.Types.ObjectId;
    startingTime: string;
    endingTime: string;
    reason: string;
    weekDays: number[];
    date: Date;
}
declare const _default: mongoose.Model<DoctorBlockTimeDocument, {}, {}, {}, mongoose.Document<unknown, {}, DoctorBlockTimeDocument, {}, mongoose.DefaultSchemaOptions> & DoctorBlockTimeDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, DoctorBlockTimeDocument>;
export default _default;
//# sourceMappingURL=blockTime.model.d.ts.map