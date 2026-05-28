import { describe, expect, test } from "vitest";

import {
  renderApprovalPosture,
  renderDocs,
  renderEditorialLane,
  renderOverview,
  renderStandardsGaps,
  renderVerification
} from "./render";
import {
  approvalPackets,
  editorialQueues,
  standardsReviews
} from "../data/sampleEditorialStandards";

const renderers = [
  ["overview", renderOverview],
  ["editorial-lane", renderEditorialLane],
  ["standards-gaps", renderStandardsGaps],
  ["approval-posture", renderApprovalPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Editorial Standards Approval Desk");
    expect(html).toContain('href="/editorial-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("editorial lane lists every change with a risk tag", () => {
    const html = renderEditorialLane();
    for (const change of editorialQueues) {
      expect(html).toContain(change.itemId);
    }
    expect(html).toContain('class="st needs"');
  });

  test("standards gaps list every block with readiness tags", () => {
    const html = renderStandardsGaps();
    for (const block of standardsReviews) {
      expect(html).toContain(block.blockerId);
    }
    expect(html).toContain('class="bad"');
    expect(html).toContain("Regulated copy safety");
  });

  test("approval posture shows packets and completeness scores", () => {
    const html = renderApprovalPosture();
    for (const packet of approvalPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/standards-gaps");
    expect(html).toContain("/approval-posture");
  });
});
