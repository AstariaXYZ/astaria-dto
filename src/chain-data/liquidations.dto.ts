import { z } from "zod";
import { LienAndAuctionSchema } from "./common/lien";


export const LiquidationsResponseSchema = z.object({
  results: z.array(LienAndAuctionSchema),
  count: z.number().int().nonnegative(),
});

export type LiquidationsResponse = z.input<typeof LiquidationsResponseSchema>;
export type LiquidationsParsedResponse = z.infer<
  typeof LiquidationsResponseSchema
>;
