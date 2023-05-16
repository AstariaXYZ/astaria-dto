import { z } from 'zod';
export const PaginationParamsSchema = z.object({
    skip: z.coerce.number().min(0).default(0),
    limit: z.coerce.number().min(1).max(100).default(100),
});
//# sourceMappingURL=pagination-params.js.map