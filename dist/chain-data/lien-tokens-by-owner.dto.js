"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LienTokensByOwnerResponseSchema = void 0;
const zod_1 = require("zod");
const number_1 = require("../common/number");
//Returns array of lien ids
exports.LienTokensByOwnerResponseSchema = zod_1.z.array(number_1.Uint256Schema);
//# sourceMappingURL=lien-tokens-by-owner.dto.js.map