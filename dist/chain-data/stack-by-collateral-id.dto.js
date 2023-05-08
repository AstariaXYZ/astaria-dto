import { z } from "zod";
import { StackSlotSchema } from "./common/stack-slot";
export const StackByCollateralIdResponseSchema = z.array(StackSlotSchema);
//# sourceMappingURL=stack-by-collateral-id.dto.js.map