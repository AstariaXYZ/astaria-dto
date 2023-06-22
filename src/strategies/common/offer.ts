import { UniqueOfferSchema } from "@astariaxyz/sdk";
import { z } from "zod";
import { Uint256Schema } from "../../common/number";

export const OfferSchema = UniqueOfferSchema.and(
  z.object({
    expiration: Uint256Schema,
  })
);

export type Offer = z.infer<typeof OfferSchema>;
