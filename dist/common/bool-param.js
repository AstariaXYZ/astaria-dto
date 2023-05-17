"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolParamSchema = void 0;
var zod_1 = require("zod");
exports.BoolParamSchema = zod_1.z.string().toLowerCase()
    .optional()
    .transform(function (v) {
    return ['true', '1', ''].find(function (i) { return i === v; }) ? true : false;
});
