import { z } from 'zod';

export const BoolParamSchema = z.string().toLowerCase()
  .optional()
  .transform((v) =>
    ['true', '1', ''].find((i) => i === v) ? true : false
  );
