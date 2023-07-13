"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofByHashResponseSchema = void 0;
const zod_1 = require("zod");
const cid_1 = require("../common/cid");
const sdk_stuff_1 = require("../common/sdk-stuff");
exports.ProofByHashResponseSchema = zod_1.z.object({
    proof: sdk_stuff_1.ProofSchema,
    signature: sdk_stuff_1.SignatureSchema,
    cid: cid_1.CidSchema,
    typedData: sdk_stuff_1.TypedDataSchema,
});
//# sourceMappingURL=proof-by-hash.dto.js.map