import { z } from "zod";
export declare const SeaportConsiderationItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    recipient: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
    itemType: number;
    recipient: string;
}, {
    token: string;
    identifierOrCriteria: string | number | bigint;
    startAmount: string | number | bigint;
    endAmount: string | number | bigint;
    itemType: string | number;
    recipient: string;
}>;
export declare const SeaportOfferItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
    itemType: number;
}, {
    token: string;
    identifierOrCriteria: string | number | bigint;
    startAmount: string | number | bigint;
    endAmount: string | number | bigint;
    itemType: string | number;
}>;
export declare const SeaportOrderParamsSchema: z.ZodEffects<z.ZodObject<{
    conduitKey: z.ZodString;
    offerer: z.ZodString;
    orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    zone: z.ZodString;
    zoneHash: z.ZodString;
    "consideration[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: string;
    }, {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    }>;
    "consideration[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: string;
    }, {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    }>;
    "offer[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    }, {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
    }>;
    startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    conduitKey: string;
    offerer: string;
    orderType: number;
    salt: bigint;
    totalOriginalConsiderationItems: bigint;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    };
    startTime: bigint;
    endTime: bigint;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string | number;
    salt: string | number | bigint;
    totalOriginalConsiderationItems: string | number | bigint;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
    };
    startTime: string | number | bigint;
    endTime: string | number | bigint;
}>, {
    consideration: {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: string;
    }[];
    offer: {
        token: string;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    }[];
    conduitKey: string;
    offerer: string;
    orderType: number;
    salt: bigint;
    totalOriginalConsiderationItems: bigint;
    zone: string;
    zoneHash: string;
    startTime: bigint;
    endTime: bigint;
}, {
    conduitKey: string;
    offerer: string;
    orderType: string | number;
    salt: string | number | bigint;
    totalOriginalConsiderationItems: string | number | bigint;
    zone: string;
    zoneHash: string;
    "consideration[0]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    };
    "consideration[1]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: string;
    };
    "offer[0]": {
        token: string;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
    };
    startTime: string | number | bigint;
    endTime: string | number | bigint;
}>;
export declare const AuctionSchema: z.ZodObject<{
    collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    liquidator: z.ZodString;
    orderParameters: z.ZodEffects<z.ZodObject<{
        conduitKey: z.ZodString;
        offerer: z.ZodString;
        orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        zone: z.ZodString;
        zoneHash: z.ZodString;
        "consideration[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        }, {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        }>;
        "consideration[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        }, {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        }>;
        "offer[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }, {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        }>;
        startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        };
        startTime: bigint;
        endTime: bigint;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        };
        startTime: string | number | bigint;
        endTime: string | number | bigint;
    }>, {
        consideration: {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        }[];
        offer: {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: string;
        zoneHash: string;
        startTime: bigint;
        endTime: bigint;
    }, {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        };
        startTime: string | number | bigint;
        endTime: string | number | bigint;
    }>;
    auctionStart: z.ZodNumber;
    auctionEnd: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: bigint;
    liquidator: string;
    orderParameters: {
        consideration: {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: string;
        }[];
        offer: {
            token: string;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }[];
        conduitKey: string;
        offerer: string;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: string;
        zoneHash: string;
        startTime: bigint;
        endTime: bigint;
    };
    auctionStart: number;
    auctionEnd: number;
}, {
    collateralId: string | number | bigint;
    liquidator: string;
    orderParameters: {
        conduitKey: string;
        offerer: string;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: string;
        zoneHash: string;
        "consideration[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "consideration[1]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: string;
        };
        "offer[0]": {
            token: string;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        };
        startTime: string | number | bigint;
        endTime: string | number | bigint;
    };
    auctionStart: number;
    auctionEnd: number;
}>;
export declare const AuctionsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        liquidator: z.ZodString;
        orderParameters: z.ZodEffects<z.ZodObject<{
            conduitKey: z.ZodString;
            offerer: z.ZodString;
            orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            zone: z.ZodString;
            zoneHash: z.ZodString;
            "consideration[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodString;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            }, {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            }>;
            "consideration[1]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodString;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            }, {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            }>;
            "offer[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }, {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            }>;
            startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        }, "strip", z.ZodTypeAny, {
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            };
            startTime: bigint;
            endTime: bigint;
        }, {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            };
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        }>, {
            consideration: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: string;
            zoneHash: string;
            startTime: bigint;
            endTime: bigint;
        }, {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            };
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        }>;
        auctionStart: z.ZodNumber;
        auctionEnd: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        collateralId: bigint;
        liquidator: string;
        orderParameters: {
            consideration: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: string;
            zoneHash: string;
            startTime: bigint;
            endTime: bigint;
        };
        auctionStart: number;
        auctionEnd: number;
    }, {
        collateralId: string | number | bigint;
        liquidator: string;
        orderParameters: {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            };
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        };
        auctionStart: number;
        auctionEnd: number;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        collateralId: bigint;
        liquidator: string;
        orderParameters: {
            consideration: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: string;
            }[];
            offer: {
                token: string;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: string;
            offerer: string;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: string;
            zoneHash: string;
            startTime: bigint;
            endTime: bigint;
        };
        auctionStart: number;
        auctionEnd: number;
    }[];
    count: number;
}, {
    results: {
        collateralId: string | number | bigint;
        liquidator: string;
        orderParameters: {
            conduitKey: string;
            offerer: string;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: string;
            zoneHash: string;
            "consideration[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "consideration[1]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: string;
            };
            "offer[0]": {
                token: string;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            };
            startTime: string | number | bigint;
            endTime: string | number | bigint;
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
