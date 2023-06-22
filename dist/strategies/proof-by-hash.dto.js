import { z } from "zod";
import { ProofSchema, SignatureSchema, TypedDataSchema } from "@astariaxyz/sdk";
import { CidSchema } from "../common/cid";
export const ProofByHashResponseSchema = z.object({
    proof: ProofSchema,
    signature: SignatureSchema,
    cid: CidSchema,
    typedData: TypedDataSchema,
});
//# sourceMappingURL=proof-by-hash.dto.js.map