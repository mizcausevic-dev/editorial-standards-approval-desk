// SPDX-License-Identifier: AGPL-3.0-or-later

import {
  approvalPackets,
  editorialQueues,
  standardsReviews
} from "../data/sampleEditorialStandards";

export function summary() {
  return {
    editorialChanges: editorialQueues.length,
    urgentReviews: editorialQueues.filter((item) => item.risk === "red").length,
    blockedStandards: standardsReviews.filter((item) => item.readiness !== "green").length,
    riskyPackets: approvalPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Repair standards gaps and copy-policy blockers first so publishing launches do not ship with disclosure drift, claim inflation, or reviewer rework."
  };
}

export function editorialLane() {
  return editorialQueues;
}

export function standardsGaps() {
  return standardsReviews;
}

export function approvalPosture() {
  return approvalPackets;
}

export function verification() {
  return [
    "Editorial changes map to concrete reviewer queues, not just comments trapped in a CMS draft.",
    "Standards gaps surface the exact evidence needed before copy, creative, or disclosures become audience-visible.",
    "Approval posture ties standards, legal, and brand review into one readable launch packet.",
    "The desk is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real content libraries, reviewer notes, or partner records are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    editorialLane: editorialLane(),
    standardsGaps: standardsGaps(),
    approvalPackets: approvalPosture(),
    verification: verification()
  };
}
