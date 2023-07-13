"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = void 0;
const zod_1 = require("zod");
const number_1 = require("../../common/number");
const sdk_stuff_1 = require("../../common/sdk-stuff");
exports.OfferSchema = sdk_stuff_1.UniqueOfferSchema.and(zod_1.z.object({
    expiration: number_1.Uint256Schema,
}));
//# sourceMappingURL=offer.js.map