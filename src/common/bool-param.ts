import { z } from 'zod';

export const BoolParamSchema = z.string().optional()
  .transform((v) => v == "" || v == "1" || v == "true");

