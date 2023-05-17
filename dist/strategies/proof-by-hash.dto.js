"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofByHashResponseSchema = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var cid_1 = require("../common/cid");
exports.ProofByHashResponseSchema = zod_1.z.object({
    proof: sdk_1.ProofSchema,
    signature: sdk_1.SignatureSchema,
    cid: cid_1.CidSchema,
    typedData: sdk_1.TypedDataSchema,
});
