import { StrategyLeafType } from "@astariaxyz/sdk";
import { z } from "zod";
export declare const OfferSchema: z.ZodObject<{
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    tokenId: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    }>>;
    borrower: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>;
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
    type: z.ZodNativeEnum<typeof StrategyLeafType>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
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
    leaf: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    type: StrategyLeafType;
    vault: `0x${string}`;
    token: `0x${string}`;
    lien: {
        amount: import("ethers").BigNumber;
        rate: import("ethers").BigNumber;
        duration: import("ethers").BigNumber;
        maxPotentialDebt: import("ethers").BigNumber;
        liquidationInitialAsk: import("ethers").BigNumber;
    };
    expiration: import("ethers").BigNumber;
    offerHash: `0x${string}`;
    cid: string;
    leaf: `0x${string}`;
    tokenId?: import("ethers").BigNumber | undefined;
    borrower?: `0x${string}` | undefined;
}, {
    type: StrategyLeafType;
    vault: `0x${string}`;
    token: `0x${string}`;
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
    expiration: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    offerHash: `0x${string}`;
    cid: string;
    leaf: `0x${string}`;
    tokenId?: string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined;
    borrower?: `0x${string}` | undefined;
}>;
