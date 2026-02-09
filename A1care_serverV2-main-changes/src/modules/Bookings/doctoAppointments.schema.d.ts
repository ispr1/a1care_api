import * as z from 'zod';
declare const doctorAppoinmentValidations: z.ZodObject<{
    doctorId: z.ZodString;
    patientId: z.ZodString;
    startingTime: z.ZodString;
    endingTime: z.ZodString;
    isConfirmed: z.ZodDefault<z.ZodBoolean>;
    date: z.ZodCoercedDate<unknown>;
    weekDay: z.ZodOptional<z.ZodNumber>;
    paymentMode: z.ZodOptional<z.ZodEnum<{
        ONLINE: "ONLINE";
        OFFLINE: "OFFLINE";
    }>>;
    paymentStatus: z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
    }>;
    totalAmount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export default doctorAppoinmentValidations;
//# sourceMappingURL=doctoAppointments.schema.d.ts.map