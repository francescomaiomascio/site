# ICE — Label Contract (Legacy)
Version: 1.0  
Status: Legacy (replaced by YAI governance)  
Scope: GitHub → Site → Activity Feed → Repo Pages  

---

## Purpose (Historical)

This document previously defined the **authoritative label and status contract** used by ICE
to determine what was **exportable** to the public site.

**NOTE:** This contract is now **superseded** by YAI governance and label definitions.  
It is preserved here for historical reference and traceability.

---

## 1. Visibility Labels (Export Gate)

These labels determined **whether an item could be exported**.

### Visibility

- `public`  
  Eligible for export and visibility on the ICE site.

- `internal`  
  Must **never** be exported or rendered publicly.

**Rules:**
- `internal` always overrode `public`
- Items without `public` were ignored by the site
- Default visibility was `internal`

---

## 2. Evidence Labels (What Is Worth Showing)

Evidence labels described **why** something mattered.

### Exportable Evidence

- `highlight`  
  Noteworthy progress or meaningful step forward.

- `milestone`  
  Completion of a defined milestone.

- `breakthrough`  
  Major architectural or conceptual result.

- `release-note`  
  Changelog-worthy update.

**Rules:**
- Evidence labels were **additive**
- At least one evidence label was required for guaranteed export
- Evidence labels had no effect without `public`

---

## 3. Operational State Labels (Internal Signals)

These labels indicated **current operational conditions**.

- `blocked`  
  Progress could not continue due to a dependency or missing decision.

- `risk`  
  Known risk existed (technical, architectural, or scheduling).

- `needs-review`  
  Required explicit review before progression.

**Rules:**
- These labels could appear on public items
- They affected **visual warnings**, not visibility
- They did not imply export by themselves

---

## 4. Repository Status (Static, Human-Assigned)

Repository status described **what the repo was**, not its activity.

### Allowed Values

- `stable`  
  Feature-complete, released, governed by maintenance rules.

- `active`  
  Actively developed, core functionality present.

- `partial`  
  Architecture existed, but key behaviors were missing or unvalidated.

- `placeholder`  
  Declared domain with minimal or no implementation.

- `legacy`  
  Historical or deprecated repository.

**Rules:**
- Status was **manually assigned** in analysis docs
- Status changes were **rare and explicit**
- Status was rendered as a badge on the site

---

## Archive Notice

This label contract was part of the **ICE ecosystem** (2024–2026).  
As of 2026, **YAI** is the canonical runtime and governance system.

The ICE repositories and governance model have been transitioned to YAI governance.  
This contract is retained here for **audit trail** and **historical context** only.

**Current:** See YAI governance documentation for active label and status contracts.
