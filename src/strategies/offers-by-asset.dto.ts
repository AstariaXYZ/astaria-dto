import z from "zod";
import { OfferSchema } from "./common/offer";

export const OffersByAssetResponseSchema = z.object({
  results: z.array(OfferSchema),
  count: z.number().int().min(0).max(100),
});

export type OffersByAssetResponse = z.infer<typeof OffersByAssetResponseSchema>;
