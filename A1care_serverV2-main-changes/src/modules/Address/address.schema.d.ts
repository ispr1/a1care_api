import { z } from "zod";
export declare const addressValidation: z.ZodObject<{
    userId: z.ZodString;
    label: z.ZodEnum<{
        HOME: "HOME";
        WORK: "WORK";
        OTHERS: "OTHERS";
        FRIEND: "FRIEND";
        FAMILY: "FAMILY";
    }>;
    location: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>;
    state: z.ZodString;
    city: z.ZodString;
    pincode: z.ZodString;
    moreInfo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=address.schema.d.ts.map