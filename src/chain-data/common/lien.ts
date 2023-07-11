import * as z from 'zod';
import { AuctionSchema } from './auction';
import { StackSlotSchema } from './stack-slot';

export const LienAndAuctionSchema = z.object({
  stack: StackSlotSchema,
  auction: AuctionSchema
});

export type LienAndAuctionSchema = z.infer<typeof LienAndAuctionSchema>;

