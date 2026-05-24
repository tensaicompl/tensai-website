# Tools & Standards — Reference Repo Research

Agent cluster: Tools & MCP, Multi-Agent & A2A, Five Patterns

---

## Tools & MCP

### Official MCP reference servers (canonical examples for building MCP servers)

**Repo:** `modelcontextprotocol/servers`
**URL:** https://github.com/modelcontextprotocol/servers
**Created/Updated:** 2026-05-24
**Stars:** 86,100
**Licence:** MIT
**What it solves:** Reference implementations for MCP servers covering filesystem, search, databases, and more — the canonical "how to build an MCP server" collection maintained by the MCP steering group.
**Why it qualifies:** 86k+ stars, official reference from the protocol authors, actively maintained, covers every primitive (tools, resources, prompts).
**Proposed tensaicompl name:** `tensai-mcp-reference-servers`
**Links to concept page:** craft/tools-mcp

---

### Official MCP Python SDK (build MCP servers and clients in Python)

**Repo:** `modelcontextprotocol/python-sdk`
**URL:** https://github.com/modelcontextprotocol/python-sdk
**Created/Updated:** 2026-05-08 (v1.27.1)
**Stars:** 23,000
**Licence:** MIT
**What it solves:** The official Python SDK for building MCP servers and clients, with full protocol support including tools, resources, prompts, sampling, and OAuth 2.1 authentication.
**Why it qualifies:** 23k stars, official SDK from the protocol organization, production-grade with Pydantic validation and async-first design.
**Proposed tensaicompl name:** `tensai-mcp-python-sdk`
**Links to concept page:** craft/tools-mcp

---

### Official MCP TypeScript SDK (build MCP servers and clients in TypeScript)

**Repo:** `modelcontextprotocol/typescript-sdk`
**URL:** https://github.com/modelcontextprotocol/typescript-sdk
**Created/Updated:** 2026-05-20
**Stars:** 6,000
**Licence:** MIT
**What it solves:** The official TypeScript SDK for MCP servers and clients, supporting Standard Schema validation (Zod v4, Valibot, ArkType), Express/Hono/Fastify middleware adapters, and full protocol compliance.
**Why it qualifies:** 6k stars, official SDK, v2 release imminent (Q1-Q2 2026), ecosystem backbone for TypeScript MCP server development.
**Proposed tensaicompl name:** `tensai-mcp-typescript-sdk`
**Links to concept page:** craft/tools-mcp

---

### High-level TypeScript framework for building MCP servers fast

**Repo:** `punkpeye/fastmcp`
**URL:** https://github.com/punkpeye/fastmcp
**Created/Updated:** 2026-04-24 (v4.0.1)
**Stars:** 3,100
**Licence:** MIT
**What it solves:** A batteries-included TypeScript framework for building MCP servers with built-in OAuth proxy, edge runtime support (Cloudflare Workers), multiple transport options, and a developer-friendly API.
**Why it qualifies:** 3.1k stars, actively maintained, fills the gap between raw SDK and production deployment with OAuth, DCR, and edge support.
**Proposed tensaicompl name:** `tensai-mcp-fastmcp`
**Links to concept page:** craft/tools-mcp

---

### MCP community registry (server discovery and distribution)

**Repo:** `modelcontextprotocol/registry`
**URL:** https://github.com/modelcontextprotocol/registry
**Created/Updated:** 2026-05-20
**Stars:** 6,200
**Licence:** MIT
**What it solves:** A community-driven registry service for MCP servers — like an app store for discovering, publishing, and integrating MCP servers with API freeze at v0.1 for stable integration.
**Why it qualifies:** 6.2k stars, official registry from the MCP organization, becoming the canonical discovery mechanism as README-based listings are deprecated.
**Proposed tensaicompl name:** `tensai-mcp-registry`
**Links to concept page:** craft/tools-mcp

---

### MCP Apps protocol (interactive UIs served by MCP servers)

**Repo:** `modelcontextprotocol/ext-apps`
**URL:** https://github.com/modelcontextprotocol/ext-apps
**Created/Updated:** 2026-05-15
**Stars:** ~500
**Licence:** MIT
**What it solves:** An official MCP extension that enables servers to deliver interactive user interfaces (charts, forms, canvases) embedded in AI chatbots via the ui:// URI scheme, with bidirectional JSON-RPC communication and mandatory iframe sandboxing.
**Why it qualifies:** Official extension from the MCP org, stable spec (2026-01-26), includes working examples in React/Vue/Svelte/Preact/Solid/Vanilla JS — solves a real gap in tool output beyond text.
**Proposed tensaicompl name:** `tensai-mcp-apps-ui`
**Links to concept page:** craft/tools-mcp

---

### MCP Toolbox for Databases (Google's production MCP server for databases)

**Repo:** `googleapis/mcp-toolbox`
**URL:** https://github.com/googleapis/mcp-toolbox
**Created/Updated:** 2026-05-20
**Stars:** 15,300
**Licence:** Apache-2.0
**What it solves:** An open-source MCP server for databases that handles connection pooling, authentication, and prebuilt generic tools (list_tables, execute_sql) — connecting AI agents directly to enterprise databases.
**Why it qualifies:** 15.3k stars, backed by Google, production-grade with SDKs in Python/Go/JS/Java, used in enterprise AI agent deployments.
**Proposed tensaicompl name:** `tensai-mcp-database-toolbox`
**Links to concept page:** craft/tools-mcp

---

### GitHub's official MCP server (GitHub platform as MCP tools)

**Repo:** `github/github-mcp-server`
**URL:** https://github.com/github/github-mcp-server
**Created/Updated:** 2026-05-22
**Stars:** ~25,000
**Licence:** MIT
**What it solves:** Connects AI tools to GitHub's platform via MCP, exposing repos, issues, PRs, code analysis, and workflow automation as MCP tools — the canonical example of a platform-as-MCP-server.
**Why it qualifies:** Official GitHub server, massive adoption, demonstrates real-world MCP server architecture for a complex API surface.
**Proposed tensaicompl name:** `tensai-mcp-github-server`
**Links to concept page:** craft/tools-mcp

---

### Docker MCP Gateway (containerized MCP server management)

**Repo:** `docker/mcp-gateway`
**URL:** https://github.com/docker/mcp-gateway
**Created/Updated:** 2026-05-20
**Stars:** 1,300
**Licence:** Apache-2.0
**What it solves:** A Docker CLI plugin and gateway for running MCP servers in containers with catalog management, secrets management, OAuth integration, and server lifecycle control.
**Why it qualifies:** Official Docker project, solves the deployment/ops problem for MCP servers with containerization, actively maintained (v0.41.0).
**Proposed tensaicompl name:** `tensai-mcp-docker-gateway`
**Links to concept page:** craft/tools-mcp

---

### Microsoft MCP Gateway (Kubernetes-native MCP reverse proxy)

**Repo:** `microsoft/mcp-gateway`
**URL:** https://github.com/microsoft/mcp-gateway
**Created/Updated:** 2026-05-18
**Stars:** ~800
**Licence:** MIT
**What it solves:** A reverse proxy and management layer for MCP servers in Kubernetes environments, providing session-aware stateful routing, authorization, tool registration with dynamic routing, and lifecycle management.
**Why it qualifies:** Official Microsoft project, enterprise-grade Kubernetes-native deployment, fills the infrastructure gap for scaling MCP servers.
**Proposed tensaicompl name:** `tensai-mcp-k8s-gateway`
**Links to concept page:** craft/tools-mcp

---

### MCP-Use (fullstack MCP framework for agent-MCP integration)

**Repo:** `mcp-use/mcp-use`
**URL:** https://github.com/mcp-use/mcp-use
**Created/Updated:** 2026-05-20
**Stars:** 10,000
**Licence:** MIT
**What it solves:** A fullstack framework for connecting any LLM to any MCP server, with SDKs in Python and TypeScript, an interactive inspector for debugging, and MCP Apps support for building interactive widgets across Claude/ChatGPT.
**Why it qualifies:** 10k stars, dual-language SDK, the de facto "connect agent to MCP" library for developers who want MCP without vendor lock-in.
**Proposed tensaicompl name:** `tensai-mcp-use-framework`
**Links to concept page:** craft/tools-mcp

---

### MCP client generator (type-safe TypeScript SDKs from MCP servers)

**Repo:** `kriasoft/mcp-client-gen`
**URL:** https://github.com/kriasoft/mcp-client-gen
**Created/Updated:** 2026-05-15
**Stars:** ~200
**Licence:** MIT
**What it solves:** Generates type-safe TypeScript client SDKs from any MCP server automatically, with zero-config OAuth 2.1 (PKCE) authentication and tree-shakable imports.
**Why it qualifies:** Solves the MCP client ergonomics problem — turns any MCP server into a typed SDK in seconds, practical dev-tooling value.
**Proposed tensaicompl name:** `tensai-mcp-client-gen`
**Links to concept page:** craft/tools-mcp

---

### OpenAI Agents SDK (function tools, handoffs, MCP integration)

**Repo:** `openai/openai-agents-python`
**URL:** https://github.com/openai/openai-agents-python
**Created/Updated:** 2026-05-22
**Stars:** 26,500
**Licence:** MIT
**What it solves:** A lightweight, provider-agnostic framework for multi-agent workflows with @function_tool decorators, MCP server integration, guardrails, sessions, built-in tracing, and sandbox agents for isolated execution.
**Why it qualifies:** 26.5k stars, OpenAI official, production evolution of Swarm, supports 100+ LLMs, sets the standard for tool/handoff design patterns.
**Proposed tensaicompl name:** `tensai-openai-agents-sdk`
**Links to concept page:** craft/tools-mcp

---

### OpenAI Agents MCP bridge (MCP extension for OpenAI Agents SDK)

**Repo:** `lastmile-ai/openai-agents-mcp`
**URL:** https://github.com/lastmile-ai/openai-agents-mcp
**Created/Updated:** 2026-04-10
**Stars:** ~500
**Licence:** Apache-2.0
**What it solves:** A drop-in extension that adds MCP server support to the OpenAI Agents SDK — replace one import and agents automatically aggregate tools from configured MCP servers alongside native tools.
**Why it qualifies:** Bridges the two dominant ecosystems (OpenAI Agents SDK and MCP), minimal API surface, practical integration pattern.
**Proposed tensaicompl name:** `tensai-openai-agents-mcp-bridge`
**Links to concept page:** craft/tools-mcp

---

## Multi-Agent & A2A

### A2A protocol specification (Google's Agent-to-Agent standard)

**Repo:** `a2aproject/A2A`
**URL:** https://github.com/a2aproject/A2A
**Created/Updated:** 2026-05-19
**Stars:** 24,000
**Licence:** Apache-2.0
**What it solves:** The canonical specification and documentation for the Agent2Agent (A2A) protocol — enabling opaque agentic applications to discover capabilities, negotiate interaction modalities, and collaborate on long-running tasks without exposing internal state.
**Why it qualifies:** 24k stars, contributed by Google to Linux Foundation, the industry standard for agent-to-agent interoperability alongside MCP.
**Proposed tensaicompl name:** `tensai-a2a-protocol-spec`
**Links to concept page:** craft/multi-agent

---

### A2A Python SDK (official Python implementation)

**Repo:** `a2aproject/a2a-python`
**URL:** https://github.com/a2aproject/a2a-python
**Created/Updated:** 2026-05-22
**Stars:** ~1,200
**Licence:** Apache-2.0
**What it solves:** The official Python SDK implementing A2A Protocol Specification 1.0, with async-first design, extensible transport/database backends, and compatibility mode for v0.3.
**Why it qualifies:** Official SDK from the A2A project, production-ready async Python, 438+ commits of active development.
**Proposed tensaicompl name:** `tensai-a2a-python-sdk`
**Links to concept page:** craft/multi-agent

---

### A2A protocol samples (reference implementations across languages)

**Repo:** `a2aproject/a2a-samples`
**URL:** https://github.com/a2aproject/a2a-samples
**Created/Updated:** 2026-05-20
**Stars:** 1,600
**Licence:** Apache-2.0
**What it solves:** Working sample A2A implementations in Python, Go, C#, and Java demonstrating AgentCard discovery, task delegation, media negotiation, and cross-framework agent interop.
**Why it qualifies:** 1.6k stars, official reference samples, essential learning resource for A2A protocol mechanics.
**Proposed tensaicompl name:** `tensai-a2a-samples`
**Links to concept page:** craft/multi-agent

---

### OpenAI Swarm (educational multi-agent orchestration with handoffs)

**Repo:** `openai/swarm`
**URL:** https://github.com/openai/swarm
**Created/Updated:** 2025-12-01
**Stars:** 20,000
**Licence:** MIT
**What it solves:** An educational framework demonstrating lightweight multi-agent orchestration through two primitives: Agents (instructions + tools) and handoffs (transfer conversation to another Agent) — now superseded by OpenAI Agents SDK but remains the clearest teaching tool.
**Why it qualifies:** 20k stars, OpenAI official, the reference implementation that defined the "agent handoff" pattern, still the best starting point for learning multi-agent coordination.
**Proposed tensaicompl name:** `tensai-openai-swarm`
**Links to concept page:** craft/multi-agent

---

### LangGraph Swarm (swarm-style multi-agent with dynamic handoffs)

**Repo:** `langchain-ai/langgraph-swarm-py`
**URL:** https://github.com/langchain-ai/langgraph-swarm-py
**Created/Updated:** 2026-05-18
**Stars:** 1,500
**Licence:** MIT
**What it solves:** A Python library for creating swarm-style multi-agent systems using LangGraph, where agents dynamically hand off control to one another based on specializations — production-ready evolution of the Swarm pattern with LangGraph's state management.
**Why it qualifies:** 1.5k stars, LangChain official, builds on proven LangGraph infrastructure, demonstrates the swarm topology pattern for production use.
**Proposed tensaicompl name:** `tensai-langgraph-swarm`
**Links to concept page:** craft/multi-agent

---

### LangGraph Supervisor (hierarchical multi-agent coordination)

**Repo:** `langchain-ai/langgraph-supervisor-py`
**URL:** https://github.com/langchain-ai/langgraph-supervisor-py
**Created/Updated:** 2026-05-18
**Stars:** ~800
**Licence:** MIT
**What it solves:** A Python library for creating hierarchical multi-agent systems where a central supervisor agent controls all communication flow and task delegation to specialized worker agents.
**Why it qualifies:** LangChain official, clean implementation of the supervisor topology, pairs with langgraph-swarm to demonstrate both major multi-agent patterns.
**Proposed tensaicompl name:** `tensai-langgraph-supervisor`
**Links to concept page:** craft/multi-agent

---

### AWS CLI Agent Orchestrator (multi-agent MCP orchestration for coding CLIs)

**Repo:** `awslabs/cli-agent-orchestrator`
**URL:** https://github.com/awslabs/cli-agent-orchestrator
**Created/Updated:** 2026-05-20 (v2.0)
**Stars:** ~600
**Licence:** Apache-2.0
**What it solves:** Multi-agent orchestration framework for AI coding CLIs (Claude Code, Kiro, Codex, Gemini CLI, etc.) using supervisor-worker pattern over MCP, with three primitives: handoff (sync), assign (async), and send_message (inbox delivery between agents).
**Why it qualifies:** AWS Labs official, supports 7 coding CLI providers, demonstrates cross-provider agent orchestration with practical MCP-based coordination patterns.
**Proposed tensaicompl name:** `tensai-aws-cli-agent-orchestrator`
**Links to concept page:** craft/multi-agent

---

### Agent Squad (AWS multi-agent classifier-based orchestration)

**Repo:** `awslabs/agent-squad`
**URL:** https://github.com/awslabs/agent-squad
**Created/Updated:** 2026-05-15
**Stars:** 7,600
**Licence:** Apache-2.0
**What it solves:** A flexible framework for orchestrating multiple AI agents using intelligent classifier-based routing to handle complex conversations, with support for both TypeScript and Python.
**Why it qualifies:** 7.6k stars, AWS Labs official (formerly Multi-Agent Orchestrator), demonstrates intent-based routing to specialized agents — a clean pattern for production multi-agent systems.
**Proposed tensaicompl name:** `tensai-aws-agent-squad`
**Links to concept page:** craft/multi-agent

---

### Microsoft Agent Framework (enterprise multi-agent with A2A + MCP)

**Repo:** `microsoft/agent-framework`
**URL:** https://github.com/microsoft/agent-framework
**Created/Updated:** 2026-05-20 (v1.0 GA)
**Stars:** ~8,000
**Licence:** MIT
**What it solves:** Enterprise-grade framework for building, orchestrating, and deploying AI agents and multi-agent workflows, with native A2A and MCP support, multi-provider model support, and cross-runtime interoperability (Python + .NET).
**Why it qualifies:** Microsoft official, v1.0 production release (April 2026), successor to AutoGen + Semantic Kernel merger, enterprise adoption at scale.
**Proposed tensaicompl name:** `tensai-microsoft-agent-framework`
**Links to concept page:** craft/multi-agent

---

### CrewAI (role-based multi-agent collaboration)

**Repo:** `crewAIInc/crewAI`
**URL:** https://github.com/crewaiinc/crewai
**Created/Updated:** 2026-05-22
**Stars:** 51,400
**Licence:** MIT
**What it solves:** A Python framework for orchestrating role-playing, autonomous AI agents with CrewAI Flows for event-driven task orchestration, process types (sequential, hierarchical, consensual), and built-in memory/planning.
**Why it qualifies:** 51.4k stars, 1500+ company adoptions, 100k+ developers certified, the most popular pure multi-agent framework by stars.
**Proposed tensaicompl name:** `tensai-crewai`
**Links to concept page:** craft/multi-agent

---

### Mastra (TypeScript agent framework with MCP and workflows)

**Repo:** `mastra-ai/mastra`
**URL:** https://github.com/mastra-ai/mastra
**Created/Updated:** 2026-05-22
**Stars:** 21,000
**Licence:** Apache-2.0
**What it solves:** An opinionated TypeScript agent framework (from the Gatsby team) with RAG, observability, MCP server authoring, 40+ model providers, and a visual workflow builder — the TypeScript counterpart to Python-centric frameworks.
**Why it qualifies:** 21k stars, strong TypeScript-first design, MCP native, visual workflow builder differentiates it for rapid prototyping.
**Proposed tensaicompl name:** `tensai-mastra`
**Links to concept page:** craft/multi-agent

---

### VoltAgent (TypeScript agent engineering platform)

**Repo:** `VoltAgent/voltagent`
**URL:** https://github.com/VoltAgent/voltagent
**Created/Updated:** 2026-05-22
**Stars:** 49,000
**Licence:** MIT
**What it solves:** An end-to-end TypeScript AI agent engineering platform with memory, RAG, guardrails, tools, MCP, voice, workflows, supervisor/sub-agent orchestration, and an observability console (VoltOps).
**Why it qualifies:** 49k stars, comprehensive TypeScript platform with production observability, demonstrates the full agent engineering stack.
**Proposed tensaicompl name:** `tensai-voltagent`
**Links to concept page:** craft/multi-agent

---

### Open Multi-Agent (TypeScript goal-to-DAG orchestration)

**Repo:** `open-multi-agent/open-multi-agent`
**URL:** https://github.com/open-multi-agent/open-multi-agent
**Created/Updated:** 2026-04-01
**Stars:** 5,500
**Licence:** MIT
**What it solves:** A TypeScript-native multi-agent orchestration engine that decomposes goals into task DAGs at runtime, auto-parallelizes independent tasks, and supports multi-model teams (Claude + GPT + Gemini in one runTeam() call) with only 3 runtime dependencies.
**Why it qualifies:** 5.5k stars since April 2026 launch, minimal dependency footprint, demonstrates the orchestrator-workers pattern with multi-model support and MCP integration.
**Proposed tensaicompl name:** `tensai-open-multi-agent`
**Links to concept page:** craft/multi-agent

---

## Five Patterns

### Anthropic's agent workflow patterns (reference implementations)

**Repo:** `anthropics/claude-cookbooks` (patterns/agents/)
**URL:** https://github.com/anthropics/claude-cookbooks/tree/main/patterns/agents
**Created/Updated:** 2026-05-15
**Stars:** ~5,000 (whole cookbook)
**Licence:** MIT
**What it solves:** Minimal reference implementations of all five agent workflow patterns from the "Building Effective Agents" paper: prompt chaining, parallelization, routing, orchestrator-workers, and evaluator-optimizer — plus an autonomous agent loop.
**Why it qualifies:** Anthropic official, the canonical implementation of the Five Patterns, Jupyter notebooks with clear explanations — the single best learning resource for agent workflow patterns.
**Proposed tensaicompl name:** `tensai-anthropic-agent-patterns`
**Links to concept page:** craft/five-patterns

---

### MCP-Agent (all five patterns composed with MCP)

**Repo:** `lastmile-ai/mcp-agent`
**URL:** https://github.com/lastmile-ai/mcp-agent
**Created/Updated:** 2026-01-25
**Stars:** 7,900
**Licence:** Apache-2.0
**What it solves:** The only framework purpose-built for MCP that implements all five Building Effective Agents patterns (router, parallel, orchestrator, evaluator-optimizer, map-reduce) as composable primitives, with Temporal-backed durability, structured logging, and cloud deploys.
**Why it qualifies:** 7.9k stars, implements every canonical pattern with MCP integration, closer to an agent pattern library than a framework — ideal for learning patterns in practice.
**Proposed tensaicompl name:** `tensai-mcp-agent-patterns`
**Links to concept page:** craft/five-patterns

---

### Building Effective Dapr Agents (five patterns with durable workflows)

**Repo:** `diagrid-labs/building-effective-dapr-agents`
**URL:** https://github.com/diagrid-labs/building-effective-dapr-agents
**Created/Updated:** 2026-05-15
**Stars:** ~300
**Licence:** Apache-2.0
**What it solves:** Implements all patterns from Anthropic's "Building Effective Agents" paper using Dapr Agents, demonstrating how durable workflows, pub/sub messaging, and state management bring production reliability to agent patterns like parallelization and orchestrator-workers.
**Why it qualifies:** Clean pattern implementations with production-grade infrastructure (Dapr workflows survive restarts), shows what the five patterns look like with real distributed systems concerns.
**Proposed tensaicompl name:** `tensai-dapr-agent-patterns`
**Links to concept page:** craft/five-patterns

---

### Fast-Agent (code, build, and evaluate agents with MCP skills)

**Repo:** `evalstate/fast-agent`
**URL:** https://github.com/evalstate/fast-agent
**Created/Updated:** 2026-05-20
**Stars:** ~1,500
**Licence:** Apache-2.0
**What it solves:** A Python framework for creating multimodal agents and workflows with the first complete end-to-end tested MCP feature support (including Sampling and Elicitations), interactive chat with individual workflow components, and OAuth-enabled remote MCP server connections.
**Why it qualifies:** Focuses on workflow composition and evaluation, complete MCP support including advanced features, practical "chat with your workflow" debugging approach.
**Proposed tensaicompl name:** `tensai-fast-agent`
**Links to concept page:** craft/five-patterns

---

### Agent-Flow (lightweight orchestration with routing patterns)

**Repo:** `anmoldhingra1/agent-flow`
**URL:** https://github.com/anmoldhingra1/agent-flow
**Created/Updated:** 2026-04-20
**Stars:** ~100
**Licence:** MIT
**What it solves:** A minimal multi-agent orchestration layer for LLM workflows with sequential/parallel execution, four router types (ConditionalRouter, ContentRouter, FallbackRouter, RoundRobinRouter), immutable state snapshots, and event hooks.
**Why it qualifies:** Extremely focused on the routing and chaining patterns with minimal dependencies, demonstrates production concerns (retries, state management) without framework bloat — good teaching example.
**Proposed tensaicompl name:** `tensai-agent-flow-routing`
**Links to concept page:** craft/five-patterns

---

### LLMRouter (intelligent model routing based on task complexity)

**Repo:** `ulab-uiuc/LLMRouter`
**URL:** https://github.com/ulab-uiuc/LLMRouter
**Created/Updated:** 2026-05-20
**Stars:** 1,000+
**Licence:** Apache-2.0
**What it solves:** An open-source library for intelligently routing LLM queries to optimal models based on task complexity, cost, and performance, supporting 16+ routing models across four categories (single-round, multi-round, agentic, personalized routers).
**Why it qualifies:** Research-backed (UIUC), crossed 1k stars in January 2026, solves the routing pattern at the model selection level — a specific, practical sub-problem.
**Proposed tensaicompl name:** `tensai-llm-router`
**Links to concept page:** craft/five-patterns

---

### Dapr Agents (production-resilient agent workflow engine)

**Repo:** `dapr/dapr-agents`
**URL:** https://github.com/dapr/dapr-agents
**Created/Updated:** 2026-05-20
**Stars:** 670
**Licence:** Apache-2.0
**What it solves:** A developer framework for building production-grade resilient AI agent systems with durable workflow orchestration, virtual actor pattern for stateful agents, pub/sub for event-driven coordination, and built-in observability — built on battle-tested Dapr infrastructure.
**Why it qualifies:** Official Dapr project (CNCF), demonstrates how to make agent workflow patterns production-resilient with distributed systems primitives (state, pub/sub, workflows).
**Proposed tensaicompl name:** `tensai-dapr-agents`
**Links to concept page:** craft/five-patterns
