"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortVisitor = exports.organizeVisitorGroup = void 0;
function organizeVisitorGroup(visitors) {
    const keys = visitors[0];
    const visitors_info = visitors.slice(1, visitors[0].length);
    const sortedVisiitors = [];
    visitors_info.forEach((visitor) => {
        sortedVisiitors.push(sortVisitor(keys, visitor));
    });
    return sortedVisiitors;
}
exports.organizeVisitorGroup = organizeVisitorGroup;
function sortVisitor(keys, visitor) {
    let sortedVisitor = {};
    keys.map((key, i) => {
        sortedVisitor = { ...sortedVisitor, [key]: visitor[i] };
    });
    return sortedVisitor;
}
exports.sortVisitor = sortVisitor;
//# sourceMappingURL=sortVisitors.js.map