# Context & Memory + Harness Engineering — Reference Repo Research

Research completed: 2026-05-24
Agent cluster: Context & Memory + Harness Engineering
Concepts covered: Memory & Context, Harness Engineering

---

## Memory & Context

### Universal memory layer (semantic + episodic + factual)

**Repo:** `mem0ai/mem0`
**URL:** https://github.com/mem0ai/mem0
**Created/Updated:** 2026-05-14 (cli-v0.2.5)
**Stars:** ~56,000
**Licence:** Apache-2.0
**What it solves:** Universal, model-agnostic memory layer for AI agents with multi-signal retrieval (semantic, BM25 keyword, entity matching) and temporal reasoning.
**Why it qualifies:** 91.6 on LoCoMo benchmark (+20 over previous SOTA), 94.8 on LongMemEval (+27 over previous best); massive adoption, actively maintained.
**Proposed tensaicompl name:** `tensai-universal-memory-layer`
**Links to concept page:** craft/memory-context

---

### Agent-native memory infrastructure (structured state from execution traces)

**Repo:** `MemoriLabs/Memori`
**URL:** https://github.com/MemoriLabs/Memori
**Created/Updated:** 2026-04 (active, 14k+ stars)
**Stars:** ~14,000
**Licence:** Open source (check repo for specific licence)
**What it solves:** LLM-agnostic layer that automatically captures structured memory from agent execution and conversation — including tool calls, decisions, and outcomes — with no changes to agent code or prompts required.
**Why it qualifies:** 81.95% on LoCoMo with only 1,294 tokens per query (4.97% of full-context footprint); outperformed Zep, LangMem, and Mem0 on context-cost efficiency.
**Proposed tensaicompl name:** `tensai-agent-native-memory`
**Links to concept page:** craft/memory-context

---

### Persistent memory for coding agents (MCP-based)

**Repo:** `rohitg00/agentmemory`
**URL:** https://github.com/rohitg00/agentmemory
**Created/Updated:** 2026-05-13 (trending #1 on GitHub)
**Stars:** ~9,400 (was ~5,800 mid-May, growing rapidly)
**Licence:** Apache-2.0
**What it solves:** Silently captures what your coding agent does, compresses it into searchable memory, and injects the right context when the next session starts; 53 MCP tools, 6 resources, 3 prompts.
**Why it qualifies:** 95.2% R@5 and 98.6% R@10 on LongMemEval-S; works with Claude Code, Cursor, Codex CLI, Gemini CLI, Hermes, and 16+ agent clients; hit GitHub Trending #1.
**Proposed tensaicompl name:** `tensai-coding-agent-memory`
**Links to concept page:** craft/memory-context

---

### Temporal knowledge graph memory

**Repo:** `getzep/graphiti`
**URL:** https://github.com/getzep/graphiti
**Created/Updated:** 2026-05-14 (v0.28.1)
**Stars:** ~23,000
**Licence:** Apache-2.0
**What it solves:** Temporal context graph engine that autonomously builds knowledge graphs from unstructured and structured data, handling changing relationships while preserving full temporal history via bi-temporal model (event time + ingestion time).
**Why it qualifies:** 94.8% on DMR benchmark; production-grade, used in CRM agents, compliance systems, and healthcare workflows; 2.3k forks, 2,612 commits.
**Proposed tensaicompl name:** `tensai-temporal-knowledge-graph`
**Links to concept page:** craft/memory-context

---

### Memory management with compaction (conversation offloading)

**Repo:** `agentscope-ai/ReMe`
**URL:** https://github.com/agentscope-ai/ReMe
**Created/Updated:** 2026-03-04 (1.8k stars)
**Stars:** ~1,800
**Licence:** Apache-2.0
**What it solves:** Memory management kit that combines file and vector stores to compact conversation history, persist important facts, and provide hybrid semantic retrieval — with MessageOffloadOp implementing compact, compress, and auto modes to handle arbitrarily long conversations.
**Why it qualifies:** Purpose-built compaction/offloading system (not a mega-framework); three working summary modes directly address the context window limit problem; part of the AgentScope ecosystem.
**Proposed tensaicompl name:** `tensai-memory-compaction`
**Links to concept page:** craft/memory-context

---

### Lifelong memory with semantic compression (text + multimodal)

**Repo:** `aiming-lab/SimpleMem`
**URL:** https://github.com/aiming-lab/SimpleMem
**Created/Updated:** 2026-05-15 (v3.0 EvolveMem with self-evolving memory)
**Stars:** ~3,300
**Licence:** MIT
**What it solves:** Three-stage pipeline (Semantic Structured Compression, Recursive Memory Consolidation, Adaptive Query-Aware Retrieval) that stores semantically lossless memory at high information density; supports text, image, audio, and video.
**Why it qualifies:** New SOTA on LoCoMo (F1=0.613, +47%) and Mem-Gallery (F1=0.810, +51%); v3.0 added self-evolving memory via AutoResearch; multimodal support since v2.0.
**Proposed tensaicompl name:** `tensai-lifelong-memory`
**Links to concept page:** craft/memory-context

---

### Zettelkasten-based agentic memory (dynamic self-organization)

**Repo:** `agiresearch/A-mem`
**URL:** https://github.com/agiresearch/A-mem
**Created/Updated:** 2025-12-12 (NeurIPS 2025 paper)
**Stars:** ~973
**Licence:** MIT
**What it solves:** Dynamic memory structuring based on Zettelkasten principles — intelligent indexing and linking of memories via ChromaDB without relying on static, predetermined memory operations; agent-driven decision making for memory organization.
**Why it qualifies:** NeurIPS 2025 paper; superior results on 6 foundation models over SOTA baselines; spawned ecosystem (a-mem-mcp-server for IDE integration); clean research implementation good for learning.
**Proposed tensaicompl name:** `tensai-zettelkasten-memory`
**Links to concept page:** craft/memory-context

---

### Graph-based persistent memory for CLI agents

**Repo:** `mnemon-dev/mnemon`
**URL:** https://github.com/mnemon-dev/mnemon
**Created/Updated:** 2026 (v0.1.0)
**Stars:** Check repo (recently launched)
**Licence:** MIT
**What it solves:** Four-graph knowledge store (temporal, entity, causal, semantic) with intent-aware recall, importance decay, and automatic deduplication; single Go binary works with Claude Code, OpenClaw, and any CLI agent.
**Why it qualifies:** Focused on exactly one problem (persistent cross-session memory for CLI agents); graph-based design isomorphic to LLM attention; Homebrew installable; clean Go codebase.
**Proposed tensaicompl name:** `tensai-graph-cli-memory`
**Links to concept page:** craft/memory-context

---

### Context window management library (Go)

**Repo:** `superfly/contextwindow`
**URL:** https://github.com/superfly/contextwindow
**Created/Updated:** 2026
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Low-level Go library for managing LLM conversations — supports tool calls, token usage tracking, summary-based compression, SQLite persistence, and multi-context agents (2, 10, or 100 concurrent conversations).
**Why it qualifies:** From Fly.io (superfly), a reputable infrastructure company; solves a narrow, well-defined problem (context window primitives in Go); designed for building agent loops, not consuming them.
**Proposed tensaicompl name:** `tensai-context-window-go`
**Links to concept page:** craft/memory-context

---

### Context compaction proxy (sits between agent and LLM)

**Repo:** `Compresr-ai/Context-Gateway`
**URL:** https://github.com/Compresr-ai/Context-Gateway
**Created/Updated:** 2026-02-10 (created), 12 releases in 5 weeks
**Stars:** ~450
**Licence:** Apache-2.0
**What it solves:** Agentic proxy that sits between your AI agent and the LLM API, providing background summarization of old turns, instant compaction when context gets tight, and up to 20x compression with signal preservation.
**Why it qualifies:** Solves a very specific sub-problem (context compaction as infrastructure, not in-agent logic); supports Anthropic, OpenAI, Gemini, Bedrock, Ollama, OpenRouter; Go codebase, production-oriented.
**Proposed tensaicompl name:** `tensai-context-compaction-proxy`
**Links to concept page:** craft/memory-context

---

### Agentic Context Engineering (self-improving context via reflection)

**Repo:** `ace-agent/ace`
**URL:** https://github.com/ace-agent/ace
**Created/Updated:** 2026-04 (open-sourced by SambaNova + Stanford + UC Berkeley)
**Stars:** ~1,026
**Licence:** Check repo (research release)
**What it solves:** Framework where LLMs self-improve by treating contexts as evolving playbooks — Generator produces reasoning trajectories, Reflector separates evaluation from curation, Curator converts lessons into structured delta updates with de-duplication and pruning.
**Why it qualifies:** +10.6% average gain on agent tasks, +8.6% on domain-specific benchmarks; backed by SambaNova/Stanford/Berkeley; clean modular architecture (Generator, Reflector, Curator).
**Proposed tensaicompl name:** `tensai-agentic-context-engineering`
**Links to concept page:** craft/memory-context

---

### Agentic context engine (learn from experience)

**Repo:** `kayba-ai/agentic-context-engine`
**URL:** https://github.com/kayba-ai/agentic-context-engine
**Created/Updated:** 2026 (active)
**Stars:** ~2,000
**Licence:** MIT
**What it solves:** Persistent learning loop that makes agents learn from experience and improve over time — adds experiential context to agent prompts based on past runs.
**Why it qualifies:** 2k stars with focused scope; MIT licensed; hosted solution available at kayba.ai demonstrates production readiness.
**Proposed tensaicompl name:** `tensai-experiential-context`
**Links to concept page:** craft/memory-context

---

### Git-inspired versioned context management

**Repo:** `swadhinbiswas/contexa`
**URL:** https://github.com/swadhinbiswas/contexa
**Created/Updated:** 2026 (based on arXiv:2508.00031)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Implements Git Context Controller (GCC) — COMMIT, BRANCH, MERGE, and CONTEXT operations over a persistent versioned memory workspace; all 7 language implementations (Python, TypeScript, Rust, Go, Zig, Lua, Elixir) produce the same interoperable .GCC/ on-disk format.
**Why it qualifies:** Agents equipped with GCC achieved 48.00% on SWE-Bench-Lite (SOTA at time of paper); human-readable Markdown+YAML format; multi-language interoperability is unique.
**Proposed tensaicompl name:** `tensai-versioned-context`
**Links to concept page:** craft/memory-context

---

### Continual learning SDK (drop-in interceptor for any LLM API)

**Repo:** `letta-ai/learning-sdk`
**URL:** https://github.com/letta-ai/learning-sdk
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo (Letta ecosystem)
**What it solves:** Drop-in SDK that intercepts existing LLM API calls (OpenAI, Anthropic, Gemini), stores conversations on a Letta Server, and retrieves relevant context to enrich prompts — adds continual learning and long-term memory without rewriting agent code.
**Why it qualifies:** From the Letta/MemGPT team (21.7k stars on main repo); interceptor pattern means zero code changes to add memory; Python and TypeScript examples.
**Proposed tensaicompl name:** `tensai-continual-learning-sdk`
**Links to concept page:** craft/memory-context

---

## Harness Engineering

### Open agent harness with personal agent

**Repo:** `HKUDS/OpenHarness`
**URL:** https://github.com/HKUDS/OpenHarness
**Created/Updated:** 2026-04-18 (v0.1.7)
**Stars:** ~12,600
**Licence:** MIT
**What it solves:** Multi-agent prototype harness for task delegation and background execution — provides the complete infrastructure wrapping an LLM to make it a functional agent (hands, eyes, memory, safety boundaries).
**Why it qualifies:** 12.6k stars; from HKU Data Science lab; MIT licensed; grew from 6.1k to 12.6k in 2 months; clean reference for the Agent = Model + Harness pattern.
**Proposed tensaicompl name:** `tensai-open-agent-harness`
**Links to concept page:** craft/harness-engineering

---

### Interaction control harness (customer-facing agents)

**Repo:** `emcie-co/parlant`
**URL:** https://github.com/emcie-co/parlant
**Created/Updated:** 2026-05 (v3.0 release)
**Stars:** ~18,100
**Licence:** Apache-2.0
**What it solves:** Interaction control harness optimized for controlled, consistent, and predictable LLM interactions — developers define rules, knowledge, and tools once while the engine narrows context in real-time to what is immediately relevant.
**Why it qualifies:** 18.1k stars; treats misalignment as a core design problem; v3.0 is production-ready for B2C/B2B; context engineering focused (right context, no more, no less).
**Proposed tensaicompl name:** `tensai-interaction-harness`
**Links to concept page:** craft/harness-engineering

---

### Automated harness engineering (governance framework)

**Repo:** `aiming-lab/AutoHarness`
**URL:** https://github.com/aiming-lab/AutoHarness
**Created/Updated:** 2026-04-01 (v0.1.0)
**Stars:** ~257
**Licence:** MIT
**What it solves:** Lightweight governance framework for AI agents with three-tier pipeline mode (Core/Standard/Enhanced), 6-step governance pipeline, risk pattern matching, YAML constitution support, and trace-based diagnostics.
**Why it qualifies:** Directly addresses the "Agent = Model + Harness" principle; the governance pipeline is a clean reference implementation; MIT licensed.
**Proposed tensaicompl name:** `tensai-auto-harness`
**Links to concept page:** craft/harness-engineering

---

### Self-improving harness (failure mining + regression gating)

**Repo:** `neosigmaai/auto-harness`
**URL:** https://github.com/neosigmaai/auto-harness
**Created/Updated:** 2026-04
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Bring-your-own-agent system that automatically mines failures from benchmark runs, optimizes the harness through iterative edits, and gates changes against regressions.
**Why it qualifies:** Unique focus on the harness optimization loop (not the agent itself); directly implements the "self-improving agentic system" pattern; April 2026 release.
**Proposed tensaicompl name:** `tensai-self-improving-harness`
**Links to concept page:** craft/harness-engineering

---

### AGENTS.md standard and generator

**Repo:** `agentsmd/agents.md`
**URL:** https://github.com/agentsmd/agents.md
**Created/Updated:** 2026 (active, adopted by 60,000+ repos)
**Stars:** Check repo
**Licence:** Check repo (Linux Foundation / Agentic AI Foundation)
**What it solves:** Open standard for guiding coding agents — a README for agents that provides a dedicated, predictable place for context and instructions; adopted by OpenAI Codex, Cursor, GitHub Copilot, and Google Jules.
**Why it qualifies:** 60,000+ repository adoption; stewarded by Linux Foundation; the canonical standard for agent harness configuration files.
**Proposed tensaicompl name:** `tensai-agents-md-standard`
**Links to concept page:** craft/harness-engineering

---

### Agent infrastructure control plane

**Repo:** `Agent-Field/agentfield`
**URL:** https://github.com/Agent-Field/agentfield
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Apache-2.0
**What it solves:** Open-source control plane for building, running, and scaling AI agents like APIs and microservices — queues, async webhooks, discovery, identity, and audit in one binary with a thin Python SDK.
**Why it qualifies:** Treats agent infrastructure like microservice infrastructure (queues, discovery, identity, audit); `af init my-agent --defaults` scaffold; ecosystem includes SWE-AF, Deep Research, CloudSecurity.
**Proposed tensaicompl name:** `tensai-agent-control-plane`
**Links to concept page:** craft/harness-engineering

---

### Harness engineering tutorial (from 0 to 1)

**Repo:** `walkinglabs/learn-harness-engineering`
**URL:** https://github.com/walkinglabs/learn-harness-engineering
**Created/Updated:** 2026-05-23
**Stars:** ~4,400
**Licence:** Check repo
**What it solves:** Comprehensive beginner tutorial with 12 conceptual units and 6 progressive hands-on projects teaching how to build a reliable agentic working environment from scratch.
**Why it qualifies:** 4.4k stars; 631 forks; actively maintained (updated May 23, 2026); educational focus makes it ideal reference material for the harness engineering concept page.
**Proposed tensaicompl name:** `tensai-harness-tutorial`
**Links to concept page:** craft/harness-engineering

---

### Multi-harness plugin marketplace

**Repo:** `wshobson/agents`
**URL:** https://github.com/wshobson/agents
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Multi-harness agentic plugin marketplace shipping 82 plugins, 191 agents, 155 skills, and 102 commands from a single Markdown source to Claude Code, Codex CLI, Cursor, OpenCode, and Gemini CLI with harness-native artifact generation.
**Why it qualifies:** Demonstrates the cross-harness portability pattern (one source, five harnesses); real-world skill/plugin ecosystem; proves the AGENTS.md/CLAUDE.md/cursor-rules unification thesis.
**Proposed tensaicompl name:** `tensai-multi-harness-marketplace`
**Links to concept page:** craft/harness-engineering

---

## Summary

### Memory & Context: 13 qualifying repos found

| Sub-problem | Top repo | Stars |
|---|---|---|
| Universal memory layer | mem0ai/mem0 | ~56k |
| Agent-native memory infra | MemoriLabs/Memori | ~14k |
| Coding agent memory (MCP) | rohitg00/agentmemory | ~9.4k |
| Temporal knowledge graph | getzep/graphiti | ~23k |
| Memory compaction | agentscope-ai/ReMe | ~1.8k |
| Lifelong memory (multimodal) | aiming-lab/SimpleMem | ~3.3k |
| Zettelkasten memory | agiresearch/A-mem | ~973 |
| Graph CLI memory | mnemon-dev/mnemon | New |
| Context window primitives | superfly/contextwindow | New |
| Context compaction proxy | Compresr-ai/Context-Gateway | ~450 |
| Self-improving context | ace-agent/ace | ~1k |
| Experiential context | kayba-ai/agentic-context-engine | ~2k |
| Versioned context (git-style) | swadhinbiswas/contexa | New |
| Continual learning SDK | letta-ai/learning-sdk | New |

### Harness Engineering: 8 qualifying repos found

| Sub-problem | Top repo | Stars |
|---|---|---|
| Open agent harness | HKUDS/OpenHarness | ~12.6k |
| Interaction control harness | emcie-co/parlant | ~18.1k |
| Automated harness governance | aiming-lab/AutoHarness | ~257 |
| Self-improving harness | neosigmaai/auto-harness | New |
| AGENTS.md standard | agentsmd/agents.md | 60k+ adoption |
| Agent control plane | Agent-Field/agentfield | New |
| Harness tutorial | walkinglabs/learn-harness-engineering | ~4.4k |
| Multi-harness marketplace | wshobson/agents | Active |

### Recommended top picks per concept (highest signal, best clonable value)

**Memory & Context:**
1. `mem0ai/mem0` — The benchmark leader; every practitioner should understand its architecture
2. `getzep/graphiti` — Best-in-class temporal knowledge graph; solves a specific hard problem
3. `rohitg00/agentmemory` — Fastest-growing; practical MCP-based approach for coding agents
4. `agentscope-ai/ReMe` — Best focused compaction implementation
5. `ace-agent/ace` — Research-backed self-improving context (SambaNova/Stanford)

**Harness Engineering:**
1. `emcie-co/parlant` — Most mature interaction control harness
2. `HKUDS/OpenHarness` — Best reference for the full harness pattern
3. `walkinglabs/learn-harness-engineering` — Best educational resource
4. `agentsmd/agents.md` — The standard itself (60k+ repos)
