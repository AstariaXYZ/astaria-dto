import { z } from "zod";
import { StackSlotSchema } from "./common/stack-slot";

export const StackByCollateralIdResponseSchema = z.array(StackSlotSchema);

export type StackByCollateralIdResponse = z.input<
  typeof StackByCollateralIdResponseSchema
>;

export type StackByCollateralIdParsedResponse = z.infer<
  typeof StackByCollateralIdResponseSchema
>;
