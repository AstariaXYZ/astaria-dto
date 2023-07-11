import * as z from 'zod';
export declare const LienAndAuctionSchema: z.ZodObject<{
    stack: z.ZodObject<{
        lien: z.ZodObject<{
            collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            collateralType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            details: z.ZodObject<{
                maxAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            }, "strip", z.ZodTypeAny, {
                maxAmount: bigint;
                rate: bigint;
                duration: bigint;
                maxPotentialDebt: bigint;
                liquidationInitialAsk: bigint;
            }, {
                maxAmount: string | number | bigint;
                rate: string | number | bigint;
                duration: string | number | bigint;
                maxPotentialDebt: string | number | bigint;
                liquidationInitialAsk: string | number | bigint;
            }>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            vault: `0x${string}`;
            collateralId: bigint;
            collateralType: number;
            details: {
                maxAmount: bigint;
                rate: bigint;
                duration: bigint;
                maxPotentialDebt: bigint;
                liquidationInitialAsk: bigint;
            };
            token: `0x${string}`;
        }, {
            vault: `0x${string}`;
            collateralId: string | number | bigint;
            collateralType: string | number;
            details: {
                maxAmount: string | number | bigint;
                rate: string | number | bigint;
                duration: string | number | bigint;
                maxPotentialDebt: string | number | bigint;
                liquidationInitialAsk: string | number | bigint;
            };
            token: `0x${string}`;
        }>;
        point: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            end: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            last: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
        }, "strip", z.ZodTypeAny, {
            amount: bigint;
            end: number;
            last: number;
        }, {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
        }>;
    }, "strip", z.ZodTypeAny, {
        lien: {
            vault: `0x${string}`;
            collateralId: bigint;
            collateralType: number;
            details: {
                maxAmount: bigint;
                rate: bigint;
                duration: bigint;
                maxPotentialDebt: bigint;
                liquidationInitialAsk: bigint;
            };
            token: `0x${string}`;
        };
        point: {
            amount: bigint;
            end: number;
            last: number;
        };
    }, {
        lien: {
            vault: `0x${string}`;
            collateralId: string | number | bigint;
            collateralType: string | number;
            details: {
                maxAmount: string | number | bigint;
                rate: string | number | bigint;
                duration: string | number | bigint;
                maxPotentialDebt: string | number | bigint;
                liquidationInitialAsk: string | number | bigint;
            };
            token: `0x${string}`;
        };
        point: {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
        };
    }>;
    auction: z.ZodOptional<z.ZodObject<{
        liquidator: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        orderParameters: z.ZodObject<{
            conduitKey: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            offerer: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            orderType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            salt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            totalOriginalConsiderationItems: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            zone: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            zoneHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            consideration: z.ZodArray<z.ZodObject<{
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                identifierOrCriteria: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                startAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                endAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                itemType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                recipient: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
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
            }>, "many">;
            offer: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
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
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            }[];
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        }>;
        orderHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
        offererCounterAtLiquidation: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        auctionStart: z.ZodNumber;
        auctionEnd: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
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
            startTime: bigint;
            endTime: bigint;
        };
        orderHash: `0x${string}`;
        offererCounterAtLiquidation: bigint;
        auctionStart: number;
        auctionEnd: number;
    }, {
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            }[];
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        };
        orderHash: `0x${string}`;
        offererCounterAtLiquidation: string | number | bigint;
        auctionStart: number;
        auctionEnd: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    stack: {
        lien: {
            vault: `0x${string}`;
            collateralId: bigint;
            collateralType: number;
            details: {
                maxAmount: bigint;
                rate: bigint;
                duration: bigint;
                maxPotentialDebt: bigint;
                liquidationInitialAsk: bigint;
            };
            token: `0x${string}`;
        };
        point: {
            amount: bigint;
            end: number;
            last: number;
        };
    };
    auction?: {
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: number;
            salt: bigint;
            totalOriginalConsiderationItems: bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
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
            startTime: bigint;
            endTime: bigint;
        };
        orderHash: `0x${string}`;
        offererCounterAtLiquidation: bigint;
        auctionStart: number;
        auctionEnd: number;
    } | undefined;
}, {
    stack: {
        lien: {
            vault: `0x${string}`;
            collateralId: string | number | bigint;
            collateralType: string | number;
            details: {
                maxAmount: string | number | bigint;
                rate: string | number | bigint;
                duration: string | number | bigint;
                maxPotentialDebt: string | number | bigint;
                liquidationInitialAsk: string | number | bigint;
            };
            token: `0x${string}`;
        };
        point: {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
        };
    };
    auction?: {
        liquidator: `0x${string}`;
        orderParameters: {
            conduitKey: `0x${string}`;
            offerer: `0x${string}`;
            orderType: string | number;
            salt: string | number | bigint;
            totalOriginalConsiderationItems: string | number | bigint;
            zone: `0x${string}`;
            zoneHash: `0x${string}`;
            consideration: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
                recipient: `0x${string}`;
            }[];
            offer: {
                token: `0x${string}`;
                identifierOrCriteria: string | number | bigint;
                startAmount: string | number | bigint;
                endAmount: string | number | bigint;
                itemType: string | number;
            }[];
            startTime: string | number | bigint;
            endTime: string | number | bigint;
        };
        orderHash: `0x${string}`;
        offererCounterAtLiquidation: string | number | bigint;
        auctionStart: number;
        auctionEnd: number;
    } | undefined;
}>;
export type LienAndAuctionSchema = z.infer<typeof LienAndAuctionSchema>;
