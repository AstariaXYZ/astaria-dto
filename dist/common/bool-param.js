"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolParamSchema = void 0;
const zod_1 = require("zod");
exports.BoolParamSchema = zod_1.z.string().optional()
    .transform((v) => v == "" || v == "1" || v == "true");
//# sourceMappingURL=bool-param.js.map