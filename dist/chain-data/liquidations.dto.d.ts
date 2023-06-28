import { z } from "zod";
export declare const Liquidation: z.ZodObject<{
    collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    stack: z.ZodArray<z.ZodObject<{
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
            strategyRoot: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
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
            strategyRoot: `0x${string}`;
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
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        }>;
        point: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            end: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            last: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            lienId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        }, "strip", z.ZodTypeAny, {
            amount: bigint;
            end: number;
            last: number;
            lienId: bigint;
        }, {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
            lienId: string | number | bigint;
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
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: bigint;
            end: number;
            last: number;
            lienId: bigint;
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
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
            lienId: string | number | bigint;
        };
    }>, "many">;
    position: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: bigint;
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
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: bigint;
            end: number;
            last: number;
            lienId: bigint;
        };
    }[];
    position: number;
}, {
    collateralId: string | number | bigint;
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
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: string | number | bigint;
            end: string | number;
            last: string | number;
            lienId: string | number | bigint;
        };
    }[];
    position: number;
}>;
export declare const LiquidationsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        stack: z.ZodArray<z.ZodObject<{
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
                strategyRoot: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
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
                strategyRoot: `0x${string}`;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            }>;
            point: z.ZodObject<{
                amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                end: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                last: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                lienId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            }, "strip", z.ZodTypeAny, {
                amount: bigint;
                end: number;
                last: number;
                lienId: bigint;
            }, {
                amount: string | number | bigint;
                end: string | number;
                last: string | number;
                lienId: string | number | bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: bigint;
                end: number;
                last: number;
                lienId: bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: string | number | bigint;
                end: string | number;
                last: string | number;
                lienId: string | number | bigint;
            };
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        collateralId: bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: bigint;
                end: number;
                last: number;
                lienId: bigint;
            };
        }[];
        position: number;
    }, {
        collateralId: string | number | bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: string | number | bigint;
                end: string | number;
                last: string | number;
                lienId: string | number | bigint;
            };
        }[];
        position: number;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        collateralId: bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: bigint;
                end: number;
                last: number;
                lienId: bigint;
            };
        }[];
        position: number;
    }[];
    count: number;
}, {
    results: {
        collateralId: string | number | bigint;
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
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: string | number | bigint;
                end: string | number;
                last: string | number;
                lienId: string | number | bigint;
            };
        }[];
        position: number;
    }[];
    count: number;
}>;
export type Liquidation = z.infer<typeof Liquidation>;
export type LiquidationsResponse = z.input<typeof LiquidationsResponseSchema>;
export type LiquidationsParsedResponse = z.infer<typeof LiquidationsResponseSchema>;
