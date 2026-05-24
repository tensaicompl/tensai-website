# Governance & Risk — Diagram Specification

## Diagram: AI Governance Scaffold — Three Pillars

**Purpose:** Visualise the three-pillar governance scaffold and its operational flow, showing how risk classification, policy framework, and operational governance interact as a system — not as isolated layers.

**Type:** Layered architecture diagram with flow arrows

**Layout:** Three vertical pillars side by side, connected by horizontal dependency arrows. A horizontal timeline bar runs along the bottom showing regulatory milestones.

### Pillar 1 — Risk Classification (left)

```
+-------------------------------+
|      RISK CLASSIFICATION      |
|-------------------------------|
|  Unacceptable  |  BANNED      |
|  High          |  Full treat. |
|  Limited       |  Transparency|
|  Minimal       |  Inventory   |
+-------------------------------+
        |
        v
  [ Risk Register ]
  (living artefact,
   per-system entries)
```

- Four stacked tiers, colour-coded top to bottom: red (unacceptable), amber (high), yellow (limited), green (minimal)
- Each tier shows the governance treatment required
- Arrow downward to a "Risk Register" box

### Pillar 2 — Policy Framework (centre)

```
+-------------------------------+
|      POLICY FRAMEWORK         |
|-------------------------------|
|  Acceptable Use Policy        |
|       |                       |
|  Model Inventory Policy       |
|       |                       |
|  Data Governance Policy       |
|       |                       |
|  Human Oversight Policy       |
|       |                       |
|  Incident Response Policy     |
+-------------------------------+
```

- Five policies stacked vertically, connected by downward dependency arrows
- Visual emphasis: the dependency chain flows top-to-bottom (each constrains the next)
- The Incident Response Policy at the bottom is highlighted with a distinct border (it is the test of the scaffold)

### Pillar 3 — Operational Governance (right)

```
+-------------------------------+
|   OPERATIONAL GOVERNANCE      |
|-------------------------------|
|  Executive Sponsor            |
|  (board accountability)       |
|       |                       |
|  AI Governance Function       |
|  (cross-functional,           |
|   approval gate)              |
|       |                       |
|  System-Level Owners          |
|  (named per-system)           |
+-------------------------------+
        |
        v
  [ Incident Response ]
  (alert -> owner -> governance
   -> sponsor -> regulator)
```

- Three layers stacked vertically: executive, governance function, system owners
- Arrow downward to an "Incident Response Flow" box showing the escalation sequence

### Connecting Arrows (horizontal)

```
Risk Register  ------>  Policy Framework  ------>  Operational Governance
(classification         (rules that                (who reviews, approves,
 drives treatment)       bind)                      and acts)
```

- Arrow from Pillar 1 to Pillar 2: "Classification drives treatment"
- Arrow from Pillar 2 to Pillar 3: "Policies require operators"
- Feedback arrow from Pillar 3 back to Pillar 1: "Incidents update classifications"

### Regulatory Timeline Bar (bottom)

```
Feb 2025              Aug 2025              Aug 2026              Aug 2027
   |                     |                     |                     |
   v                     v                     v                     v
Prohibited            GPAI model            High-risk             Full
practices             rules apply           obligations           application
banned                                      (Annex III)
```

- Horizontal timeline running below all three pillars
- Four milestone markers with dates and obligations
- Current position indicator (if rendered dynamically) or a "YOU ARE HERE" marker between Aug 2025 and Aug 2026

### Framework Overlay (subtle, top-right legend)

```
+----------------------------------+
|  Frameworks layered:             |
|  EU AI Act    — what is mandatory|
|  NIST AI RMF  — how to operate  |
|  ISO 42001    — how to certify   |
+----------------------------------+
```

- Small legend box showing the three frameworks and their distinct contributions

## Colour Palette (TensAI design tokens)

| Element | Colour | Token |
|---|---|---|
| Unacceptable tier | Red | `--color-error` / #DC2626 |
| High tier | Amber | `--color-warning` / #F59E0B |
| Limited tier | Yellow | #FCD34D |
| Minimal tier | Green | `--color-success` / #16A34A |
| Pillar headers | Slate 900 | `--color-headline` / #0F172A |
| Pillar backgrounds | Slate 50 | `--color-surface` / #FAFAFA |
| Connecting arrows | Violet | `--color-primary` / #6D28D9 |
| Feedback arrow | Slate 400 | #94A3B8 |
| Timeline bar | Slate 200 | #E2E8F0 |
| Timeline markers | Violet | `--color-primary` / #6D28D9 |

## Typography

- Pillar headers: 16px semibold, `--font-heading`
- Tier labels: 14px medium
- Descriptions: 13px regular, `--font-body`
- Timeline dates: 12px medium
- Timeline descriptions: 12px regular

## Rendering Notes

- Preferred format: SVG component in `src/components/diagrams/`
- Responsive: stack pillars vertically on mobile (< 768px), side by side on desktop
- Accessible: all text rendered as real text (not rasterised), ARIA labels on structural regions
- Animation (optional): pillars fade in left-to-right on scroll; timeline markers highlight sequentially
- The diagram should be referenced from the MDX page via a `DiagramSlot` component or direct SVG import once built
