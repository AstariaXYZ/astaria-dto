import { z } from "zod";
import { Uint256Schema } from "../common/number";

//Returns array of lien ids
export const LienTokensByOwnerResponseSchema = z.array(Uint256Schema);

export type LienTokensByOwnerResponse = z.input<
  typeof LienTokensByOwnerResponseSchema
>;

export type LienTokensByOwnerParsedResponse = z.infer<
  typeof LienTokensByOwnerResponseSchema
>;
