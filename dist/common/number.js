"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uint40Schema = exports.Uint8Schema = void 0;
var zod_1 = require("zod");
var UINT8MAX = Math.pow(2, 8) - 1;
var UINT40MAX = Math.pow(2, 40) - 1;
exports.Uint8Schema = zod_1.z
    .union([zod_1.z.string(), zod_1.z.number()])
    .transform(function (val) { return (typeof val === "number" ? val : Number.parseFloat(val)); })
    .refine(function (val) { return Number.isInteger(val) && val >= 0; }, "Must be a positive integer")
    .refine(function (val) { return val <= UINT8MAX; }, "Cannot exceed (2^8) - 1");
exports.Uint40Schema = zod_1.z
    .union([zod_1.z.string(), zod_1.z.number()])
    .transform(function (val) { return (typeof val === "number" ? val : Number.parseFloat(val)); })
    .refine(function (val) { return Number.isInteger(val) && val >= 0; }, "Must be a positive integer")
    .refine(function (val) { return val <= UINT40MAX; }, "Cannot exceed (2^40) - 1");
