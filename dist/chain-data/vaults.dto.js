"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultsResponseSchema = exports.VaultsQueryParamsSchema = exports.VaultResponseSchema = exports.WithdrawBalanceSchema = exports.VaultQueryParamsSchema = exports.VaultType = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var common_1 = require("../common");
var VaultType;
(function (VaultType) {
    VaultType["Solo"] = "1";
    VaultType["Public"] = "2";
})(VaultType = exports.VaultType || (exports.VaultType = {}));
exports.VaultQueryParamsSchema = zod_1.z.object({
    lp: sdk_1.AddressSchema.optional(),
});
exports.WithdrawBalanceSchema = zod_1.z.object({
    balance: sdk_1.Uint256Schema,
    epoch: sdk_1.Uint256Schema,
    withdrawProxy: sdk_1.HexSchema,
});
exports.VaultResponseSchema = zod_1.z.object({
    vault: sdk_1.AddressSchema,
    vaultBalance: sdk_1.Uint256Schema,
    vaultType: zod_1.z.nativeEnum(VaultType),
    //balances returned if lp is passed
    depositBalance: sdk_1.Uint256Schema.optional(),
    withdrawBalances: zod_1.z.array(exports.WithdrawBalanceSchema).optional(),
    //off-chain data
    isVerified: zod_1.z.boolean(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    thesis: zod_1.z.string().optional(),
    banner: zod_1.z.string().optional(),
    profile: zod_1.z.string().optional(),
});
exports.VaultsQueryParamsSchema = zod_1.z.object({
    filter: zod_1.z.object({
        auth: sdk_1.AddressSchema.optional(),
        verified: zod_1.z.boolean().default(false),
        lp: zod_1.z.boolean().default(false),
    }).default({}),
    include: zod_1.z.object({
        shutdown: zod_1.z.boolean().default(false),
    }).default({}),
    display: zod_1.z.object({
        lp: zod_1.z.boolean().default(false),
    }).default({}),
}).merge(common_1.PaginationParamsSchema);
exports.VaultsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.VaultResponseSchema),
    count: zod_1.z.number().int().positive().max(100),
});
