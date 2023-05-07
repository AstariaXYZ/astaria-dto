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

export type Point = z.infer<typeof PointSchema>;
export type StackSlot = z.infer<typeof StackSlotSchema>;
export type Lien = z.infer<typeof LienSchema>;
