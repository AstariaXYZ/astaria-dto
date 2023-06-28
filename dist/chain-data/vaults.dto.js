"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultsResponseSchema = exports.VaultsQueryParamsSchema = exports.VaultsQueryParamsSchemaOld = exports.VaultResponseSchema = exports.WithdrawBalanceSchema = exports.VaultQueryParamsSchema = exports.VaultType = void 0;
const sdk_1 = require("@astariaxyz/sdk");
const zod_1 = require("zod");
const common_1 = require("../common");
const number_1 = require("../common/number");
var VaultType;
(function (VaultType) {
    VaultType["None"] = "0";
    VaultType["Solo"] = "1";
    VaultType["Public"] = "2";
})(VaultType || (exports.VaultType = VaultType = {}));
exports.VaultQueryParamsSchema = zod_1.z.object({
    lp: sdk_1.AddressSchema.optional(),
});
exports.WithdrawBalanceSchema = zod_1.z.object({
    balance: number_1.Uint256Schema,
    epoch: number_1.Uint256Schema,
    withdrawProxy: sdk_1.HexSchema,
});
exports.VaultResponseSchema = zod_1.z.object({
    vault: sdk_1.AddressSchema,
    vaultBalance: number_1.Uint256Schema,
    vaultType: zod_1.z.nativeEnum(VaultType),
    strategist: sdk_1.AddressSchema,
    delegate: sdk_1.AddressSchema,
    depositBalance: number_1.Uint256Schema.optional(),
    withdrawBalances: zod_1.z.array(exports.WithdrawBalanceSchema).optional(),
    //off-chain data
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    thesis: zod_1.z.string().optional(),
    banner: zod_1.z.string().optional(),
    profile: zod_1.z.string().optional(),
    strategistName: zod_1.z.string().optional(),
    isVerified: zod_1.z.boolean().optional(),
});
exports.VaultsQueryParamsSchemaOld = zod_1.z
    .object({
    lp: sdk_1.AddressSchema.optional(),
    auth: sdk_1.AddressSchema.optional(),
    verified: common_1.BoolParamSchema,
})
    .merge(common_1.PaginationParamsSchema);
exports.VaultsQueryParamsSchema = zod_1.z
    .object({
    lp: sdk_1.AddressSchema.optional(),
    filter: zod_1.z
        .object({
        auth: sdk_1.AddressSchema.optional(),
        verified: common_1.BoolParamSchema,
        lp: common_1.BoolParamSchema,
    })
        .default({}),
    include: zod_1.z
        .object({
        shutdown: common_1.BoolParamSchema,
    })
        .default({}),
    display: zod_1.z
        .object({
        lp: common_1.BoolParamSchema,
    })
        .default({}),
})
    .merge(common_1.PaginationParamsSchema);
exports.VaultsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.VaultResponseSchema),
    count: zod_1.z.number().int().positive().max(100),
});
//# sourceMappingURL=vaults.dto.js.map