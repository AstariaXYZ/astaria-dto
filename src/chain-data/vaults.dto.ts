import { z } from "zod";
import { AddressSchema, HexSchema, Uint256Schema } from "@astariaxyz/sdk";
import { PaginationParamsSchema } from "../common";

export enum VaultType {
  Solo = "1",
  Public = "2",
}

export const VaultQueryParamsSchema = z.object({
  lp: AddressSchema.optional(),
});

export const WithdrawBalanceSchema = z.object({
  balance: Uint256Schema,
  epoch: Uint256Schema,
  withdrawProxy: HexSchema,
});


export const VaultResponseSchema = z.object({
  vault: AddressSchema,
  vaultBalance: Uint256Schema,//Actually vault shares
  vaultType: z.nativeEnum(VaultType),
  //balances returned if lp is passed
  depositBalance: Uint256Schema.optional(),
  withdrawBalances: z.array(WithdrawBalanceSchema).optional(),
  //off-chain data
  isVerified: z.boolean(),
  name: z.string(),
  description: z.string().optional(),
  thesis: z.string().optional(),
  banner: z.string().optional(),
  profile: z.string().optional(),
});

export const VaultsQueryParamsSchema = z.object({
  filter: z.object({
    auth: AddressSchema.optional(),
    verified: z.boolean().default(false),
    lp: z.boolean().default(false),
  }).default({}),

  include: z.object({
    shutdown: z.boolean().default(false),
  }).default({}),

  display: z.object({
    lp: z.boolean().default(false),
  }).default({}),

}).merge(PaginationParamsSchema);


export const VaultsResponseSchema = z.object({
  results: z.array(VaultResponseSchema),
  count: z.number().int().positive().max(100),
});


export type WithdrawBalance = z.infer<typeof WithdrawBalanceSchema>;

export type VaultsQueryParams = z.input<typeof VaultsQueryParamsSchema>;
export type VaultsResponse = z.input<typeof VaultsResponseSchema>;
export type VaultsParsedResponse = z.infer<typeof VaultsResponseSchema>;

export type VaultQueryParams = z.input<typeof VaultQueryParamsSchema>;
export type VaultResponse = z.input<typeof VaultResponseSchema>;
export type VaultParsedResponse = z.infer<typeof VaultResponseSchema>;
