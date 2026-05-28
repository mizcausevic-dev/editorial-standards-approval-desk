// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  approvalPosture,
  editorialLane,
  payload,
  standardsGaps,
  summary,
  verification
} from "./services/editorialStandardsApprovalDeskService";
import {
  renderApprovalPosture,
  renderDocs,
  renderEditorialLane,
  renderOverview,
  renderStandardsGaps,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5545);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/editorial-lane", (_req, res) => res.type("html").send(renderEditorialLane()));
app.get("/standards-gaps", (_req, res) => res.type("html").send(renderStandardsGaps()));
app.get("/approval-posture", (_req, res) => res.type("html").send(renderApprovalPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/editorial-lane", (_req, res) => res.json(editorialLane()));
app.get("/api/standards-gaps", (_req, res) => res.json(standardsGaps()));
app.get("/api/approval-posture", (_req, res) => res.json(approvalPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Editorial Standards Approval Desk listening on http://${host}:${port}`);
  });
}

export default app;
