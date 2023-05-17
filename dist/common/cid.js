"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidSchema = void 0;
var zod_1 = require("zod");
//TODO: move to sdk
exports.CidSchema = zod_1.z
    .string()
    .regex(/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})$/);
