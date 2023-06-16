import { z } from "zod";
export declare const SeaportConsiderationItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    recipient: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    identifierOrCriteria: import("ethers").BigNumber;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: number;
    recipient: string;
}, {
    token: string;
    identifierOrCriteria: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    startAmount: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    endAmount: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    itemType: string | number;
    recipient: string;
}>;
export declare const SeaportOfferItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    identifierOrCriteria: import("ethers").BigNumber;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: number;
}, {
    token: string;
    identifierOrCriteria: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    startAmount: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    endAmount: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    itemType: string | number;
}>;
export declare const SeaportOrderParamsSchema: z.ZodEffects<z.ZodObject<{
    conduitKey: z.ZodString;
    offerer: z.ZodString;
    orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }>;
    zone: z.ZodString;
    zoneHash: z.ZodString;
    "consideration[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: string;
    }, {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    }>;
    "consideration[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: string;
    }, {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    }>;
    "offer[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    }, {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    }>;
    startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    conduitKey: string;
    offerer: string;
    orderType: number;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: import("ethers").BigNumber;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    };
    startTime: import("ethers").BigNumber;
    endTime: import("ethers").BigNumber;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string | number;
    salt: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    };
    startTime: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    endTime: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
}>, {
    consideration: {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
        recipient: string;
    }[];
    offer: {
        token: string;
        identifierOrCriteria: import("ethers").BigNumber;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: number;
    }[];
    conduitKey: string;
    offerer: string;
    orderType: number;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: import("ethers").BigNumber;
    zone: string;
    zoneHash: string;
    startTime: import("ethers").BigNumber;
    endTime: import("ethers").BigNumber;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string | number;
    salt: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        startAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endAmount: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        itemType: string | number;
    };
    startTime: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    endTime: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
}>;
export declare const AuctionSchema: z.ZodObject<{
    collateralId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    liquidator: z.ZodString;
    orderParameters: z.ZodEffects<z.ZodObject<{
        conduitKey: z.ZodString;
        offerer: z.ZodString;
        orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }>;
        zone: z.ZodString;
        zoneHash: z.ZodString;
        "consideration[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        }, {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        }>;
        "consideration[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        }, {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        }>;
        "offer[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }, {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        }>;
        startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        };
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
    }>, {
        consideration: {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        }[];
        offer: {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: string;
        zoneHash: string;
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
    }>;
    auctionStart: z.ZodNumber;
    auctionEnd: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: import("ethers").BigNumber;
    liquidator: string;
    orderParameters: {
        consideration: {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
            recipient: string;
        }[];
        offer: {
            token: string;
            identifierOrCriteria: import("ethers").BigNumber;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: number;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: import("ethers").BigNumber;
        zone: string;
        zoneHash: string;
        startTime: import("ethers").BigNumber;
        endTime: import("ethers").BigNumber;
    };
    auctionStart: number;
    auctionEnd: number;
}, {
    collateralId: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    liquidator: string;
    orderParameters: {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            startAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endAmount: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            itemType: string | number;
        };
        startTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        endTime: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
    };
    auctionStart: number;
    auctionEnd: number;
}>;
export declare const AuctionsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        collateralId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        liquidator: z.ZodString;
        orderParameters: z.ZodEffects<z.ZodObject<{
            conduitKey: z.ZodString;
            offerer: z.ZodString;
            orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            salt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            }>, import("ethers").BigNumber, string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }>;
            zone: z.ZodString;
            zoneHash: z.ZodString;
            "consideration[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodString;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            }, {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            }>;
            "consideration[1]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodString;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            }, {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            }>;
            "offer[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                startAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                endAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }, {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            }>;
            startTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            endTime: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            };
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        }, {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
        }>, {
            consideration: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: string;
            zoneHash: string;
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        }, {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
        }>;
        auctionStart: z.ZodNumber;
        auctionEnd: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        collateralId: import("ethers").BigNumber;
        liquidator: string;
        orderParameters: {
            consideration: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: string;
            zoneHash: string;
            startTime: import("ethers").BigNumber;
            endTime: import("ethers").BigNumber;
        };
        auctionStart: number;
        auctionEnd: number;
    }, {
        collateralId: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        liquidator: string;
        orderParameters: {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
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
        liquidator: string;
        orderParameters: {
            consideration: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: import("ethers").BigNumber;
                startAmount: import("ethers").BigNumber;
                endAmount: import("ethers").BigNumber;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: import("ethers").BigNumber;
            totalOriginalConsiderationItems: import("ethers").BigNumber;
            zone: string;
            zoneHash: string;
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
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        liquidator: string;
        orderParameters: {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            totalOriginalConsiderationItems: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                startAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                endAmount: (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: string;
                    type: "BigNumber";
                } | undefined);
                itemType: string | number;
            };
            startTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            } | undefined);
            endTime: (string | import("ethers").BigNumber | {
                hex: string;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: string;
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
