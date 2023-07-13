import { z } from "zod";
import { Uint256Schema, Uint8Schema } from "../../common/number";
import { AddressSchema, HexSchema } from "../../common/sdk-stuff";

export const SeaportOfferItemSchema = z.object({
  identifierOrCriteria: Uint256Schema,
  startAmount: Uint256Schema,
  endAmount: Uint256Schema,
  itemType: Uint8Schema,
  token: AddressSchema,
});

export const SeaportConsiderationItemSchema = SeaportOfferItemSchema.extend({
  recipient: AddressSchema,
});

export const SeaportOrderParamsSchema = z
  .object({
    conduitKey: HexSchema,
    offerer: AddressSchema,
    orderType: Uint8Schema,
    salt: Uint256Schema,
    totalOriginalConsiderationItems: Uint256Schema.refine((val) => val === 1n),
    zone: AddressSchema,
    zoneHash: HexSchema,
    consideration: SeaportConsiderationItemSchema.array().length(1),
    offer: SeaportOfferItemSchema.array().length(1),
    startTime: Uint256Schema,
    endTime: Uint256Schema,
  })

export const AuctionSchema = z.object({
  liquidator: AddressSchema,
  orderParameters: SeaportOrderParamsSchema,
  orderHash: HexSchema,
  offererCounterAtLiquidation: Uint256Schema,
  auctionStart: z.number().int(),
  auctionEnd: z.number().int(),
});


export type Auction = z.infer<typeof AuctionSchema>;
export type SeaportOrderParams = z.infer<typeof SeaportOrderParamsSchema>;
export type SeaportConsiderationItem = z.infer<
  typeof SeaportConsiderationItemSchema
>;
export type SeaportOfferItem = z.infer<typeof SeaportOfferItemSchema>;

