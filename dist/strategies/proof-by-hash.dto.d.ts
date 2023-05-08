import { z } from "zod";
export declare const ProofByHashResponseSchema: z.ZodObject<{
    proof: z.ZodArray<z.ZodString, "many">;
    signature: z.ZodObject<{
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
    cid: z.ZodString;
    typedData: z.ZodObject<{
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
            verifyingContract: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            version: string;
            chainId: number;
            verifyingContract: string;
        }, {
            version: string;
            chainId: number;
            verifyingContract: string;
        }>;
        message: z.ZodObject<{
            nonce: z.ZodString;
            deadline: z.ZodString;
            root: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            nonce: string;
            deadline: string;
            root: string;
        }, {
            nonce: string;
            deadline: string;
            root: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        message: {
            nonce: string;
            deadline: string;
            root: string;
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
            verifyingContract: string;
        };
    }, {
        message: {
            nonce: string;
            deadline: string;
            root: string;
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
            verifyingContract: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    cid: string;
    proof: string[];
    signature: {
        r: string;
        s: string;
        _vs: string;
        recoveryParam: number;
        v: number;
        yParityAndS: string;
        compact: string;
    };
    typedData: {
        message: {
            nonce: string;
            deadline: string;
            root: string;
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
            verifyingContract: string;
        };
    };
}, {
    cid: string;
    proof: string[];
    signature: {
        r: string;
        s: string;
        _vs: string;
        recoveryParam: number;
        v: number;
        yParityAndS: string;
        compact: string;
    };
    typedData: {
        message: {
            nonce: string;
            deadline: string;
            root: string;
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
            verifyingContract: string;
        };
    };
}>;
export type ProofByHashResponse = z.infer<typeof ProofByHashResponseSchema>;
