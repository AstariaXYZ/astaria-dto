import { z } from "zod";
export declare const SeaportConsiderationItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    identifierOrCriteria: import("ethers").BigNumber;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: number;
    recipient: `0x${string}`;
}, {
    token: `0x${string}`;
    identifierOrCriteria: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    startAmount: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    endAmount: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    itemType: string | number;
    recipient: `0x${string}`;
}>;
export declare const SeaportOfferItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    identifierOrCriteria: import("ethers").BigNumber;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: number;
}, {
    token: `0x${string}`;
    identifierOrCriteria: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    startAmount: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    endAmount: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    itemType: string | number;
}>;
export declare const SeaportOrderParamsSchema: z.ZodEffects<z.ZodObject<{
    conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }>;
    zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    "consideration[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: `0x${string}`;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    }>;
    "consideration[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: `0x${string}`;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    }>;
    "offer[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    }>;
    startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: number;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: import("ethers").BigNumber;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    };
    startTime: import("ethers").BigNumber;
    endTime: import("ethers").BigNumber;
}, {
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: string | number;
    salt: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    };
    startTime: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    endTime: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
}>, {
    consideration: {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: `0x${string}`;
    }[];
    offer: {
        token: `0x${string}`;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    }[];
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: number;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: import("ethers").BigNumber;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    startTime: import("ethers").BigNumber;
    endTime: import("ethers").BigNumber;
}, {
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: string | number;
    salt: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    };
    startTime: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    endTime: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
}>;
export declare const AuctionSchema: z.ZodObject<{
    collateralId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    liquidator: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    orderParameters: z.ZodEffects<z.ZodObject<{
        conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }>;
        zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        "consideration[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        }>;
        "consideration[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        }>;
        "offer[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        }>;
        startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        };
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    }, {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
    }>, {
        consideration: {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        }[];
        offer: {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }[];
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    }, {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
    }>;
    auctionStart: z.ZodNumber;
    auctionEnd: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: import("ethers").BigNumber;
    liquidator: `0x${string}`;
    orderParameters: {
        consideration: {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: `0x${string}`;
        }[];
        offer: {
            token: `0x${string}`;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }[];
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    };
    auctionStart: number;
    auctionEnd: number;
}, {
    collateralId: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    liquidator: `0x${string}`;
    orderParameters: {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
    };
    auctionStart: number;
    auctionEnd: number;
}>;
export declare const AuctionsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        collateralId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        liquidator: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        orderParameters: z.ZodEffects<z.ZodObject<{
            conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }>;
            zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            "consideration[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            }>;
            "consideration[1]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            }>;
            "offer[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            }>;
            startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            };
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        }, {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        }>, {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        }, {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        }>;
        auctionStart: z.ZodNumber;
        auctionEnd: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        collateralId: import("ethers").BigNumber;
        liquidator: `0x${string}`;
        orderParameters: {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        };
        auctionStart: number;
        auctionEnd: number;
    }, {
        collateralId: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        };
        auctionStart: number;
        auctionEnd: number;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        collateralId: import("ethers").BigNumber;
        liquidator: `0x${string}`;
        orderParameters: {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        };
        auctionStart: number;
        auctionEnd: number;
    }[];
    count: number;
}, {
    results: {
        collateralId: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        };
        auctionStart: number;
        auctionEnd: number;
    }[];
    count: number;
}>;
export type Auction = z.infer<typeof AuctionSchema>;
export type SeaportOrderParams = z.infer<typeof SeaportOrderParamsSchema>;
export type SeaportConsiderationItem = z.infer<typeof SeaportConsiderationItemSchema>;
export type SeaportOfferItem = z.infer<typeof SeaportOfferItemSchema>;
export type AuctionsResponse = z.input<typeof AuctionsResponseSchema>;
export type AuctionsParsedResponse = z.infer<typeof AuctionsResponseSchema>;
