import { z } from "zod";
export declare enum VaultType {
    Solo = "1",
    Public = "2"
}
export declare const VaultQueryParamsSchema: z.ZodObject<{
    lp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lp?: string | undefined;
}, {
    lp?: string | undefined;
}>;
export declare const WithdrawBalanceSchema: z.ZodObject<{
    balance: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
        hex: z.ZodString;
        type: z.ZodLiteral<"BigNumber">;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        type: "BigNumber";
    }, {
        hex: string;
        type: "BigNumber";
    }>, import("ethers").BigNumber, {
        hex: string;
        type: "BigNumber";
    }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }>;
    epoch: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
        hex: z.ZodString;
        type: z.ZodLiteral<"BigNumber">;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        type: "BigNumber";
    }, {
        hex: string;
        type: "BigNumber";
    }>, import("ethers").BigNumber, {
        hex: string;
        type: "BigNumber";
    }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }>;
    withdrawProxy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    balance: import("ethers").BigNumber;
    epoch: import("ethers").BigNumber;
    withdrawProxy: string;
}, {
    balance: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    epoch: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    withdrawProxy: string;
}>;
export declare const VaultResponseSchema: z.ZodObject<{
    vault: z.ZodString;
    vaultBalance: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
        hex: z.ZodString;
        type: z.ZodLiteral<"BigNumber">;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        type: "BigNumber";
    }, {
        hex: string;
        type: "BigNumber";
    }>, import("ethers").BigNumber, {
        hex: string;
        type: "BigNumber";
    }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }>;
    vaultType: z.ZodNativeEnum<typeof VaultType>;
    depositBalance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
        hex: z.ZodString;
        type: z.ZodLiteral<"BigNumber">;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        type: "BigNumber";
    }, {
        hex: string;
        type: "BigNumber";
    }>, import("ethers").BigNumber, {
        hex: string;
        type: "BigNumber";
    }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }>>;
    withdrawBalances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        balance: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodString;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            type: "BigNumber";
        }, {
            hex: string;
            type: "BigNumber";
        }>, import("ethers").BigNumber, {
            hex: string;
            type: "BigNumber";
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }>;
        epoch: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodString;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            type: "BigNumber";
        }, {
            hex: string;
            type: "BigNumber";
        }>, import("ethers").BigNumber, {
            hex: string;
            type: "BigNumber";
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }>;
        withdrawProxy: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        balance: import("ethers").BigNumber;
        epoch: import("ethers").BigNumber;
        withdrawProxy: string;
    }, {
        balance: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        epoch: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        withdrawProxy: string;
    }>, "many">>;
    isVerified: z.ZodBoolean;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    thesis: z.ZodOptional<z.ZodString>;
    banner: z.ZodOptional<z.ZodString>;
    profile: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vault: string;
    vaultBalance: import("ethers").BigNumber;
    vaultType: VaultType;
    isVerified: boolean;
    name: string;
    depositBalance?: import("ethers").BigNumber | undefined;
    withdrawBalances?: {
        balance: import("ethers").BigNumber;
        epoch: import("ethers").BigNumber;
        withdrawProxy: string;
    }[] | undefined;
    description?: string | undefined;
    thesis?: string | undefined;
    banner?: string | undefined;
    profile?: string | undefined;
}, {
    vault: string;
    vaultBalance: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    vaultType: VaultType;
    isVerified: boolean;
    name: string;
    depositBalance?: string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined;
    withdrawBalances?: {
        balance: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        epoch: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        withdrawProxy: string;
    }[] | undefined;
    description?: string | undefined;
    thesis?: string | undefined;
    banner?: string | undefined;
    profile?: string | undefined;
}>;
export declare const VaultsQueryParamsSchema: z.ZodObject<{
    filter: z.ZodDefault<z.ZodObject<{
        auth: z.ZodOptional<z.ZodString>;
        verified: z.ZodDefault<z.ZodBoolean>;
        lp: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        lp: boolean;
        verified: boolean;
        auth?: string | undefined;
    }, {
        auth?: string | undefined;
        verified?: boolean | undefined;
        lp?: boolean | undefined;
    }>>;
    include: z.ZodDefault<z.ZodObject<{
        shutdown: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        shutdown: boolean;
    }, {
        shutdown?: boolean | undefined;
    }>>;
    display: z.ZodDefault<z.ZodObject<{
        lp: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        lp: boolean;
    }, {
        lp?: boolean | undefined;
    }>>;
    skip: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    filter: {
        lp: boolean;
        verified: boolean;
        auth?: string | undefined;
    };
    skip: number;
    limit: number;
    include: {
        shutdown: boolean;
    };
    display: {
        lp: boolean;
    };
}, {
    filter?: {
        auth?: string | undefined;
        verified?: boolean | undefined;
        lp?: boolean | undefined;
    } | undefined;
    include?: {
        shutdown?: boolean | undefined;
    } | undefined;
    display?: {
        lp?: boolean | undefined;
    } | undefined;
    skip?: number | undefined;
    limit?: number | undefined;
}>;
export declare const VaultsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        vault: z.ZodString;
        vaultBalance: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodString;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            type: "BigNumber";
        }, {
            hex: string;
            type: "BigNumber";
        }>, import("ethers").BigNumber, {
            hex: string;
            type: "BigNumber";
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }>;
        vaultType: z.ZodNativeEnum<typeof VaultType>;
        depositBalance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodString;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            hex: string;
            type: "BigNumber";
        }, {
            hex: string;
            type: "BigNumber";
        }>, import("ethers").BigNumber, {
            hex: string;
            type: "BigNumber";
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }>>;
        withdrawBalances: z.ZodOptional<z.ZodArray<z.ZodObject<{
            balance: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                type: "BigNumber";
            }, {
                hex: string;
                type: "BigNumber";
            }>, import("ethers").BigNumber, {
                hex: string;
                type: "BigNumber";
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }>;
            epoch: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                hex: string;
                type: "BigNumber";
            }, {
                hex: string;
                type: "BigNumber";
            }>, import("ethers").BigNumber, {
                hex: string;
                type: "BigNumber";
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }>;
            withdrawProxy: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            balance: import("ethers").BigNumber;
            epoch: import("ethers").BigNumber;
            withdrawProxy: string;
        }, {
            balance: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            epoch: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            withdrawProxy: string;
        }>, "many">>;
        isVerified: z.ZodBoolean;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        thesis: z.ZodOptional<z.ZodString>;
        banner: z.ZodOptional<z.ZodString>;
        profile: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        vault: string;
        vaultBalance: import("ethers").BigNumber;
        vaultType: VaultType;
        isVerified: boolean;
        name: string;
        depositBalance?: import("ethers").BigNumber | undefined;
        withdrawBalances?: {
            balance: import("ethers").BigNumber;
            epoch: import("ethers").BigNumber;
            withdrawProxy: string;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
    }, {
        vault: string;
        vaultBalance: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        vaultType: VaultType;
        isVerified: boolean;
        name: string;
        depositBalance?: string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined;
        withdrawBalances?: {
            balance: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            epoch: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            withdrawProxy: string;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        vault: string;
        vaultBalance: import("ethers").BigNumber;
        vaultType: VaultType;
        isVerified: boolean;
        name: string;
        depositBalance?: import("ethers").BigNumber | undefined;
        withdrawBalances?: {
            balance: import("ethers").BigNumber;
            epoch: import("ethers").BigNumber;
            withdrawProxy: string;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
    }[];
    count: number;
}, {
    results: {
        vault: string;
        vaultBalance: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        vaultType: VaultType;
        isVerified: boolean;
        name: string;
        depositBalance?: string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined;
        withdrawBalances?: {
            balance: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            epoch: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            withdrawProxy: string;
        }[] | undefined;
        description?: string | undefined;
        thesis?: string | undefined;
        banner?: string | undefined;
        profile?: string | undefined;
    }[];
    count: number;
}>;
export type WithdrawBalance = z.infer<typeof WithdrawBalanceSchema>;
export type VaultsQueryParams = z.input<typeof VaultsQueryParamsSchema>;
export type VaultsResponse = z.input<typeof VaultsResponseSchema>;
export type VaultsParsedResponse = z.infer<typeof VaultsResponseSchema>;
export type VaultQueryParams = z.input<typeof VaultQueryParamsSchema>;
export type VaultResponse = z.input<typeof VaultResponseSchema>;
export type VaultParsedResponse = z.infer<typeof VaultResponseSchema>;
