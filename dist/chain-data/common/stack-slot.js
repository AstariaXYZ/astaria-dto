import { z } from "zod";
import { Uint256Schema, LienSchema } from "@astariaxyz/sdk";
export const PointSchema = z.object({
    amount: Uint256Schema,
    end: Uint256Schema,
    start: Uint256Schema,
    lienId: Uint256Schema,
});
export const StackSlotSchema = z.object({
    lien: LienSchema,
    point: PointSchema,
});
//# sourceMappingURL=stack-slot.js.map