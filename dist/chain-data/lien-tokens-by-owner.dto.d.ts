import { z } from "zod";
export declare const LienTokensByOwnerResponseSchema: z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
    hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    type: z.ZodLiteral<"BigNumber">;
}, "strip", z.ZodTypeAny, {
    hex: `0x${string}`;
    type: "BigNumber";
}, {
    hex: `0x${string}`;
    type: "BigNumber";
}>, import("ethers").BigNumber, {
    hex: `0x${string}`;
    type: "BigNumber";
}>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
    hex: `0x${string}`;
    type: "BigNumber";
}>, "many">;
export type LienTokensByOwnerResponse = z.input<typeof LienTokensByOwnerResponseSchema>;
export type LienTokensByOwnerParsedResponse = z.infer<typeof LienTokensByOwnerResponseSchema>;
