"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const thyref_1 = require("../thyref");
const countilise_1 = require("../countilise");
const mongoose_1 = __importDefault(require("mongoose"));
const thyschema_1 = require("../thyschema");
mongoose_1.default.connect("mongodb+srv://alesandro1:JsIEpzWnvdiwNEgJ@cluster0.pjfjxpf.mongodb.net/?appName=Cluster0")
    .then(() => { console.log("Countilize dAMN connected"); });
const thymod = mongoose_1.default.model("thystatus", thyschema_1.thystatus);
const svr = (0, express_1.default)();
svr.use(express_1.default.json());
const thysat = await thymod.find({});
svr.post("/send", (req, res) => {
    const thyy = (0, countilise_1.countilize)(thysat, thyref_1.thyref);
    console.log(thyy);
    res.json(thyy);
});
//# sourceMappingURL=send.js.map