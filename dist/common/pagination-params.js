"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationParamsSchema = void 0;
var zod_1 = require("zod");
exports.PaginationParamsSchema = zod_1.z.object({
    skip: zod_1.z.coerce.number().min(0).default(0),
    limit: zod_1.z.coerce.number().min(1).max(100).default(100),
});
