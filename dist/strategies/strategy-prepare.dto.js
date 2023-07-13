"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyPrepareResponseSchema = exports.StrategyPrepareRequestSchema = void 0;
const z = __importStar(require("zod"));
const cid_1 = require("../common/cid");
const sdk_stuff_1 = require("../common/sdk-stuff");
exports.StrategyPrepareRequestSchema = z.object({
    delegateAddress: sdk_stuff_1.AddressSchema,
    signature: sdk_stuff_1.HexSchema,
    cid: cid_1.CidSchema,
});
exports.StrategyPrepareResponseSchema = z.object({
    presignedUrl: z.string().url(),
});
//# sourceMappingURL=strategy-prepare.dto.js.map