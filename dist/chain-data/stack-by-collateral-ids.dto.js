import { z } from "zod";
import { Uint256Schema } from "@astariaxyz/sdk";
import { StackSlotSchema } from "./common/stack-slot";
export const StackByCollateralIdsResponseSchema = z.array(z.object({
    collateralId: Uint256Schema,
    stack: z.array(StackSlotSchema),
}));
//# sourceMappingURL=stack-by-collateral-ids.dto.js.map