import mongoose, { Document } from "mongoose";
export interface DoctorAvailabilityDocument extends Document {
    doctorId: mongoose.Types.ObjectId;
    weekDays: number[];
    startingTime: string;
    endingTime: string;
    slotDuration: string;
}
declare const _default: mongoose.Model<DoctorAvailabilityDocument, {}, {}, {}, mongoose.Document<unknown, {}, DoctorAvailabilityDocument, {}, mongoose.DefaultSchemaOptions> & DoctorAvailabilityDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, DoctorAvailabilityDocument>;
export default _default;
//# sourceMappingURL=doctorAvailability.model.d.ts.map