import { Uint256Schema } from "@astariaxyz/sdk";
import { z } from "zod";


//Returns array of lien ids
export const LienTokensByOwnerResponseSchema = z.array(Uint256Schema);

export type LienTokensByOwnerResponse = z.infer<
  typeof LienTokensByOwnerResponseSchema
>;
