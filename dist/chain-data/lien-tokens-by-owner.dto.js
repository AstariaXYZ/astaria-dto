"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LienTokensByOwnerResponseSchema = void 0;
var sdk_1 = require("@astariaxyz/sdk");
var zod_1 = require("zod");
//Returns array of lien ids
exports.LienTokensByOwnerResponseSchema = zod_1.z.array(sdk_1.Uint256Schema);
