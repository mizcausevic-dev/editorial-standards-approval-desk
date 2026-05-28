import { payload, summary } from "../src/services/editorialStandardsApprovalDeskService";

console.log("editorial-standards-approval-desk demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().standardsGaps, null, 2));
