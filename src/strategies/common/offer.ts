import {
  AddressSchema,
  HexSchema,
  LienSchema,
  Uint256Schema,
  StrategyLeafType,
} from "@astariaxyz/sdk";
import { CidSchema } from "../../common/cid";
import z from "zod";

export const OfferSchema = z.object({
  vault: AddressSchema,
  token: AddressSchema,
  tokenId: Uint256Schema.optional(),
  borrower: AddressSchema.optional(),
  expiration: Uint256Schema,
  type: z.nativeEnum(StrategyLeafType),
  offerHash: HexSchema,
  lien: LienSchema,
  cid: CidSchema,
  leaf: HexSchema,
});
