import { __rest } from "tslib";
import { Uint256Schema, AddressSchema, HexSchema } from "@astariaxyz/sdk";
import { z } from "zod";
export const SeaportConsiderationItemSchema = z.object({
    identifierOrCriteria: z.string(),
    startAmount: Uint256Schema,
    endAmount: Uint256Schema,
    itemType: z.string(),
    recipient: AddressSchema,
    token: AddressSchema,
});
export const SeaportOfferItemSchema = z.object({
    identifierOrCriteria: z.string(),
    startAmount: Uint256Schema,
    endAmount: Uint256Schema,
    itemType: z.string(),
    token: AddressSchema,
});
export const SeaportOrderParamsSchema = z
    .object({
    conduitKey: HexSchema,
    offerer: AddressSchema,
    orderType: z.string(),
    salt: Uint256Schema,
    totalOriginalConsiderationItems: z.number().refine((n) => n === 2),
    zone: AddressSchema,
    zoneHash: HexSchema,
    "consideration[0]": SeaportConsiderationItemSchema,
    "consideration[1]": SeaportConsiderationItemSchema,
    "offer[0]": SeaportOfferItemSchema,
    "offer[1]": SeaportOfferItemSchema,
    startTime: z.string(),
    endTime: z.string(),
})
    .transform((data) => {
    const { "consideration[0]": consideration0, "consideration[1]": consideration1, "offer[0]": offer0, "offer[1]": offer1 } = data, rest = __rest(data, ["consideration[0]", "consideration[1]", "offer[0]", "offer[1]"]);
    return Object.assign(Object.assign({}, rest), { consideration: [consideration0, consideration1], offer: [offer0, offer1] });
});
export const AuctionSchema = z.object({
    collateralId: Uint256Schema,
    liquidator: AddressSchema,
    orderParameters: SeaportOrderParamsSchema,
    auctionStart: z.number().int(),
    auctionEnd: z.number().int(),
});
export const AuctionsResponseSchema = z.object({
    results: z.array(z.any()),
    count: z.number().int().min(0).max(100),
});
//# sourceMappingURL=auctions.dto.js.map