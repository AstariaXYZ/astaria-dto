"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueOfferSchema = exports.CollectionOfferSchema = exports.CollateralOfferSchema = exports.BaseOfferSchema = exports.LienSchema = exports.TypedDataSchema = exports.MessageSchema = exports.DomainSchema = exports.TypesSchema = exports.TypeSchema = exports.SignatureSchema = exports.ProofSchema = exports.AddressSchema = exports.HexSchema = exports.StrategyLeafType = void 0;
const zod_1 = require("zod");
const constants_1 = require("./constants");
const number_1 = require("./number");
var StrategyLeafType;
(function (StrategyLeafType) {
    StrategyLeafType["Collateral"] = "1";
    StrategyLeafType["Collection"] = "2";
    StrategyLeafType["UniV3Collateral"] = "3";
})(StrategyLeafType || (exports.StrategyLeafType = StrategyLeafType = {}));
exports.HexSchema = zod_1.z.custom((val) => typeof val === 'string' && /^0x[a-fA-F0-9]*$/.test(val));
exports.AddressSchema = exports.HexSchema.refine((val) => val.length === 42, 'Invalid address length').transform((val) => val.toLowerCase());
exports.ProofSchema = zod_1.z.array(zod_1.z.string());
exports.SignatureSchema = zod_1.z.object({
    r: zod_1.z.string(),
    s: zod_1.z.string(),
    _vs: zod_1.z.string(),
    recoveryParam: zod_1.z.number(),
    v: zod_1.z.number(),
    yParityAndS: zod_1.z.string(),
    compact: zod_1.z.string(),
});
exports.TypeSchema = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
});
exports.TypesSchema = zod_1.z.object({
    EIP712Domain: zod_1.z.array(exports.TypeSchema),
    StrategyDetails: zod_1.z.array(exports.TypeSchema),
});
exports.DomainSchema = zod_1.z.object({
    version: zod_1.z.string(),
    chainId: zod_1.z.number(),
    verifyingContract: exports.AddressSchema,
});
exports.MessageSchema = zod_1.z.object({
    nonce: zod_1.z.string(),
    deadline: zod_1.z.string(),
    root: exports.HexSchema,
});
exports.TypedDataSchema = zod_1.z.object({
    types: exports.TypesSchema,
    primaryType: zod_1.z.string(),
    domain: exports.DomainSchema,
    message: exports.MessageSchema,
});
exports.LienSchema = zod_1.z.object({
    /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
    amount: number_1.Uint256NonZeroSchema,
    /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
    rate: number_1.Uint256Schema,
    /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
    duration: number_1.Uint256NonZeroSchema,
    /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
    maxPotentialDebt: number_1.Uint256Schema,
    /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
    liquidationInitialAsk: number_1.Uint256NonZeroSchema,
});
const BaseDetailsSchema = zod_1.z.object({
    /** `address` - Address of the underlying NFT Contract*/
    token: exports.AddressSchema,
    /** `address` - Address of the borrower that can commit to the lien, If the value is `address(0)` then any borrower can commit to the lien */
    borrower: exports.AddressSchema.optional().default(constants_1.ADDRESS_ZERO),
    /** `Lien` - Lien data */
    lien: exports.LienSchema,
    cid: zod_1.z.string().optional(),
    leaf: exports.HexSchema.optional(),
});
exports.BaseOfferSchema = BaseDetailsSchema.extend({
    vault: exports.AddressSchema,
    underlyingTokenId: number_1.Uint256Schema.optional(),
    offerHash: exports.HexSchema,
    balance: number_1.Uint256Schema.optional(),
});
exports.CollateralOfferSchema = exports.BaseOfferSchema.extend({
    type: zod_1.z.literal(StrategyLeafType.Collateral),
    tokenId: number_1.Uint256Schema,
});
exports.CollectionOfferSchema = exports.BaseOfferSchema.extend({
    type: zod_1.z.literal(StrategyLeafType.Collection),
});
exports.UniqueOfferSchema = zod_1.z.discriminatedUnion('type', [
    exports.CollateralOfferSchema,
    exports.CollectionOfferSchema,
    // add UniV3OfferSchema once the service is ready
]);
//# sourceMappingURL=sdk-stuff.js.map