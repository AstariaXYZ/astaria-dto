import * as z from "zod";
import { AddressSchema, HexSchema } from "@astariaxyz/sdk";
import { CidSchema } from "../common/cid";

export const StrategyPrepareRequestSchema = z.object({
  delegateAddress: AddressSchema,
  signature: HexSchema,
  cid: CidSchema,
});


export const StrategyPrepareResponseSchema = z.object({
  presignedUrl: z.string().url(),
});


export type StrategyPrepareRequest = z.infer<
  typeof StrategyPrepareRequestSchema
>;

export type StrategyPrepareResponse = z.infer<
  typeof StrategyPrepareResponseSchema
>;
