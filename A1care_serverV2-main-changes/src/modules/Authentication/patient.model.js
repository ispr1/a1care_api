import mongoose, { Schema, model, Document } from "mongoose";
const PatientSchema = new Schema({
    mobileNumber: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    profileImage: {
        type: String,
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },
    gender: {
        type: String,
        enum: ["Male", "Gender", "Other"],
    },
    dateOfBirth: {
        type: Date,
    },
    fcmToken: {
        type: String,
    },
    isRegistered: {
        type: Boolean,
        default: false
    },
    primaryAddressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient_addresses"
    }
}, {
    timestamps: true
});
export const Patient = model("Patient", PatientSchema);
//# sourceMappingURL=patient.model.js.map