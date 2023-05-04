import { Uint256Schema } from "@astariaxyz/sdk";
import { z } from "zod";
//Returns array of lien ids
export const LienTokensByOwnerResponseSchema = z.array(Uint256Schema);
//# sourceMappingURL=lien-tokens-by-owner.dto.js.map