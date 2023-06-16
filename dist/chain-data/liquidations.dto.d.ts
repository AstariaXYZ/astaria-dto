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
            collateralType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            details: z.ZodObject<{
                maxAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                rate: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                duration: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                maxPotentialDebt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                maxAmount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            }, {
                maxAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                rate: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                duration: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                maxPotentialDebt: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                liquidationInitialAsk: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            }>;
            strategyRoot: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
            token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        }, "strip", z.ZodTypeAny, {
            vault: `0x${string}`;
            collateralId: import("ethers").BigNumber;
            collateralType: number;
            details: {
                maxAmount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        }, {
            vault: `0x${string}`;
            collateralId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            collateralType: string | number;
            details: {
                maxAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                rate: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                duration: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                maxPotentialDebt: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                liquidationInitialAsk: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
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
            end: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
            last: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
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
            end: number;
            last: number;
            lienId: import("ethers").BigNumber;
        }, {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: string | number;
            last: string | number;
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
            vault: `0x${string}`;
            collateralId: import("ethers").BigNumber;
            collateralType: number;
            details: {
                maxAmount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: import("ethers").BigNumber;
            end: number;
            last: number;
            lienId: import("ethers").BigNumber;
        };
    }, {
        lien: {
            vault: `0x${string}`;
            collateralId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            collateralType: string | number;
            details: {
                maxAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                rate: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                duration: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                maxPotentialDebt: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                liquidationInitialAsk: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: string | number;
            last: string | number;
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
            vault: `0x${string}`;
            collateralId: import("ethers").BigNumber;
            collateralType: number;
            details: {
                maxAmount: import("ethers").BigNumber;
                rate: import("ethers").BigNumber;
                duration: import("ethers").BigNumber;
                maxPotentialDebt: import("ethers").BigNumber;
                liquidationInitialAsk: import("ethers").BigNumber;
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: import("ethers").BigNumber;
            end: number;
            last: number;
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
            vault: `0x${string}`;
            collateralId: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            collateralType: string | number;
            details: {
                maxAmount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                rate: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                duration: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                maxPotentialDebt: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                liquidationInitialAsk: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
            };
            strategyRoot: `0x${string}`;
            token: `0x${string}`;
        };
        point: {
            amount: (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            }) & (string | import("ethers").BigNumber | {
                hex: `0x${string}`;
                type: "BigNumber";
            } | undefined);
            end: string | number;
            last: string | number;
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
                collateralType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                details: z.ZodObject<{
                    maxAmount: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                    rate: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                    duration: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                    maxPotentialDebt: z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                    liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodEffects<z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    maxAmount: import("ethers").BigNumber;
                    rate: import("ethers").BigNumber;
                    duration: import("ethers").BigNumber;
                    maxPotentialDebt: import("ethers").BigNumber;
                    liquidationInitialAsk: import("ethers").BigNumber;
                }, {
                    maxAmount: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    rate: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    duration: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    maxPotentialDebt: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    liquidationInitialAsk: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                }>;
                strategyRoot: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
                token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
                vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
            }, "strip", z.ZodTypeAny, {
                vault: `0x${string}`;
                collateralId: import("ethers").BigNumber;
                collateralType: number;
                details: {
                    maxAmount: import("ethers").BigNumber;
                    rate: import("ethers").BigNumber;
                    duration: import("ethers").BigNumber;
                    maxPotentialDebt: import("ethers").BigNumber;
                    liquidationInitialAsk: import("ethers").BigNumber;
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            }, {
                vault: `0x${string}`;
                collateralId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                collateralType: string | number;
                details: {
                    maxAmount: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    rate: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    duration: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    maxPotentialDebt: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    liquidationInitialAsk: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
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
                end: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
                last: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
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
                end: number;
                last: number;
                lienId: import("ethers").BigNumber;
            }, {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: string | number;
                last: string | number;
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
                vault: `0x${string}`;
                collateralId: import("ethers").BigNumber;
                collateralType: number;
                details: {
                    maxAmount: import("ethers").BigNumber;
                    rate: import("ethers").BigNumber;
                    duration: import("ethers").BigNumber;
                    maxPotentialDebt: import("ethers").BigNumber;
                    liquidationInitialAsk: import("ethers").BigNumber;
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: number;
                last: number;
                lienId: import("ethers").BigNumber;
            };
        }, {
            lien: {
                vault: `0x${string}`;
                collateralId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                collateralType: string | number;
                details: {
                    maxAmount: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    rate: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    duration: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    maxPotentialDebt: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    liquidationInitialAsk: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: string | number;
                last: string | number;
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
                vault: `0x${string}`;
                collateralId: import("ethers").BigNumber;
                collateralType: number;
                details: {
                    maxAmount: import("ethers").BigNumber;
                    rate: import("ethers").BigNumber;
                    duration: import("ethers").BigNumber;
                    maxPotentialDebt: import("ethers").BigNumber;
                    liquidationInitialAsk: import("ethers").BigNumber;
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: number;
                last: number;
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
                vault: `0x${string}`;
                collateralId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                collateralType: string | number;
                details: {
                    maxAmount: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    rate: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    duration: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    maxPotentialDebt: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    liquidationInitialAsk: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: string | number;
                last: string | number;
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
                vault: `0x${string}`;
                collateralId: import("ethers").BigNumber;
                collateralType: number;
                details: {
                    maxAmount: import("ethers").BigNumber;
                    rate: import("ethers").BigNumber;
                    duration: import("ethers").BigNumber;
                    maxPotentialDebt: import("ethers").BigNumber;
                    liquidationInitialAsk: import("ethers").BigNumber;
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: import("ethers").BigNumber;
                end: number;
                last: number;
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
                vault: `0x${string}`;
                collateralId: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                collateralType: string | number;
                details: {
                    maxAmount: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    rate: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    duration: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    maxPotentialDebt: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                    liquidationInitialAsk: (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    }) & (string | import("ethers").BigNumber | {
                        hex: `0x${string}`;
                        type: "BigNumber";
                    } | undefined);
                };
                strategyRoot: `0x${string}`;
                token: `0x${string}`;
            };
            point: {
                amount: (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                }) & (string | import("ethers").BigNumber | {
                    hex: `0x${string}`;
                    type: "BigNumber";
                } | undefined);
                end: string | number;
                last: string | number;
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
