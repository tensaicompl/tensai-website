# CoE & Enablement — Diagram Specification

## Diagram: CoE Evolution Path

**Purpose:** Visualise the four-stage evolution of the Centre of Excellence from centralised builder to embedded platform, showing how the central team's role, output, and relationship with business units changes at each stage.

**Type:** Horizontal flow diagram with four stages, each as a column.

**Layout:**

```
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   STAGE 1       │   │   STAGE 2       │   │   STAGE 3       │   │   STAGE 4       │
│   Exploring     │──▶│   Scaling       │──▶│   Federating    │──▶│   Embedded      │
│                 │   │                 │   │                 │   │                 │
│  CoE role:      │   │  CoE role:      │   │  CoE role:      │   │  CoE role:      │
│  Builder        │   │  Builder +      │   │  Platform +     │   │  Platform       │
│                 │   │  Governor       │   │  Enabler        │   │                 │
│  Centre         │   │  Centre         │   │  Centre         │   │  Centre         │
│  produces:      │   │  produces:      │   │  produces:      │   │  produces:      │
│  PoCs,          │   │  Production     │   │  Platform,      │   │  Platform,      │
│  feasibility    │   │  models,        │   │  standards,     │   │  guardrails,    │
│  studies        │   │  governance     │   │  enablement     │   │  observability  │
│                 │   │  frameworks     │   │  rotations      │   │                 │
│  BUs:           │   │  BUs:           │   │  BUs:           │   │  BUs:           │
│  Watch & learn  │   │  Consume &      │   │  Build on       │   │  Build          │
│                 │   │  request        │   │  platform with   │   │  independently  │
│                 │   │                 │   │  support        │   │                 │
└─────────────────┘   └─────────────────┘   └─────────────────┘   └─────────────────┘
                                      ▲
                                      │
                              ┌───────┴───────┐
                              │  STALL ZONE   │
                              │  Most orgs    │
                              │  get stuck    │
                              │  here         │
                              └───────────────┘
```

**Key visual elements:**
- The "Stall Zone" annotation sits between Stage 2 and Stage 3, highlighted in a warning colour (amber/ochre), to emphasise that the Stage 2–3 boundary is where most organisations fail to transition.
- Stages 1–2 use a solid fill to represent the centralised model; Stages 3–4 use a lighter or outlined fill to represent the distributed model.
- Arrows between stages are directional (left to right) and labelled with the transition trigger: "Success creates demand" (1→2), "Demand exceeds capacity" (2→3), "Standards mature" (3→4).

---

## Diagram: Hub-and-Spoke vs Federated Structure

**Purpose:** Show the structural difference between the two models — how capability, governance, and delivery flow differently in each.

**Type:** Two side-by-side structural diagrams.

**Layout — Hub-and-Spoke (left):**

```
                    ┌──────────┐
                    │   CoE    │
                    │ (builds) │
                    └────┬─────┘
               ┌─────────┼─────────┐
               │         │         │
          ┌────▼───┐ ┌───▼────┐ ┌──▼─────┐
          │  BU 1  │ │  BU 2  │ │  BU 3  │
          │(consumes)│(consumes)│(consumes)│
          └────────┘ └────────┘ └────────┘

          Delivery flows DOWN from centre.
          Requests flow UP from business units.
          All work queues through one team.
```

**Layout — Federated (right):**

```
          ┌────────┐ ┌────────┐ ┌────────┐
          │  BU 1  │ │  BU 2  │ │  BU 3  │
          │(builds)│ │(builds)│ │(builds)│
          └───┬────┘ └───┬────┘ └───┬────┘
              │          │          │
              └────┬─────┘──────────┘
                   │
            ┌──────▼──────┐
            │  Platform   │
            │  Team       │
            │ (enables)   │
            └─────────────┘

          Standards and tooling flow UP from platform.
          Delivery happens IN the business units.
          No single queue.
```

**Key visual elements:**
- Hub-and-spoke: thick arrows pointing down from CoE to BUs (delivery), thin dashed arrows pointing up (requests). Emphasise the bottleneck — all arrows pass through one node.
- Federated: thin solid arrows pointing up from platform to BUs (standards/tooling), each BU has its own internal loop (build cycle). No bottleneck node.
- Colour the CoE node in hub-and-spoke to match the platform node in federated — they are the same team, evolved.

---

## Diagram: Platform Team Product Layer

**Purpose:** Show the four capabilities the platform team provides as a stack, with business units building on top.

**Type:** Horizontal layer stack (bottom to top).

**Layout:**

```
┌──────────────────────────────────────────────────────┐
│                  Business Unit Initiatives            │  ← Builds on the platform
│         (models, agents, automations, analytics)      │
├──────────────────────────────────────────────────────┤
│  Observability       │  Governance Guardrails         │  ← Automatic, not manual
│  (monitoring, drift, │  (model cards, bias checks,    │
│   cost tracking)     │   data lineage, audit trails)  │
├──────────────────────────────────────────────────────┤
│  Reusable Components                                  │  ← Encode expertise as code
│  (feature stores, eval harnesses, prompt libraries,   │
│   RAG templates)                                      │
├──────────────────────────────────────────────────────┤
│  Self-Service Deployment Pipeline                     │  ← No ticket required
│  (notebook → production, CI/CD, model serving)        │
├──────────────────────────────────────────────────────┤
│  AI Platform Team                                     │  ← Owns the stack
│  (infrastructure, standards, SLAs)                    │
└──────────────────────────────────────────────────────┘
```

**Key visual elements:**
- Bottom layer (platform team) is the foundation, rendered in brand colour or dark tone.
- Middle layers are the platform's products — each labelled clearly.
- Top layer (business unit initiatives) is lighter, showing that the BUs build on top of the platform without depending on the platform team's direct involvement.
- A vertical label on the left side: "Platform team owns" (bottom 4 layers) vs "Business units own" (top layer).

---

## Design Notes

- All diagrams should use the TensAI design system: #0F172A for dark text, #FAFAFA backgrounds, #6D28D9 violet for accent only (use sparingly — one element per diagram at most).
- Typography: clean sans-serif, consistent with site headings.
- No gradients, no drop shadows, no decorative elements. The diagrams should be as spare as the prose.
- Render as SVG components for crisp scaling, or as static SVG files referenced from the MDX.
- Mobile: stack side-by-side diagrams vertically on narrow viewports.
