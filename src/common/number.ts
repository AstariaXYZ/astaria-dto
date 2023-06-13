import { z } from "zod";

const UINT8MAX = 2 ** 8 - 1;
const UINT40MAX = 2 ** 40 - 1;

export const Uint8Schema = z
  .union([z.string(), z.number()])
  .transform((val) => (typeof val === "number" ? val : Number.parseFloat(val)))
  .refine(
    (val) => Number.isInteger(val) && val >= 0,
    "Must be a positive integer"
  )
  .refine((val) => val <= UINT8MAX, "Cannot exceed (2^8) - 1");

export const Uint40Schema = z
  .union([z.string(), z.number()])
  .transform((val) => (typeof val === "number" ? val : Number.parseFloat(val)))
  .refine(
    (val) => Number.isInteger(val) && val >= 0,
    "Must be a positive integer"
  )
  .refine((val) => val <= UINT40MAX, "Cannot exceed (2^40) - 1");
