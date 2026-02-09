import mongoose, { Document } from "mongoose";
export interface DoctorAppointmentDocument extends Document {
    doctorId: mongoose.Types.ObjectId;
    patientId: mongoose.Types.ObjectId;
    startingTime: string;
    endingTime: string;
    isConfirmed: boolean;
    date: Date;
    weekDay: number;
    paymentMode?: 'ONLINE' | 'OFFLINE';
    paymentStatus: 'PENDING' | 'COMPLETED' | 'FAILED';
    status: 'Pending' | 'Confirmed' | "Completed" | "Cancelled";
    totalAmount?: number;
}
declare const _default: mongoose.Model<DoctorAppointmentDocument, {}, {}, {}, mongoose.Document<unknown, {}, DoctorAppointmentDocument, {}, mongoose.DefaultSchemaOptions> & DoctorAppointmentDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, DoctorAppointmentDocument>;
export default _default;
//# sourceMappingURL=doctorAppointment.model.d.ts.map