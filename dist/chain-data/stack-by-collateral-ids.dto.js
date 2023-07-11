"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackByCollateralIdsResponseSchema = void 0;
const zod_1 = require("zod");
const number_1 = require("../common/number");
const stack_slot_1 = require("./common/stack-slot");
exports.StackByCollateralIdsResponseSchema = zod_1.z.array(zod_1.z.object({
    collateralId: number_1.Uint256Schema,
    stack: stack_slot_1.StackSlotSchema,
}));
//# sourceMappingURL=stack-by-collateral-ids.dto.js.map