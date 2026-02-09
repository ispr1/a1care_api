import * as z from 'zod';
declare const serviceAcceptanceValidation: z.ZodObject<{
    serviceRequestId: z.ZodString;
    providerId: z.ZodString;
    roleId: z.ZodString;
    status: z.ZodEnum<{
        COMPLETED: "COMPLETED";
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
        EXPIRED: "EXPIRED";
    }>;
    patientId: z.ZodString;
    price: z.ZodNumber;
}, z.core.$strip>;
export default serviceAcceptanceValidation;
//# sourceMappingURL=serviceAcceptance.schema.d.ts.map