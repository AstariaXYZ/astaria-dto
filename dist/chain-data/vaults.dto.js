import { AddressSchema, HexSchema } from "@astariaxyz/sdk";
import { z } from "zod";
import { BoolParamSchema, PaginationParamsSchema } from "../common";
import { Uint256Schema } from "../common/number";
export var VaultType;
(function (VaultType) {
    VaultType["Solo"] = "1";
    VaultType["Public"] = "2";
})(VaultType || (VaultType = {}));
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
    vaultBalance: Uint256Schema,
    vaultType: z.nativeEnum(VaultType),
    strategist: AddressSchema,
    delegate: AddressSchema,
    depositBalance: Uint256Schema.optional(),
    withdrawBalances: z.array(WithdrawBalanceSchema).optional(),
    //off-chain data
    name: z.string(),
    description: z.string().optional(),
    thesis: z.string().optional(),
    banner: z.string().optional(),
    profile: z.string().optional(),
    strategistName: z.string().optional(),
    isVerified: z.boolean().optional(),
});
export const VaultsQueryParamsSchemaOld = z
    .object({
    lp: AddressSchema.optional(),
    auth: AddressSchema.optional(),
    verified: BoolParamSchema,
})
    .merge(PaginationParamsSchema);
export const VaultsQueryParamsSchema = z
    .object({
    lp: AddressSchema.optional(),
    filter: z
        .object({
        auth: AddressSchema.optional(),
        verified: BoolParamSchema,
        lp: BoolParamSchema,
    })
        .default({}),
    include: z
        .object({
        shutdown: BoolParamSchema,
    })
        .default({}),
    display: z
        .object({
        lp: BoolParamSchema,
    })
        .default({}),
})
    .merge(PaginationParamsSchema);
export const VaultsResponseSchema = z.object({
    results: z.array(VaultResponseSchema),
    count: z.number().int().positive().max(100),
});
//# sourceMappingURL=vaults.dto.js.map