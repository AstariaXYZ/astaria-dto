import { AddressSchema, HexSchema } from "@astariaxyz/sdk";
import { z } from "zod";
import { Uint256NonZeroSchema, Uint256Schema, Uint40Schema, Uint8Schema, } from "../../common/number";
export const PointSchema = z.object({
    amount: Uint256Schema,
    end: Uint40Schema,
    last: Uint40Schema,
    lienId: Uint256Schema,
});
export const LienDetailsSchema = z.object({
    maxAmount: Uint256Schema,
    rate: Uint256Schema,
    duration: Uint256NonZeroSchema,
    maxPotentialDebt: Uint256Schema,
    liquidationInitialAsk: Uint256NonZeroSchema,
});
export const LienSchema = z.object({
    collateralId: Uint256Schema,
    collateralType: Uint8Schema,
    details: LienDetailsSchema,
    strategyRoot: HexSchema,
    token: AddressSchema,
    vault: AddressSchema,
});
export const StackSlotSchema = z.object({
    lien: LienSchema,
    point: PointSchema,
});
//# sourceMappingURL=stack-slot.js.map