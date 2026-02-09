import * as z from 'zod';
declare const doctorValidation: z.ZodObject<{
    name: z.ZodString;
    gender: z.ZodEnum<{
        Male: "Male";
        Other: "Other";
        Female: "Female";
    }>;
    startExperience: z.ZodCoercedDate<unknown>;
    specialization: z.ZodArray<z.ZodString>;
    consultationFee: z.ZodNumber;
    about: z.ZodString;
    workingHours: z.ZodString;
    roleId: z.ZodString;
}, z.core.$strip>;
export default doctorValidation;
//# sourceMappingURL=doctor.schema.d.ts.map