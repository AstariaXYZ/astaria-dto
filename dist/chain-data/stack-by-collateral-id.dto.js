"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackByCollateralIdResponseSchema = void 0;
const zod_1 = require("zod");
const stack_slot_1 = require("./common/stack-slot");
exports.StackByCollateralIdResponseSchema = zod_1.z.array(stack_slot_1.StackSlotSchema);
//# sourceMappingURL=stack-by-collateral-id.dto.js.map