"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationsResponseSchema = exports.Liquidation = void 0;
const zod_1 = require("zod");
const stack_slot_1 = require("./common/stack-slot");
const number_1 = require("../common/number");
exports.Liquidation = zod_1.z.object({
    collateralId: number_1.Uint256Schema,
    stack: zod_1.z.array(stack_slot_1.StackSlotSchema),
    position: zod_1.z.number().int().min(0).max(4),
});
exports.LiquidationsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.Liquidation),
    count: zod_1.z.number().int().min(0),
});
//# sourceMappingURL=liquidations.dto.js.map