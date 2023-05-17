"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyPrepareResponseSchema = exports.StrategyPrepareRequestSchema = void 0;
var z = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var cid_1 = require("../common/cid");
exports.StrategyPrepareRequestSchema = z.object({
    delegateAddress: sdk_1.AddressSchema,
    signature: sdk_1.HexSchema,
    cid: cid_1.CidSchema,
});
exports.StrategyPrepareResponseSchema = z.object({
    presignedUrl: z.string().url(),
});
