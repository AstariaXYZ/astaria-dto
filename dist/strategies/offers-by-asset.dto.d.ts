import { z } from "zod";
export declare const OffersByAssetResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        vault: z.ZodString;
        token: z.ZodString;
        borrower: z.ZodDefault<z.ZodOptional<z.ZodString>>;
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
        cid: z.ZodOptional<z.ZodString>;
        leaf: z.ZodOptional<z.ZodString>;
        balance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>>;
        underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>>;
        offerHash: z.ZodString;
        type: z.ZodLiteral<import("@astariaxyz/sdk").StrategyLeafType.Collateral>;
        tokenId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: string;
        token: string;
        borrower: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        tokenId: import("ethers").BigNumber;
        offerHash: string;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: string;
        token: string;
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
        tokenId: (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        }) & (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined);
        offerHash: string;
        borrower?: string | undefined;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
    }>, z.ZodObject<{
        vault: z.ZodString;
        token: z.ZodString;
        borrower: z.ZodDefault<z.ZodOptional<z.ZodString>>;
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
        cid: z.ZodOptional<z.ZodString>;
        leaf: z.ZodOptional<z.ZodString>;
        balance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>>;
        underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>>;
        offerHash: z.ZodString;
        type: z.ZodLiteral<import("@astariaxyz/sdk").StrategyLeafType.Collection>;
    }, "strip", z.ZodTypeAny, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: string;
        token: string;
        borrower: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        offerHash: string;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: string;
        token: string;
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
        offerHash: string;
        borrower?: string | undefined;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
    }>]>, z.ZodObject<{
        expiration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        expiration: bigint;
    }, {
        expiration: string | number | bigint;
    }>>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: (({
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: string;
        token: string;
        borrower: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        tokenId: import("ethers").BigNumber;
        offerHash: string;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    } | {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: string;
        token: string;
        borrower: string;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        offerHash: string;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }) & {
        expiration: bigint;
    })[];
    count: number;
}, {
    results: (({
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: string;
        token: string;
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
        tokenId: (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        }) & (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined);
        offerHash: string;
        borrower?: string | undefined;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
    } | {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: string;
        token: string;
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
        offerHash: string;
        borrower?: string | undefined;
        cid?: string | undefined;
        leaf?: string | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: string;
        } | undefined;
    }) & {
        expiration: string | number | bigint;
    })[];
    count: number;
}>;
export type OffersByAssetResponse = z.input<typeof OffersByAssetResponseSchema>;
export type OffersByAssetParsedResponse = z.infer<typeof OffersByAssetResponseSchema>;
