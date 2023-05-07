import { z } from "zod";
import { StackSlotSchema } from "./common/stack-slot";

export const StackByCollateralIdResponseSchema = z.array(StackSlotSchema);

export type StackByCollateralIdResponse = z.infer<
  typeof StackByCollateralIdResponseSchema
>;
