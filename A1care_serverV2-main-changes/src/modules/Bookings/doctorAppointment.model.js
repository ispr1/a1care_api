import mongoose, { Schema, Document } from "mongoose";
const DoctorAppointmentSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: "staff",
        required: true
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    startingTime: {
        type: String, // "09:00"
        required: true
    },
    endingTime: {
        type: String, // "09:30"
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        required: true
    },
    weekDay: {
        type: Number,
        // required:true
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
        default: "Pending"
    },
    paymentMode: {
        type: String,
        enum: ['ONLINE', 'OFFLINE'],
    },
    paymentStatus: {
        type: String,
        enum: ['PENDING', 'COMPLETED', 'FAILED'],
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
export default mongoose.model("DoctorAppointment", DoctorAppointmentSchema);
//# sourceMappingURL=doctorAppointment.model.js.map