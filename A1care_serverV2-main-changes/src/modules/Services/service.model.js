import { Schema, model, Document } from "mongoose";
const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["SELECT", "ASSIGN"],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
export const Service = model("Service", ServiceSchema);
//# sourceMappingURL=service.model.js.map