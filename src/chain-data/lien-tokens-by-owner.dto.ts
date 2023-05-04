import z from "zod";
import { Uint256Schema } from "@astariaxyz/sdk";

//Returns array of lien ids
export const LienTokensByOwnerResponseSchema = z.array(Uint256Schema);

export type LienTokensByOwnerResponse = z.infer<
  typeof LienTokensByOwnerResponseSchema
>;
