"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countilize = void 0;
const countilize = (thyreq, thyref) => {
    const status = {};
    const totally = thyreq.length;
    let thyv;
    for (const [key, value] of Object.entries(thyref)) {
        const thycount = {};
        for (const sythy of thyreq) {
            thyv = sythy[key] || key;
            thycount[thyv] = (thycount[thyv] || 0) + 1;
        }
        status[key] = value.map(thyop => ({
            opty: thyop,
            num: thycount[thyop] || 0,
            thypercent: ((thycount[thyop] || 0) / totally) * 100
        }));
    }
    return status;
};
exports.countilize = countilize;
//# sourceMappingURL=countilise.js.map