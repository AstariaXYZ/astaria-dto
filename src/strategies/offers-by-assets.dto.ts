import { AddressSchema } from "@astariaxyz/sdk";
import { z } from "zod";
import { Uint256Schema } from "../common/number";
import { OfferSchema } from "./common/offer";

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
  count: z.number().int().min(0),
});

export type Asset = z.input<typeof AssetSchema>;
export type ParsedAsset = z.infer<typeof AssetSchema>;

export type OffersByAssetsRequest = z.infer<typeof OffersByAssetsRequestSchema>;

export type OffersByAssetsResponse = z.input<
  typeof OffersByAssetsResponseSchema
>;
export type OffersByAssetsParsedResponse = z.infer<
  typeof OffersByAssetsResponseSchema
>;
