"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationsResponseSchema = exports.Liquidation = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var stack_slot_1 = require("./common/stack-slot");
exports.Liquidation = zod_1.z.object({
    collateralId: sdk_1.Uint256Schema,
    stack: zod_1.z.array(stack_slot_1.StackSlotSchema),
    position: zod_1.z.number().int().min(0).max(4),
});
exports.LiquidationsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.Liquidation),
    count: zod_1.z.number().int().min(0).max(100),
});
