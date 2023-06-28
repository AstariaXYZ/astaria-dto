"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersByAssetsResponseSchema = exports.OffersByAssetsRequestSchema = exports.AssetSchema = void 0;
const sdk_1 = require("@astariaxyz/sdk");
const zod_1 = require("zod");
const number_1 = require("../common/number");
const offer_1 = require("./common/offer");
exports.AssetSchema = zod_1.z.object({
    collectionAddress: sdk_1.AddressSchema,
    tokenIds: zod_1.z.array(number_1.Uint256Schema),
});
exports.OffersByAssetsRequestSchema = zod_1.z.object({
    borrower: sdk_1.AddressSchema,
    assets: zod_1.z.array(exports.AssetSchema),
});
exports.OffersByAssetsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(offer_1.OfferSchema),
    count: zod_1.z.number().int().min(0),
});
//# sourceMappingURL=offers-by-assets.dto.js.map