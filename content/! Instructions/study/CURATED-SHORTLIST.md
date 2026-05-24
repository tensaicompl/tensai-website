# TensAI Reference Repos -- Curated Shortlist

## Summary
- Started with: 185 repos across 6 research files
- Kept: 47 repos
- Cut: 138 repos

---

## Kept repos by concept

### Memory & Context (craft/memory-context)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| mem0ai/mem0 | ~56k | Apache-2.0 | Universal memory layer (semantic + episodic + factual) | SOTA on LoCoMo (+20 over previous), model-agnostic, massive adoption. The canonical memory layer implementation. |
| getzep/graphiti | ~23k | Apache-2.0 | Temporal knowledge graph memory | Bi-temporal model for changing relationships. 94.8% on DMR. Production-grade, unique sub-problem (time-aware graphs). |
| rohitg00/agentmemory | ~9.4k | Apache-2.0 | Persistent memory for coding agents via MCP | 53 MCP tools, works with 16+ agent clients, GitHub Trending #1. Teaches the MCP-based memory pattern specifically. |
| aiming-lab/SimpleMem | ~3.3k | MIT | Lifelong memory with semantic compression | Three-stage pipeline, new SOTA on LoCoMo (F1=0.613, +47%), multimodal support. Clean research implementation. |
| agiresearch/A-mem | ~973 | MIT | Zettelkasten-based dynamic memory structuring | NeurIPS 2025 paper, superior on 6 foundation models. Unique self-organizing approach via ChromaDB. |
| ace-agent/ace | ~1k | Check repo | Self-improving context via reflection | SambaNova + Stanford + Berkeley. +10.6% on agent tasks. Clean Generator/Reflector/Curator architecture. |

### Harness Engineering (craft/harness-engineering)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| emcie-co/parlant | ~18.1k | Apache-2.0 | Interaction control harness for customer-facing agents | 18.1k stars, v3.0 production-ready. Treats misalignment as a design problem. Context narrowing in real-time. |
| HKUDS/OpenHarness | ~12.6k | MIT | Open agent harness (full Agent = Model + Harness pattern) | 12.6k stars from HKU DS lab. Clean reference for the complete harness pattern. |
| walkinglabs/learn-harness-engineering | ~4.4k | Check repo | Harness engineering tutorial (beginner to intermediate) | 4.4k stars, 631 forks. 12 conceptual units + 6 progressive projects. Best educational resource for the concept. |

### RAG & Its Evolutions (craft/rag-evolutions)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| HKUDS/LightRAG | ~35k | MIT | Graph RAG (lightweight, fast) | EMNLP 2025, 35k stars. Dual-level retrieval, outperforms Microsoft GraphRAG on accuracy at lower cost. |
| HuskyInSalt/CRAG | ~300 | MIT | Self-correcting / Corrective RAG | Canonical reference implementation of the CRAG paper. Teaches relevance evaluation + web search fallback. |
| chonkie-inc/chonkie | ~3.7k | MIT | Chunking library (multi-strategy, production-grade) | 3.7k stars, 32+ integrations. Single-purpose chunking library, not a framework. |
| jina-ai/late-chunking | ~490 | Apache-2.0 | Late chunking (context-preserving chunk embeddings) | From Jina AI. Canonical implementation of late chunking technique. Solves fundamental "chunks lose context" problem. |
| AnswerDotAI/rerankers | ~1.6k | Apache-2.0 | Unified reranker API | From Answer.AI (Jeremy Howard). Swap between reranker backends with one interface change. |
| explodinggradients/ragas | ~12.9k | Apache-2.0 | RAG evaluation framework | 12.9k stars, de facto standard. Reference-free metrics, synthetic test data generation. |

### Code & Doc Indexing (craft/code-doc-indexing)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| tirth8205/code-review-graph | ~17.2k | MIT | Codebase knowledge graph for AI reviews (tree-sitter + MCP) | 17k stars. 6.8x fewer tokens on code reviews. Tree-sitter + MCP integration. |
| cocoindex-io/cocoindex | ~6.9k | Apache-2.0 | Incremental data indexing engine (real-time, change-aware) | Rust core, solves stale index problem. Only updates what changed. |
| probelabs/probe | ~1k | Apache-2.0 | Semantic code search (ripgrep + tree-sitter, Rust) | Zero-setup, no vector DB needed. Returns structurally complete code units. Fully local. |
| DeusData/codebase-memory-mcp | ~2.5k | MIT | High-performance code intelligence (knowledge graph, 155 languages) | 83% answer quality, 10x fewer tokens. Single static binary. Research-backed. |

### Tools & MCP (craft/tools-mcp)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| modelcontextprotocol/servers | ~86.1k | MIT | Official MCP reference server implementations | Canonical "how to build an MCP server" from protocol authors. Covers every primitive. |
| punkpeye/fastmcp | ~3.1k | MIT | High-level TypeScript framework for building MCP servers | Batteries-included: OAuth proxy, edge runtime, multiple transports. Gap between SDK and production. |
| googleapis/mcp-toolbox | ~15.3k | Apache-2.0 | Production MCP server for databases | Google-backed. Connection pooling, auth, prebuilt tools. Enterprise reference. |
| docker/mcp-gateway | ~1.3k | Apache-2.0 | Containerized MCP server management | Official Docker project. Catalog, secrets, OAuth, lifecycle in containers. |
| mcp-use/mcp-use | ~10k | MIT | Fullstack MCP framework for agent-MCP integration | 10k stars. Connect any LLM to any MCP server. Dual-language SDK. |

### Multi-Agent (craft/multi-agent)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| openai/swarm | ~20k | MIT | Educational multi-agent orchestration with handoffs | The reference that defined the "agent handoff" pattern. Clearest teaching tool for multi-agent coordination. |
| awslabs/agent-squad | ~7.6k | Apache-2.0 | Classifier-based multi-agent routing | AWS Labs, 7.6k stars. Intent-based routing to specialized agents. Clean production pattern. |
| open-multi-agent/open-multi-agent | ~5.5k | MIT | Goal-to-DAG multi-agent orchestration (TypeScript) | 5.5k stars since April 2026. 3 runtime dependencies. Multi-model teams in one call. Minimal and focused. |

### Five Patterns (craft/five-patterns)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| anthropics/claude-cookbooks (patterns/agents/) | ~5k | MIT | Anthropic's canonical five pattern implementations | Anthropic official. The single best learning resource. Jupyter notebooks with clear explanations. |
| lastmile-ai/mcp-agent | ~7.9k | Apache-2.0 | All five patterns composed with MCP + Temporal durability | 7.9k stars. Only framework purpose-built for MCP that implements all five patterns as composable primitives. |
| The-Pocket/PocketFlow | ~9.3k | Check repo | 100-line minimal agent/workflow core | 9.3k stars. Proves agents and workflows share the same graph abstraction. Available in 7 languages. |

### Agents vs Workflows (craft/agents-vs-workflows)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| githubnext/agentics | ~651 | Check repo | GitHub Agentic Workflows (workflow-as-agent patterns) | GitHub-official. Shows how markdown-defined workflows with slash-commands bridge CI/CD and autonomous agents. |

### AFK & Autonomous Agents (craft/afk-autonomous)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| microsoft/agent-governance-toolkit | ~1.5k | MIT | Kill-switch, policy enforcement, OWASP ASI 2026 coverage | Microsoft-backed. Covers all 10 OWASP Agentic Top 10 controls. Automated certification CLI. |
| ColeMurray/background-agents | ~1.5k | Check repo | Self-hosted background agent runner | Purpose-built for AFK coding. Web UI, Slack/GitHub integration, parallel sandboxes, cron scheduling. |
| Yeachan-Heo/oh-my-claudecode | ~8.5k | Check repo | Teams-first multi-agent orchestration for Claude Code | 8.5k stars, dominant Claude Code multi-agent plugin. |
| joelhooks/agent-secrets | Check repo | MIT | Agent credential management with kill-switch and session leases | Narrow, well-designed: age encryption, TTL-bounded leases, audit, rotation, heartbeat. |

### Evals & Observability (craft/evals-observability)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| promptfoo/promptfoo | ~21k | MIT | Prompt/agent/RAG testing with CI/CD integration | 21k stars, used by OpenAI and Anthropic. The standard for eval-driven development in CI pipelines. |
| traceloop/openllmetry | ~7k | Apache-2.0 | OpenTelemetry-native LLM observability | Multi-language (Python, JS, Go, Ruby). The reference OTel integration for GenAI. |
| langchain-ai/agentevals | ~300 | MIT | Agent trajectory evaluators | From LangChain. Focused on evaluating agent behavior via tool-call sequence comparison. Unique sub-problem. |
| hidai25/eval-view | ~100 | MIT | Agent regression testing (snapshot + drift detection) | Deterministic regression detection without LLM-as-judge. GitHub Actions integration. Framework-agnostic. |

### Steering (craft/steering)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| vgel/repeng | ~693 | MIT | Control vectors via representation engineering | Train RepE control vectors in 60 seconds, export as GGUF. The go-to library for creating control vectors. |
| dottxt-ai/outlines | ~11.9k | Apache-2.0 | Structured outputs for LLMs (Python-native constrained decoding) | 11.9k stars, most popular Python structured generation library. JSON Schema, regex, custom grammars. |
| mlc-ai/xgrammar | ~1.7k | Apache-2.0 | Fast structured generation engine (grammar-based constrained decoding) | Default backend for vLLM, SGLang, TensorRT-LLM. Near-zero overhead. |
| wisent-ai/wisent | ~200 | Apache-2.0 | Representation engineering for hallucination/safety control | Contrastive activation pairs for detecting hallucinations. Practical RepE for safety without weight modification. |

### Failure Taxonomy (craft/failure-taxonomy)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| microsoft/AgentRx | ~150 | MIT | Agent failure diagnosis from execution trajectories | Microsoft Research. 23.6% better failure localization. 10-category taxonomy. 115-trajectory annotated benchmark. |
| multi-agent-systems-failure-taxonomy/MAST | ~328 | MIT | Multi-agent failure taxonomy | First comprehensive MAS failure taxonomy. 150+ tasks analyzed. Fills multi-agent-specific gap. |
| vectara/awesome-agent-failures | ~160 | CC-BY-4.0 | Community-curated real-world agent failure modes | From Vectara. Grounded in real incidents. Case studies with root cause analysis and solutions. |

### Token Sourcing (groundwork/token-sourcing)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| maximhq/bifrost | ~5.2k | Apache-2.0 | High-performance AI gateway (Go, 23+ providers) | 50x faster than LiteLLM, 11us overhead. Adaptive load balancing, failover, semantic caching. |
| ulab-uiuc/LLMRouter | ~1.9k | MIT | LLM quality-cost routing (research-backed) | UIUC research, 16+ routing strategies. Solves model selection based on task complexity, cost, performance. |

### Security Architecture (groundwork/security-architecture)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| NVIDIA/garak | ~7.9k | Apache-2.0 | LLM vulnerability scanner (red-teaming) | NVIDIA-backed, most starred LLM security scanner. Automated probing for hallucination, injection, jailbreaks. |
| protectai/llm-guard | ~3k | MIT | LLM input/output security scanner | 15 input scanners + 20 output scanners. Most comprehensive I/O scanner. Modular, extensible. |
| HeadyZhang/agent-audit | ~172 | MIT | Static security scanner for LLM agents (OWASP mapped) | 49 rules mapped to OWASP Agentic Top 10 (2026). 94.6% recall, 87.5% precision. Static analysis for agent code. |
| kubernetes-sigs/agent-sandbox | ~2.3k | Apache-2.0 | Kubernetes-native agent sandbox | Official K8s SIG project. gVisor + Kata Containers isolation for agent workloads. |

### FinOps for AI (groundwork/finops)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| AgentOps-AI/tokencost | ~2k | MIT | Token price database (400+ LLMs) | Most starred dedicated pricing library. Foundational sub-problem that other cost tools build on. |
| messkan/prompt-cache | ~231 | MIT | Semantic cache for LLM cost reduction | Drop-in Go proxy, up to 80% cost reduction. Focused on one sub-problem. Clean implementation. |

### Governance & Risk (groundwork/governance-risk)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| microsoft/presidio | ~8.3k | MIT | PII detection and anonymization | Microsoft-backed, most established PII framework. Text, images, structured data. Customizable pipelines. |
| guardrails-ai/guardrails | ~6.9k | Apache-2.0 | LLM output validation and guardrails | 6.9k stars, composable validator library via Guardrails Hub. Input/output validation for compliance. |

### Skills (operating-model/skills)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| addyosmani/agent-skills | ~45.4k | MIT | Production-grade agent skills collection | 45k stars, by Google Chrome engineering lead. Defines the SKILL.md packaging standard. Progressive disclosure architecture. |
| microsoft/skills | ~2.4k | MIT | Agent skills standard and registry | Microsoft-backed. Canonical skill packaging format used by Copilot, Claude Code, etc. |

### Agent Catalog (operating-model/agent-catalog)

| Repo | Stars | Licence | Sub-problem | Why it stays |
|---|---|---|---|---|
| IBM/mcp-context-forge | ~3.8k | Apache-2.0 | AI gateway with unified discovery (MCP + A2A + REST/gRPC) | IBM-backed. Unifies diverse protocols behind single endpoint with centralized guardrails. |

---

## Cut list (with reasons)

| Repo | Reason for cut |
|---|---|
| MemoriLabs/Memori | **Duplicate.** Overlaps with mem0 (universal memory layer). mem0 is stronger (56k vs 14k stars, better benchmarks). |
| agentscope-ai/ReMe | **Duplicate.** Compaction sub-problem covered better by SimpleMem's three-stage pipeline which includes compression. |
| mnemon-dev/mnemon | **Low signal.** Stars unknown ("Check repo"), recently launched with no established traction. |
| superfly/contextwindow | **Low signal.** Stars and licence unknown. Narrow Go library without demonstrated adoption. |
| Compresr-ai/Context-Gateway | **Low signal.** ~450 stars. Interesting concept but thin compared to kept alternatives. |
| kayba-ai/agentic-context-engine | **Duplicate.** Overlaps with ace-agent/ace (self-improving context). ACE has stronger backing (SambaNova/Stanford/Berkeley). |
| swadhinbiswas/contexa | **Low signal.** Stars and licence unknown. Academic paper implementation without community traction. |
| letta-ai/learning-sdk | **Low signal.** Stars and licence unknown. From Letta/MemGPT ecosystem but unproven standalone. |
| neosigmaai/auto-harness | **Low signal.** Stars and licence unknown. Interesting concept but no demonstrated adoption. |
| agentsmd/agents.md | **Official spec, not a reference repo.** This is a standard/specification, not a clonable implementation. Concept pages already reference standards directly. |
| Agent-Field/agentfield | **Low signal.** Stars unknown, recently launched. Too many concerns (queues + discovery + identity + audit) for a focused reference. |
| wshobson/agents | **Low signal.** Stars unknown. Internal/personal marketplace, not a reference implementation. |
| microsoft/graphrag | **Duplicate.** LightRAG beats it on accuracy at lower cost, with more stars (35k vs 33k). One GraphRAG reference is sufficient. |
| FalkorDB/GraphRAG-SDK | **Low signal.** ~500 stars. Vendor-specific (FalkorDB), not generalizable as a learning artifact. |
| HKUDS/RAG-Anything | **Duplicate.** Merged into LightRAG (already kept). Standalone repo is redundant. |
| Ayanami0730/arag | **Low signal.** ~200 stars. Agentic RAG pattern is covered by the five-patterns repos. |
| alibaba/zvec | **Too general.** Embedded vector database solving 10 problems, not a focused RAG reference. |
| ekimetrics/adaptive-chunking | **Duplicate.** Chunking covered by chonkie (more practical, production-grade). Adaptive-chunking is a paper implementation. |
| shantanu-deshmukh/chunktuner | **Duplicate.** Chunking benchmark overlaps with chonkie's multi-strategy approach. Lower stars (~100). |
| NovaSearch-Team/RAG-Retrieval | **Too general.** Full retrieval training pipeline (embedding + ColBERT + reranker) -- too broad for a focused reference. |
| FlagOpen/FlagEmbedding | **Too general.** 11k stars but it is a model family + training code + eval scripts. Not a focused, clonable learning artifact. |
| StarlightSearch/EmbedAnything | **Duplicate.** Embedding pipeline overlaps with the code indexing repos (Rust + tree-sitter). |
| QwenLM/Qwen3-VL-Embedding | **Model release, not a reference repo.** Model weights + inference code, not an architectural pattern to learn from. |
| GraphRAG-Bench/GraphRAG-Benchmark | **Benchmark, not implementation.** Doesn't teach a pattern; evaluates existing systems. |
| IBM/mt-rag-benchmark | **Benchmark, not implementation.** Dataset + eval scripts, no implementation to learn from. |
| lumina-ai-inc/chunkr | **Non-permissive licence.** AGPL-3.0. Cut per licence criteria. |
| NirDiamant/RAG_Techniques | **Non-permissive licence.** Custom non-commercial licence. Cut per licence criteria. |
| abhigyanpatwari/GitNexus | **Non-permissive licence.** PolyForm Noncommercial 1.0.0. Cut per licence criteria. |
| CodeGraphContext/CodeGraphContext | **Duplicate.** Overlaps with code-review-graph (same pattern: graph + MCP for code context). code-review-graph is stronger (17k vs 3.4k stars). |
| cocoindex-io/cocoindex-code | **Duplicate.** Same org as cocoindex (already kept). The parent is the stronger reference. |
| flupkede/codesearch | **Duplicate/low signal.** ~200 stars. Hybrid code search covered by probe (Rust, zero-setup, higher signal). |
| JaredStewart/coderlm | **Duplicate.** Symbol-level server overlaps with code-review-graph and codebase-memory-mcp. Lower stars (~270). |
| cortexkit/aft | **Duplicate.** AST toolkit overlaps with probe and codebase-memory-mcp. ~300 stars, less focused. |
| defendend/Claude-ast-index-search | **Duplicate.** AST index CLI overlaps with probe. ~350 stars, less mature. |
| kapillamba4/code-memory | **Duplicate.** Local vector search overlaps with codebase-memory-mcp. ~200 stars. |
| shinpr/mcp-local-rag | **Duplicate.** Local RAG for code overlaps with codebase-memory-mcp and probe. ~270 stars. |
| modelcontextprotocol/python-sdk | **Official SDK.** Cut per criteria #3 -- standards/SDKs, not reference implementations. Concept pages already reference them. |
| modelcontextprotocol/typescript-sdk | **Official SDK.** Same as above. |
| modelcontextprotocol/registry | **Official spec/infrastructure.** Registry service, not a reference implementation to clone and learn from. |
| modelcontextprotocol/ext-apps | **Official spec.** Extension specification, not a reference repo. |
| github/github-mcp-server | **Platform integration, not a pattern.** GitHub-specific, not generalizable as a learning artifact. |
| microsoft/mcp-gateway | **Duplicate.** K8s MCP gateway overlaps with docker/mcp-gateway. Docker's is more universally applicable. |
| kriasoft/mcp-client-gen | **Low signal.** ~200 stars. Thin wrapper/generator, not enough original logic. |
| openai/openai-agents-python | **Mega-framework.** 26.5k stars but it is a full agent SDK/platform, not a focused reference. Practitioners use it as a dependency, not a learning artifact. |
| lastmile-ai/openai-agents-mcp | **Thin wrapper.** Drop-in bridge between two SDKs. No original architecture to learn from. |
| a2aproject/A2A | **Official spec.** Cut per criteria #3 -- protocol specification, not a reference repo. |
| a2aproject/a2a-python | **Official SDK.** Cut per criteria #3. |
| a2aproject/a2a-samples | **Official spec samples.** Ancillary to the spec itself. Concept pages already reference A2A directly. |
| langchain-ai/langgraph-swarm-py | **Mega-framework ecosystem.** Part of LangGraph, a platform. Practitioners use LangGraph as a dependency. |
| langchain-ai/langgraph-supervisor-py | **Mega-framework ecosystem.** Same as above. |
| awslabs/cli-agent-orchestrator | **Low signal.** ~600 stars. AWS-specific, overlaps with agent-squad (same org, stronger repo). |
| microsoft/agent-framework | **Mega-framework.** Enterprise multi-agent platform (successor to AutoGen + Semantic Kernel). Practitioners use it as a dependency. |
| crewAIInc/crewAI | **Mega-framework.** 51k stars. Platform, not a reference implementation. Cut per criteria #1. |
| mastra-ai/mastra | **Mega-framework.** 21k stars. Full TypeScript agent framework from Gatsby team. Platform, not focused reference. |
| VoltAgent/voltagent | **Mega-framework.** 49k stars. End-to-end agent engineering platform. Practitioners use it, not clone to learn. |
| diagrid-labs/building-effective-dapr-agents | **Duplicate.** Five patterns covered by anthropics/claude-cookbooks and lastmile-ai/mcp-agent. Dapr adds infra complexity without teaching new patterns. |
| evalstate/fast-agent | **Duplicate.** MCP + patterns covered by mcp-agent (stronger, more focused). |
| anmoldhingra1/agent-flow | **Low signal.** ~100 stars. Routing patterns covered by the five-patterns repos. |
| dapr/dapr-agents | **Mega-framework.** Dapr-based agent workflow engine. Infrastructure-heavy, not a focused learning artifact. |
| confident-ai/deepeval | **Duplicate.** promptfoo covers the same ground (LLM eval) with broader adoption (21k vs 12.8k) and CI/CD focus. |
| langfuse/langfuse (evals) | **Too large/general.** Full platform (tracing + evals + prompt management). Not clonable as a focused learning artifact. |
| arize-ai/phoenix | **Non-permissive licence.** Elastic License 2.0 (ELv2). Not truly open-source. Cut per criteria #4. |
| openlit/openlit | **Duplicate.** OTel LLM observability covered by openllmetry (stronger signal, 7k stars, pure OTel focus). |
| agentops-ai/agentops | **Duplicate.** Agent monitoring overlaps with openllmetry + promptfoo. Less focused (monitoring + cost + failure in one). |
| databricks/judges | **Duplicate.** LLM-as-judge covered by promptfoo's eval capabilities. ~200 stars. |
| langchain-ai/openevals | **Duplicate.** Readymade evaluators covered by promptfoo. ~500 stars, LangChain ecosystem-specific. |
| comet-ml/opik | **Duplicate.** Self-hostable eval platform overlaps with promptfoo + openllmetry. Less focused. |
| traceloop/opentelemetry-mcp-server | **Low signal.** ~200 stars. Novel but too niche (MCP + OTel intersection) for a reference repo. |
| Azure/agentops | **Low signal.** ~150 stars. Azure-specific enterprise toolkit. |
| ZJU-REAL/EasySteer | **Duplicate.** Steering vectors covered by repeng (more established, practical GGUF workflow). |
| AlphaLab-USTC/AlphaSteer | **Low signal.** ~100 stars. Research paper implementation. Covered conceptually by repeng + wisent. |
| microsoft/llm-steer-instruct | **Low signal.** ~100 stars. Narrow instruction-following steering. Covered by repeng. |
| UKGovernmentBEIS/vllm-lens | **Low signal.** ~50 stars. Too niche (activation extraction in vLLM). |
| corl-team/steering-reasoning | **Low signal.** ~80 stars. Active research, not a reference implementation practitioners would clone. |
| youtube/static-constraint-decoding | **Low signal.** ~50 stars. Hardware-specific (GPU/TPU JAX), very narrow. |
| guidance-ai/llguidance | **Duplicate.** Constrained decoding covered by xgrammar (default backend for major engines) and outlines (Python-native). |
| maltelandgren/orate | **Low signal.** ~50 stars. Hackathon project, too experimental for a reference repo. |
| ulab-uiuc/AgentDebug | **Duplicate.** Agent failure diagnosis covered by AgentRx (Microsoft, stronger backing, better benchmark). |
| tazsat0512/reivo-guard | **Duplicate.** Runtime guardrails covered by agent-governance-toolkit (Microsoft, broader OWASP coverage). |
| dipampaul17/AgentGuard | **Duplicate.** Token spend tracking covered by tokencost + agent-governance-toolkit. ~80 stars. |
| VictorVVedtion/ouro-loop | **Low signal.** ~50 stars. Bounded autonomy loop is interesting but too thin for a reference. |
| FareedKhan-dev/all-agentic-architectures | **Too general.** 17+ architectures in one repo. Solves 10 problems instead of 1. Not clonable as a focused artifact. |
| ComposioHQ/agent-orchestrator | **Duplicate/mega-framework.** Fleet manager overlaps with background-agents (more focused on AFK pattern). Licence unknown. |
| aws-samples/sample-autonomous-cloud-coding-agents | **Low signal.** Stars unknown. AWS-specific reference architecture, not universally applicable. |
| aeneassoft/aeneassoft | **Low signal.** Stars and licence unknown. Patent pending. Circuit breaker is a narrow sub-problem. |
| nwiizo/ccswarm | **Low signal.** Stars unknown. Rust Claude Code coordinator, too niche. |
| Aureliolo/synthorg | **Low signal.** Stars and licence unknown. Pre-production, unproven. |
| aiming-lab/AutoHarness (in afk-autonomous) | **Duplicate.** Already considered under Harness Engineering. ~257 stars, covered by parlant and OpenHarness. |
| aniketkarne/ClaudeNightsWatch | **Duplicate.** AFK daemon overlaps with background-agents. ~336 stars, less mature. |
| vercel-labs/open-agents | **Low signal.** ~4.5k stars but licence unknown. Vercel-specific template, not a general pattern. |
| agentscope-ai/HiClaw | **Low signal.** Stars and licence unknown. K8s-native multi-agent OS, too infrastructure-heavy. |
| HKUDS/OpenSpace | **Low signal.** Stars and licence unknown. Self-evolving agents is speculative, unproven concept. |
| shep-ai/shep | **Duplicate.** Parallel worktree runner overlaps with background-agents and oh-my-claudecode. Stars unknown. |
| Infisical/agent-vault | **Duplicate.** Agent credential vault overlaps with joelhooks/agent-secrets (MIT, cleaner scope). Stars unknown. |
| jayminwest/overstory | **Low signal.** Stars and licence unknown. Multi-runtime orchestrator, too niche. |
| cloudflare/agents | **Duplicate.** Cloudflare patterns overlap with claude-cookbooks and mcp-agent. Vendor-specific. |
| intellectronica/building-effective-agents-with-pydantic-ai | **Duplicate.** Five patterns ported to Pydantic AI. claude-cookbooks is the canonical reference. |
| ThibautMelen/agentic-workflow-patterns | **Low signal.** Stars and licence unknown. Mermaid diagrams of patterns already covered. |
| openziti/llm-gateway | **Low signal.** 62 stars. Zero-trust is interesting but too niche and low adoption. |
| voidmind-io/voidllm | **Non-permissive licence.** Proprietary (NOASSERTION flagged as proprietary). Cut per criteria #4. |
| Mirrowel/LLM-API-Key-Proxy | **Thin wrapper.** API translator with no original logic beyond proxying. Licence NOASSERTION. |
| microsoft/best-route-llm | **Low signal.** ~55 stars. Research paper implementation, covered by LLMRouter (same sub-problem, more stars). |
| luckyPipewrench/pipelock | **Duplicate.** Agent firewall overlaps with llm-guard (more comprehensive, MIT). ~636 stars. |
| meta-llama/PurpleLlama (LlamaFirewall) | **Non-permissive licence.** Custom licence (NOASSERTION). Also a subdirectory of a larger repo, not standalone. |
| Pantheon-Security/medusa | **Non-permissive licence.** AGPL-3.0. Cut per criteria #4. |
| agent-sandbox/agent-sandbox | **Low signal.** ~127 stars. Agent sandbox covered by kubernetes-sigs/agent-sandbox (K8s SIG, stronger backing). |
| seojoonkim/prompt-guard | **Duplicate.** Prompt injection defense covered by llm-guard (broader, more established). ~160 stars. |
| mag123c/toktrack | **Low signal.** ~145 stars. CLI cost tracker -- useful but not a reference implementation to learn from. |
| he-yufeng/TokenTracker | **Low signal.** 37 stars. Below threshold, no notable backing. |
| BerriAI/litellm | **Mega-framework.** 48k stars. Full gateway platform. Practitioners use it as a dependency, not clone to learn FinOps patterns. |
| langfuse/langfuse (finops) | **Duplicate.** Already cut from evals. Too large/general for a FinOps reference. |
| Hiepler/EuConform | **Low signal.** ~117 stars. EU AI Act tool, niche. Governance concept page can reference without repo study. |
| GenAI-Gurus/awesome-eu-ai-act | **Low signal.** 47 stars. Curated link list, not an implementation. |
| kubeflow/hub | **Too general.** Model registry for Kubernetes ML pipelines. Not AI-agent-specific. |
| softaworks/agent-toolkit | **Duplicate.** Skills covered by addyosmani/agent-skills (45k stars, stronger signal). |
| zouyingcao/agentskills-mcp | **Low signal.** 16 stars. Too thin to qualify as a reference. |
| VoltAgent/awesome-agent-skills | **Curated list, not implementation.** A directory of links, not a clonable implementation to learn from. |
| agentregistry-dev/agentregistry | **Duplicate.** Agent catalog covered by IBM/mcp-context-forge (IBM-backed, broader protocol support). ~319 stars. |
| agentic-community/mcp-gateway-registry | **Duplicate.** Gateway registry overlaps with IBM/mcp-context-forge and docker/mcp-gateway. ~663 stars. |
| awslabs/a2a-agent-registry-on-aws | **Low signal.** 22 stars. AWS-specific reference architecture, too niche. |
| JulianPedro/backstage-dev-ai-hub | **Low signal.** 6 stars. Very early stage, not a viable reference. |
