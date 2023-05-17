"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackSlotSchema = exports.PointSchema = void 0;
var zod_1 = require("zod");
var sdk_1 = require("@astariaxyz/sdk");
exports.PointSchema = zod_1.z.object({
    amount: sdk_1.Uint256Schema,
    end: sdk_1.Uint256Schema,
    start: sdk_1.Uint256Schema,
    lienId: sdk_1.Uint256Schema,
});
exports.StackSlotSchema = zod_1.z.object({
    lien: sdk_1.LienSchema,
    point: exports.PointSchema,
});
