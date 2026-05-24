# AFK & Autonomous Agents + Agents vs Workflows -- Reference Repo Research

Research completed: 2026-05-24
Agent cluster: AFK & Autonomous Agents + Agents vs Workflows
Concepts covered: AFK & Autonomous Agents, Agents vs Workflows

---

## AFK & Autonomous Agents

### Autonomous agent loop (ReAct pattern) -- all 17+ agentic architectures in one repo

**Repo:** `FareedKhan-dev/all-agentic-architectures`
**URL:** https://github.com/FareedKhan-dev/all-agentic-architectures
**Created/Updated:** 2026 (actively maintained)
**Stars:** ~3,100
**Licence:** Check repo (not displayed in search)
**What it solves:** Self-contained Jupyter notebook implementations of 17+ agentic architectures including ReAct, Plan-Execute-Verify, Blackboard, Tree of Thoughts, and Meta Controller -- each pattern isolated and runnable.
**Why it qualifies:** Practitioner-friendly reference with 3.1k stars and 559 forks; solves the "which loop pattern should I use?" question with working code for each architecture.
**Proposed tensaicompl name:** `tensai-agentic-architectures`
**Links to concept page:** craft/afk-autonomous

---

### Agent fleet manager with parallel coding agents and CI fix loop

**Repo:** `ComposioHQ/agent-orchestrator`
**URL:** https://github.com/ComposioHQ/agent-orchestrator
**Created/Updated:** 2026-05 (active releases)
**Stars:** ~7,000
**Licence:** Check repo
**What it solves:** Plans tasks, spawns parallel coding agents, and autonomously handles CI fixes, merge conflicts, and code reviews -- a full fleet manager for coding agents.
**Why it qualifies:** 7k stars with active competitive landscape discussions (vs T3 Code, OpenAI Symphony, Cmux); production-tested orchestrator backed by Composio.
**Proposed tensaicompl name:** `tensai-agent-fleet-orchestrator`
**Links to concept page:** craft/afk-autonomous

---

### Background agent runner -- open-source self-hosted coding agents

**Repo:** `ColeMurray/background-agents`
**URL:** https://github.com/ColeMurray/background-agents
**Created/Updated:** 2026 (active releases)
**Stars:** ~1,500
**Licence:** Check repo
**What it solves:** Self-hosted background coding agent system (inspired by Ramp's Inspect) with web UI, Slack/GitHub/Linear integration, parallel sub-tasks in separate sandboxes, cron scheduling, and multiplayer sessions.
**Why it qualifies:** Purpose-built for "AFK" coding -- agents work in background while you do other things; 1.5k stars with active development on Cloudflare Workers + Modal.
**Proposed tensaicompl name:** `tensai-background-agents`
**Links to concept page:** craft/afk-autonomous

---

### Background agent runner -- cloud-native on AWS

**Repo:** `aws-samples/sample-autonomous-cloud-coding-agents`
**URL:** https://github.com/aws-samples/sample-autonomous-cloud-coding-agents
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** MIT-0 (standard aws-samples licence)
**What it solves:** Reference architecture for autonomous background coding agents on AWS -- clones repos, writes code, runs tests, opens PRs via isolated cloud runtimes with built-in orchestration, observability, and governance.
**Why it qualifies:** AWS-backed reference implementation showing production patterns for autonomous cloud coding; well-documented infrastructure-as-code approach.
**Proposed tensaicompl name:** `tensai-cloud-coding-agents`
**Links to concept page:** craft/afk-autonomous

---

### Kill-switch and safety mechanism for autonomous agents

**Repo:** `microsoft/agent-governance-toolkit`
**URL:** https://github.com/microsoft/agent-governance-toolkit
**Created/Updated:** 2026-05 (active, covers OWASP ASI 2026)
**Stars:** ~1,500
**Licence:** MIT
**What it solves:** Policy enforcement, zero-trust identity, execution sandboxing, kill switch, and reliability engineering for autonomous AI agents -- covers all 10 OWASP Agentic Top 10 controls with automated certification CLI.
**Why it qualifies:** Microsoft-backed, MIT-licensed, production-grade governance; automated OWASP ASI 2026 certification attestation on every deployment; 1.5k stars.
**Proposed tensaicompl name:** `tensai-agent-governance`
**Links to concept page:** craft/afk-autonomous

---

### Circuit breaker -- safe pause and resume layer for agents

**Repo:** `aeneassoft/aeneassoft`
**URL:** https://github.com/aeneassoft/aeneassoft
**Created/Updated:** 2026 (active, EU AI Act Article 12 ready)
**Stars:** Check repo
**Licence:** Check repo (patent pending on architecture)
**What it solves:** In-process circuit breaker that blocks runaway agents in RAM and saves state via on_block hook -- CLOSED to OPEN to PAUSED to HALF_OPEN state machine; framework-agnostic, works at HTTP transport layer below every AI framework.
**Why it qualifies:** Solves a narrow but critical sub-problem (pause/resume without killing) that no other tool addresses; 2-line integration; supports OpenAI, Anthropic, Gemini, Mistral, Groq, Cohere automatically.
**Proposed tensaicompl name:** `tensai-agent-circuit-breaker`
**Links to concept page:** craft/afk-autonomous

---

### Agent credential management with kill-switch and session leases

**Repo:** `joelhooks/agent-secrets`
**URL:** https://github.com/joelhooks/agent-secrets
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** MIT
**What it solves:** Portable credential management for AI agents with age encryption, session-scoped leases (TTL-bounded), audit logging, rotation hooks, and a kill-switch with heartbeat -- prevents credential exfiltration from compromised agents.
**Why it qualifies:** Narrow, well-designed solution to the "agents need secrets but shouldn't hold them forever" problem; CLI + daemon architecture with Unix socket JSON-RPC; MIT licensed.
**Proposed tensaicompl name:** `tensai-agent-secrets`
**Links to concept page:** craft/afk-autonomous

---

### Multi-agent orchestration with git worktree isolation (Claude Code)

**Repo:** `nwiizo/ccswarm`
**URL:** https://github.com/nwiizo/ccswarm
**Created/Updated:** 2026 (active, Rust)
**Stars:** Check repo
**Licence:** MIT
**What it solves:** Coordinates specialized AI agents (frontend, backend, DevOps, QA) using Claude Code CLI with git worktree isolation for parallel development -- type-state pattern for compile-time state validation, channel-based orchestration.
**Why it qualifies:** Rust implementation with strong type safety guarantees; solves the specific problem of coordinating multiple Claude Code instances without merge conflicts.
**Proposed tensaicompl name:** `tensai-agent-swarm-worktree`
**Links to concept page:** craft/afk-autonomous

---

### Teams-first multi-agent orchestration for Claude Code

**Repo:** `Yeachan-Heo/oh-my-claudecode`
**URL:** https://github.com/Yeachan-Heo/oh-my-claudecode
**Created/Updated:** 2026 (active, TypeScript)
**Stars:** ~8,500
**Licence:** Check repo
**What it solves:** Teams-first multi-agent orchestration system for Claude Code -- installs as a marketplace plugin/skill and coordinates multiple AI agents in team-based workflows.
**Why it qualifies:** 8.5k stars with 589 forks; dominant Claude Code multi-agent plugin; easy install path via slash commands.
**Proposed tensaicompl name:** `tensai-claude-agent-teams`
**Links to concept page:** craft/afk-autonomous

---

### Configurable autonomy levels -- synthetic organization framework

**Repo:** `Aureliolo/synthorg`
**URL:** https://github.com/Aureliolo/ai-company
**Created/Updated:** 2026 (active development, pre-production)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Framework for building synthetic organizations with autonomous AI agents -- each agent has a role (CEO, developer, designer, QA), persistent memory, progressive trust (4 strategies), configurable autonomy levels, and approval timeout policies.
**Why it qualifies:** Directly implements "configurable autonomy levels" as a first-class concept with 4 trust strategies; SecOps agent with fail-closed rule engine and audit logging.
**Proposed tensaicompl name:** `tensai-synthetic-org`
**Links to concept page:** craft/afk-autonomous

---

### Autonomous agent harness with governance pipeline

**Repo:** `aiming-lab/AutoHarness`
**URL:** https://github.com/aiming-lab/AutoHarness
**Created/Updated:** 2026-04-01 (v0.1.0)
**Stars:** Check repo
**Licence:** MIT
**What it solves:** Lightweight governance framework for agents with three-tier pipeline modes (Core/Standard/Enhanced), 6-step governance pipeline, risk pattern matching, YAML constitution, trace-based diagnostics, multi-agent profiles, and session persistence with cost tracking.
**Why it qualifies:** Clean architecture (Agent = Model + Harness); 2-line integration wrapping an OpenAI client; MIT licensed; directly addresses the "how much autonomy should this agent have" question with tiered modes.
**Proposed tensaicompl name:** `tensai-agent-harness-governance`
**Links to concept page:** craft/afk-autonomous

---

### Autonomous task execution daemon for Claude Code (AFK runner)

**Repo:** `aniketkarne/ClaudeNightsWatch`
**URL:** https://github.com/aniketkarne/ClaudeNightsWatch
**Created/Updated:** 2026 (active)
**Stars:** ~336
**Licence:** Check repo
**What it solves:** Daemon that monitors Claude usage windows and autonomously executes predefined tasks -- task-based workflow defined in markdown files, safety rules in rules.md, smart timing via ccusage or fallback time-based checking.
**Why it qualifies:** Purpose-built for the "AFK agent" use case -- runs tasks during off-hours without manual intervention; practical tool from a Senior DevOps Engineer solving a real workflow problem.
**Proposed tensaicompl name:** `tensai-afk-daemon`
**Links to concept page:** craft/afk-autonomous

---

### Cloud agent template -- durable workflow on Vercel

**Repo:** `vercel-labs/open-agents`
**URL:** https://github.com/vercel-labs/open-agents
**Created/Updated:** 2026 (active)
**Stars:** ~4,500
**Licence:** Check repo
**What it solves:** Open-source template for building cloud agents that run as durable workflows on Vercel -- sandbox execution environment with filesystem, shell, git, dev servers, and preview ports.
**Why it qualifies:** 4.5k stars; Vercel-backed reference implementation; shows how to build long-running agents with durable execution guarantees on serverless infrastructure.
**Proposed tensaicompl name:** `tensai-cloud-agent-template`
**Links to concept page:** craft/afk-autonomous

---

### Collaborative multi-agent OS with human-in-the-loop via Matrix

**Repo:** `agentscope-ai/HiClaw`
**URL:** https://github.com/agentscope-ai/HiClaw
**Created/Updated:** 2026-04-24 (v1.1.0 with K8s-native control plane)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Manager-Workers runtime where multiple agents collaborate in Matrix rooms with full human visibility and intervention -- supports OpenClaw, QwenPaw, and Hermes worker runtimes simultaneously; worker credentials stay in gateway (zero-trust).
**Why it qualifies:** Production architecture with Kubernetes-native control plane (April 2026); human-in-the-loop by default; security-first design where worker agents never see real credentials.
**Proposed tensaicompl name:** `tensai-collaborative-agent-os`
**Links to concept page:** craft/afk-autonomous

---

### Self-evolving agent system -- skills that improve with every task

**Repo:** `HKUDS/OpenSpace`
**URL:** https://github.com/HKUDS/OpenSpace
**Created/Updated:** 2026 (active, community platform at open-space.cloud)
**Stars:** Check repo
**Licence:** Check repo (LICENSE file present)
**What it solves:** Self-evolving engine where agents autonomously improve their skills -- every failure becomes improvement, every success becomes optimization; collaborative skill community registry where evolved skills are shared across agents.
**Why it qualifies:** Demonstrated 4.2x more revenue than baseline agents on 50 professional tasks across 6 industries while cutting 46% of costly tokens; lineage-tracked skill evolution with full diffs.
**Proposed tensaicompl name:** `tensai-self-evolving-agents`
**Links to concept page:** craft/afk-autonomous

---

### Parallel worktree runner for Claude Code agents

**Repo:** `shep-ai/shep`
**URL:** https://github.com/shep-ai/shep
**Created/Updated:** 2026 (active, npm package)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Full lifecycle from idea to merged PR: creates worktree, runs agent, commits, pushes, opens PR; if CI fails, reads logs, fixes issue, retries (configurable) -- run 10 features in parallel, each in its own git worktree.
**Why it qualifies:** Zero-install via `npx @shepai/cli`; solves the complete "AFK feature shipping" loop including CI fix retry; practical tool for solo developers delegating to agents.
**Proposed tensaicompl name:** `tensai-parallel-feature-shipper`
**Links to concept page:** craft/afk-autonomous

---

### Agent credential vault -- zero-trust proxy by Infisical

**Repo:** `Infisical/agent-vault`
**URL:** https://github.com/Infisical/agent-vault
**Created/Updated:** 2026 (active development)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** HTTP credential proxy that sits between agents and APIs -- eliminates credential exfiltration risk with brokered access, egress filtering per agent, and request logging for monitoring agent behavior.
**Why it qualifies:** Built by Infisical (established secrets management company with 20k+ stars on main product); purpose-built for agent safety; addresses prompt injection credential theft.
**Proposed tensaicompl name:** `tensai-agent-vault`
**Links to concept page:** craft/afk-autonomous

---

### Multi-agent runtime orchestrator with pluggable adapters

**Repo:** `jayminwest/overstory`
**URL:** https://github.com/jayminwest/overstory
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Runtime-agnostic multi-agent orchestration with AgentRuntime interface -- pluggable adapters for Claude Code, Pi, and more; SQLite mail system for inter-agent messaging; FIFO merge queue with 4-tier conflict resolution.
**Why it qualifies:** Clean architecture separating orchestration from runtime; solves the "coordinate agents across different harnesses" problem; part of a broader ecosystem (Mulch, Seeds, Canopy).
**Proposed tensaicompl name:** `tensai-multi-runtime-orchestrator`
**Links to concept page:** craft/afk-autonomous

---

## Agents vs Workflows

### All Anthropic "Building Effective Agents" patterns implemented with MCP

**Repo:** `lastmile-ai/mcp-agent`
**URL:** https://github.com/lastmile-ai/mcp-agent
**Created/Updated:** 2026 (active development, temporal branch)
**Stars:** ~7,900
**Licence:** Check repo (LICENSE file present)
**What it solves:** Connects LLMs to MCP servers in composable patterns -- implements every pattern from Anthropic's "Building Effective Agents" paper (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer) plus the OpenAI Swarm pattern.
**Why it qualifies:** 7.9k stars; canonical reference for "when to use a workflow pattern vs full agent"; directly maps Anthropic's decision framework to runnable code with MCP integration.
**Proposed tensaicompl name:** `tensai-agent-workflow-patterns`
**Links to concept page:** craft/agents-vs-workflows

---

### Anthropic agent patterns implemented on Cloudflare Workers

**Repo:** `cloudflare/agents`
**URL:** https://github.com/cloudflare/agents
**Created/Updated:** 2026-01 (active, 30+ examples)
**Stars:** Check repo (starter has 1.1k)
**Licence:** Check repo
**What it solves:** SDK for building stateful AI agents on Cloudflare Workers with guides implementing all five Anthropic agentic patterns (Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, Evaluator-Optimizer) -- shows when each pattern is appropriate.
**Why it qualifies:** Cloudflare-backed; 30+ self-contained demos; shows the agent-vs-workflow decision in practice with production deployment on edge infrastructure.
**Proposed tensaicompl name:** `tensai-cf-agent-patterns`
**Links to concept page:** craft/agents-vs-workflows

---

### Building Effective Agents patterns with Dapr (durable workflows)

**Repo:** `diagrid-labs/building-effective-dapr-agents`
**URL:** https://github.com/diagrid-labs/building-effective-dapr-agents
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Implements Anthropic's "Building Effective Agents" patterns using the Dapr Agents framework -- showcases the Stateful LLM pattern (persistence + reliability + workflow extending the Augmented LLM) and Parallelization pattern with durable execution.
**Why it qualifies:** Demonstrates the workflow-to-agent spectrum using Dapr's durable execution primitives (workflow orchestration, pub/sub messaging, state management); shows how workflow infrastructure enables agent reliability.
**Proposed tensaicompl name:** `tensai-dapr-agent-patterns`
**Links to concept page:** craft/agents-vs-workflows

---

### Building Effective Agents patterns ported to Pydantic AI

**Repo:** `intellectronica/building-effective-agents-with-pydantic-ai`
**URL:** https://github.com/intellectronica/building-effective-agents-with-pydantic-ai
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Code examples from Anthropic's "Building Effective Agents" ported to Pydantic AI -- notebook-based implementations of basic workflows, orchestrator-workers, and other patterns using typed Python with Pydantic validation.
**Why it qualifies:** Shows the same patterns (workflow vs agent) in a different framework; Pydantic AI's type-safety makes the workflow-to-agent boundary more explicit and learnable.
**Proposed tensaicompl name:** `tensai-pydantic-agent-patterns`
**Links to concept page:** craft/agents-vs-workflows

---

### GitHub Agentic Workflows -- sample pack of workflow-as-agent patterns

**Repo:** `githubnext/agentics`
**URL:** https://github.com/githubnext/agentics
**Created/Updated:** 2026-05 (Technical Preview, active)
**Stars:** ~651
**Licence:** Check repo
**What it solves:** Sample family of reusable GitHub Agentic Workflows including Issue Triage, Repo Assist (multi-task backlog burner), AI Moderator, CI Doctor, PR Fix, Plan Command, and Repo Ask -- demonstrates how structured workflows become autonomous agents.
**Why it qualifies:** GitHub-official implementation of the "workflow that acts like an agent" pattern; shows how markdown-defined workflows with slash-command triggers bridge the gap between CI/CD and autonomous agents.
**Proposed tensaicompl name:** `tensai-github-agentic-workflows`
**Links to concept page:** craft/agents-vs-workflows

---

### Microsoft Agent Framework -- enterprise agent-vs-workflow decision framework

**Repo:** `microsoft/agent-framework`
**URL:** https://github.com/microsoft/agent-framework
**Created/Updated:** 2026-04-02 (v1.0 GA release)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Production framework with graph-based workflows supporting sequential, concurrent, handoff, and group collaboration patterns alongside full agent capabilities -- includes checkpointing, streaming, human-in-the-loop, and time-travel; successor to AutoGen.
**Why it qualifies:** Microsoft-backed v1.0 GA (April 2026); explicitly supports both workflow and agent paradigms in one framework with migration guide from AutoGen; Python and .NET.
**Proposed tensaicompl name:** `tensai-ms-agent-framework`
**Links to concept page:** craft/agents-vs-workflows

---

### 100-line LLM framework -- minimal agent/workflow core

**Repo:** `The-Pocket/PocketFlow`
**URL:** https://github.com/The-Pocket/PocketFlow
**Created/Updated:** 2026 (active, multi-language)
**Stars:** ~9,300
**Licence:** Check repo (LICENSE file present)
**What it solves:** 100-line core abstraction that captures the essential Graph structure underlying all LLM frameworks -- implements (Multi-)Agents, Workflow, and RAG patterns with zero dependencies and zero vendor lock-in.
**Why it qualifies:** 9.3k stars; proves that agents and workflows share the same core abstraction (a graph); available in Python, TypeScript, Java, C++, Go, Rust, and PHP; teaches the conceptual unity behind the agent-vs-workflow distinction.
**Proposed tensaicompl name:** `tensai-minimal-agent-workflow`
**Links to concept page:** craft/agents-vs-workflows

---

### Agentic workflow patterns -- 7 Anthropic patterns with Mermaid diagrams

**Repo:** `ThibautMelen/agentic-workflow-patterns`
**URL:** https://github.com/ThibautMelen/agentic-workflow-patterns
**Created/Updated:** 2026 (active)
**Stars:** Check repo
**Licence:** Check repo
**What it solves:** Documents and implements 7 official agentic patterns from Anthropic docs -- Subagents, Skills, Parallel Tools, Master-Clone, and more -- with Mermaid diagrams and code examples showing when to use each.
**Why it qualifies:** Focused educational resource with visual diagrams making the agent-vs-workflow decision tree concrete; complements the code-heavy implementations in other repos.
**Proposed tensaicompl name:** `tensai-agentic-pattern-guide`
**Links to concept page:** craft/agents-vs-workflows

---

## Summary

| Concept | Repos Found | Top Pick (by stars/quality) |
|---|---|---|
| Autonomous agent loops (ReAct, plan-execute) | 2 | FareedKhan-dev/all-agentic-architectures |
| Agent fleet managers | 2 | ComposioHQ/agent-orchestrator |
| Background agent runners | 3 | ColeMurray/background-agents |
| Kill-switch / safety mechanisms | 3 | microsoft/agent-governance-toolkit |
| Configurable autonomy levels | 2 | aiming-lab/AutoHarness |
| Long-running / AFK agent frameworks | 4 | Yeachan-Heo/oh-my-claudecode |
| Agent-vs-workflow patterns | 6 | lastmile-ai/mcp-agent |
| Workflow-to-agent decision frameworks | 2 | microsoft/agent-framework |
