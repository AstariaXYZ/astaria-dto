import { z } from "zod";
export declare const SeaportConsiderationItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodString;
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
    itemType: z.ZodString;
    recipient: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identifierOrCriteria: string;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: string;
    recipient: string;
    token: string;
}, {
    identifierOrCriteria: string;
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
    itemType: string;
    recipient: string;
    token: string;
}>;
export declare const SeaportOfferItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodString;
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
    itemType: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identifierOrCriteria: string;
    startAmount: import("ethers").BigNumber;
    endAmount: import("ethers").BigNumber;
    itemType: string;
    token: string;
}, {
    identifierOrCriteria: string;
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
    itemType: string;
    token: string;
}>;
export declare const SeaportOrderParamsSchema: z.ZodEffects<z.ZodObject<{
    conduitKey: z.ZodString;
    offerer: z.ZodString;
    orderType: z.ZodString;
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
    totalOriginalConsiderationItems: z.ZodEffects<z.ZodNumber, number, number>;
    zone: z.ZodString;
    zoneHash: z.ZodString;
    "consideration[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodString;
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
        itemType: z.ZodString;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        recipient: string;
        token: string;
    }, {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    }>;
    "consideration[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodString;
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
        itemType: z.ZodString;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        recipient: string;
        token: string;
    }, {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    }>;
    "offer[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodString;
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
        itemType: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        token: string;
    }, {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    }>;
    "offer[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodString;
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
        itemType: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        token: string;
    }, {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    }>;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    conduitKey: string;
    offerer: string;
    orderType: string;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: number;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        recipient: string;
        token: string;
    };
    "consideration[1]": {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        recipient: string;
        token: string;
    };
    "offer[0]": {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        token: string;
    };
    "offer[1]": {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        token: string;
    };
    startTime: string;
    endTime: string;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string;
    salt: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: number;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    };
    "consideration[1]": {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    };
    "offer[0]": {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    };
    "offer[1]": {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    };
    startTime: string;
    endTime: string;
}>, {
    consideration: {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        recipient: string;
        token: string;
    }[];
    offer: {
        identifierOrCriteria: string;
        startAmount: import("ethers").BigNumber;
        endAmount: import("ethers").BigNumber;
        itemType: string;
        token: string;
    }[];
    conduitKey: string;
    offerer: string;
    orderType: string;
    salt: import("ethers").BigNumber;
    totalOriginalConsiderationItems: number;
    zone: string;
    zoneHash: string;
    startTime: string;
    endTime: string;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string;
    salt: (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: string;
        type: "BigNumber";
    } | undefined);
    totalOriginalConsiderationItems: number;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    };
    "consideration[1]": {
        identifierOrCriteria: string;
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
        itemType: string;
        recipient: string;
        token: string;
    };
    "offer[0]": {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    };
    "offer[1]": {
        identifierOrCriteria: string;
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
        itemType: string;
        token: string;
    };
    startTime: string;
    endTime: string;
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
        orderType: z.ZodString;
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
        totalOriginalConsiderationItems: z.ZodEffects<z.ZodNumber, number, number>;
        zone: z.ZodString;
        zoneHash: z.ZodString;
        "consideration[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodString;
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
            itemType: z.ZodString;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        }, {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        }>;
        "consideration[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodString;
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
            itemType: z.ZodString;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        }, {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        }>;
        "offer[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodString;
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
            itemType: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        }, {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        }>;
        "offer[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodString;
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
            itemType: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        }, {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        }>;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        conduitKey: string;
        offerer: string;
        orderType: string;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        };
        "consideration[1]": {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        };
        "offer[0]": {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        };
        "offer[1]": {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        };
        startTime: string;
        endTime: string;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "consideration[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "offer[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        "offer[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        startTime: string;
        endTime: string;
    }>, {
        consideration: {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        }[];
        offer: {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: string;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        startTime: string;
        endTime: string;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "consideration[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "offer[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        "offer[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        startTime: string;
        endTime: string;
    }>;
    auctionStart: z.ZodNumber;
    auctionEnd: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: import("ethers").BigNumber;
    liquidator: string;
    orderParameters: {
        consideration: {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            recipient: string;
            token: string;
        }[];
        offer: {
            identifierOrCriteria: string;
            startAmount: import("ethers").BigNumber;
            endAmount: import("ethers").BigNumber;
            itemType: string;
            token: string;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: string;
        salt: import("ethers").BigNumber;
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        startTime: string;
        endTime: string;
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
        orderType: string;
        salt: (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: string;
            type: "BigNumber";
        } | undefined);
        totalOriginalConsiderationItems: number;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "consideration[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            recipient: string;
            token: string;
        };
        "offer[0]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        "offer[1]": {
            identifierOrCriteria: string;
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
            itemType: string;
            token: string;
        };
        startTime: string;
        endTime: string;
    };
    auctionStart: number;
    auctionEnd: number;
}>;
export declare const AuctionsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodAny, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: any[];
    count: number;
}, {
    results: any[];
    count: number;
}>;
export type Auction = z.infer<typeof AuctionSchema>;
export type SeaportOrderParams = z.infer<typeof SeaportOrderParamsSchema>;
export type SeaportConsiderationItem = z.infer<typeof SeaportConsiderationItemSchema>;
export type SeaportOfferItem = z.infer<typeof SeaportOfferItemSchema>;
export type AuctionsResponse = z.input<typeof AuctionsResponseSchema>;
export type AuctionsParsedResponse = z.infer<typeof AuctionsResponseSchema>;
