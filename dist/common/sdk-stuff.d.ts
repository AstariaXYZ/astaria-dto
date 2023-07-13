import { z } from 'zod';
export declare enum StrategyLeafType {
    Collateral = "1",
    Collection = "2",
    UniV3Collateral = "3"
}
export declare const HexSchema: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
export declare const AddressSchema: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
export declare const ProofSchema: z.ZodArray<z.ZodString, "many">;
export declare const SignatureSchema: z.ZodObject<{
    r: z.ZodString;
    s: z.ZodString;
    _vs: z.ZodString;
    recoveryParam: z.ZodNumber;
    v: z.ZodNumber;
    yParityAndS: z.ZodString;
    compact: z.ZodString;
}, "strip", z.ZodTypeAny, {
    r: string;
    s: string;
    _vs: string;
    recoveryParam: number;
    v: number;
    yParityAndS: string;
    compact: string;
}, {
    r: string;
    s: string;
    _vs: string;
    recoveryParam: number;
    v: number;
    yParityAndS: string;
    compact: string;
}>;
export declare const TypeSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
}, {
    type: string;
    name: string;
}>;
export declare const TypesSchema: z.ZodObject<{
    EIP712Domain: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
    }, {
        type: string;
        name: string;
    }>, "many">;
    StrategyDetails: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
    }, {
        type: string;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    EIP712Domain: {
        type: string;
        name: string;
    }[];
    StrategyDetails: {
        type: string;
        name: string;
    }[];
}, {
    EIP712Domain: {
        type: string;
        name: string;
    }[];
    StrategyDetails: {
        type: string;
        name: string;
    }[];
}>;
export declare const DomainSchema: z.ZodObject<{
    version: z.ZodString;
    chainId: z.ZodNumber;
    verifyingContract: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    version: string;
    chainId: number;
    verifyingContract: `0x${string}`;
}, {
    version: string;
    chainId: number;
    verifyingContract: `0x${string}`;
}>;
export declare const MessageSchema: z.ZodObject<{
    nonce: z.ZodString;
    deadline: z.ZodString;
    root: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    nonce: string;
    deadline: string;
    root: `0x${string}`;
}, {
    nonce: string;
    deadline: string;
    root: `0x${string}`;
}>;
export declare const TypedDataSchema: z.ZodObject<{
    types: z.ZodObject<{
        EIP712Domain: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">;
        StrategyDetails: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        EIP712Domain: {
            type: string;
            name: string;
        }[];
        StrategyDetails: {
            type: string;
            name: string;
        }[];
    }, {
        EIP712Domain: {
            type: string;
            name: string;
        }[];
        StrategyDetails: {
            type: string;
            name: string;
        }[];
    }>;
    primaryType: z.ZodString;
    domain: z.ZodObject<{
        version: z.ZodString;
        chainId: z.ZodNumber;
        verifyingContract: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    }, {
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    }>;
    message: z.ZodObject<{
        nonce: z.ZodString;
        deadline: z.ZodString;
        root: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        nonce: string;
        deadline: string;
        root: `0x${string}`;
    }, {
        nonce: string;
        deadline: string;
        root: `0x${string}`;
    }>;
}, "strip", z.ZodTypeAny, {
    message: {
        nonce: string;
        deadline: string;
        root: `0x${string}`;
    };
    types: {
        EIP712Domain: {
            type: string;
            name: string;
        }[];
        StrategyDetails: {
            type: string;
            name: string;
        }[];
    };
    primaryType: string;
    domain: {
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    };
}, {
    message: {
        nonce: string;
        deadline: string;
        root: `0x${string}`;
    };
    types: {
        EIP712Domain: {
            type: string;
            name: string;
        }[];
        StrategyDetails: {
            type: string;
            name: string;
        }[];
    };
    primaryType: string;
    domain: {
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    };
}>;
export declare const LienSchema: z.ZodObject<{
    /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
    amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
    rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
    duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
    maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
    liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    amount: bigint;
    rate: bigint;
    duration: bigint;
    maxPotentialDebt: bigint;
    liquidationInitialAsk: bigint;
}, {
    amount: string | number | bigint;
    rate: string | number | bigint;
    duration: string | number | bigint;
    maxPotentialDebt: string | number | bigint;
    liquidationInitialAsk: string | number | bigint;
}>;
export declare const BaseOfferSchema: z.ZodObject<{
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
    lien: z.ZodObject<{
        /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
        amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    }, {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    }>;
    cid: z.ZodOptional<z.ZodString>;
    leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    borrower: `0x${string}`;
    lien: {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: bigint | undefined;
    balance?: bigint | undefined;
}, {
    token: `0x${string}`;
    lien: {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    borrower?: `0x${string}` | undefined;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: string | number | bigint | undefined;
    balance?: string | number | bigint | undefined;
}>;
export declare const CollateralOfferSchema: z.ZodObject<{
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
    lien: z.ZodObject<{
        /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
        amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    }, {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    }>;
    cid: z.ZodOptional<z.ZodString>;
    leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    type: z.ZodLiteral<StrategyLeafType.Collateral>;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    type: StrategyLeafType.Collateral;
    token: `0x${string}`;
    borrower: `0x${string}`;
    lien: {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    tokenId: bigint;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: bigint | undefined;
    balance?: bigint | undefined;
}, {
    type: StrategyLeafType.Collateral;
    token: `0x${string}`;
    lien: {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    tokenId: string | number | bigint;
    borrower?: `0x${string}` | undefined;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: string | number | bigint | undefined;
    balance?: string | number | bigint | undefined;
}>;
export declare const CollectionOfferSchema: z.ZodObject<{
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
    lien: z.ZodObject<{
        /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
        amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    }, {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    }>;
    cid: z.ZodOptional<z.ZodString>;
    leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    type: z.ZodLiteral<StrategyLeafType.Collection>;
}, "strip", z.ZodTypeAny, {
    type: StrategyLeafType.Collection;
    token: `0x${string}`;
    borrower: `0x${string}`;
    lien: {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: bigint | undefined;
    balance?: bigint | undefined;
}, {
    type: StrategyLeafType.Collection;
    token: `0x${string}`;
    lien: {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    borrower?: `0x${string}` | undefined;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: string | number | bigint | undefined;
    balance?: string | number | bigint | undefined;
}>;
export declare const UniqueOfferSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
    lien: z.ZodObject<{
        /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
        amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    }, {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    }>;
    cid: z.ZodOptional<z.ZodString>;
    leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    type: z.ZodLiteral<StrategyLeafType.Collateral>;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    type: StrategyLeafType.Collateral;
    token: `0x${string}`;
    borrower: `0x${string}`;
    lien: {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    tokenId: bigint;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: bigint | undefined;
    balance?: bigint | undefined;
}, {
    type: StrategyLeafType.Collateral;
    token: `0x${string}`;
    lien: {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    tokenId: string | number | bigint;
    borrower?: `0x${string}` | undefined;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: string | number | bigint | undefined;
    balance?: string | number | bigint | undefined;
}>, z.ZodObject<{
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
    lien: z.ZodObject<{
        /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
        amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    }, {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    }>;
    cid: z.ZodOptional<z.ZodString>;
    leaf: z.ZodOptional<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    underlyingTokenId: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    offerHash: z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>;
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    type: z.ZodLiteral<StrategyLeafType.Collection>;
}, "strip", z.ZodTypeAny, {
    type: StrategyLeafType.Collection;
    token: `0x${string}`;
    borrower: `0x${string}`;
    lien: {
        amount: bigint;
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: bigint | undefined;
    balance?: bigint | undefined;
}, {
    type: StrategyLeafType.Collection;
    token: `0x${string}`;
    lien: {
        amount: string | number | bigint;
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
    };
    vault: `0x${string}`;
    offerHash: `0x${string}`;
    borrower?: `0x${string}` | undefined;
    cid?: string | undefined;
    leaf?: `0x${string}` | undefined;
    underlyingTokenId?: string | number | bigint | undefined;
    balance?: string | number | bigint | undefined;
}>]>;
