import { z } from "zod";
export declare const AssetSchema: z.ZodObject<{
    collectionAddress: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    tokenIds: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, "many">;
}, "strip", z.ZodTypeAny, {
    collectionAddress: `0x${string}`;
    tokenIds: bigint[];
}, {
    collectionAddress: `0x${string}`;
    tokenIds: (string | number | bigint)[];
}>;
export declare const OffersByAssetsRequestSchema: z.ZodObject<{
    borrower: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    assets: z.ZodArray<z.ZodObject<{
        collectionAddress: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        tokenIds: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, "many">;
    }, "strip", z.ZodTypeAny, {
        collectionAddress: `0x${string}`;
        tokenIds: bigint[];
    }, {
        collectionAddress: `0x${string}`;
        tokenIds: (string | number | bigint)[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    borrower: `0x${string}`;
    assets: {
        collectionAddress: `0x${string}`;
        tokenIds: bigint[];
    }[];
}, {
    borrower: `0x${string}`;
    assets: {
        collectionAddress: `0x${string}`;
        tokenIds: (string | number | bigint)[];
    }[];
}>;
export declare const OffersByAssetsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
        lien: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            rate: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            duration: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            maxPotentialDebt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
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
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        }>;
        cid: z.ZodOptional<z.ZodString>;
        leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        balance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: `0x${string}`;
        }, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, import("ethers").BigNumber, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }>>;
        underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: `0x${string}`;
        }, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, import("ethers").BigNumber, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }>>;
        offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        type: z.ZodLiteral<import("@astariaxyz/sdk").StrategyLeafType.Collateral>;
        tokenId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: `0x${string}`;
        }, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, import("ethers").BigNumber, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: `0x${string}`;
        token: `0x${string}`;
        borrower: `0x${string}`;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        tokenId: import("ethers").BigNumber;
        offerHash: `0x${string}`;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: `0x${string}`;
        token: `0x${string}`;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        };
        tokenId: (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }) & (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined);
        offerHash: `0x${string}`;
        borrower?: `0x${string}` | undefined;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
    }>, z.ZodObject<{
        vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
        lien: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            rate: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            duration: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            maxPotentialDebt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>;
            liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
                hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                type: z.ZodLiteral<"BigNumber">;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: `0x${string}`;
            }, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
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
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        }>;
        cid: z.ZodOptional<z.ZodString>;
        leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
        balance: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: `0x${string}`;
        }, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, import("ethers").BigNumber, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }>>;
        underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
            hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            type: z.ZodLiteral<"BigNumber">;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: `0x${string}`;
        }, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, import("ethers").BigNumber, {
            type: "BigNumber";
            hex: `0x${string}`;
        }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }>>;
        offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        type: z.ZodLiteral<import("@astariaxyz/sdk").StrategyLeafType.Collection>;
    }, "strip", z.ZodTypeAny, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: `0x${string}`;
        token: `0x${string}`;
        borrower: `0x${string}`;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        offerHash: `0x${string}`;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }, {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: `0x${string}`;
        token: `0x${string}`;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        };
        offerHash: `0x${string}`;
        borrower?: `0x${string}` | undefined;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
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
        vault: `0x${string}`;
        token: `0x${string}`;
        borrower: `0x${string}`;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        tokenId: import("ethers").BigNumber;
        offerHash: `0x${string}`;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    } | {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: `0x${string}`;
        token: `0x${string}`;
        borrower: `0x${string}`;
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        offerHash: `0x${string}`;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: import("ethers").BigNumber | undefined;
        underlyingTokenId?: import("ethers").BigNumber | undefined;
    }) & {
        expiration: bigint;
    })[];
    count: number;
}, {
    results: (({
        type: import("@astariaxyz/sdk").StrategyLeafType.Collateral;
        vault: `0x${string}`;
        token: `0x${string}`;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        };
        tokenId: (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        }) & (string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined);
        offerHash: `0x${string}`;
        borrower?: `0x${string}` | undefined;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
    } | {
        type: import("@astariaxyz/sdk").StrategyLeafType.Collection;
        vault: `0x${string}`;
        token: `0x${string}`;
        lien: {
            amount: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            rate: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            duration: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            maxPotentialDebt: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
            liquidationInitialAsk: (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            }) & (string | import("ethers").BigNumber | {
                type: "BigNumber";
                hex: `0x${string}`;
            } | undefined);
        };
        offerHash: `0x${string}`;
        borrower?: `0x${string}` | undefined;
        cid?: string | undefined;
        leaf?: `0x${string}` | undefined;
        balance?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
        underlyingTokenId?: string | import("ethers").BigNumber | {
            type: "BigNumber";
            hex: `0x${string}`;
        } | undefined;
    }) & {
        expiration: string | number | bigint;
    })[];
    count: number;
}>;
export type Asset = z.input<typeof AssetSchema>;
export type ParsedAsset = z.infer<typeof AssetSchema>;
export type OffersByAssetsRequest = z.infer<typeof OffersByAssetsRequestSchema>;
export type OffersByAssetsResponse = z.input<typeof OffersByAssetsResponseSchema>;
export type OffersByAssetsParsedResponse = z.infer<typeof OffersByAssetsResponseSchema>;
