# TensAI Blueprint — Content Plan

The complete inventory of pages to be written. One body of work, three altitudes, on a shared 18-concept Spine. The companion file — the build instruction — defines *how* each page is written; this file defines *what* exists.

**Totals.** 27 pages — 1 Spine page, 3 pillar overviews, 23 concept pages. Two concept pages are drafted and are the precedent for the rest; 25 remain.

**Every page ships two artifacts:** an `.mdx` body and one custom diagram (delivered as a diagram brief). No exceptions — the per-page diagram is a structural rule.

**Slugs below match the repo stubs.** The stub's actual slug and frontmatter are authoritative. Where the plan previously used a longer indicative slug, it has been corrected to match the repo.

Status — ✅ drafted · ◻️ to write

---

## The Spine — flagship page

`/spine` · ◻️

The canonical 18-concept taxonomy, on one page. Every concept page maps to one or more of these via its `spineConcepts` frontmatter. This is the field's reference map and the single strongest authority claim the site makes — it must read as definitive. It presents all 18 concepts, their definitions, and how they relate.

The 18 concepts:

| # | Concept | One-line |
|---|---|---|
| 01 | Model | The reasoning core — a commodity, selected by tier not vendor |
| 02 | Harness | Everything around the model — guides and sensors |
| 03 | Tools | External capabilities the agent invokes |
| 04 | Context Engineering | Designing what enters the window, and when |
| 05 | Context Management | Runtime budgeting, compaction, eviction |
| 06 | Memory | Persistent state — episodic, semantic, procedural |
| 07 | Retrieval / RAG | Grounding in external knowledge |
| 08 | Skills | Portable, reusable, packaged capability |
| 09 | Workflows | Orchestration along predefined code paths |
| 10 | Agents | Systems that direct their own process |
| 11 | Handoffs | One-way transfer of execution between agents |
| 12 | Multi-Agent Orchestration | Supervisor, swarm, mesh, hierarchy |
| 13 | Steering | Run-time control — mechanistic and operational |
| 14 | Evals & Observability | The quality and reliability layer |
| 15 | Guardrails & Safety | Input filtering, output validation, injection defence |
| 16 | AFK & Autonomous Agents | Long-running agents with no human in the loop |
| 17 | Code & Doc Indexing | Specialised retrieval for software agents |
| 18 | Standards & Interop | MCP, Agent Skills, A2A, OpenTelemetry |

---

## Pillar overviews — the "whole" of each pillar

The fractal rule: the site opens with the whole (The Map), each pillar opens with its whole, each page opens with its whole. These three landing pages are the pillar-level wholes. Write them last — they synthesise the concept pages beneath them.

| Page | ◻️ | What it covers |
|---|---|---|
| `/groundwork` | ◻️ | Pillar I landing. The enterprise framework for AI, at CTO/CIO altitude. Throughline: **AI is an operating decision before it is a technology one.** |
| `/operating-model` | ◻️ | Pillar II landing. How an organisation runs agents — the layer between strategy and code. Throughline: **capability becomes an asset only when it is reusable, governed, and findable.** |
| `/craft` | ◻️ | Pillar III landing. The practitioner's concept-level playbook. Throughline: **an agent is a model plus a harness — everything hard lives in the harness.** |

---

## Pillar III — The Craft · 12 concept pages

Draft first. Depth is the authority proof — once The Craft is undeniable, the other two pillars inherit credibility.

| Page | Status | What it covers | Reference repo |
|---|---|---|---|
| `craft/agents-vs-workflows` | ✅ | The foundational distinction — and the discipline of choosing. | `agents-vs-workflows-reference` |
| `craft/five-patterns` | ◻️ | Chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser. | `tensai-pattern-library` |
| `craft/harness-engineering` | ✅ | Guides and sensors — the new senior discipline of the field. | `harness-template` |
| `craft/memory-context` | ◻️ | The four memory types and the four operations of context engineering. | `tensai-context-examples` |
| `craft/tools-mcp` | ◻️ | Tool design principles and the standard interface for exposing them. | `tensai-mcp-reference` |
| `craft/rag-evolutions` | ◻️ | From naïve top-k to agentic, graph, and self-correcting retrieval. | `tensai-rag-reference` |
| `craft/multi-agent` | ◻️ | Topologies, transfer contracts, and the inter-agent wire protocol. | `tensai-multi-agent-reference` |
| `craft/steering` | ◻️ | Mechanistic activation control and operational instruction-fidelity. | — |
| `craft/code-doc-indexing` | ◻️ | Indexed vs runtime exploration — and the cost of phantom APIs. | `tensai-indexing-reference` |
| `craft/evals-observability` | ◻️ | Three evaluation surfaces. Traces with bodies. The issue lifecycle. | `tensai-eval-harness` |
| `craft/afk-autonomous` | ◻️ | The Ralph loop, agent fleets, the HITL→on-rails→AFK gradient. | `tensai-autonomous-reference` |
| `craft/failure-taxonomy` | ◻️ | A field guide — memory, reflection, planning, action, system faults. | — |

---

## Pillar I — The Groundwork · 6 concept pages

| Page | Status | What it covers | Reference repo |
|---|---|---|---|
| `groundwork/operating-model` | ◻️ | From experimentation to AI factory — and the Stage 2→3 wall where most stall. | — |
| `groundwork/build-buy-boost` | ◻️ | The build/buy decision that actually matters, plus the build-to-learn vs build-to-run trap. | — |
| `groundwork/token-sourcing` | ◻️ | Multi-provider as a principle — the gateway, not the vendor, is the strategy. | `tensai-gateway-reference` |
| `groundwork/security-architecture` | ◻️ | The AI gateway, Citadel-style isolation, prompt injection as the live threat. | `tensai-gateway-reference` (shared) |
| `groundwork/governance-risk` | ◻️ | A scaffold that survives the EU AI Act, NIST AI RMF, and a real incident. | `tensai-governance-scaffold` |
| `groundwork/finops` | ◻️ | Per-token attribution, caching, routing — unit economics that hold at scale. | — |

---

## Pillar II — The Operating Model · 5 concept pages

| Page | Status | What it covers | Reference repo |
|---|---|---|---|
| `operating-model/skills` | ◻️ | The open standard that turns capability into a versioned, governed inventory. | `tensai-skills` |
| `operating-model/power-users` | ◻️ | The three-tier distribution — and where governance most often fails. | — |
| `operating-model/agent-catalog` | ◻️ | Internal registries for agents, skills, and tools — owned, scored, risk-tiered. | `tensai-agent-catalog` |
| `operating-model/coe-enablement` | ◻️ | Hub-and-spoke vs federated. The platform team as velocity engine. | — |
| `operating-model/adoption-patterns` | ◻️ | The adoption cliff, the scaling cliff, the governance gap. | — |

---

## GitHub reference repos — placeholder inventory

All repos live at `github.com/tensaicompl/<slug>`. None exist yet — URLs are placeholders. Each is linked via a "Reference implementation" `Callout` in the concept page, only where a genuine clonable artifact would serve a practitioner. Pages without a repo listed do not get a callout.

| Repo slug | Page(s) | What the repo contains |
|---|---|---|
| `agents-vs-workflows-reference` | craft/agents-vs-workflows | A customer support-ticket system built twice from one shared spec — once as a deterministic workflow (classify → route → draft → send), once as an autonomous agent. Shared test harness so a reader can run both and compare latency, cost, and behavioural divergence on the same inputs. |
| `harness-template` | craft/harness-engineering | A starter harness scaffold: an `AGENTS.md` guide, a layered computational-sensor stack (TypeScript type-check → ESLint → test suite), an evaluator-model inferential sensor, and the iterate-the-harness loop that feeds sensor output back into guides. Clone-and-adapt starting point. |
| `tensai-pattern-library` | craft/five-patterns | The five workflow patterns — chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser — each as a self-contained runnable example with a shared task (e.g. document processing pipeline) so the reader sees the same problem solved five ways. |
| `tensai-context-examples` | craft/memory-context | Working examples of the four memory types (episodic, semantic, procedural, working) and the four context-engineering operations (write, select, compress, isolate). Includes a context-window budget calculator and a compaction demo. |
| `tensai-mcp-reference` | craft/tools-mcp | A reference MCP server implementing 4–6 well-designed tools with proper input schemas, error contracts, idempotency, and human-readable descriptions. Demonstrates tool-design principles: atomicity, discoverability, safe defaults. Includes a test client. |
| `tensai-rag-reference` | craft/rag-evolutions | A RAG pipeline with swappable retrieval strategies — naïve top-k, hybrid (dense + sparse), agentic (query decomposition + tool-based retrieval), and self-correcting (retrieval + grading + re-query loop). Same corpus, same eval set, so the reader can benchmark each stage. |
| `tensai-multi-agent-reference` | craft/multi-agent | Multi-agent topologies (supervisor, swarm, pipeline) with explicit handoff contracts, shared-state protocols, and an A2A wire-protocol example. Includes a three-agent pipeline (planner → executor → reviewer) with typed handoff payloads. |
| `tensai-indexing-reference` | craft/code-doc-indexing | A code-indexing pipeline: tree-sitter parsing → symbol extraction → embedding → SQLite storage, with a query interface that returns symbols with file paths and line numbers. Demonstrates phantom-API prevention via grounding retrieval in actual parsed code. |
| `tensai-eval-harness` | craft/evals-observability | An eval + observability starter: unit evals (single-turn assertions), task evals (multi-step success criteria), and system evals (end-to-end reliability over N runs). Includes OpenTelemetry trace instrumentation with request/response bodies, and a simple issue-lifecycle tracker. |
| `tensai-autonomous-reference` | craft/afk-autonomous | The Ralph loop (plan → act → observe → reflect → decide) as a running agent, plus a two-agent fleet example. Demonstrates the HITL → on-rails → AFK gradient with configurable autonomy levels and a kill-switch mechanism. |
| `tensai-gateway-reference` | groundwork/token-sourcing, groundwork/security-architecture | A multi-provider AI gateway: request routing across providers (Anthropic, OpenAI, Mistral) with fallback chains, per-model cost tracking, rate-limit pooling, and prompt-injection defence filters (input scanning, output validation). Config-driven, no vendor lock-in. |
| `tensai-governance-scaffold` | groundwork/governance-risk | Risk-tier classification templates (EU AI Act Annex III mapping, NIST AI RMF profile), policy document starters (acceptable use, incident response, model inventory), and a lightweight risk-register schema. Designed to be forked and adapted to an organisation's context. |
| `tensai-skills` | operating-model/skills | A skills repository whose flagship example is a skill that creates other skills — self-referential by design. Demonstrates the skill contract (manifest, entry point, resource bundle, version), the skill registry interface, and governance metadata (owner, risk tier, last audit). |
| `tensai-agent-catalog` | operating-model/agent-catalog | A reference catalog schema for internal registries: agent entries (owner, capability description, risk tier, upstream/downstream dependencies, eval score history), skill entries, and tool entries. Includes a simple web UI for browsing and a CLI for registration. |

---

## Repo-to-page coverage check

Pages with **no** reference repo (by design — purely conceptual or strategic, no clonable artifact):

- `craft/steering` — mechanistic control concepts; no single artifact captures it
- `craft/failure-taxonomy` — a classification framework; the value is the taxonomy itself
- `groundwork/operating-model` — maturity-model framing; strategic, not code
- `groundwork/build-buy-boost` — decision framework; strategic, not code
- `groundwork/finops` — unit-economics framing; strategic, not code
- `operating-model/power-users` — organisational design; not code
- `operating-model/coe-enablement` — organisational design; not code
- `operating-model/adoption-patterns` — failure-pattern analysis; not code

---

## Out of scope for this phase

The `notes` layer — short-form essays referenced by the `relatedNotes` frontmatter field (e.g. `when-not-to-build-an-agent`, `harness-engineering-discipline`). A later content phase, not part of this handoff.

The Map / front door — its copy is finished and approved; it is build work, not content work.
