import { z } from "zod";
export declare const OfferSchema: z.ZodIntersection<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    expiration: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
        hex: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        type: z.ZodLiteral<"BigNumber">;
    }, "strip", z.ZodTypeAny, {
        hex: `0x${string}`;
        type: "BigNumber";
    }, {
        hex: `0x${string}`;
        type: "BigNumber";
    }>, import("ethers").BigNumber, {
        hex: `0x${string}`;
        type: "BigNumber";
    }>, z.ZodEffects<z.ZodString, import("ethers").BigNumber, string>]>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }>;
}, "strip", z.ZodTypeAny, {
    expiration: import("ethers").BigNumber;
}, {
    expiration: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
}>>;
export type Offer = z.infer<typeof OfferSchema>;
