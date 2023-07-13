import { z } from "zod";
export declare const PointSchema: z.ZodObject<{
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
export declare const LienDetailsSchema: z.ZodObject<{
    maxAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    rate: bigint;
    duration: bigint;
    maxPotentialDebt: bigint;
    liquidationInitialAsk: bigint;
    maxAmount: bigint;
}, {
    rate: string | number | bigint;
    duration: string | number | bigint;
    maxPotentialDebt: string | number | bigint;
    liquidationInitialAsk: string | number | bigint;
    maxAmount: string | number | bigint;
}>;
export declare const LienSchema: z.ZodObject<{
    collateralId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    collateralType: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>, number, string | number>, number, string | number>;
    details: z.ZodObject<{
        maxAmount: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        rate: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        duration: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPotentialDebt: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        liquidationInitialAsk: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
        maxAmount: bigint;
    }, {
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
        maxAmount: string | number | bigint;
    }>;
    token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
}, "strip", z.ZodTypeAny, {
    token: `0x${string}`;
    vault: `0x${string}`;
    collateralId: bigint;
    collateralType: number;
    details: {
        rate: bigint;
        duration: bigint;
        maxPotentialDebt: bigint;
        liquidationInitialAsk: bigint;
        maxAmount: bigint;
    };
}, {
    token: `0x${string}`;
    vault: `0x${string}`;
    collateralId: string | number | bigint;
    collateralType: string | number;
    details: {
        rate: string | number | bigint;
        duration: string | number | bigint;
        maxPotentialDebt: string | number | bigint;
        liquidationInitialAsk: string | number | bigint;
        maxAmount: string | number | bigint;
    };
}>;
export declare const StackSlotSchema: z.ZodObject<{
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
            rate: bigint;
            duration: bigint;
            maxPotentialDebt: bigint;
            liquidationInitialAsk: bigint;
            maxAmount: bigint;
        }, {
            rate: string | number | bigint;
            duration: string | number | bigint;
            maxPotentialDebt: string | number | bigint;
            liquidationInitialAsk: string | number | bigint;
            maxAmount: string | number | bigint;
        }>;
        token: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
        vault: z.ZodEffects<z.ZodEffects<z.ZodType<`0x${string}`, z.ZodTypeDef, `0x${string}`>, `0x${string}`, `0x${string}`>, `0x${string}`, `0x${string}`>;
    }, "strip", z.ZodTypeAny, {
        token: `0x${string}`;
        vault: `0x${string}`;
        collateralId: bigint;
        collateralType: number;
        details: {
            rate: bigint;
            duration: bigint;
            maxPotentialDebt: bigint;
            liquidationInitialAsk: bigint;
            maxAmount: bigint;
        };
    }, {
        token: `0x${string}`;
        vault: `0x${string}`;
        collateralId: string | number | bigint;
        collateralType: string | number;
        details: {
            rate: string | number | bigint;
            duration: string | number | bigint;
            maxPotentialDebt: string | number | bigint;
            liquidationInitialAsk: string | number | bigint;
            maxAmount: string | number | bigint;
        };
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
        token: `0x${string}`;
        vault: `0x${string}`;
        collateralId: bigint;
        collateralType: number;
        details: {
            rate: bigint;
            duration: bigint;
            maxPotentialDebt: bigint;
            liquidationInitialAsk: bigint;
            maxAmount: bigint;
        };
    };
    point: {
        amount: bigint;
        end: number;
        last: number;
    };
}, {
    lien: {
        token: `0x${string}`;
        vault: `0x${string}`;
        collateralId: string | number | bigint;
        collateralType: string | number;
        details: {
            rate: string | number | bigint;
            duration: string | number | bigint;
            maxPotentialDebt: string | number | bigint;
            liquidationInitialAsk: string | number | bigint;
            maxAmount: string | number | bigint;
        };
    };
    point: {
        amount: string | number | bigint;
        end: string | number;
        last: string | number;
    };
}>;
export type Point = z.infer<typeof PointSchema>;
export type StackSlot = z.infer<typeof StackSlotSchema>;
export type Lien = z.infer<typeof LienSchema>;
export type LienDetails = z.infer<typeof LienDetailsSchema>;
