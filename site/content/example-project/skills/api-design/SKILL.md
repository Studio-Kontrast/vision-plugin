---
name: api-design
description: REST conventions for naming, pagination, filtering, errors, and versioning in Studio Kontrast products.
---

# API Design

- Name resources after business nouns, not screens
- Keep pagination explicit with stable cursors or documented offset rules
- Support filtering and sorting that match real operator workflows
- Return consistent error envelopes with machine-readable codes
- Version only when contracts truly diverge

## Response defaults

- Lists return items plus pagination metadata
- Writes return the canonical saved representation
- Validation failures explain the field and the rule that failed
