import { z } from "zod";
import { Uint256Schema } from "../../common/number";
import { UniqueOfferSchema } from "../../common/sdk-stuff";

export const OfferSchema = UniqueOfferSchema.and(
  z.object({
    expiration: Uint256Schema,
  })
);

export type Offer = z.infer<typeof OfferSchema>;
