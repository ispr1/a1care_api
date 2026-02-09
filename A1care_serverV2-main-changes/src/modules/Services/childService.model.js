import mongoose, { Schema, Document } from "mongoose";
const childServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    subServiceId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    bookingType: {
        type: String,
        enum: ["SELECT", "ASSIGN"],
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    allowedRoleIds: {
        type: [String],
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});
export const ChildServiceModel = mongoose.model("ChildService", childServiceSchema);
//# sourceMappingURL=childService.model.js.map