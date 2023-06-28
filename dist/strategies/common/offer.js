"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = void 0;
const sdk_1 = require("@astariaxyz/sdk");
const zod_1 = require("zod");
const number_1 = require("../../common/number");
exports.OfferSchema = sdk_1.UniqueOfferSchema.and(zod_1.z.object({
    expiration: number_1.Uint256Schema,
}));
//# sourceMappingURL=offer.js.map