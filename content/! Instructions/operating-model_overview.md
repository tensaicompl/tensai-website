# Pillar II — The Operating Model: Overview Synthesis

> Prose content for the Operating Model pillar landing page (`/operating-model`).
> To be integrated into the existing `src/app/operating-model/page.tsx` as a synthesis section between the diagram slot and the concept index grid.

---

## The whole, before the parts

An organisation that can build an AI agent and an organisation that can run one are not the same organisation. The first needs engineers. The second needs an operating model — the layer of structure, governance, and distribution that sits between strategy and code and determines whether a capability that worked once can work everywhere, for everyone, under conditions nobody anticipated. This pillar is about that layer. It is about the machinery that turns a team's achievement into an organisational asset — and about the specific, predictable ways that machinery fails when it is absent.

The argument is a single thread pulled through five pages: capability becomes an asset only when it is reusable, governed, and findable. A capability that cannot be reused is rebuilt from scratch by every team that needs it. A capability that is not governed is a liability the organisation cannot see until it detonates. A capability that is not findable does not, organisationally, exist. The operating model is the discipline of making all three true at once — and the five concepts that follow are the components of that discipline, laid out in the order they must be built.

## The arc

The sequence is not arbitrary. Each concept creates the condition the next one requires.

**Skills as the Reusable Unit** starts at the foundation. Before an organisation can distribute, govern, or discover AI capability, it must decide what the unit of capability is — the thing that gets packaged, versioned, and passed from team to team. The skill is that unit: a portable, contract-defined artefact with a manifest, an entry point, a resource bundle, and governance metadata. Skills solve the reuse problem the way package managers solved it for libraries — not by inventing a new idea, but by applying an old discipline to a new kind of work. Without the skill as a stable unit, nothing that follows has anything to operate on.

**Power Users vs Consumers** introduces the people who move skills through the organisation — and the tier that governance frameworks almost always miss. Three tiers emerge whether anyone designed them or not: builders who create capability, power users who compose it, consumers who use it. Builders are governed by engineering process. Consumers are governed by the interface itself. Power users — the domain experts who wire published skills into workflows for their teams — sit between the two, holding real autonomy over real data, and governed by nothing. This is where the operating model most often breaks, and this page names the controls that close the gap: scoped permissions, workflow review, and audit infrastructure. The three-tier distribution is the human architecture the operating model must account for.

**The Agent Catalog** is the infrastructure that makes the distribution governable. Three registries — agents, skills, tools — linked by cross-references into a dependency graph that can answer the questions governance requires: what exists, who owns it, what depends on what, and what breaks when something changes. The catalogue is not a dashboard or a monitoring layer. It is the foundational data structure beneath both — the structured record that deprecation planning, compliance reporting, impact analysis, and cost attribution all query. Without it, the organisation cannot see its own AI estate.

**CoE and Enablement** addresses the organisational structure that maintains the catalogue, enforces the standards, and — crucially — evolves beyond the role of builder. The Centre of Excellence is the obvious first move: centralise the talent, set the standards, deliver capability outward. The problem is that the hub-and-spoke model works at a dozen initiatives and collapses at sixty. The transition from builder to platform team — from producing AI solutions to producing the conditions under which others build them — is the hardest organisational shift in the pillar, and the one most enterprises stall on. This page teaches the evolution path: from hub-and-spoke through federated to embedded, with enabling rotations that transfer capability and withdraw.

**Adoption and Failure Patterns** closes the pillar by naming what goes wrong — the adoption cliff, the scaling cliff, the governance gap — and showing that all three are symptoms of the same root cause: the organisation treated AI as a technology to deploy rather than a capability to operate. Every preceding page exists to prevent one of these patterns. Skills prevent the scaling cliff. The three-tier distribution prevents the adoption cliff. The catalogue prevents the governance gap. The CoE ties all three together. Read in reverse, the failure patterns are the clearest argument for why everything that came before is not optional.

## Between strategy and code

The Operating Model is the middle pillar deliberately. The Groundwork — Pillar I — sets the strategic and definitional foundation: what AI is, what maturity looks like, where the ROI cases are, and what the risk landscape demands. It answers the question "should we do this, and under what conditions." But strategy without operations is a slide deck. The Groundwork tells you what to build; the Operating Model tells you how to run it once it is built.

The Craft — Pillar III — teaches the engineering: agents versus workflows, the five composition patterns, harness engineering, evaluation, steering, memory, multi-agent orchestration. It answers the question "how do I build this well." But engineering without operations is a pilot. The Craft tells you how to build a capable system; the Operating Model tells you how to make that system reusable, governed, and available to the rest of the organisation.

The Operating Model is the connective tissue. It takes the strategic intent from the Groundwork and the engineering output from the Craft and places them inside a structure that can persist — a structure where skills are versioned and findable, where governance scales with the estate, where the people who build and the people who use are both supported and both accountable.

## The provocation

Most organisations that say they have deployed AI have deployed a pilot. They have a working system in one team, maintained by the person who built it, running on that person's API key, governed by that person's judgment. When they say "we need to scale this," they mean "we need more pilots" — more teams, more use cases, more demos. What they do not yet mean, and what they must come to mean, is: we need the operating model that turns a pilot into a capability the organisation can rely on after the person who built it has moved to another team.

The distinction between deploying AI and operating AI is the distinction this pillar exists to draw. Every page that follows is one part of the answer.

## Into the pages

The five concepts below build on each other in sequence, but each stands on its own. Start with Skills if you want to understand the unit of reuse. Start with Adoption Patterns if you want to see, first, what happens without the model — and then read backwards through the infrastructure that would have prevented it. Start with Power Users if your organisation already has capability but cannot account for who is doing what with it. The sequence is a recommendation, not a requirement. The operating model is the same structure regardless of which door you enter through.
