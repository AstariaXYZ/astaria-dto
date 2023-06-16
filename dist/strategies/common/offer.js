"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = void 0;
var sdk_1 = require("@astariaxyz/sdk");
var zod_1 = require("zod");
exports.OfferSchema = sdk_1.UniqueOfferSchema.and(zod_1.z.object({
    expiration: sdk_1.Uint256Schema,
}));
