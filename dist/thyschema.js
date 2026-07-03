"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thystatus = void 0;
const mongoose_1 = require("mongoose");
const thytally = new mongoose_1.Schema({
    opty: { type: String, required: true },
    num: { type: Number, required: true },
    thypercent: { type: Number, required: true }
}, { _id: false });
exports.thystatus = new mongoose_1.Schema({
    gendr: { type: [thytally], required: true },
    thyage: { type: [thytally], required: true },
    exp: { type: [thytally], required: true },
    pos: { type: [thytally], required: true },
    educ: { type: [thytally], required: true },
    num: { type: [thytally], required: true },
    chall: { type: [thytally], required: true },
    acd: { type: [thytally], required: true },
    eng: { type: [thytally], required: true },
    part: { type: [thytally], required: true },
    attendance: { type: [thytally], required: true },
    disc: { type: [thytally], required: true },
    differentiatedfreq: { type: [thytally], required: true },
    differentiatedeffect: { type: [thytally], required: true },
    collabfreq: { type: [thytally], required: true },
    collabeffect: { type: [thytally], required: true },
    activefreq: { type: [thytally], required: true },
    activeeffect: { type: [thytally], required: true },
    thyrepeatfreq: { type: [thytally], required: true },
    thyrepeateffect: { type: [thytally], required: true },
    date: { type: Date, default: Date.now }
});
//# sourceMappingURL=thyschema.js.map