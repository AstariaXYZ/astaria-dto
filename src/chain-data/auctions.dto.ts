import { Uint256Schema, AddressSchema, HexSchema } from "@astariaxyz/sdk";
import { z } from "zod";
import { Uint8Schema } from "../common/number";

export const SeaportConsiderationItemSchema = z.object({
  identifierOrCriteria: Uint256Schema,
  startAmount: Uint256Schema,
  endAmount: Uint256Schema,
  itemType: Uint8Schema,
  recipient: AddressSchema,
  token: AddressSchema,
});

export const SeaportOfferItemSchema = z.object({
  identifierOrCriteria: Uint256Schema,
  startAmount: Uint256Schema,
  endAmount: Uint256Schema,
  itemType: Uint8Schema,
  token: AddressSchema,
});

export const SeaportOrderParamsSchema = z
  .object({
    conduitKey: HexSchema,
    offerer: AddressSchema,
    orderType: Uint8Schema,
    salt: Uint256Schema,
    totalOriginalConsiderationItems: Uint256Schema.refine((val) => val.eq(2)),
    zone: AddressSchema,
    zoneHash: HexSchema,
    "consideration[0]": SeaportConsiderationItemSchema,
    "consideration[1]": SeaportConsiderationItemSchema,
    "offer[0]": SeaportOfferItemSchema,
    startTime: Uint256Schema,
    endTime: Uint256Schema,
  })
  .transform((data) => {
    const {
      "consideration[0]": consideration0,
      "consideration[1]": consideration1,
      "offer[0]": offer0,
      ...rest
    } = data;

    return {
      ...rest,
      consideration: [consideration0, consideration1],
      offer: [offer0],
    };
  });

export const AuctionSchema = z.object({
  collateralId: Uint256Schema,
  liquidator: AddressSchema,
  orderParameters: SeaportOrderParamsSchema,
  auctionStart: z.number(),
  auctionEnd: z.number(),
});

export const AuctionsResponseSchema = z.object({
  results: z.array(AuctionSchema),
  count: z.number().int().min(0).max(100),
});

export type Auction = z.infer<typeof AuctionSchema>;
export type SeaportOrderParams = z.infer<typeof SeaportOrderParamsSchema>;
export type SeaportConsiderationItem = z.infer<
  typeof SeaportConsiderationItemSchema
>;
export type SeaportOfferItem = z.infer<typeof SeaportOfferItemSchema>;

export type AuctionsResponse = z.input<typeof AuctionsResponseSchema>;
export type AuctionsParsedResponse = z.infer<typeof AuctionsResponseSchema>;
