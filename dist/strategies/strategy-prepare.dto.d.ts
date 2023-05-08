import * as z from "zod";
export declare const StrategyPrepareRequestSchema: z.ZodObject<{
    delegateAddress: z.ZodString;
    signature: z.ZodString;
    cid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cid: string;
    signature: string;
    delegateAddress: string;
}, {
    cid: string;
    signature: string;
    delegateAddress: string;
}>;
export declare const StrategyPrepareResponseSchema: z.ZodObject<{
    presignedUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    presignedUrl: string;
}, {
    presignedUrl: string;
}>;
export type StrategyPrepareRequest = z.infer<typeof StrategyPrepareRequestSchema>;
export type StrategyPrepareResponse = z.infer<typeof StrategyPrepareResponseSchema>;
