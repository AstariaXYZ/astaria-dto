import { z } from 'zod';
export declare const PaginationParamsSchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    skip: number;
    limit: number;
}, {
    skip?: number | undefined;
    limit?: number | undefined;
}>;
