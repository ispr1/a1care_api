import { Schema, model, Document, Types } from "mongoose";
const SubServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
export const SubService = model("SubService", SubServiceSchema);
//# sourceMappingURL=subService.model.js.map