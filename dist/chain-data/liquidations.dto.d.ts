import { z } from "zod";
export declare const Liquidation: z.ZodObject<{
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
    stack: z.ZodArray<z.ZodObject<{
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
        point: z.ZodObject<{
            amount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            end: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            start: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            lienId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            amount: import("ethers").BigNumber;
            end: import("ethers").BigNumber;
            start: import("ethers").BigNumber;
            lienId: import("ethers").BigNumber;
        }, {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            start: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            lienId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        }>;
    }, "strip", z.ZodTypeAny, {
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        point: {
            amount: import("ethers").BigNumber;
            end: import("ethers").BigNumber;
            start: import("ethers").BigNumber;
            lienId: import("ethers").BigNumber;
        };
    }, {
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
        point: {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            start: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            lienId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        };
    }>, "many">;
    position: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    collateralId: import("ethers").BigNumber;
    stack: {
        lien: {
            amount: import("ethers").BigNumber;
            rate: import("ethers").BigNumber;
            duration: import("ethers").BigNumber;
            maxPotentialDebt: import("ethers").BigNumber;
            liquidationInitialAsk: import("ethers").BigNumber;
        };
        point: {
            amount: import("ethers").BigNumber;
            end: import("ethers").BigNumber;
            start: import("ethers").BigNumber;
            lienId: import("ethers").BigNumber;
        };
    }[];
    position: number;
}, {
    collateralId: (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    }) & (string | import("ethers").BigNumber | {
        hex: `0x${string}`;
        type: "BigNumber";
    } | undefined);
    stack: {
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
        point: {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            start: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            lienId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
        };
    }[];
    position: number;
}>;
export declare const LiquidationsResponseSchema: z.ZodObject<{
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
        stack: z.ZodArray<z.ZodObject<{
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
            point: z.ZodObject<{
                amount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                end: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                start: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                lienId: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                amount: import("ethers").BigNumber;
                end: import("ethers").BigNumber;
                start: import("ethers").BigNumber;
                lienId: import("ethers").BigNumber;
            }, {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                start: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                lienId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            }>;
        }, "strip", z.ZodTypeAny, {
            lien: {
                amount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: import("ethers").BigNumber;
                start: import("ethers").BigNumber;
                lienId: import("ethers").BigNumber;
            };
        }, {
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
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                start: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                lienId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
        }>, "many">;
        position: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        collateralId: import("ethers").BigNumber;
        stack: {
            lien: {
                amount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: import("ethers").BigNumber;
                start: import("ethers").BigNumber;
                lienId: import("ethers").BigNumber;
            };
        }[];
        position: number;
    }, {
        collateralId: (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        }) & (string | import("ethers").BigNumber | {
            hex: `0x${string}`;
            type: "BigNumber";
        } | undefined);
        stack: {
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
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                start: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                lienId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
        }[];
        position: number;
    }>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: {
        collateralId: import("ethers").BigNumber;
        stack: {
            lien: {
                amount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: import("ethers").BigNumber;
                start: import("ethers").BigNumber;
                lienId: import("ethers").BigNumber;
            };
        }[];
        position: number;
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
        stack: {
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
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                start: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                lienId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
        }[];
        position: number;
    }[];
    count: number;
}>;
export type Liquidation = z.infer<typeof Liquidation>;
export type LiquidationsResponse = z.input<typeof LiquidationsResponseSchema>;
export type LiquidationsParsedResponse = z.infer<typeof LiquidationsResponseSchema>;
