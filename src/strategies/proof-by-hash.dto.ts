import { z } from "zod";
import { CidSchema } from "../common/cid";
import { ProofSchema, SignatureSchema, TypedDataSchema } from "../common/sdk-stuff";

export const ProofByHashResponseSchema = z.object({
  proof: ProofSchema,
  signature: SignatureSchema,
  cid: CidSchema,
  typedData: TypedDataSchema,
});

export type ProofByHashResponse = z.input<typeof ProofByHashResponseSchema>;
export type ProofByHashParsedResponse = z.infer<
  typeof ProofByHashResponseSchema
>;
