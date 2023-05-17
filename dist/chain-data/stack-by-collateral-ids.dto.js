"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackByCollateralIdsResponseSchema = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var stack_slot_1 = require("./common/stack-slot");
exports.StackByCollateralIdsResponseSchema = zod_1.z.array(zod_1.z.object({
    collateralId: sdk_1.Uint256Schema,
    stack: zod_1.z.array(stack_slot_1.StackSlotSchema),
}));
