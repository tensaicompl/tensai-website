# TensAI Reference Repos — Naming Convention & Page Mapping

## Naming convention

Pattern: `tensai-<concept>-<sub-problem>`

Rules:
- All lowercase, hyphens only
- `tensai-` prefix on every repo
- Second segment is the concept area (e.g. `memory`, `rag`, `mcp`, `steer`)
- Third segment is the specific sub-problem (e.g. `graph`, `chunking`, `vectors`)
- Short — max 3 segments, max 35 characters

## Repo mapping (47 repos)

### craft/memory-context — Memory & Context (6 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 1 | mem0ai/mem0 | `tensai-memory-layer` | Universal memory layer (semantic + episodic + factual) | ~56k |
| 2 | getzep/graphiti | `tensai-memory-graph` | Temporal knowledge graph memory | ~23k |
| 3 | rohitg00/agentmemory | `tensai-memory-mcp` | Persistent memory for coding agents via MCP | ~9.4k |
| 4 | aiming-lab/SimpleMem | `tensai-memory-compress` | Lifelong memory with semantic compression | ~3.3k |
| 5 | agiresearch/A-mem | `tensai-memory-zettelkasten` | Self-organizing dynamic memory | ~973 |
| 6 | ace-agent/ace | `tensai-context-engine` | Self-improving context via reflection | ~1k |

### craft/harness-engineering — Harness Engineering (3 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 7 | emcie-co/parlant | `tensai-harness-control` | Interaction control harness for customer-facing agents | ~18.1k |
| 8 | HKUDS/OpenHarness | `tensai-harness-open` | Full Agent = Model + Harness reference | ~12.6k |
| 9 | walkinglabs/learn-harness-engineering | `tensai-harness-learn` | Harness engineering tutorial | ~4.4k |

### craft/rag-evolutions — RAG & Its Evolutions (6 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 10 | HKUDS/LightRAG | `tensai-rag-graph` | Lightweight graph RAG | ~35k |
| 11 | HuskyInSalt/CRAG | `tensai-rag-corrective` | Self-correcting / corrective RAG | ~300 |
| 12 | chonkie-inc/chonkie | `tensai-rag-chunking` | Multi-strategy chunking library | ~3.7k |
| 13 | jina-ai/late-chunking | `tensai-rag-late-chunk` | Context-preserving chunk embeddings | ~490 |
| 14 | AnswerDotAI/rerankers | `tensai-rag-reranker` | Unified reranker API | ~1.6k |
| 15 | explodinggradients/ragas | `tensai-rag-eval` | RAG evaluation framework | ~12.9k |

### craft/code-doc-indexing — Code & Doc Indexing (4 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 16 | tirth8205/code-review-graph | `tensai-index-graph` | Codebase knowledge graph (tree-sitter + MCP) | ~17.2k |
| 17 | cocoindex-io/cocoindex | `tensai-index-incremental` | Incremental data indexing engine | ~6.9k |
| 18 | probelabs/probe | `tensai-index-search` | Semantic code search (ripgrep + tree-sitter) | ~1k |
| 19 | DeusData/codebase-memory-mcp | `tensai-index-memory` | High-perf code intelligence (155 languages) | ~2.5k |

### craft/tools-mcp — Tools & MCP (5 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 20 | modelcontextprotocol/servers | `tensai-mcp-servers` | Official MCP reference server implementations | ~86.1k |
| 21 | punkpeye/fastmcp | `tensai-mcp-framework` | High-level TypeScript MCP server framework | ~3.1k |
| 22 | googleapis/mcp-toolbox | `tensai-mcp-database` | Production MCP server for databases | ~15.3k |
| 23 | docker/mcp-gateway | `tensai-mcp-gateway` | Containerized MCP server management | ~1.3k |
| 24 | mcp-use/mcp-use | `tensai-mcp-connect` | Agent-to-MCP integration framework | ~10k |

### craft/multi-agent — Multi-Agent, Handoffs & A2A (3 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 25 | openai/swarm | `tensai-multi-swarm` | Educational multi-agent with handoffs | ~20k |
| 26 | awslabs/agent-squad | `tensai-multi-router` | Classifier-based multi-agent routing | ~7.6k |
| 27 | open-multi-agent/open-multi-agent | `tensai-multi-dag` | Goal-to-DAG orchestration (TypeScript) | ~5.5k |

### craft/five-patterns — The Five Patterns (3 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 28 | anthropics/claude-cookbooks | `tensai-patterns-canonical` | Anthropic's canonical five pattern implementations | ~5k |
| 29 | lastmile-ai/mcp-agent | `tensai-patterns-mcp` | Five patterns + MCP + Temporal durability | ~7.9k |
| 30 | The-Pocket/PocketFlow | `tensai-patterns-minimal` | 100-line minimal agent/workflow core | ~9.3k |

### craft/agents-vs-workflows — Agents vs Workflows (1 repo)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 31 | githubnext/agentics | `tensai-agentic-workflows` | Workflow-as-agent patterns | ~651 |

### craft/afk-autonomous — AFK & Autonomous Agents (4 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 32 | microsoft/agent-governance-toolkit | `tensai-afk-governance` | Kill-switch, policy enforcement, OWASP coverage | ~1.5k |
| 33 | ColeMurray/background-agents | `tensai-afk-runner` | Self-hosted background agent runner | ~1.5k |
| 34 | Yeachan-Heo/oh-my-claudecode | `tensai-afk-fleet` | Teams-first multi-agent orchestration | ~8.5k |
| 35 | joelhooks/agent-secrets | `tensai-afk-credentials` | Agent credential management with kill-switch | Check |

### craft/evals-observability — Evals & Observability (4 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 36 | promptfoo/promptfoo | `tensai-eval-framework` | Prompt/agent/RAG testing with CI/CD | ~21k |
| 37 | traceloop/openllmetry | `tensai-eval-otel` | OpenTelemetry-native LLM observability | ~7k |
| 38 | langchain-ai/agentevals | `tensai-eval-trajectory` | Agent trajectory evaluators | ~300 |
| 39 | hidai25/eval-view | `tensai-eval-regression` | Snapshot-based agent regression testing | ~100 |

### craft/steering — Steering (4 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 40 | vgel/repeng | `tensai-steer-vectors` | Control vectors via representation engineering | ~693 |
| 41 | dottxt-ai/outlines | `tensai-steer-structured` | Structured outputs (Python constrained decoding) | ~11.9k |
| 42 | mlc-ai/xgrammar | `tensai-steer-grammar` | Fast grammar-based constrained decoding | ~1.7k |
| 43 | wisent-ai/wisent | `tensai-steer-safety` | RepE for hallucination/safety control | ~200 |

### craft/failure-taxonomy — The Failure Taxonomy (3 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 44 | microsoft/AgentRx | `tensai-failure-diagnosis` | Agent failure diagnosis from trajectories | ~150 |
| 45 | multi-agent-systems-failure-taxonomy/MAST | `tensai-failure-taxonomy` | Multi-agent failure taxonomy | ~328 |
| 46 | vectara/awesome-agent-failures | `tensai-failure-cases` | Real-world agent failure case studies | ~160 |

### groundwork/token-sourcing — Token Sourcing (2 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 47 | maximhq/bifrost | `tensai-gateway-perf` | High-performance AI gateway (Go, 23+ providers) | ~5.2k |
| 48 | ulab-uiuc/LLMRouter | `tensai-gateway-router` | LLM quality-cost routing | ~1.9k |

### groundwork/security-architecture — Security Architecture (4 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 49 | NVIDIA/garak | `tensai-security-scanner` | LLM vulnerability scanner (red-teaming) | ~7.9k |
| 50 | protectai/llm-guard | `tensai-security-guard` | LLM input/output security scanner | ~3k |
| 51 | HeadyZhang/agent-audit | `tensai-security-audit` | Static security scanner for agents (OWASP) | ~172 |
| 52 | kubernetes-sigs/agent-sandbox | `tensai-security-sandbox` | Kubernetes-native agent sandbox | ~2.3k |

### groundwork/finops — FinOps for AI (2 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 53 | AgentOps-AI/tokencost | `tensai-finops-pricing` | Token price database (400+ LLMs) | ~2k |
| 54 | messkan/prompt-cache | `tensai-finops-cache` | Semantic cache for LLM cost reduction | ~231 |

### groundwork/governance-risk — Governance & Risk (2 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 55 | microsoft/presidio | `tensai-govern-pii` | PII detection and anonymisation | ~8.3k |
| 56 | guardrails-ai/guardrails | `tensai-govern-validate` | LLM output validation and guardrails | ~6.9k |

### operating-model/skills — Skills (2 repos)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 57 | addyosmani/agent-skills | `tensai-skills-collection` | Production-grade agent skills + SKILL.md standard | ~45.4k |
| 58 | microsoft/skills | `tensai-skills-standard` | Agent skills standard and registry | ~2.4k |

### operating-model/agent-catalog — Agent Catalog (1 repo)

| # | Original repo | tensaicompl name | Sub-problem | Stars |
|---|---|---|---|---|
| 59 | IBM/mcp-context-forge | `tensai-catalog-gateway` | Unified discovery (MCP + A2A + REST/gRPC) | ~3.8k |

---

## Concept pages with no repos (by design)

- `craft/steering` — now HAS repos (4 steering repos found)
- `craft/failure-taxonomy` — now HAS repos (3 failure repos found)
- `groundwork/operating-model` — strategic/organisational, no repos
- `groundwork/build-buy-boost` — decision framework, no repos
- `operating-model/power-users` — organisational design, no repos
- `operating-model/coe-enablement` — organisational design, no repos
- `operating-model/adoption-patterns` — failure-pattern analysis, no repos

---

## Changes from original content plan

The original plan had 14 placeholder repos (custom-built references). This study replaces them with 59 curated real repos. Key changes:

1. **Multiple repos per concept** — instead of one placeholder, most concepts now have 2–6 real repos covering different sub-problems
2. **Two concepts gained repos** — Steering (4) and Failure Taxonomy (3) were originally marked "likely none; writer judges" but now have qualifying repos
3. **Original placeholder names retired** — e.g. `agents-vs-workflows-reference` → `tensai-agentic-workflows`, `harness-template` → `tensai-harness-open` etc.

## Page integration approach

Each concept page's Reference implementation Callout should be updated to list the curated repos for that concept. For pages with multiple repos, use a single Callout with a short description per repo. Example:

```mdx
<Callout type="note" title="Reference implementations">
TensAI maintains curated references for each sub-problem this page covers:
- **Memory layer** — [`tensai-memory-layer`](https://github.com/tensaicompl/tensai-memory-layer) — universal semantic + episodic + factual memory
- **Temporal graphs** — [`tensai-memory-graph`](https://github.com/tensaicompl/tensai-memory-graph) — bi-temporal knowledge graph for changing relationships
- **MCP memory** — [`tensai-memory-mcp`](https://github.com/tensaicompl/tensai-memory-mcp) — persistent memory exposed as MCP tools
</Callout>
```
