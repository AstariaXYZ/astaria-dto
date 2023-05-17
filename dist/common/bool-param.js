"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolParamSchema = void 0;
var zod_1 = require("zod");
exports.BoolParamSchema = zod_1.z.string()
    .optional()
    .transform(function (v) { return v == '' || v == 'true' || '1'; });
