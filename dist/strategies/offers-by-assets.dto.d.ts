import { z } from "zod";
export declare const AssetSchema: z.ZodObject<{
    collectionAddress: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    tokenIds: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, "many">;
}, "strip", z.ZodTypeAny, {
    collectionAddress: `0x${string}`;
    tokenIds: bigint[];
}, {
    collectionAddress: `0x${string}`;
    tokenIds: (string | number | bigint)[];
}>;
export declare const OffersByAssetsRequestSchema: z.ZodObject<{
    borrower: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    assets: z.ZodArray<z.ZodObject<{
        collectionAddress: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        tokenIds: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, "many">;
    }, "strip", z.ZodTypeAny, {
        collectionAddress: `0x${string}`;
        tokenIds: bigint[];
    }, {
        collectionAddress: `0x${string}`;
        tokenIds: (string | number | bigint)[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    borrower: `0x${string}`;
    assets: {
        collectionAddress: `0x${string}`;
        tokenIds: bigint[];
    }[];
}, {
    borrower: `0x${string}`;
    assets: {
        collectionAddress: `0x${string}`;
        tokenIds: (string | number | bigint)[];
    }[];
}>;
export declare const OffersByAssetsResponseSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodIntersection<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        borrower: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>>>;
        lien: z.ZodObject<{
            amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
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
        type: z.ZodLiteral<import("../common/sdk-stuff").StrategyLeafType.Collateral>;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        type: import("../common/sdk-stuff").StrategyLeafType.Collateral;
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
        type: import("../common/sdk-stuff").StrategyLeafType.Collateral;
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
            amount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
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
        type: z.ZodLiteral<import("../common/sdk-stuff").StrategyLeafType.Collection>;
    }, "strip", z.ZodTypeAny, {
        type: import("../common/sdk-stuff").StrategyLeafType.Collection;
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
        type: import("../common/sdk-stuff").StrategyLeafType.Collection;
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
    }>]>, z.ZodObject<{
        expiration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        expiration: bigint;
    }, {
        expiration: string | number | bigint;
    }>>, "many">;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    results: (({
        type: import("../common/sdk-stuff").StrategyLeafType.Collateral;
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
    } | {
        type: import("../common/sdk-stuff").StrategyLeafType.Collection;
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
    }) & {
        expiration: bigint;
    })[];
    count: number;
}, {
    results: (({
        type: import("../common/sdk-stuff").StrategyLeafType.Collateral;
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
    } | {
        type: import("../common/sdk-stuff").StrategyLeafType.Collection;
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
    }) & {
        expiration: string | number | bigint;
    })[];
    count: number;
}>;
export type Asset = z.input<typeof AssetSchema>;
export type ParsedAsset = z.infer<typeof AssetSchema>;
export type OffersByAssetsRequest = z.infer<typeof OffersByAssetsRequestSchema>;
export type OffersByAssetsResponse = z.input<typeof OffersByAssetsResponseSchema>;
export type OffersByAssetsParsedResponse = z.infer<typeof OffersByAssetsResponseSchema>;
