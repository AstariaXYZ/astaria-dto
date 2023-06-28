import { z } from "zod";
import { OfferSchema } from "./common/offer";

export const OffersByAssetResponseSchema = z.object({
  results: z.array(OfferSchema),
  count: z.number().int().nonnegative()
});

export type OffersByAssetResponse = z.input<typeof OffersByAssetResponseSchema>;
export type OffersByAssetParsedResponse = z.infer<
  typeof OffersByAssetResponseSchema
>;
