import { Uint256Schema, AddressSchema } from "@astariaxyz/sdk";
import { OfferSchema } from "./common/offer";
import { z } from "zod";

export const AssetSchema = z.object({
  collectionAddress: AddressSchema,
  tokenIds: z.array(Uint256Schema),
});

export const OffersByAssetsRequestSchema = z.object({
  borrower: AddressSchema,
  assets: z.array(AssetSchema),
});

export const OffersByAssetsResponseSchema = z.object({
  results: z.array(OfferSchema),
  count: z.number().int().min(0).max(100),
});

export type Asset = z.input<typeof AssetSchema>;
export type OffersByAssetsRequest = z.infer<typeof OffersByAssetsRequestSchema>;

export type OffersByAssetsResponse = z.input<
  typeof OffersByAssetsResponseSchema
>;
export type OffersByAssetsParsedRequest = z.infer<typeof OffersByAssetsRequestSchema>;
