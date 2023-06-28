"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionsResponseSchema = exports.AuctionSchema = exports.SeaportOrderParamsSchema = exports.SeaportOfferItemSchema = exports.SeaportConsiderationItemSchema = void 0;
const sdk_1 = require("@astariaxyz/sdk");
const zod_1 = require("zod");
const number_1 = require("../common/number");
exports.SeaportConsiderationItemSchema = zod_1.z.object({
    identifierOrCriteria: number_1.Uint256Schema,
    startAmount: number_1.Uint256Schema,
    endAmount: number_1.Uint256Schema,
    itemType: number_1.Uint8Schema,
    recipient: sdk_1.AddressSchema,
    token: sdk_1.AddressSchema,
});
exports.SeaportOfferItemSchema = zod_1.z.object({
    identifierOrCriteria: number_1.Uint256Schema,
    startAmount: number_1.Uint256Schema,
    endAmount: number_1.Uint256Schema,
    itemType: number_1.Uint8Schema,
    token: sdk_1.AddressSchema,
});
exports.SeaportOrderParamsSchema = zod_1.z
    .object({
    conduitKey: sdk_1.HexSchema,
    offerer: sdk_1.AddressSchema,
    orderType: number_1.Uint8Schema,
    salt: number_1.Uint256Schema,
    totalOriginalConsiderationItems: number_1.Uint256Schema.refine((val) => val === 2n),
    zone: sdk_1.AddressSchema,
    zoneHash: sdk_1.HexSchema,
    "consideration[0]": exports.SeaportConsiderationItemSchema,
    "consideration[1]": exports.SeaportConsiderationItemSchema,
    "offer[0]": exports.SeaportOfferItemSchema,
    startTime: number_1.Uint256Schema,
    endTime: number_1.Uint256Schema,
})
    .transform((data) => {
    const { "consideration[0]": consideration0, "consideration[1]": consideration1, "offer[0]": offer0, ...rest } = data;
    return {
        ...rest,
        consideration: [consideration0, consideration1],
        offer: [offer0],
    };
});
exports.AuctionSchema = zod_1.z.object({
    collateralId: number_1.Uint256Schema,
    liquidator: sdk_1.AddressSchema,
    orderParameters: exports.SeaportOrderParamsSchema,
    auctionStart: zod_1.z.number().int(),
    auctionEnd: zod_1.z.number().int(),
});
exports.AuctionsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.AuctionSchema),
    count: zod_1.z.number().int().nonnegative()
});
//# sourceMappingURL=auctions.dto.js.map