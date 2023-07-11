"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationsResponseSchema = void 0;
const zod_1 = require("zod");
const lien_1 = require("./common/lien");
exports.LiquidationsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(lien_1.LienAndAuctionSchema),
    count: zod_1.z.number().int().nonnegative(),
});
//# sourceMappingURL=liquidations.dto.js.map