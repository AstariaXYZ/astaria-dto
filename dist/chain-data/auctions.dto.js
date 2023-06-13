"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionsResponseSchema = exports.AuctionSchema = exports.SeaportOrderParamsSchema = exports.SeaportOfferItemSchema = exports.SeaportConsiderationItemSchema = void 0;
var sdk_1 = require("@astariaxyz/sdk");
var zod_1 = require("zod");
var number_1 = require("../common/number");
exports.SeaportConsiderationItemSchema = zod_1.z.object({
    identifierOrCriteria: sdk_1.Uint256Schema,
    startAmount: sdk_1.Uint256Schema,
    endAmount: sdk_1.Uint256Schema,
    itemType: number_1.Uint8Schema,
    recipient: sdk_1.AddressSchema,
    token: sdk_1.AddressSchema,
});
exports.SeaportOfferItemSchema = zod_1.z.object({
    identifierOrCriteria: sdk_1.Uint256Schema,
    startAmount: sdk_1.Uint256Schema,
    endAmount: sdk_1.Uint256Schema,
    itemType: number_1.Uint8Schema,
    token: sdk_1.AddressSchema,
});
exports.SeaportOrderParamsSchema = zod_1.z
    .object({
    conduitKey: sdk_1.HexSchema,
    offerer: sdk_1.AddressSchema,
    orderType: number_1.Uint8Schema,
    salt: sdk_1.Uint256Schema,
    totalOriginalConsiderationItems: sdk_1.Uint256Schema.refine(function (val) { return val.eq(2); }),
    zone: sdk_1.AddressSchema,
    zoneHash: sdk_1.HexSchema,
    "consideration[0]": exports.SeaportConsiderationItemSchema,
    "consideration[1]": exports.SeaportConsiderationItemSchema,
    "offer[0]": exports.SeaportOfferItemSchema,
    startTime: sdk_1.Uint256Schema,
    endTime: sdk_1.Uint256Schema,
})
    .transform(function (data) {
    var consideration0 = data["consideration[0]"], consideration1 = data["consideration[1]"], offer0 = data["offer[0]"], rest = __rest(data, ["consideration[0]", "consideration[1]", "offer[0]"]);
    return __assign(__assign({}, rest), { consideration: [consideration0, consideration1], offer: [offer0] });
});
exports.AuctionSchema = zod_1.z.object({
    collateralId: sdk_1.Uint256Schema,
    liquidator: sdk_1.AddressSchema,
    orderParameters: exports.SeaportOrderParamsSchema,
    auctionStart: zod_1.z.number(),
    auctionEnd: zod_1.z.number(),
});
exports.AuctionsResponseSchema = zod_1.z.object({
    results: zod_1.z.array(exports.AuctionSchema),
    count: zod_1.z.number().int().min(0).max(100),
});
