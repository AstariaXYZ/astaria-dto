import { z } from "zod";
export declare enum VaultType {
    Solo = "1",
    Public = "2"
}
export declare const VaultQueryParamsSchema: z.ZodObject<{
    lp: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
}, "strip", z.ZodTypeAny, {
    lp?: `0x${string}` | undefined;
}, {
    lp?: `0x${string}` | undefined;
}>;
export declare const WithdrawBalanceSchema: z.ZodObject<{
    balance: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    epoch: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    withdrawProxy: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    balance: bigint;
    epoch: bigint;
    withdrawProxy: `0x${string}`;
}, {
    balance: string | number | bigint;
    epoch: string | number | bigint;
    withdrawProxy: `0x${string}`;
}>;
export declare const VaultResponseSchema: z.ZodObject<{
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    vaultBalance: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    vaultType: z.ZodNativeEnum<typeof VaultType>;
    strategist: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    delegate: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    depositBalance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    withdrawBalances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        balance: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        epoch: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        withdrawProxy: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        balance: bigint;
        epoch: bigint;
        withdrawProxy: `0x${string}`;
    }, {
        balance: string | number | bigint;
        epoch: string | number | bigint;
        withdrawProxy: `0x${string}`;
    }>, "many">>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    thesis: z.ZodOptional<z.ZodString>;
    banner: z.ZodOptional<z.ZodString>;
    profile: z.ZodOptional<z.ZodString>;
    strategistName: z.ZodOptional<z.ZodString>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    vault: `0x${string}`;
    vaultBalance: bigint;
    vaultType: VaultType;
    strategist: `0x${string}`;
    delegate: `0x${string}`;
    name: string;
    depositBalance?: bigint | undefined;
    withdrawBalances?: {
        balance: bigint;
        epoch: bigint;
        withdrawProxy: `0x${string}`;
    }[] | undefined;
    description?: string | undefined;
    thesis?: string | undefined;
    banner?: string | undefined;
    profile?: string | undefined;
    strategistName?: string | undefined;
    isVerified?: boolean | undefined;
}, {
    vault: `0x${string}`;
    vaultBalance: string | number | bigint;
    vaultType: VaultType;
    strategist: `0x${string}`;
    delegate: `0x${string}`;
    name: string;
    depositBalance?: string | number | bigint | undefined;
    withdrawBalances?: {
        balance: string | number | bigint;
        epoch: string | number | bigint;
        withdrawProxy: `0x${string}`;
    }[] | undefined;
    description?: string | undefined;
    thesis?: string | undefined;
    banner?: string | undefined;
    profile?: string | undefined;
    strategistName?: string | undefined;
    isVerified?: boolean | undefined;
}>;
export declare const VaultsQueryParamsSchemaOld: z.ZodObject<{
    lp: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
    auth: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
    verified: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean, string | undefined>;
    skip: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    skip: number;
    limit: number;
    verified: boolean;
    lp?: `0x${string}` | undefined;
    auth?: `0x${string}` | undefined;
}, {
    lp?: `0x${string}` | undefined;
    auth?: `0x${string}` | undefined;
    verified?: string | undefined;
    skip?: number | undefined;
    limit?: number | undefined;
}>;
export declare const VaultsQueryParamsSchema: z.ZodObject<{
    filter: z.ZodDefault<z.ZodObject<{
        auth: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
        verified: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean, string | undefined>;
        lp: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean, string | undefined>;
    }, "strip", z.ZodTypeAny, {
        lp: boolean;
        verified: boolean;
        auth?: `0x${string}` | undefined;
    }, {
        auth?: `0x${string}` | undefined;
        verified?: string | undefined;
        lp?: string | undefined;
    }>>;
    lp: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
    include: z.ZodDefault<z.ZodObject<{
        shutdown: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean, string | undefined>;
    }, "strip", z.ZodTypeAny, {
        shutdown: boolean;
    }, {
        shutdown?: string | undefined;
    }>>;
    display: z.ZodDefault<z.ZodObject<{
        lp: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean, string | undefined>;
    }, "strip", z.ZodTypeAny, {
        lp: boolean;
    }, {
        lp?: string | undefined;
    }>>;
    skip: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    filter: {
        lp: boolean;
        verified: boolean;
        auth?: `0x${string}` | undefined;
    };
    skip: number;
    limit: number;
    include: {
        shutdown: boolean;
    };
    display: {
        lp: boolean;
    };
    lp?: `0x${string}` | undefined;
}, {
    filter?: {
        auth?: `0x${string}` | undefined;
        verified?: string | undefined;
        lp?: string | undefined;
    } | undefined;
    lp?: `0x${string}` | undefined;
    include?: {
        shutdown?: string | undefined;
    } | undefined;
    display?: {
        lp?: string | undefined;
    } | undefined;
    skip?: number | undefined;
    limit?: number | undefined;
}>;
export declare const VaultsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        vaultBalance: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        vaultType: z.ZodNativeEnum<typeof VaultType>;
        strategist: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        delegate: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        depositBalance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        withdrawBalances: z.ZodOptional<z.ZodArray<z.ZodObject<{
            balance: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            epoch: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            withdrawProxy: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            balance: bigint;
            epoch: bigint;
            withdrawProxy: `0x${string}`;
        }, {
            balance: string | number | bigint;
            epoch: string | number | bigint;
            withdrawProxy: `0x${string}`;
        }>, "many">>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thesis: z.ZodOptional<z.ZodString>;
        banner: z.ZodOptional<z.ZodString>;
        profile: z.ZodOptional<z.ZodString>;
        strategistName: z.ZodOptional<z.ZodString>;
        isVerified: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        vault: `0x${string}`;
        vaultBalance: bigint;
        vaultType: VaultType;
        strategist: `0x${string}`;
        delegate: `0x${string}`;
        name: string;
        depositBalance?: bigint | undefined;
        withdrawBalances?: {
            balance: bigint;
            epoch: bigint;
            withdrawProxy: `0x${string}`;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
        strategistName?: string | undefined;
        isVerified?: boolean | undefined;
    }, {
        vault: `0x${string}`;
        vaultBalance: string | number | bigint;
        vaultType: VaultType;
        strategist: `0x${string}`;
        delegate: `0x${string}`;
        name: string;
        depositBalance?: string | number | bigint | undefined;
        withdrawBalances?: {
            balance: string | number | bigint;
            epoch: string | number | bigint;
            withdrawProxy: `0x${string}`;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
        strategistName?: string | undefined;
        isVerified?: boolean | undefined;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        vault: `0x${string}`;
        vaultBalance: bigint;
        vaultType: VaultType;
        strategist: `0x${string}`;
        delegate: `0x${string}`;
        name: string;
        depositBalance?: bigint | undefined;
        withdrawBalances?: {
            balance: bigint;
            epoch: bigint;
            withdrawProxy: `0x${string}`;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
        strategistName?: string | undefined;
        isVerified?: boolean | undefined;
    }[];
    count: number;
}, {
    results: {
        vault: `0x${string}`;
        vaultBalance: string | number | bigint;
        vaultType: VaultType;
        strategist: `0x${string}`;
        delegate: `0x${string}`;
        name: string;
        depositBalance?: string | number | bigint | undefined;
        withdrawBalances?: {
            balance: string | number | bigint;
            epoch: string | number | bigint;
            withdrawProxy: `0x${string}`;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
        strategistName?: string | undefined;
        isVerified?: boolean | undefined;
    }[];
    count: number;
}>;
export type WithdrawBalance = z.infer<typeof WithdrawBalanceSchema>;
export type VaultsQueryParams = z.input<typeof VaultsQueryParamsSchema>;
export type VaultsQueryParamsOld = z.input<typeof VaultsQueryParamsSchemaOld>;
export type VaultsResponse = z.input<typeof VaultsResponseSchema>;
export type VaultsParsedResponse = z.infer<typeof VaultsResponseSchema>;
export type VaultQueryParams = z.input<typeof VaultQueryParamsSchema>;
export type VaultResponse = z.input<typeof VaultResponseSchema>;
export type VaultParsedResponse = z.infer<typeof VaultResponseSchema>;
