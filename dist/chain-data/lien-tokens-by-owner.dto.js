import { z } from "zod";
import { Uint256Schema } from "../common/number";
//Returns array of lien ids
export const LienTokensByOwnerResponseSchema = z.array(Uint256Schema);
//# sourceMappingURL=lien-tokens-by-owner.dto.js.map