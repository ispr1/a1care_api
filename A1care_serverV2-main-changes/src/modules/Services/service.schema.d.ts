import * as z from 'zod';
declare const serviceValidation: z.ZodObject<{
    name: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<{
        SELECT: "SELECT";
        ASSIGN: "ASSIGN";
    }>;
    imageUrl: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export default serviceValidation;
//# sourceMappingURL=service.schema.d.ts.map