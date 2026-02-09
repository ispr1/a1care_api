import mongoose, { Document } from "mongoose";
export interface DoctorDocument extends Document {
    name: string;
    mobileNumber: string;
    gender: "Male" | "Female" | "Other";
    startExperience: Date;
    specialization: string[];
    status: "Pending" | "Active" | "Inactive";
    consultationFee: number;
    about: string;
    workingHours: string;
    doctorDetailsId: mongoose.Types.ObjectId;
    rating: number;
    completed: number;
    roleId: mongoose.Types.ObjectId;
    documentId?: mongoose.Types.ObjectId;
    fulfillmentMode: "HOME_VISIT" | "HOSPITAL_VISIT" | "VIRTUAL";
    isRegistered: boolean;
}
declare const _default: mongoose.Model<DoctorDocument, {}, {}, {}, mongoose.Document<unknown, {}, DoctorDocument, {}, mongoose.DefaultSchemaOptions> & DoctorDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, DoctorDocument>;
export default _default;
//# sourceMappingURL=doctor.model.d.ts.map