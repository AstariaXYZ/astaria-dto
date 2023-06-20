import { z } from "zod";
import { Uint256Schema } from "@astariaxyz/sdk";
import { StackSlotSchema } from "./common/stack-slot";

export const Liquidation = z.object({
  collateralId: Uint256Schema,
  stack: z.array(StackSlotSchema),
  position: z.number().int().min(0).max(4),
});

export const LiquidationsResponseSchema = z.object({
  results: z.array(Liquidation),
  count: z.number().int().min(0),
});

export type Liquidation = z.infer<typeof Liquidation>;
export type LiquidationsResponse = z.input<typeof LiquidationsResponseSchema>;
export type LiquidationsParsedResponse = z.infer<
  typeof LiquidationsResponseSchema
>;
