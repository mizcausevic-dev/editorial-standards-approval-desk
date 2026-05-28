import { describe, expect, test } from "vitest";

import {
  approvalPosture,
  editorialLane,
  summary,
  standardsGaps,
  verification
} from "./services/editorialStandardsApprovalDeskService";

describe("editorial-standards-approval-desk", () => {
  test("returns a release recommendation", () => {
    expect(summary().recommendation).toMatch(/publishing|claim|standards/i);
  });

  test("maps editorial changes and blockers", () => {
    expect(editorialLane().length).toBeGreaterThan(2);
    expect(standardsGaps().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("verification posture stays buyer-readable", () => {
    expect(approvalPosture().every((packet) => packet.queue.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("editorial"))).toBe(true);
  });
});
