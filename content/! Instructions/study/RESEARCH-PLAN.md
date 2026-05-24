# TensAI Reference Repos — Research Plan

Find fresh (March–May 2026), validated open-source GitHub repos that solve specific sub-problems within each concept. These become the basis for `tensaicompl/` replicas linked from the website.

## Selection criteria

- **Recency:** created or significantly updated in the last 3 months (March–May 2026)
- **Specificity:** solves ONE concrete sub-problem, not a mega-framework
- **Quality:** has stars/usage/docs, not an abandoned weekend project
- **Clonable value:** a practitioner would actually clone and learn from it
- **Licence:** open source, permissive (MIT/Apache/BSD preferred)

## Concepts mapped to searchable sub-problems

### Batch A — High repo density (Craft, technical)

| # | Concept | Sub-problems to search | Likely hits |
|---|---|---|---|
| 1 | **Memory & Context** | context window management, compaction engines, episodic memory stores, conversation memory, context engineering libraries | High |
| 2 | **RAG & Its Evolutions** | vector DBs, chunking strategies, hybrid search, graph RAG, agentic RAG, self-correcting RAG, rerankers, embedding pipelines | Very high |
| 3 | **Tools & MCP** | MCP servers, MCP clients, tool frameworks, function-calling libraries, MCP registries | Very high |
| 4 | **Code & Doc Indexing** | tree-sitter indexing, code search engines, symbol extraction, code embeddings, codebase RAG | High |
| 5 | **Evals & Observability** | LLM eval frameworks, agent tracing, OpenTelemetry for LLMs, eval datasets, LLM-as-judge tooling | High |
| 6 | **Multi-Agent & A2A** | multi-agent frameworks, A2A protocol implementations, handoff libraries, agent orchestration | High |
| 7 | **Five Patterns** | workflow pattern libraries, chaining/routing/parallel implementations | Medium |
| 8 | **AFK & Autonomous** | autonomous agent loops, agent fleets, background agent runners, kill-switch mechanisms | Medium |
| 9 | **Steering** | steering vectors, activation patching, instruction-fidelity tools, structured output enforcement | Medium |
| 10 | **Harness Engineering** | agent harness scaffolds, AGENTS.md generators, sensor/guide toolkits | Medium |
| 11 | **Failure Taxonomy** | agent debugging tools, loop detection, failure recovery frameworks | Low–Medium |
| 12 | **Agents vs Workflows** | agent-vs-workflow comparison repos, decision frameworks | Low |

### Batch B — Medium repo density (Groundwork, infrastructure)

| # | Concept | Sub-problems to search | Likely hits |
|---|---|---|---|
| 13 | **Token Sourcing** | AI gateways, LLM proxies, multi-provider routers, fallback chain engines | High |
| 14 | **Security Architecture** | prompt injection defence, LLM firewalls, input/output scanners, sandboxing for agents | High |
| 15 | **FinOps** | LLM cost trackers, token attribution tools, prompt caching libraries, model routing optimisers | Medium |
| 16 | **Governance & Risk** | AI risk assessment tools, model cards/inventories, compliance templates, EU AI Act tooling | Low–Medium |

### Batch C — Low repo density (Operating Model, organisational)

| # | Concept | Sub-problems to search | Likely hits |
|---|---|---|---|
| 17 | **Skills** | skill packaging frameworks, skill registries | Low |
| 18 | **Agent Catalog** | agent/model registries, internal developer portals for AI | Low |
| 19 | **Power Users** | — | Skip (organisational, no repos) |
| 20 | **CoE & Enablement** | — | Skip (organisational, no repos) |
| 21 | **Adoption Patterns** | — | Skip (organisational, no repos) |

## Execution plan

**6 parallel research agents**, each covering a cluster of related concepts:

| Agent | Concepts covered | Search focus |
|---|---|---|
| **Agent 1: Context & Memory** | Memory & Context, Harness Engineering | Context engineering libs, memory stores, compaction, harness scaffolds |
| **Agent 2: Retrieval & Indexing** | RAG & Evolutions, Code & Doc Indexing | Vector DBs, chunking, graph RAG, code search, tree-sitter pipelines |
| **Agent 3: Tools & Standards** | Tools & MCP, Multi-Agent & A2A, Five Patterns | MCP servers/clients, A2A implementations, workflow patterns |
| **Agent 4: Quality & Safety** | Evals & Observability, Steering, Failure Taxonomy | Eval frameworks, tracing, steering vectors, agent debugging |
| **Agent 5: Autonomy & Agents** | AFK & Autonomous, Agents vs Workflows | Autonomous loops, agent runners, agent-vs-workflow demos |
| **Agent 6: Infrastructure** | Token Sourcing, Security Architecture, FinOps, Governance & Risk, Skills, Agent Catalog | AI gateways, LLM firewalls, cost trackers, registries |

## Output format per agent

Each agent writes one file: `study/<cluster-name>.md` containing:

```markdown
## <Concept Name>

### <Sub-problem>

**Repo:** `owner/repo-name`
**URL:** https://github.com/owner/repo-name
**Created/Updated:** YYYY-MM-DD
**Stars:** N
**Licence:** MIT/Apache/etc
**What it solves:** One sentence.
**Why it qualifies:** One sentence on quality/adoption.
**Proposed tensaicompl name:** `tensai-<descriptive-slug>`
**Links to concept page:** craft/memory-context (or whichever)
```

Repos that don't meet the criteria are not included. Concepts with no qualifying repos get a "No qualifying repos found" note.

## After research

1. Review the findings — cut anything that's just a wrapper or too thin
2. Decide final naming convention for `tensaicompl/` replicas
3. Map each kept repo to its concept page's Reference implementation Callout
4. Update the content plan with the final repo list
