import { z } from "zod";
export declare const LienTokensByOwnerResponseSchema: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, "many">;
export type LienTokensByOwnerResponse = z.input<typeof LienTokensByOwnerResponseSchema>;
export type LienTokensByOwnerParsedResponse = z.infer<typeof LienTokensByOwnerResponseSchema>;
