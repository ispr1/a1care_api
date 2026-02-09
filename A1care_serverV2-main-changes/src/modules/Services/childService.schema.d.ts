import * as z from 'zod';
export declare const childServiceValidation: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    serviceId: z.ZodString;
    subServiceId: z.ZodString;
    price: z.ZodNumber;
    bookingType: z.ZodEnum<{
        SELECT: "SELECT";
        ASSIGN: "ASSIGN";
    }>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    allowedRoleIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodURL>;
    fulfillmentMode: z.ZodEnum<{
        HOME_VISIT: "HOME_VISIT";
        HOSPITAL_VISIT: "HOSPITAL_VISIT";
        VIRTUAL: "VIRTUAL";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=childService.schema.d.ts.map