"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackSlotSchema = exports.LienSchema = exports.LienDetailsSchema = exports.PointSchema = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
var number_1 = require("../../common/number");
exports.PointSchema = zod_1.z.object({
    amount: sdk_1.Uint256Schema,
    end: number_1.Uint40Schema,
    last: number_1.Uint40Schema,
    lienId: sdk_1.Uint256Schema,
});
exports.LienDetailsSchema = zod_1.z.object({
    maxAmount: sdk_1.Uint256Schema,
    rate: sdk_1.Uint256Schema,
    duration: sdk_1.Uint256NonZeroSchema,
    maxPotentialDebt: sdk_1.Uint256Schema,
    liquidationInitialAsk: sdk_1.Uint256NonZeroSchema,
});
exports.LienSchema = zod_1.z.object({
    collateralId: sdk_1.Uint256Schema,
    collateralType: number_1.Uint8Schema,
    details: exports.LienDetailsSchema,
    strategyRoot: sdk_1.HexSchema,
    token: sdk_1.AddressSchema,
    vault: sdk_1.AddressSchema,
});
exports.StackSlotSchema = zod_1.z.object({
    lien: exports.LienSchema,
    point: exports.PointSchema,
});
