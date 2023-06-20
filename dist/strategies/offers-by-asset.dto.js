"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersByAssetResponseSchema = void 0;
var zod_1 = require("zod");
var offer_1 = require("./common/offer");
exports.OffersByAssetResponseSchema = zod_1.z.object({
    results: zod_1.z.array(offer_1.OfferSchema),
    count: zod_1.z.number().int().min(0),
});
