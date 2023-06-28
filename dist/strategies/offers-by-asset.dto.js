"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersByAssetResponseSchema = void 0;
const zod_1 = require("zod");
const offer_1 = require("./common/offer");
exports.OffersByAssetResponseSchema = zod_1.z.object({
    results: zod_1.z.array(offer_1.OfferSchema),
    count: zod_1.z.number().int().nonnegative()
});
//# sourceMappingURL=offers-by-asset.dto.js.map