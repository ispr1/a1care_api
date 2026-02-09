import mongoose, { Document } from "mongoose";
export interface PatientDocument extends Document {
    mobileNumber: number;
    name: string;
    email: string;
    profileImage: string;
    location: {
        latitude: number;
        longitude: number;
    };
    gender: "Male" | "Gender" | "Other";
    dateOfBirth: Date;
    fcmToken: string;
    isRegistered: boolean;
    primaryAddressId: mongoose.Schema.Types.ObjectId;
}
export declare const Patient: mongoose.Model<PatientDocument, {}, {}, {}, mongoose.Document<unknown, {}, PatientDocument, {}, mongoose.DefaultSchemaOptions> & PatientDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, PatientDocument>;
//# sourceMappingURL=patient.model.d.ts.map