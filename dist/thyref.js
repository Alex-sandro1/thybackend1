"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thyref = void 0;
const thyobj = {
    gendr: ["Male", "Female"],
    thyage: ["18-28", "29-39", "40-50", "51-60"],
    exp: ["Below 5", "6-10", "11-15", "16-20", "Over 20"],
    pos: ["Mathematics Teacher", "Academic Teacher", "Head Teacher"],
    educ: ["Certificate", "Diploma", "Bachelor", "Masters"],
    num: ["20-30", "31-40", "41-50", "51-70", "Above 70"],
    chall: ["Lack of resources", "Time constraints", "Large class size", "Diverse abilities", "Limited space", "Inaduaquate training"],
};
const thylikert = ['1', '2', '3', '4', '5'];
const thy = [
    'acd', 'eng', 'part', 'attendance', 'disc',
    'differentiatedfreq', 'differentiatedeffect',
    'collabfreq', 'collabeffect',
    'activefreq', 'activeeffect',
    'thyrepeatfreq', 'thyrepeateffect'
];
exports.thyref = {
    ...thyobj,
    ...Object.fromEntries(thy.map(op => [op, thylikert]))
};
//# sourceMappingURL=thyref.js.map