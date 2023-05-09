import { z } from "zod";
export declare const LienTokensByOwnerResponseSchema: z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
    hex: z.ZodString;
    type: z.ZodLiteral<"BigNumber">;
}, "strip", z.ZodTypeAny, {
    hex: string;
    type: "BigNumber";
}, {
    hex: string;
    type: "BigNumber";
}>, import("ethers").BigNumber, {
    hex: string;
    type: "BigNumber";
}>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
    hex: string;
    type: "BigNumber";
}>, "many">;
export type LienTokensByOwnerResponse = z.input<typeof LienTokensByOwnerResponseSchema>;
export type LienTokensByOwnerParsedResponse = z.infer<typeof LienTokensByOwnerResponseSchema>;
