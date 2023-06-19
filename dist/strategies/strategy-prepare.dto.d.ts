import * as z from "zod";
export declare const StrategyPrepareRequestSchema: z.ZodObject<{
    delegateAddress: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    signature: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    cid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signature: `0x${string}`;
    cid: string;
    delegateAddress: `0x${string}`;
}, {
    signature: `0x${string}`;
    cid: string;
    delegateAddress: `0x${string}`;
}>;
export declare const StrategyPrepareResponseSchema: z.ZodObject<{
    presignedUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    presignedUrl: string;
}, {
    presignedUrl: string;
}>;
export type StrategyPrepareRequest = z.infer<typeof StrategyPrepareRequestSchema>;
export type StrategyPrepareResponse = z.input<typeof StrategyPrepareResponseSchema>;
export type StrategyPrepareParsedResponse = z.infer<typeof StrategyPrepareResponseSchema>;
