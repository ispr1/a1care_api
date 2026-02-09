import * as z from 'zod';
declare const doctorAvailabilityValidation: z.ZodObject<{
    weekDays: z.ZodArray<z.ZodNumber>;
    startingTime: z.ZodString;
    endingTime: z.ZodString;
    slotDuration: z.ZodString;
}, z.core.$strip>;
export default doctorAvailabilityValidation;
//# sourceMappingURL=doctorAvailable.schema.d.ts.map