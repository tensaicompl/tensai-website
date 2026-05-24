# Spine Page — Synthesis Prose

Integration note: this prose sits between the header section and the diagram slot on `/spine`. Each section is marked with a comment boundary matching the TSX convention. The developer should wrap each section in its own `<section>` with the standard `maxWidth: 1440px` container and appropriate vertical padding.

---

## SECTION: fractal-opening

There are 18 concepts in this field that matter, and they are the same 18 whether you are a CTO setting enterprise policy, a platform lead building a shared capability layer, or an engineer wiring an agent to a tool. Not 12, not 30 — 18. They are the vocabulary this site is built on: every concept page, every worked example, every reference implementation maps to one or more of them. Learn these and you hold the structure of the discipline. Ignore any one of them and the gap will surface — in a production failure, a governance review, or a cost model that does not survive its first quarter.

This page is the reference map. It names each concept, states what it is in one line, and shows where it sits relative to the others. The pages linked from the grid below teach each concept in full. What this page teaches is the shape of the whole — why these 18, what organises them, and how they connect.

---

## SECTION: why-eighteen

The count is not arbitrary and it is not round. It is the result of a question asked honestly: what are the irreducible concepts a practitioner, a platform team, and an executive each need in order to build, run, and govern AI systems that work. Start with fewer and you are forced to overload a concept until it means nothing — "agents" cannot do the work of agents, workflows, handoffs, and multi-agent orchestration at once. Start with more and you are cataloguing implementation details that belong in documentation, not in a conceptual spine.

Eighteen is the number that survives the test. Each concept has a clear boundary, a distinct failure mode when it is absent, and at least one other concept it depends on or constrains. Remove any one and a page elsewhere on the site loses its anchor. Add a nineteenth and it either collapses into an existing concept or belongs to a layer below the one this spine operates at.

The ordering — 01 through 18 — is not a reading sequence, and it is not a dependency chain. It is a rough gradient from the most atomic to the most composed. Model is first because every other concept assumes one. Standards and Interop is last because it is the concept that connects the other 17 to the world outside a single organisation. Between them, each concept builds on what came before it without requiring that you read them in that order.

---

## SECTION: three-pillars

The 18 concepts sit across three pillars, and the pillars are not topics — they are altitudes. They answer the same question from three different heights: how does this organisation use AI systems well.

**Groundwork** is the highest altitude — the view from the CTO's office, the CIO's board paper, the architect's governance review. It asks the questions that must be answered before a single agent is built: how do we source models, how do we secure the boundary, how do we govern what we ship, how do we account for what it costs. The concepts that live here — Guardrails and Safety, Standards and Interop at their policy level — are operating decisions, not technology ones. Get them wrong and nothing built on top of them can be trusted; get them right and every team beneath them inherits the constraint for free.

**Operating Model** is the middle altitude — the platform team, the centre of excellence, the team lead deciding how capability becomes reusable. It asks: how do we package what one team built so that another team can find it, use it, govern it, and retire it. Skills — portable, versioned, governed capability — lives here, as does the question of who is allowed to build what, and who is responsible when it breaks. This is the layer most organisations skip, and it is the layer whose absence explains why a successful proof of concept fails to become a successful product.

**Craft** is ground level — the practitioner's altitude, where the engineering actually happens. Model, Harness, Tools, Context Engineering, Memory, Retrieval, Workflows, Agents, Handoffs, Multi-Agent Orchestration, Steering, Evals, AFK agents, Code Indexing — these are the concepts a builder works with directly. The pages in this pillar are the deepest on the site, because depth is the authority proof: if The Craft is undeniable, the other two pillars inherit credibility.

The three altitudes are not independent layers. They are views of the same system. An executive who ignores Craft will set policies that practitioners cannot follow. A practitioner who ignores Groundwork will build systems that governance cannot approve. The pillars exist to make each altitude legible on its own terms — and the Spine exists to show that underneath all three is a single shared vocabulary.

---

## SECTION: cross-pillar

The grid below assigns each concept to one primary pillar, but the concepts do not stay in their lanes — and understanding where they cross is part of understanding the field.

Evals and Observability appears in Craft as a practice: three evaluation surfaces, traces with bodies, the issue lifecycle. It appears in Operating Model as a governance mechanism: the eval score that determines whether an agent is promoted from staging to production. And it appears in Groundwork as policy: the board-level commitment to measure before you ship, and the reporting line that makes that commitment enforceable.

Guardrails and Safety sits in Groundwork as architecture — the gateway, the isolation boundary, the injection-defence layer. But it surfaces in Craft every time an engineer writes an output validator or a permission check, and in Operating Model every time a platform team decides which risk tier an agent belongs to.

Standards and Interop — MCP, A2A, OpenTelemetry, the skill contract — is a Craft concern when you are implementing a tool server, an Operating Model concern when you are building a shared registry, and a Groundwork concern when you are choosing which standards your organisation commits to before anyone writes code.

Skills is the clearest example of a concept that sits at one altitude but reaches the other two. Its primary home is Operating Model — it is the unit of reusable, governed capability. But a skill is built by a Craft practitioner, and the decision to invest in a skills layer at all is a Groundwork decision.

This is the structural claim: the 18 concepts are not 18 isolated topics. They are 18 nodes in a single graph, and the edges between them — the dependencies, the tensions, the governance relationships — are what the rest of this site exists to teach.

---

## SECTION: provocation

Most organisations that fail at AI systems do not fail at the model. They fail at concepts 2 through 18 — the harness, the tools, the context, the memory, the orchestration, the evaluation, the governance, the interoperability — everything the model cannot do for itself. The model is the commodity input. The harness is the product. The operating model is what makes the product repeatable. The groundwork is what makes the repeatable product trustworthy. Knowing the field means knowing all 18 concepts, holding them in relation, and understanding that the one everyone talks about — the model — is the one that matters least to get right, because its vendor will improve it on a schedule you do not control. The other 17 are yours. They are the work.

---

## SECTION: forward-bridge

Where you enter depends on who you are.

If you are an executive — a CTO, a CIO, an enterprise architect — start with Groundwork. It speaks your language: operating decisions, risk frameworks, cost models, governance structures. The concepts there are the ones your board will ask about, and the pages are written to give you answers that survive a challenge.

If you run a platform team, a centre of excellence, or an enablement function — start with Operating Model. It is the layer between strategy and code, and it is the one most organisations discover they need only after they have built three agents that cannot talk to each other.

If you are a practitioner — an engineer, a technical lead, someone who builds — start with Craft. It is the deepest pillar, the most technical, and the one where every concept is taught with enough precision to implement. The two drafted pages — Agents vs Workflows and Harness Engineering — are there now and set the standard for what follows.

The grid below is the full map. Each cell links to its concept page. Read in any order — the Spine holds the structure, and the structure holds regardless of where you begin.
