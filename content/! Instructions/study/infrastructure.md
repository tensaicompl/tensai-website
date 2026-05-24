# TensAI Reference Repos -- Infrastructure Cluster

Research date: 2026-05-24
Concepts covered: Token Sourcing, Security Architecture, FinOps for AI, Governance & Risk, Skills, Agent Catalog

---

## Token Sourcing

### AI Gateway / LLM Proxy with Multi-Provider Routing

**Repo:** `maximhq/bifrost`
**URL:** https://github.com/maximhq/bifrost
**Created/Updated:** 2025-03-19 / pushed 2026-05-24
**Stars:** 5,185
**Licence:** Apache-2.0
**What it solves:** High-performance AI gateway in Go that unifies 23+ LLM providers behind a single OpenAI-compatible API with adaptive load balancing, failover, and semantic caching at 11us overhead per request.
**Why it qualifies:** Fastest open-source LLM gateway (50x faster than LiteLLM), actively maintained with daily pushes, strong community adoption, production-grade with cluster mode.
**Proposed tensaicompl name:** `tensai-bifrost-gateway`
**Links to concept page:** groundwork/token-sourcing

---

### Zero-Trust LLM Gateway with Semantic Routing

**Repo:** `openziti/llm-gateway`
**URL:** https://github.com/openziti/llm-gateway
**Created/Updated:** 2026-02-05 / pushed 2026-05-19
**Stars:** 62
**Licence:** Apache-2.0
**What it solves:** Zero-trust LLM gateway with identity-based access, virtual API keys, end-to-end encryption, and a three-layer semantic routing cascade (keyword heuristics, embedding similarity, LLM classifier) that auto-selects the best model.
**Why it qualifies:** Created Feb 2026, unique zero-trust angle with OpenZiti overlay network, solves the specific sub-problem of secure multi-provider routing with built-in identity governance.
**Proposed tensaicompl name:** `tensai-zerotrust-llm-gateway`
**Links to concept page:** groundwork/token-sourcing

---

### Privacy-First LLM Proxy

**Repo:** `voidmind-io/voidllm`
**URL:** https://github.com/voidmind-io/voidllm
**Created/Updated:** 2026-03-17 / pushed 2026-05-20
**Stars:** 100
**Licence:** Proprietary (NOASSERTION)
**What it solves:** Self-hosted, privacy-first LLM proxy with multi-provider routing, API key management, usage tracking, and rate limiting -- zero knowledge of user prompts by design.
**Why it qualifies:** Created March 2026, solves the specific sub-problem of privacy-preserving LLM routing for regulated environments. Written in Go for performance.
**Proposed tensaicompl name:** `tensai-private-llm-proxy`
**Links to concept page:** groundwork/token-sourcing

---

### LLM Quality-Cost Router (Academic)

**Repo:** `ulab-uiuc/LLMRouter`
**URL:** https://github.com/ulab-uiuc/LLMRouter
**Created/Updated:** 2025-10-07 / pushed 2026-05-13
**Stars:** 1,852
**Licence:** MIT
**What it solves:** Library implementing 16+ routing strategies (single-round, multi-round, agentic, personalized) that route queries to the optimal LLM based on task complexity, cost, and performance requirements.
**Why it qualifies:** Research-backed (UIUC), actively updated with RouteProfile paper (May 2026) and ComfyUI interface (Feb 2026), strong stars for a research project, MIT licensed.
**Proposed tensaicompl name:** `tensai-llm-router`
**Links to concept page:** groundwork/token-sourcing

---

### Universal LLM Gateway with Tool Compatibility

**Repo:** `Mirrowel/LLM-API-Key-Proxy`
**URL:** https://github.com/Mirrowel/LLM-API-Key-Proxy
**Created/Updated:** 2025-06-10 / pushed 2026-05-18
**Stars:** 497
**Licence:** NOASSERTION
**What it solves:** Provides OpenAI and Anthropic compatible API endpoints for all LLM providers, enabling tools like Claude Code, Opencode, and Cursor to work with any backend without code changes.
**Why it qualifies:** Solves the practical sub-problem of making existing AI tools work with non-native providers through API translation, actively maintained with regular updates.
**Proposed tensaicompl name:** `tensai-llm-api-translator`
**Links to concept page:** groundwork/token-sourcing

---

### Cost-Optimized Model Routing (Microsoft Research)

**Repo:** `microsoft/best-route-llm`
**URL:** https://github.com/microsoft/best-route-llm
**Created/Updated:** 2025-05-28 / pushed 2026-04-08
**Stars:** 55
**Licence:** MIT
**What it solves:** Selects both model and number of responses based on query difficulty, cutting costs by up to 60% with less than 1% performance drop via multi-sampling routing.
**Why it qualifies:** Microsoft Research paper-backed implementation, MIT licensed, solves the specific sub-problem of cost-aware model selection with quality guarantees.
**Proposed tensaicompl name:** `tensai-best-route`
**Links to concept page:** groundwork/token-sourcing

---

## Security Architecture

### AI Agent Firewall for MCP Security

**Repo:** `luckyPipewrench/pipelock`
**URL:** https://github.com/luckyPipewrench/pipelock
**Created/Updated:** 2026-02-08 / pushed 2026-05-24
**Stars:** 636
**Licence:** Apache-2.0
**What it solves:** Open-source AI agent firewall that processes text/event-stream responses with per-event DLP scanning, SSRF protection, and prompt injection defense while preserving token-by-token LLM chat UX.
**Why it qualifies:** Created Feb 2026, actively maintained (pushed today), solves the specific sub-problem of MCP-aware agent egress control with streaming-compatible architecture. Strong star count for a new project.
**Proposed tensaicompl name:** `tensai-agent-firewall`
**Links to concept page:** groundwork/security-architecture

---

### LLM Input/Output Security Scanner

**Repo:** `protectai/llm-guard`
**URL:** https://github.com/protectai/llm-guard
**Created/Updated:** 2023-07-27 / pushed 2025-12-15
**Stars:** 2,983
**Licence:** MIT
**What it solves:** Security toolkit with 15 input scanners and 20 output scanners covering prompt injection, PII anonymization, toxicity filtering, secrets detection, malicious URL blocking, bias detection, and data leakage prevention.
**Why it qualifies:** Most comprehensive open-source LLM I/O scanner, MIT licensed, modular scanner architecture that practitioners can clone and extend. Established project with strong adoption.
**Proposed tensaicompl name:** `tensai-llm-guard`
**Links to concept page:** groundwork/security-architecture

---

### LLM Vulnerability Scanner

**Repo:** `NVIDIA/garak`
**URL:** https://github.com/NVIDIA/garak
**Created/Updated:** 2023-05-10 / pushed 2026-05-21
**Stars:** 7,896
**Licence:** Apache-2.0
**What it solves:** Probes LLMs for hallucination, data leakage, prompt injection, misinformation, toxicity generation, jailbreaks, and other weaknesses through automated red-teaming.
**Why it qualifies:** NVIDIA-backed, most starred LLM security scanner, actively maintained with recent May 2026 pushes, Apache-2.0 licensed. The go-to offensive security tool for LLM testing.
**Proposed tensaicompl name:** `tensai-llm-vuln-scanner`
**Links to concept page:** groundwork/security-architecture

---

### Static Security Scanner for LLM Agents (OWASP Mapped)

**Repo:** `HeadyZhang/agent-audit`
**URL:** https://github.com/HeadyZhang/agent-audit
**Created/Updated:** 2026-02-03 / pushed 2026-04-18
**Stars:** 172
**Licence:** MIT
**What it solves:** Static analysis scanner with 49 rules mapped to OWASP Agentic Top 10 (2026), covering prompt injection, MCP config auditing, and taint analysis across LangChain, CrewAI, and AutoGen codebases.
**Why it qualifies:** Created Feb 2026, specifically targets the 2026 OWASP Agentic Top 10 with 94.6% recall and 87.5% precision. Solves the focused sub-problem of static agent code security scanning. MIT licensed.
**Proposed tensaicompl name:** `tensai-agent-audit`
**Links to concept page:** groundwork/security-architecture

---

### Prompt Injection Defense System

**Repo:** `seojoonkim/prompt-guard`
**URL:** https://github.com/seojoonkim/prompt-guard
**Created/Updated:** 2026-01-29 / pushed 2026-04-22
**Stars:** 160
**Licence:** MIT
**What it solves:** Advanced prompt injection defense with multi-language detection, severity scoring, pluggable detector architecture, and security auditing for AI agents.
**Why it qualifies:** Created Jan 2026, includes attack taxonomy patterns for emoji encoding, language-switch evasion, and steganographic attacks. Focused on the specific sub-problem of prompt injection detection. MIT licensed.
**Proposed tensaicompl name:** `tensai-prompt-guard`
**Links to concept page:** groundwork/security-architecture

---

### LLM Firewall Framework (Meta)

**Repo:** `meta-llama/PurpleLlama` (LlamaFirewall subdirectory)
**URL:** https://github.com/meta-llama/PurpleLlama/tree/main/LlamaFirewall
**Created/Updated:** 2023-12-06 / pushed 2026-05-23
**Stars:** 4,191 (parent repo)
**Licence:** Custom (NOASSERTION)
**What it solves:** Modular guardrail framework that orchestrates multiple security scanners as a policy engine, including PromptGuard 2 (BERT-based jailbreak detection) and CodeShield for code safety.
**Why it qualifies:** Meta-backed, actively maintained, solves the specific sub-problem of composable LLM security policy enforcement. Includes pre-trained detection models.
**Proposed tensaicompl name:** `tensai-llama-firewall`
**Links to concept page:** groundwork/security-architecture

---

### AI-First Security Scanner for AI/ML Repos

**Repo:** `Pantheon-Security/medusa`
**URL:** https://github.com/Pantheon-Security/medusa
**Created/Updated:** 2025-11-15 / pushed 2026-05-24
**Stars:** 575
**Licence:** AGPL-3.0
**What it solves:** Security scanner with 76 analyzers, 9,600+ detection rules, and repo poisoning detection specifically targeting AI/ML codebases, LLM agents, and MCP servers.
**Why it qualifies:** Actively maintained (pushed today), solves the specific sub-problem of security scanning AI/ML repositories and MCP server configurations. Note: AGPL-3.0 license may limit some use cases.
**Proposed tensaicompl name:** `tensai-ai-security-scanner`
**Links to concept page:** groundwork/security-architecture

---

### Agent Sandbox (E2B-Compatible)

**Repo:** `agent-sandbox/agent-sandbox`
**URL:** https://github.com/agent-sandbox/agent-sandbox
**Created/Updated:** 2025-12-05 / pushed 2026-05-19
**Stars:** 127
**Licence:** Apache-2.0
**What it solves:** E2B-compatible enterprise-grade sandboxes for AI agents to securely run untrusted LLM-generated code, browser use, computer use, and website deployment.
**Why it qualifies:** Actively maintained, Apache-2.0 licensed, solves the focused sub-problem of sandboxed execution for agent-generated code with E2B API compatibility.
**Proposed tensaicompl name:** `tensai-agent-sandbox`
**Links to concept page:** groundwork/security-architecture

---

### Kubernetes Agent Sandbox

**Repo:** `kubernetes-sigs/agent-sandbox`
**URL:** https://github.com/kubernetes-sigs/agent-sandbox
**Created/Updated:** 2025-08-12 / pushed 2026-05-22
**Stars:** 2,348
**Licence:** Apache-2.0
**What it solves:** Kubernetes-native management of isolated, stateful, singleton workloads for AI agent runtimes with support for gVisor and Kata Containers isolation.
**Why it qualifies:** Official Kubernetes SIG project, strong adoption (2.3K stars), actively maintained, solves the specific sub-problem of production-grade agent isolation in Kubernetes clusters. Apache-2.0 licensed.
**Proposed tensaicompl name:** `tensai-k8s-agent-sandbox`
**Links to concept page:** groundwork/security-architecture

---

## FinOps for AI

### LLM Cost Tracking CLI (Rust)

**Repo:** `mag123c/toktrack`
**URL:** https://github.com/mag123c/toktrack
**Created/Updated:** 2026-01-26 / pushed 2026-05-14
**Stars:** 145
**Licence:** MIT
**What it solves:** Ultra-fast token and cost tracker for AI coding CLIs (Claude Code, Codex CLI, Gemini CLI, OpenCode) in one dashboard, built in Rust for 1000x faster performance than alternatives.
**Why it qualifies:** Created Jan 2026, solves the specific sub-problem of tracking costs across multiple AI coding tools from the developer workstation. MIT licensed, purpose-built for developer FinOps.
**Proposed tensaicompl name:** `tensai-toktrack`
**Links to concept page:** groundwork/finops-for-ai

---

### Drop-In LLM Cost Tracker (Python)

**Repo:** `he-yufeng/TokenTracker`
**URL:** https://github.com/he-yufeng/TokenTracker
**Created/Updated:** 2026-03-05 / pushed 2026-05-12
**Stars:** 37
**Licence:** MIT
**What it solves:** One-line-change drop-in cost tracker that wraps OpenAI, OpenRouter, Azure, and Ollama clients to automatically track every API call with cost attribution.
**Why it qualifies:** Created March 2026, extremely focused on the specific sub-problem of zero-config cost instrumentation. MIT licensed. Good reference for how to build cost tracking middleware.
**Proposed tensaicompl name:** `tensai-token-tracker`
**Links to concept page:** groundwork/finops-for-ai

---

### Token Price Database

**Repo:** `AgentOps-AI/tokencost`
**URL:** https://github.com/AgentOps-AI/tokencost
**Created/Updated:** 2023-12-03 / pushed 2025-09-05
**Stars:** 1,979
**Licence:** MIT
**What it solves:** Provides easy token price estimates for 400+ LLMs, serving as a maintained pricing database that other cost tracking tools can build on.
**Why it qualifies:** Most starred dedicated LLM pricing library, MIT licensed, maintained pricing data for 400+ models. Solves the foundational sub-problem of accurate cost calculation.
**Proposed tensaicompl name:** `tensai-token-cost-db`
**Links to concept page:** groundwork/finops-for-ai

---

### Semantic Cache for LLM Cost Reduction

**Repo:** `messkan/prompt-cache`
**URL:** https://github.com/messkan/prompt-cache
**Created/Updated:** 2025-11-22 / pushed 2026-04-24
**Stars:** 231
**Licence:** MIT
**What it solves:** Drop-in, provider-agnostic LLM proxy in Go with intelligent semantic caching that cuts LLM costs by up to 80% with sub-millisecond cached responses.
**Why it qualifies:** Actively maintained, MIT licensed, focused specifically on the cost reduction sub-problem through semantic caching. Clean Go implementation suitable for learning.
**Proposed tensaicompl name:** `tensai-semantic-cache`
**Links to concept page:** groundwork/finops-for-ai

---

### LLM Gateway with Per-Team Cost Attribution

**Repo:** `BerriAI/litellm`
**URL:** https://github.com/BerriAI/litellm
**Created/Updated:** 2023-07-27 / pushed 2026-05-24
**Stars:** 48,104
**Licence:** NOASSERTION
**What it solves:** Unified API gateway for 100+ LLM providers with built-in spend tracking per virtual API key, per user, per team, and per project, plus tag-based cost attribution and budget caps.
**Why it qualifies:** Most adopted open-source LLM gateway (48K+ stars), actively maintained, solves the enterprise sub-problem of per-team/per-user cost attribution and budget enforcement. Note: while comprehensive, it is a large framework; the cost tracking module specifically is the reference value here.
**Proposed tensaicompl name:** `tensai-litellm-finops`
**Links to concept page:** groundwork/finops-for-ai

---

### LLM Observability with Cost Analytics

**Repo:** `langfuse/langfuse`
**URL:** https://github.com/langfuse/langfuse
**Created/Updated:** 2023-05-18 / pushed 2026-05-23
**Stars:** 27,825
**Licence:** NOASSERTION
**What it solves:** Open-source LLM engineering platform providing full-stack observability with token cost tracking, OpenTelemetry integration, trace-level cost attribution, and analytics dashboards.
**Why it qualifies:** Most starred open-source LLM observability platform (27K+ stars), OpenTelemetry-native, actively maintained. Solves the sub-problem of connecting cost data to trace-level observability. Note: acquired by ClickHouse in Jan 2026.
**Proposed tensaicompl name:** `tensai-langfuse-cost-observability`
**Links to concept page:** groundwork/finops-for-ai

---

## Governance & Risk

### Agent Governance Toolkit (Microsoft)

**Repo:** `microsoft/agent-governance-toolkit`
**URL:** https://github.com/microsoft/agent-governance-toolkit
**Created/Updated:** 2026-03-02 / pushed 2026-05-24
**Stars:** 1,936
**Licence:** MIT
**What it solves:** Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents, covering all 10 OWASP Agentic Top 10 risks with sub-millisecond policy enforcement.
**Why it qualifies:** Created March 2026, Microsoft-backed, MIT licensed, framework-agnostic (LangChain, CrewAI, Google ADK, Agent Framework integrations), seven-package system in Python/TypeScript/Rust/Go/.NET. First toolkit to address all 10 OWASP agentic AI risks.
**Proposed tensaicompl name:** `tensai-agent-governance`
**Links to concept page:** groundwork/governance-and-risk

---

### EU AI Act Compliance Tool (Offline)

**Repo:** `Hiepler/EuConform`
**URL:** https://github.com/Hiepler/EuConform
**Created/Updated:** 2025-12-16 / pushed 2026-04-27
**Stars:** 117
**Licence:** MIT
**What it solves:** EU AI Act compliance tool that classifies risk levels, detects algorithmic bias, and generates compliance reports 100% offline using local Ollama instance -- no data sent to external servers.
**Why it qualifies:** Actively maintained, MIT licensed, solves the specific sub-problem of offline EU AI Act risk classification and bias testing. Privacy-preserving design suitable for regulated environments.
**Proposed tensaicompl name:** `tensai-eu-conform`
**Links to concept page:** groundwork/governance-and-risk

---

### EU AI Act Curated Resource List

**Repo:** `GenAI-Gurus/awesome-eu-ai-act`
**URL:** https://github.com/GenAI-Gurus/awesome-eu-ai-act
**Created/Updated:** 2024-01-08 / pushed 2026-05-20
**Stars:** 47
**Licence:** CC0-1.0
**What it solves:** Curated collection of tools, official sources, OSS projects, templates, and guides for EU AI Act compliance, organized by compliance activity.
**Why it qualifies:** Actively maintained (pushed May 2026), serves as a meta-reference for the EU AI Act compliance ecosystem. CC0 licensed. Useful as a starting point for understanding the compliance landscape.
**Proposed tensaicompl name:** `tensai-eu-ai-act-resources`
**Links to concept page:** groundwork/governance-and-risk

---

### Model Registry (Kubeflow)

**Repo:** `kubeflow/hub` (formerly kubeflow/model-registry)
**URL:** https://github.com/kubeflow/hub
**Created/Updated:** 2024-01-12 / pushed 2026-05-21
**Stars:** 176
**Licence:** Apache-2.0
**What it solves:** Single pane of glass for ML model developers to index and manage models, versions, and ML artifacts metadata, bridging the gap between model experimentation and production activities.
**Why it qualifies:** CNCF/Kubeflow project, actively maintained, Apache-2.0 licensed, solves the specific sub-problem of model inventory and lifecycle management in Kubernetes environments.
**Proposed tensaicompl name:** `tensai-model-registry`
**Links to concept page:** groundwork/governance-and-risk

---

### LLM Output Validation and Guardrails

**Repo:** `guardrails-ai/guardrails`
**URL:** https://github.com/guardrails-ai/guardrails
**Created/Updated:** 2023-01-29 / pushed 2026-05-19
**Stars:** 6,910
**Licence:** Apache-2.0
**What it solves:** Composable input/output validation for LLMs with a large validator library (Guardrails Hub) covering structured output enforcement, PII detection, toxicity, and custom validation rules.
**Why it qualifies:** Well-established project (6.9K stars), Apache-2.0 licensed, actively maintained, solves the specific governance sub-problem of ensuring LLM outputs meet compliance and quality standards.
**Proposed tensaicompl name:** `tensai-guardrails-validation`
**Links to concept page:** groundwork/governance-and-risk

---

### PII Detection and Anonymization

**Repo:** `microsoft/presidio`
**URL:** https://github.com/microsoft/presidio
**Created/Updated:** 2018-05-04 / pushed 2026-05-24
**Stars:** 8,284
**Licence:** MIT
**What it solves:** Framework for detecting, redacting, masking, and anonymizing sensitive data (PII) across text, images, and structured data using NLP, pattern matching, and customizable pipelines.
**Why it qualifies:** Microsoft-backed, MIT licensed, most established open-source PII framework (8.2K stars), actively maintained with daily pushes. Solves the governance sub-problem of data privacy in AI pipelines.
**Proposed tensaicompl name:** `tensai-pii-presidio`
**Links to concept page:** groundwork/governance-and-risk

---

### Model Card Generation (not recent -- included as reference)

No qualifying repos found with March-May 2026 recency that solve model card generation as a standalone tool. The most notable project remains `tensorflow/model-card-toolkit` (Apache-2.0, 449 stars) but it was last pushed in July 2023. The sub-problem of model card generation is increasingly handled within larger platforms (Hugging Face Hub, MLflow) rather than standalone tools.

---

## Skills

### Production-Grade Agent Skills Collection

**Repo:** `addyosmani/agent-skills`
**URL:** https://github.com/addyosmani/agent-skills
**Created/Updated:** 2026-02-15 / pushed 2026-05-23
**Stars:** 45,370
**Licence:** MIT
**What it solves:** Production-grade engineering skills (SKILL.md packages) for AI coding agents that encode senior engineer workflows, quality gates, and best practices into modular, loadable instruction sets.
**Why it qualifies:** Created Feb 2026, most starred agent skills repo (45K stars), MIT licensed, authored by Google Chrome engineering lead. Defines the emerging standard for skill packaging with progressive disclosure architecture.
**Proposed tensaicompl name:** `tensai-agent-skills-reference`
**Links to concept page:** groundwork/skills

---

### Agent Skills Standard and Registry (Microsoft)

**Repo:** `microsoft/skills`
**URL:** https://github.com/microsoft/skills
**Created/Updated:** 2026-01-16 / pushed 2026-05-23
**Stars:** 2,380
**Licence:** MIT
**What it solves:** Defines the SKILL.md standard for agent skills, MCP servers, and custom agents, plus provides a registry of verified skills with SDK support for grounding coding agents.
**Why it qualifies:** Created Jan 2026, Microsoft-backed, MIT licensed, actively maintained. Establishes the canonical skill packaging format used by GitHub Copilot, Claude Code, and other agents.
**Proposed tensaicompl name:** `tensai-skills-standard`
**Links to concept page:** groundwork/skills

---

### Curated Agent Skills Directory (1000+)

**Repo:** `VoltAgent/awesome-agent-skills`
**URL:** https://github.com/VoltAgent/awesome-agent-skills
**Created/Updated:** 2025-10-28 / pushed 2026-05-24
**Stars:** 22,931
**Licence:** MIT
**What it solves:** Curated collection of 1000+ agent skills from official dev teams and community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. Acts as a discovery registry for skills.
**Why it qualifies:** Most comprehensive skills directory (22K+ stars), actively maintained (pushed today), MIT licensed. Solves the skill discovery and registry sub-problem.
**Proposed tensaicompl name:** `tensai-skills-directory`
**Links to concept page:** groundwork/skills

---

### Agent Toolkit with Packaged Skills

**Repo:** `softaworks/agent-toolkit`
**URL:** https://github.com/softaworks/agent-toolkit
**Created/Updated:** 2026-01-19 / pushed 2026-03-05
**Stars:** 1,884
**Licence:** MIT
**What it solves:** Curated collection of packaged skills (instructions + scripts) that extend agent capabilities across development, documentation, planning, and professional workflows.
**Why it qualifies:** Created Jan 2026, MIT licensed, strong adoption (1.8K stars). Demonstrates the skill packaging pattern with actual runnable scripts alongside instructions.
**Proposed tensaicompl name:** `tensai-agent-toolkit`
**Links to concept page:** groundwork/skills

---

### AgentSkills MCP Bridge

**Repo:** `zouyingcao/agentskills-mcp`
**URL:** https://github.com/zouyingcao/agentskills-mcp
**Created/Updated:** 2025-12-13 / pushed 2025-12-16
**Stars:** 16
**Licence:** Apache-2.0
**What it solves:** Bridges Anthropic's Agent Skills format to any MCP-compatible agent, enabling skill portability across different agent platforms via the Model Context Protocol.
**Why it qualifies:** Solves the specific sub-problem of skill interoperability through MCP. Small but focused project that demonstrates the skill-to-MCP bridge pattern. Apache-2.0 licensed. Note: low star count, use as a pattern reference only.
**Proposed tensaicompl name:** `tensai-skills-mcp-bridge`
**Links to concept page:** groundwork/skills

---

## Agent Catalog

### Unified Agent/MCP/Skill Registry

**Repo:** `agentregistry-dev/agentregistry`
**URL:** https://github.com/agentregistry-dev/agentregistry
**Created/Updated:** 2025-10-27 / pushed 2026-05-23
**Stars:** 319
**Licence:** Apache-2.0
**What it solves:** Centralized platform to find, manage, and run MCP servers, AI agents, and skills in one place, with trust and curation built in.
**Why it qualifies:** Actively maintained, Apache-2.0 licensed, solves the specific sub-problem of unified agent/tool/skill discovery and management. Written in Go.
**Proposed tensaicompl name:** `tensai-agent-registry`
**Links to concept page:** groundwork/agent-catalog

---

### Enterprise MCP Gateway and Registry

**Repo:** `agentic-community/mcp-gateway-registry`
**URL:** https://github.com/agentic-community/mcp-gateway-registry
**Created/Updated:** 2025-05-29 / pushed 2026-05-24
**Stars:** 663
**Licence:** Apache-2.0
**What it solves:** Enterprise-ready MCP Gateway and Registry that centralizes AI development tools with secure OAuth authentication (Keycloak/Entra), dynamic tool discovery, and unified access for autonomous agents and coding assistants.
**Why it qualifies:** Actively maintained (pushed today), Apache-2.0 licensed, solves the specific sub-problem of governed, auditable tool access for enterprises. Transforms scattered MCP server chaos into centralized management.
**Proposed tensaicompl name:** `tensai-mcp-gateway-registry`
**Links to concept page:** groundwork/agent-catalog

---

### AI Gateway with Unified Discovery (IBM)

**Repo:** `IBM/mcp-context-forge`
**URL:** https://github.com/IBM/mcp-context-forge
**Created/Updated:** 2025-05-08 / pushed 2026-05-24
**Stars:** 3,761
**Licence:** Apache-2.0
**What it solves:** AI Gateway, registry, and proxy that sits in front of any MCP, A2A, or REST/gRPC APIs, exposing a unified endpoint with centralized discovery, guardrails, and management.
**Why it qualifies:** IBM-backed, strong adoption (3.7K stars), actively maintained (pushed today), Apache-2.0 licensed. Solves the specific sub-problem of unifying diverse AI tool protocols behind a single discoverable endpoint.
**Proposed tensaicompl name:** `tensai-context-forge`
**Links to concept page:** groundwork/agent-catalog

---

### A2A Agent Registry (AWS)

**Repo:** `awslabs/a2a-agent-registry-on-aws`
**URL:** https://github.com/awslabs/a2a-agent-registry-on-aws
**Created/Updated:** 2025-10-13 / pushed 2026-04-15
**Stars:** 22
**Licence:** Apache-2.0
**What it solves:** Scalable agent registry for AI agents using the A2A protocol AgentCard with semantic search, built on AWS serverless (Lambda, S3 Vectors, Bedrock) with Python SDK and React Web UI.
**Why it qualifies:** AWS Labs project, Apache-2.0 licensed, solves the specific sub-problem of A2A-protocol-based agent discovery with semantic search. Reference architecture for serverless agent registries. Note: lower star count; value is as a reference implementation.
**Proposed tensaicompl name:** `tensai-a2a-agent-registry`
**Links to concept page:** groundwork/agent-catalog

---

### Backstage AI Developer Hub Plugin

**Repo:** `JulianPedro/backstage-dev-ai-hub`
**URL:** https://github.com/JulianPedro/backstage-dev-ai-hub
**Created/Updated:** 2026-03-08 / pushed 2026-05-23
**Stars:** 6
**Licence:** Apache-2.0
**What it solves:** Backstage plugin providing a centralized hub for developer AI tools, agents, and integrations inside existing developer portals, with MCP server for AI tool discovery.
**Why it qualifies:** Created March 2026, solves the specific sub-problem of integrating AI asset management into existing internal developer portals (Backstage). Apache-2.0 licensed. Note: very early stage (6 stars); value is as a pattern reference for the IDP-meets-AI-catalog approach.
**Proposed tensaicompl name:** `tensai-backstage-ai-hub`
**Links to concept page:** groundwork/agent-catalog

---

## Summary Table

| Concept | Qualifying Repos Found | Top Pick (Stars) |
|---|---|---|
| Token Sourcing | 6 | maximhq/bifrost (5,185) |
| Security Architecture | 8 | NVIDIA/garak (7,896) |
| FinOps for AI | 6 | BerriAI/litellm (48,104) |
| Governance & Risk | 6 | microsoft/presidio (8,284) |
| Skills | 5 | addyosmani/agent-skills (45,370) |
| Agent Catalog | 5 | IBM/mcp-context-forge (3,761) |

**Total qualifying repos: 36**

### Notes on Selection

- Repos marked NOASSERTION for licence should be verified before cloning -- the GitHub API sometimes fails to detect licences even when one exists in the repository.
- Several large frameworks (LiteLLM, Langfuse) are included despite being comprehensive platforms because they contain specific sub-modules that demonstrate the target sub-problem cleanly.
- RouteLLM (lm-sys/RouteLLM, 4,935 stars) was excluded from Token Sourcing because its last push was August 2024, failing the recency criterion, despite being influential.
- Model card generation has no qualifying standalone repo -- the sub-problem has been absorbed into larger platforms.
