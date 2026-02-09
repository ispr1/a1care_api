import * as z from 'zod';
declare const serviceRequestValiation: z.ZodObject<{
    childServiceId: z.ZodString;
    userId: z.ZodString;
    roleId: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        ACCEPTED: "ACCEPTED";
        CANCELLED: "CANCELLED";
    }>>;
    addressId: z.ZodOptional<z.ZodString>;
    fulfillmentMode: z.ZodEnum<{
        HOME_VISIT: "HOME_VISIT";
        HOSPITAL_VISIT: "HOSPITAL_VISIT";
        VIRTUAL: "VIRTUAL";
    }>;
    scheduledSlot: z.ZodOptional<z.ZodObject<{
        startTime: z.ZodCoercedDate<unknown>;
        endTime: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>>;
    location: z.ZodOptional<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    assignProviderId: z.ZodOptional<z.ZodString>;
    assignRoleId: z.ZodOptional<z.ZodString>;
    bookingType: z.ZodEnum<{
        SCHEDULED: "SCHEDULED";
        ON_DEMAND: "ON_DEMAND";
    }>;
    price: z.ZodNumber;
}, z.core.$strip>;
export default serviceRequestValiation;
//# sourceMappingURL=serviceRequest.schema.d.ts.map