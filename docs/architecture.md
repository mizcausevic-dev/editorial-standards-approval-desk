# Architecture

## Overview

`editorial-standards-approval-desk` is a lightweight TypeScript + Express control plane for modeling the operating layer between editorial changes, copy-policy blockers, and approval-safe publishing posture.

## Surfaces

- `overview`
  - active editorial changes
  - blocked standards reviews
  - approval-ready packets
  - governance recommendation
- `editorial-lane`
  - draft-by-draft queue
  - owner routing
  - downstream publishing impact
- `standards-gaps`
  - editorial, legal, and brand blockers
  - required evidence
  - readiness posture
- `approval-posture`
  - approval packets
  - completeness score
  - reviewer timing
- `verification`
  - what the repo proves about publishing-governance systems

## Data Model

- `EditorialChange`
  - surface, asset, owner, risk, downstream impact, next action
- `StandardsReview`
  - blocker, source, required evidence, owner, readiness, impact area
- `ApprovalPacket`
  - queue, completeness score, review window, blocker, decision note

## Design Principle

Publishing approval state should be inspectable by editorial, standards, legal, brand, and operator stakeholders. The system should explain:
- which draft or asset is under pressure right now
- which downstream approval is still missing
- who owns the next move
- where claim, disclosure, or citation risk is building
