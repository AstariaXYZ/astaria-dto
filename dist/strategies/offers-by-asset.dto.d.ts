import { z } from "zod";
export declare const OffersByAssetResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        vault: z.ZodString;
        token: z.ZodString;
        tokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        borrower: z.ZodOptional<z.ZodString>;
        expiration: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        type: z.ZodNativeEnum<typeof import("@astariaxyz/sdk").StrategyLeafType>;
        offerHash: z.ZodString;
        lien: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: string;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>;
            rate: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: string;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>;
            duration: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: string;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>;
            maxPotentialDebt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: string;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>;
            liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodString;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: string;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        }, {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
        }>;
        cid: z.ZodString;
        leaf: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: import("@astariaxyz/sdk").StrategyLeafType;
        vault: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        token: string;
        expiration: import("ethers").BigNumber;
        offerHash: string;
        cid: string;
        leaf: string;
        tokenId?: import("ethers").BigNumber | undefined;
        borrower?: string | undefined;
    }, {
        type: import("@astariaxyz/sdk").StrategyLeafType;
        vault: string;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
        };
        token: string;
        expiration: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        offerHash: string;
        cid: string;
        leaf: string;
        tokenId?: string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined;
        borrower?: string | undefined;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        type: import("@astariaxyz/sdk").StrategyLeafType;
        vault: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        token: string;
        expiration: import("ethers").BigNumber;
        offerHash: string;
        cid: string;
        leaf: string;
        tokenId?: import("ethers").BigNumber | undefined;
        borrower?: string | undefined;
    }[];
    count: number;
}, {
    results: {
        type: import("@astariaxyz/sdk").StrategyLeafType;
        vault: string;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: string;
            } | undefined);
        };
        token: string;
        expiration: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        offerHash: string;
        cid: string;
        leaf: string;
        tokenId?: string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined;
        borrower?: string | undefined;
    }[];
    count: number;
}>;
export type OffersByAssetResponse = z.infer<typeof OffersByAssetResponseSchema>;
