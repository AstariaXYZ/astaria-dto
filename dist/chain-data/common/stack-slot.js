"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackSlotSchema = exports.LienSchema = exports.LienDetailsSchema = exports.PointSchema = void 0;
const zod_1 = require("zod");
const number_1 = require("../../common/number");
const sdk_stuff_1 = require("../../common/sdk-stuff");
exports.PointSchema = zod_1.z.object({
    amount: number_1.Uint256Schema,
    end: number_1.Uint40Schema,
    last: number_1.Uint40Schema,
});
exports.LienDetailsSchema = zod_1.z.object({
    maxAmount: number_1.Uint256Schema,
    rate: number_1.Uint256Schema,
    duration: number_1.Uint256NonZeroSchema,
    maxPotentialDebt: number_1.Uint256Schema,
    liquidationInitialAsk: number_1.Uint256NonZeroSchema,
});
exports.LienSchema = zod_1.z.object({
    collateralId: number_1.Uint256Schema,
    collateralType: number_1.Uint8Schema,
    details: exports.LienDetailsSchema,
    token: sdk_stuff_1.AddressSchema,
    vault: sdk_stuff_1.AddressSchema,
});
exports.StackSlotSchema = zod_1.z.object({
    lien: exports.LienSchema,
    point: exports.PointSchema,
});
//# sourceMappingURL=stack-slot.js.map