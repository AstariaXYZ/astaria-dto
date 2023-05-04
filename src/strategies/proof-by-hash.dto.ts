import { ProofSchema, SignatureSchema, TypedDataSchema } from "@astariaxyz/sdk";
import z from "zod";
import { CidSchema } from "../common/cid";

export const ProofByHashResponseSchema = z.object({
  proof: ProofSchema,
  signature: SignatureSchema,
  cid: CidSchema,
  typedData: TypedDataSchema,
});

export type ProofByHashResponse = z.infer<typeof ProofByHashResponseSchema>;
