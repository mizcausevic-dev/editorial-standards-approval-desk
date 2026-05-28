# Security Policy

## Scope

This repository is a **reference control plane** for editorial standards and publishing-governance workflows — draft triage, copy-policy blocker mapping, and approval-posture visibility. It ships synthetic, non-sensitive sample data only. It is not a production system of record and should not be deployed with real CMS drafts, legal notes, reviewer comments, or partner data without an independent security review.

## Supported versions

| Version | Supported |
|---------|-----------|
| `v0.1-shipped` and later | ✅ |

## Reporting a vulnerability

Please report suspected vulnerabilities privately to **security@kineticgain.com**
(or open a [GitHub security advisory](https://github.com/mizcausevic-dev/editorial-standards-approval-desk/security/advisories/new)).
Do not open a public issue for a security report.

We aim to acknowledge within 3 business days.

## Dependency posture

- Dependencies are monitored weekly via Dependabot (npm + GitHub Actions).
- CI runs `npm audit --audit-level=high` on every push and pull request.
- High/critical advisories are triaged and either patched or documented here.
