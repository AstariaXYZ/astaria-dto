"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uint256NonZeroSchema = exports.Uint256Schema = exports.Uint40Schema = exports.Uint8Schema = void 0;
const zod_1 = require("zod");
const UINT8MAX = 2 ** 8 - 1;
const UINT40MAX = 2 ** 40 - 1;
const UINT256MAX = 2 ** 256 - 1;
exports.Uint8Schema = zod_1.z
    .union([zod_1.z.string(), zod_1.z.number().int()])
    .transform((val) => (typeof val === "number" ? val : Number.parseFloat(val)))
    .refine((val) => Number.isInteger(val) && val >= 0, "Must be a positive integer")
    .refine((val) => val <= UINT8MAX, "Cannot exceed (2^8) - 1");
exports.Uint40Schema = zod_1.z
    .union([zod_1.z.string(), zod_1.z.number().int()])
    .transform((val) => (typeof val === "number" ? val : Number.parseFloat(val)))
    .refine((val) => Number.isInteger(val) && val >= 0, "Must be a positive integer")
    .refine((val) => val <= UINT40MAX, "Cannot exceed (2^40) - 1");
exports.Uint256Schema = zod_1.z
    .union([zod_1.z.string(), zod_1.z.number().int(), zod_1.z.bigint()])
    .transform((val) => BigInt(val))
    .refine((val) => val >= 0, "Must be a positive integer")
    .refine((val) => val <= UINT256MAX, "Cannot exceed (2^256) - 1");
exports.Uint256NonZeroSchema = exports.Uint256Schema.refine((val) => val > 0, "Must be a non-zero positive integer");
//# sourceMappingURL=number.js.map