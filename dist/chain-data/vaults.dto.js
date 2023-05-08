import { z } from "zod";
import { AddressSchema, HexSchema, Uint256Schema } from "@astariaxyz/sdk";
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
//# sourceMappingURL=vaults.dto.js.map