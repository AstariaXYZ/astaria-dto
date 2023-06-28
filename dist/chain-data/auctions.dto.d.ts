import { z } from "zod";
export declare const SeaportConsiderationItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
    itemType: number;
    recipient: `0x${string}`;
}, {
    token: `0x${string}`;
    identifierOrCriteria: string | number | bigint;
    startAmount: string | number | bigint;
    endAmount: string | number | bigint;
    itemType: string | number;
    recipient: `0x${string}`;
}>;
export declare const SeaportOfferItemSchema: z.ZodObject<{
    identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    identifierOrCriteria: bigint;
    startAmount: bigint;
    endAmount: bigint;
    itemType: number;
}, {
    token: `0x${string}`;
    identifierOrCriteria: string | number | bigint;
    startAmount: string | number | bigint;
    endAmount: string | number | bigint;
    itemType: string | number;
}>;
export declare const SeaportOrderParamsSchema: z.ZodEffects<z.ZodObject<{
    conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    "consideration[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: `0x${string}`;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    }>;
    "consideration[1]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: `0x${string}`;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    }>;
    "offer[0]": z.ZodObject<{
        identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    }, {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
    }>;
    startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: number;
    salt: bigint;
    totalOriginalConsiderationItems: bigint;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    };
    startTime: bigint;
    endTime: bigint;
}, {
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: string | number;
    salt: string | number | bigint;
    totalOriginalConsiderationItems: string | number | bigint;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
    };
    startTime: string | number | bigint;
    endTime: string | number | bigint;
}>, {
    consideration: {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
        recipient: `0x${string}`;
    }[];
    offer: {
        token: `0x${string}`;
        identifierOrCriteria: bigint;
        startAmount: bigint;
        endAmount: bigint;
        itemType: number;
    }[];
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: number;
    salt: bigint;
    totalOriginalConsiderationItems: bigint;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    startTime: bigint;
    endTime: bigint;
}, {
    conduitKey: `0x${string}`;
    offerer: `0x${string}`;
    orderType: string | number;
    salt: string | number | bigint;
    totalOriginalConsiderationItems: string | number | bigint;
    zone: `0x${string}`;
    zoneHash: `0x${string}`;
    "consideration[0]": {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "consideration[1]": {
        token: `0x${string}`;
        identifierOrCriteria: string | number | bigint;
        startAmount: string | number | bigint;
        endAmount: string | number | bigint;
        itemType: string | number;
        recipient: `0x${string}`;
    };
    "offer[0]": {
        token: `0x${string}`;
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
    liquidator: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    orderParameters: z.ZodEffects<z.ZodObject<{
        conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        "consideration[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        }>;
        "consideration[1]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        }>;
        "offer[0]": z.ZodObject<{
            identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }, {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        }>;
        startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        };
        startTime: bigint;
        endTime: bigint;
    }, {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
        };
        startTime: string | number | bigint;
        endTime: string | number | bigint;
    }>, {
        consideration: {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        }[];
        offer: {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }[];
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        startTime: bigint;
        endTime: bigint;
    }, {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
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
    liquidator: `0x${string}`;
    orderParameters: {
        consideration: {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
            recipient: `0x${string}`;
        }[];
        offer: {
            token: `0x${string}`;
            identifierOrCriteria: bigint;
            startAmount: bigint;
            endAmount: bigint;
            itemType: number;
        }[];
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: number;
        salt: bigint;
        totalOriginalConsiderationItems: bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        startTime: bigint;
        endTime: bigint;
    };
    auctionStart: number;
    auctionEnd: number;
}, {
    collateralId: string | number | bigint;
    liquidator: `0x${string}`;
    orderParameters: {
        conduitKey: `0x${string}`;
        offerer: `0x${string}`;
        orderType: string | number;
        salt: string | number | bigint;
        totalOriginalConsiderationItems: string | number | bigint;
        zone: `0x${string}`;
        zoneHash: `0x${string}`;
        "consideration[0]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "consideration[1]": {
            token: `0x${string}`;
            identifierOrCriteria: string | number | bigint;
            startAmount: string | number | bigint;
            endAmount: string | number | bigint;
            itemType: string | number;
            recipient: `0x${string}`;
        };
        "offer[0]": {
            token: `0x${string}`;
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
        liquidator: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        orderParameters: z.ZodEffects<z.ZodObject<{
            conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            "consideration[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            }>;
            "consideration[1]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            }>;
            "offer[0]": z.ZodObject<{
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }, {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            }>;
            startTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            endTime: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        }, "strip", z.ZodTypeAny, {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            };
            startTime: bigint;
            endTime: bigint;
        }, {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            };
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        }>, {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            startTime: bigint;
            endTime: bigint;
        }, {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
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
        liquidator: `0x${string}`;
        orderParameters: {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            startTime: bigint;
            endTime: bigint;
        };
        auctionStart: number;
        auctionEnd: number;
    }, {
        collateralId: string | number | bigint;
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
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
        liquidator: `0x${string}`;
        orderParameters: {
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: bigint;
                startAmount: bigint;
                endAmount: bigint;
                itemType: number;
            }[];
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
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
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            "consideration[0]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "consideration[1]": {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            };
            "offer[0]": {
                token: `0x${string}`;
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
