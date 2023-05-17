"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackByCollateralIdResponseSchema = void 0;
var zod_1 = require("zod");
var stack_slot_1 = require("./common/stack-slot");
exports.StackByCollateralIdResponseSchema = zod_1.z.array(stack_slot_1.StackSlotSchema);
