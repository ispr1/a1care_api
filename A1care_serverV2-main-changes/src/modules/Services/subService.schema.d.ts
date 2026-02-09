import * as z from 'zod';
export declare const subServiceValidation: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
    serviceId: z.ZodString;
    imageUrl: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=subService.schema.d.ts.map