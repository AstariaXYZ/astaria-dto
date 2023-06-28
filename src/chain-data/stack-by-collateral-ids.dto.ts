import { z } from "zod";
import { Uint256Schema } from "../common/number";
import { StackSlotSchema } from "./common/stack-slot";

export const StackByCollateralIdsResponseSchema = z.array(
  z.object({
    collateralId: Uint256Schema,
    stack: z.array(StackSlotSchema),
  })
);

export type StackByCollateralIdsResponse = z.input<
  typeof StackByCollateralIdsResponseSchema
>;
export type StackByCollateralIdsParsedResponse = z.infer<
  typeof StackByCollateralIdsResponseSchema
>;
