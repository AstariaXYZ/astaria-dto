import { z } from 'zod';

export const BoolParamSchema = z.string()
  .optional()
  .transform((v) => v == '' || v == 'true' || '1');
