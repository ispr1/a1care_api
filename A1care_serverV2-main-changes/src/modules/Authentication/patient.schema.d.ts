import * as z from 'zod';
export declare const patientValidation: z.ZodObject<{
    mobileNumber: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    email: z.ZodOptional<z.ZodEmail>;
    location: z.ZodOptional<z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>;
    gender: z.ZodEnum<{
        Male: "Male";
        Gender: "Gender";
        Other: "Other";
    }>;
    dateOfBirth: z.ZodCoercedDate<unknown>;
    fcmToken: z.ZodOptional<z.ZodString>;
    isRegistered: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type patientType = z.infer<typeof patientValidation>;
//# sourceMappingURL=patient.schema.d.ts.map