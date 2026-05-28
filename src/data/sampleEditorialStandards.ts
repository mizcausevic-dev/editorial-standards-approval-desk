export type EditorialChange = {
  itemId: string;
  asset: string;
  surface: string;
  issueType: string;
  owner: string;
  nextAction: string;
  risk: "red" | "yellow" | "green";
  excerpt: string;
};

export type StandardsReview = {
  blockerId: string;
  blocker: string;
  owner: string;
  source: string;
  readiness: "red" | "yellow" | "green";
  requiredEvidence: string;
  impactArea: string;
  note: string;
};

export type ApprovalPacket = {
  packetId: string;
  queue: string;
  completenessScore: number;
  status: "red" | "yellow" | "green";
  blocker: string;
  reviewWindowHours: number;
  decisionNote: string;
};

export const editorialQueues: EditorialChange[] = [
  {
    itemId: "ED-104",
    asset: "Spring launch landing page",
    surface: "Web + paid social",
    issueType: "Claim language exceeds approved proof",
    owner: "Editorial Standards",
    nextAction: "Reduce claim scope and attach approved proof block",
    risk: "red",
    excerpt: "The hero copy promises automation coverage that the attached proof deck does not currently support."
  },
  {
    itemId: "ED-118",
    asset: "Founder comparison page",
    surface: "SEO page",
    issueType: "Disclosure language missing in revised draft",
    owner: "Compliance Review",
    nextAction: "Restore disclosure block and re-queue for legal signoff",
    risk: "yellow",
    excerpt: "The latest draft tightened copy, but it dropped the supporting disclosure line required for the comparison table."
  },
  {
    itemId: "ED-132",
    asset: "Partner co-marketing email",
    surface: "Lifecycle email",
    issueType: "Brand voice deviation in final subject line",
    owner: "Brand Operations",
    nextAction: "Restore approved subject and synchronize preview copy",
    risk: "yellow",
    excerpt: "The sales-led revision landed a louder subject line than the brand-approved copy deck allows."
  },
  {
    itemId: "ED-149",
    asset: "Case study refresh",
    surface: "Docs + homepage excerpt",
    issueType: "Citation and attribution drift",
    owner: "Research Operations",
    nextAction: "Relink the source notes and republish the proof excerpt",
    risk: "red",
    excerpt: "The headline proof still references an older source document even though the story block was rewritten."
  }
];

export const standardsReviews: StandardsReview[] = [
  {
    blockerId: "SG-21",
    blocker: "Claim hierarchy is not evidence-backed",
    owner: "Editorial Standards",
    source: "Landing-page draft and proof deck",
    readiness: "red",
    requiredEvidence: "Approved proof excerpt, scoped claim language, and reviewer acknowledgment",
    impactArea: "Public promise integrity",
    note: "The top claim is broader than the customer proof currently attached to the launch brief."
  },
  {
    blockerId: "SG-28",
    blocker: "Disclosure block dropped in latest revision",
    owner: "Compliance Review",
    source: "Comparison page and legal markup",
    readiness: "yellow",
    requiredEvidence: "Restored disclosure language, legal approval, and post-edit diff proof",
    impactArea: "Regulated copy safety",
    note: "The copy is nearly ready, but the required disclosure paragraph is still missing from the review branch."
  },
  {
    blockerId: "SG-34",
    blocker: "Brand-voice override not reconciled",
    owner: "Brand Operations",
    source: "Campaign email and partner edits",
    readiness: "yellow",
    requiredEvidence: "Approved subject line, final preview text, and send-list acknowledgment",
    impactArea: "Brand consistency",
    note: "The partner revision is likely fixable, but the approved copy pack and send file still differ."
  },
  {
    blockerId: "SG-41",
    blocker: "Source attribution is out of sync",
    owner: "Research Operations",
    source: "Case study proof notes",
    readiness: "red",
    requiredEvidence: "Updated citation note, source link proof, and reviewer signoff",
    impactArea: "Credibility and auditability",
    note: "The published narrative changed, but the supporting source panel still points at the old evidence pack."
  }
];

export const approvalPackets: ApprovalPacket[] = [
  {
    packetId: "AP-07",
    queue: "Homepage launch packet",
    completenessScore: 58,
    status: "red",
    blocker: "Claim scope and proof mismatch",
    reviewWindowHours: 12,
    decisionNote: "Do not publish until the hero claim matches the attached proof and reviewer note."
  },
  {
    packetId: "AP-14",
    queue: "Comparison page update",
    completenessScore: 74,
    status: "yellow",
    blocker: "Disclosure paragraph still pending",
    reviewWindowHours: 20,
    decisionNote: "The page can clear if the disclosure block is restored and legal signs off in the next cycle."
  },
  {
    packetId: "AP-22",
    queue: "Partner email send",
    completenessScore: 82,
    status: "yellow",
    blocker: "Brand voice and preview-copy drift",
    reviewWindowHours: 28,
    decisionNote: "Hold until the approved subject line and preview text are synchronized."
  },
  {
    packetId: "AP-31",
    queue: "Case study refresh",
    completenessScore: 96,
    status: "green",
    blocker: "No active blocker",
    reviewWindowHours: 48,
    decisionNote: "Packet is safe for governed editorial rollout."
  }
];
