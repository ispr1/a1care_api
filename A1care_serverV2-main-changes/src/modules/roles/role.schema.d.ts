import * as z from 'zod';
declare const roleValidation: z.ZodObject<{
    name: z.ZodString;
    code: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    capabilities: z.ZodArray<z.ZodEnum<{
        HOME_VISIT: "HOME_VISIT";
        HOSPITAL_VISIT: "HOSPITAL_VISIT";
        VIRTUAL: "VIRTUAL";
    }>>;
    requiredLicense: z.ZodDefault<z.ZodBoolean>;
    licenseType: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export default roleValidation;
//# sourceMappingURL=role.schema.d.ts.map