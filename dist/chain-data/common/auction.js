"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionSchema = exports.SeaportOrderParamsSchema = exports.SeaportConsiderationItemSchema = exports.SeaportOfferItemSchema = void 0;
const zod_1 = require("zod");
const number_1 = require("../../common/number");
const sdk_stuff_1 = require("../../common/sdk-stuff");
exports.SeaportOfferItemSchema = zod_1.z.object({
    identifierOrCriteria: number_1.Uint256Schema,
    startAmount: number_1.Uint256Schema,
    endAmount: number_1.Uint256Schema,
    itemType: number_1.Uint8Schema,
    token: sdk_stuff_1.AddressSchema,
});
exports.SeaportConsiderationItemSchema = exports.SeaportOfferItemSchema.extend({
    recipient: sdk_stuff_1.AddressSchema,
});
exports.SeaportOrderParamsSchema = zod_1.z
    .object({
    conduitKey: sdk_stuff_1.HexSchema,
    offerer: sdk_stuff_1.AddressSchema,
    orderType: number_1.Uint8Schema,
    salt: number_1.Uint256Schema,
    totalOriginalConsiderationItems: number_1.Uint256Schema.refine((val) => val === 1n),
    zone: sdk_stuff_1.AddressSchema,
    zoneHash: sdk_stuff_1.HexSchema,
    consideration: exports.SeaportConsiderationItemSchema.array().length(1),
    offer: exports.SeaportOfferItemSchema.array().length(1),
    startTime: number_1.Uint256Schema,
    endTime: number_1.Uint256Schema,
});
exports.AuctionSchema = zod_1.z.object({
    liquidator: sdk_stuff_1.AddressSchema,
    orderParameters: exports.SeaportOrderParamsSchema,
    orderHash: sdk_stuff_1.HexSchema,
    offererCounterAtLiquidation: number_1.Uint256Schema,
    auctionStart: zod_1.z.number().int(),
    auctionEnd: zod_1.z.number().int(),
});
//# sourceMappingURL=auction.js.map