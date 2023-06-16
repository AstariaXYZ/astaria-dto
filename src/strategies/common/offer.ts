import { Uint256Schema, UniqueOfferSchema } from "@astariaxyz/sdk";
import { z } from "zod";

export const OfferSchema = UniqueOfferSchema.and(
  z.object({
    expiration: Uint256Schema,
  })
);

export type Offer = z.infer<typeof OfferSchema>;
