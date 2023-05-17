"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = void 0;
var sdk_1 = require("@astariaxyz/sdk");
var cid_1 = require("../../common/cid");
var zod_1 = require("zod");
exports.OfferSchema = zod_1.z.object({
    vault: sdk_1.AddressSchema,
    token: sdk_1.AddressSchema,
    tokenId: sdk_1.Uint256Schema.optional(),
    borrower: sdk_1.AddressSchema.optional(),
    expiration: sdk_1.Uint256Schema,
    type: zod_1.z.nativeEnum(sdk_1.StrategyLeafType),
    offerHash: sdk_1.HexSchema,
    lien: sdk_1.LienSchema,
    cid: cid_1.CidSchema,
    leaf: sdk_1.HexSchema,
});
