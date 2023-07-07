import { z } from "zod";
import { StackSlotSchema } from "./common/stack-slot";
import { Uint256Schema } from "../common/number";

export const Liquidation = z.object({
  collateralId: Uint256Schema,
  stack: StackSlotSchema,
});

export const LiquidationsResponseSchema = z.object({
  results: z.array(Liquidation),
  count: z.number().int().nonnegative(),
});

export type Liquidation = z.infer<typeof Liquidation>;
export type LiquidationsResponse = z.input<typeof LiquidationsResponseSchema>;
export type LiquidationsParsedResponse = z.infer<
  typeof LiquidationsResponseSchema
>;
