"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const thyschema_1 = require("../thyschema");
const svr = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://alesandro1:JsIEpzWnvdiwNEgJ@cluster0.pjfjxpf.mongodb.net/?appName=Cluster0")
    .then(() => { console.log("N1gga suceeees!"); });
const thyresult = mongoose_1.default.model("thystatus", thyschema_1.thystatus);
svr.use(express_1.default.json());
svr.post("/submit", (req, res) => {
    const thyreq = req.body;
    console.log(thyreq);
    if (thyreq != null) {
        const thystat = new thyresult({ thyreq });
        thystat.save();
        console.log(thystat);
    }
    res.end("true");
});
//# sourceMappingURL=submit.js.map