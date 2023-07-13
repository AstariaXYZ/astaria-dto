import { z } from 'zod'
import {ADDRESS_ZERO} from "./constants";
import {Uint256NonZeroSchema, Uint256Schema} from "./number";

export enum StrategyLeafType {
  Collateral = '1',
  Collection = '2',
  UniV3Collateral = '3',
}

export const HexSchema = z.custom<`0x${string}`>(
    (val) => typeof val === 'string' && /^0x[a-fA-F0-9]*$/.test(val)
)

export const AddressSchema = HexSchema.refine(
    (val) => val.length === 42,
    'Invalid address length'
).transform((val) => val.toLowerCase() as `0x${string}`)

export const ProofSchema = z.array(z.string())
export const SignatureSchema = z.object({
  r: z.string(),
  s: z.string(),
  _vs: z.string(),
  recoveryParam: z.number(),
  v: z.number(),
  yParityAndS: z.string(),
  compact: z.string(),
})
export const TypeSchema = z.object({
  name: z.string(),
  type: z.string(),
})
export const TypesSchema = z.object({
  EIP712Domain: z.array(TypeSchema),
  StrategyDetails: z.array(TypeSchema),
})
export const DomainSchema = z.object({
  version: z.string(),
  chainId: z.number(),
  verifyingContract: AddressSchema,
})
export const MessageSchema = z.object({
  nonce: z.string(),
  deadline: z.string(),
  root: HexSchema,
})
export const TypedDataSchema = z.object({
  types: TypesSchema,
  primaryType: z.string(),
  domain: DomainSchema,
  message: MessageSchema,
})

export const LienSchema = z.object({
  /** `uint256` - Amount of $WETH in 10**18 that the borrower can borrow */
  amount: Uint256NonZeroSchema,

  /** `uint256` - Rate of interest accrual for the lien expressed as interest per second 10**18 */
  rate: Uint256Schema,

  /** `uint32` - Maximum life of the lien without refinancing in epoch seconds 10**18 */
  duration: Uint256NonZeroSchema,

  /** `uint256` - a maximum total value of all liens higher in the lien queue calculated using their rate and remaining duration. Value is `$WETH` expressed as `10**18`. A zero value indicates that the lien must be in the most senior position */
  maxPotentialDebt: Uint256Schema,

  /** `uint256` - the value used as the starting price in the event of a liquidation dutch auction */
  liquidationInitialAsk: Uint256NonZeroSchema,
})

const BaseDetailsSchema = z.object({
  /** `address` - Address of the underlying NFT Contract*/
  token: AddressSchema,

  /** `address` - Address of the borrower that can commit to the lien, If the value is `address(0)` then any borrower can commit to the lien */
  borrower: AddressSchema.optional().default(ADDRESS_ZERO),

  /** `Lien` - Lien data */
  lien: LienSchema,

  cid: z.string().optional(),

  leaf: HexSchema.optional(),
})
export const BaseOfferSchema = BaseDetailsSchema.extend({
  vault: AddressSchema,
  underlyingTokenId: Uint256Schema.optional(),
  offerHash: HexSchema,
  balance: Uint256Schema.optional(),
})
export const CollateralOfferSchema = BaseOfferSchema.extend({
  type: z.literal(StrategyLeafType.Collateral),
  tokenId: Uint256Schema,
})

export const CollectionOfferSchema = BaseOfferSchema.extend({
  type: z.literal(StrategyLeafType.Collection),
})

export const UniqueOfferSchema = z.discriminatedUnion<
    'type',
    [typeof CollateralOfferSchema, typeof CollectionOfferSchema]
>('type', [
  CollateralOfferSchema,
  CollectionOfferSchema,
  // add UniV3OfferSchema once the service is ready
])
