import { z } from "zod";
import { AddressSchema, HexSchema, Uint256Schema } from "@astariaxyz/sdk";
import { PaginationParamsSchema } from "../common";
export var VaultType;
(function (VaultType) {
    VaultType["Solo"] = "1";
    VaultType["Public"] = "2";
})(VaultType || (VaultType = {}));
export const WithdrawBalanceSchema = z.object({
    balance: Uint256Schema,
    epoch: Uint256Schema,
    withdrawProxy: HexSchema,
});
export const VaultResponseSchema = z.object({
    vault: AddressSchema,
    vaultBalance: Uint256Schema,
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
export const VaultsDisplayParamsSchema = z.object({
    balances: AddressSchema.optional(),
});
export const VaultsQueryParamsSchema = z.object({
    filter: z.object({
        lp: AddressSchema.optional(),
        auth: AddressSchema.optional(),
        verified: z.boolean().optional(),
    })
        .optional(),
    include: z.object({
        shutdown: z.boolean().optional(),
    })
        .optional(),
    display: VaultsDisplayParamsSchema.optional(),
}).merge(PaginationParamsSchema);
export const VaultQueryParamsSchema = z.object({
    display: VaultsDisplayParamsSchema.optional(),
});
export const VaultsResponseSchema = z.object({
    results: z.array(VaultResponseSchema),
    count: z.number().int().positive().max(100),
});
//# sourceMappingURL=vaults.dto.js.map