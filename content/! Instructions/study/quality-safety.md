# Quality & Safety — Reference Repo Research

Agent 4 cluster: Evals & Observability, Steering, Failure Taxonomy

---

## Evals & Observability

### LLM evaluation framework (pytest-style unit testing for LLM apps)

**Repo:** `confident-ai/deepeval`
**URL:** https://github.com/confident-ai/deepeval
**Created/Updated:** 2026-05-12
**Stars:** 12,800
**Licence:** Apache-2.0
**What it solves:** Pytest-like unit testing for LLM applications with metrics such as G-Eval, hallucination detection, answer relevancy, and task completion, all using LLM-as-judge and local NLP models.
**Why it qualifies:** 12.8k stars, actively maintained, research-backed metrics, widely adopted as the de facto open-source LLM eval framework.
**Proposed tensaicompl name:** `tensai-llm-eval-deepeval`
**Links to concept page:** craft/evals-observability

---

### Prompt/agent/RAG testing with CI/CD integration

**Repo:** `promptfoo/promptfoo`
**URL:** https://github.com/promptfoo/promptfoo
**Created/Updated:** 2026-05-23
**Stars:** 21,000
**Licence:** MIT
**What it solves:** Declarative YAML-config prompt testing, agent evaluation, red teaming, regression detection, and performance comparison across GPT, Claude, Gemini, and more, with CLI and CI/CD integration.
**Why it qualifies:** 21k stars, used by OpenAI and Anthropic, acquired by OpenAI (remains MIT-licensed), the standard for eval-driven development in CI pipelines.
**Proposed tensaicompl name:** `tensai-prompt-eval-promptfoo`
**Links to concept page:** craft/evals-observability

---

### OpenTelemetry-native LLM observability

**Repo:** `traceloop/openllmetry`
**URL:** https://github.com/traceloop/openllmetry
**Created/Updated:** 2026-05 (active releases)
**Stars:** 7,044
**Licence:** Apache-2.0
**What it solves:** Auto-instruments LLM calls (OpenAI, Anthropic, etc.) and vector DB queries (Pinecone, Chroma, Weaviate) as OpenTelemetry spans, plugging into any existing OTel-compatible backend (Datadog, Honeycomb, Jaeger).
**Why it qualifies:** 7k stars, Apache-2.0, multi-language support (Python, JS, Go, Ruby), the reference OpenTelemetry integration for GenAI.
**Proposed tensaicompl name:** `tensai-otel-llm-openllmetry`
**Links to concept page:** craft/evals-observability

---

### LLM engineering platform (tracing, evals, prompt management)

**Repo:** `langfuse/langfuse`
**URL:** https://github.com/langfuse/langfuse
**Created/Updated:** 2026-05 (active releases)
**Stars:** 27,000
**Licence:** MIT (core)
**What it solves:** Self-hostable LLM engineering platform providing end-to-end tracing of LLM calls, retrieval, embedding, and agent actions, plus prompt management, evaluation scoring, and datasets for experimentation.
**Why it qualifies:** 27k stars, YC W23, integrates with OpenTelemetry/LangChain/OpenAI SDK/LiteLLM, the most adopted open-source LLM observability platform.
**Proposed tensaicompl name:** `tensai-llm-platform-langfuse`
**Links to concept page:** craft/evals-observability

---

### AI observability and evaluation (tracing + evals in one)

**Repo:** `arize-ai/phoenix`
**URL:** https://github.com/arize-ai/phoenix
**Created/Updated:** 2026-05-23
**Stars:** 9,806
**Licence:** Elastic License 2.0 (ELv2)
**What it solves:** AI observability platform combining OpenTelemetry-based tracing with LLM-powered evaluation, dataset versioning, and experimentation -- supports OpenAI Agents SDK, Claude Agent SDK, LangGraph, and CrewAI out of the box.
**Why it qualifies:** 9.8k stars, strong framework coverage, combines tracing and evals in a single tool, self-hostable via Docker.
**Proposed tensaicompl name:** `tensai-ai-observability-phoenix`
**Links to concept page:** craft/evals-observability

---

### OpenTelemetry-native AI platform (observability + guardrails + GPU monitoring)

**Repo:** `openlit/openlit`
**URL:** https://github.com/openlit/openlit
**Created/Updated:** 2026-05-22
**Stars:** ~2,500
**Licence:** Apache-2.0
**What it solves:** One-line-of-code OpenTelemetry instrumentation for LLMs, vector DBs, and GPUs, plus built-in guardrails, evaluations, prompt management, and a playground, integrating with 50+ providers.
**Why it qualifies:** Apache-2.0, actively maintained, combines observability with guardrails and evals in a single OTel-native platform, broader scope than pure tracing tools.
**Proposed tensaicompl name:** `tensai-otel-ai-platform-openlit`
**Links to concept page:** craft/evals-observability

---

### Agent monitoring and cost tracking SDK

**Repo:** `agentops-ai/agentops`
**URL:** https://github.com/agentops-ai/agentops
**Created/Updated:** 2026-05 (active)
**Stars:** 5,500
**Licence:** MIT
**What it solves:** Python SDK that auto-instruments AI agent sessions for performance tracking, cost monitoring, failure detection, and session replay, with integrations for CrewAI, OpenAI Agents SDK, LangChain, Autogen, and more.
**Why it qualifies:** 5.5k stars, MIT license, focused specifically on agent-level (not just LLM-level) observability with cost attribution and failure detection.
**Proposed tensaicompl name:** `tensai-agent-monitoring-agentops`
**Links to concept page:** craft/evals-observability

---

### LLM-as-judge evaluator library

**Repo:** `databricks/judges`
**URL:** https://github.com/databricks/judges
**Created/Updated:** 2026 (active)
**Stars:** ~200
**Licence:** Apache-2.0
**What it solves:** A small, focused library of research-backed LLM-as-judge evaluators (classifiers and graders) with a Jury mechanism to combine multiple LLM judges for diverse, aggregated verdicts.
**Why it qualifies:** From Databricks, research-backed, solves one problem cleanly (LLM-as-judge composition), practical Jury abstraction for multi-judge voting.
**Proposed tensaicompl name:** `tensai-llm-judge-judges`
**Links to concept page:** craft/evals-observability

---

### Readymade evaluators for LLM apps

**Repo:** `langchain-ai/openevals`
**URL:** https://github.com/langchain-ai/openevals
**Created/Updated:** 2026-03 (active)
**Stars:** ~500
**Licence:** MIT
**What it solves:** Drop-in LLM-as-judge evaluators for common evaluation tasks (correctness, relevancy, coherence) designed to work with LangSmith and LangGraph but usable standalone.
**Why it qualifies:** From LangChain, pairs with their agentevals library for trajectory evaluation, practical plug-and-play evaluators.
**Proposed tensaicompl name:** `tensai-readymade-evals-openevals`
**Links to concept page:** craft/evals-observability

---

### Agent trajectory evaluators

**Repo:** `langchain-ai/agentevals`
**URL:** https://github.com/langchain-ai/agentevals
**Created/Updated:** 2026-05 (active)
**Stars:** ~300
**Licence:** MIT
**What it solves:** Evaluators specifically for agent execution trajectories -- compares actual agent tool-call sequences against expected trajectories using exact match or LLM-based judgment.
**Why it qualifies:** From LangChain, focused on the specific problem of evaluating agent behavior (not just outputs), works with OpenAI message format and LangChain BaseMessage.
**Proposed tensaicompl name:** `tensai-agent-trajectory-evals`
**Links to concept page:** craft/evals-observability

---

### Agent regression testing (snapshot + drift detection)

**Repo:** `hidai25/eval-view`
**URL:** https://github.com/hidai25/eval-view
**Created/Updated:** 2026-05 (active)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Snapshot-based regression testing for AI agents: captures "golden traces" of known-good agent behavior, then detects behavioral drift across outputs, tool calls, model IDs, and runtime fingerprints, all without requiring LLM-as-judge or API keys.
**Why it qualifies:** Solves one specific problem (agent regression detection) cleanly, deterministic tool-call comparison, GitHub Actions integration, framework-agnostic (LangGraph, CrewAI, OpenAI, Anthropic).
**Proposed tensaicompl name:** `tensai-agent-regression-evalview`
**Links to concept page:** craft/evals-observability

---

### LLM evaluation and observability platform (self-hostable)

**Repo:** `comet-ml/opik`
**URL:** https://github.com/comet-ml/opik
**Created/Updated:** 2026-04 (active releases)
**Stars:** ~3,000
**Licence:** Apache-2.0
**What it solves:** Self-hostable platform combining LLM tracing, automated evaluations, prompt optimization, and production dashboards for RAG, chatbots, and agentic workflows.
**Why it qualifies:** From Comet ML, self-hostable alternative to proprietary platforms, comprehensive lifecycle coverage from development through production monitoring.
**Proposed tensaicompl name:** `tensai-llm-eval-opik`
**Links to concept page:** craft/evals-observability

---

### MCP server for AI-assisted trace analysis

**Repo:** `traceloop/opentelemetry-mcp-server`
**URL:** https://github.com/traceloop/opentelemetry-mcp-server
**Created/Updated:** 2026-05 (active)
**Stars:** ~200
**Licence:** Apache-2.0
**What it solves:** MCP server that connects AI assistants (Claude, etc.) to OpenTelemetry backends (Jaeger, Tempo, Traceloop), enabling natural language queries over distributed traces with specialized LLM observability support.
**Why it qualifies:** Novel intersection of MCP and observability, enables AI-assisted debugging of AI systems, from the OpenLLMetry team.
**Proposed tensaicompl name:** `tensai-otel-mcp-traces`
**Links to concept page:** craft/evals-observability

---

### Enterprise agent evaluation CI/CD toolkit

**Repo:** `Azure/agentops`
**URL:** https://github.com/Azure/agentops
**Created/Updated:** 2026-05 (active)
**Stars:** ~150
**Licence:** MIT
**What it solves:** CLI framework for standardizing evaluation patterns for enterprise AI agents, automating assessments in CI/CD workflows, and generating structured signals for monitoring agentic systems at scale.
**Why it qualifies:** From Microsoft/Azure, enterprise-grade with starter bundles for common scenarios (model quality, RAG, agent workflow, content safety), integrates with Azure Foundry.
**Proposed tensaicompl name:** `tensai-enterprise-agent-eval`
**Links to concept page:** craft/evals-observability

---

## Steering

### High-performance steering vectors framework (vLLM-integrated)

**Repo:** `ZJU-REAL/EasySteer`
**URL:** https://github.com/ZJU-REAL/EasySteer
**Created/Updated:** 2026-05 (adapted for vLLM v0.17.1)
**Stars:** ~300
**Licence:** Apache-2.0
**What it solves:** Unified framework for applying steering vectors during LLM generation at production speed, 10.8-22.3x faster than existing frameworks, with modular design, token-level steering, and OpenAI-compatible API support, built on vLLM.
**Why it qualifies:** Production-grade performance via vLLM integration, actively maintained with regular vLLM version updates, the most practical steering vector framework for deployment.
**Proposed tensaicompl name:** `tensai-steering-vectors-easysteer`
**Links to concept page:** craft/steering

---

### Safety-aware activation steering (ICLR 2026)

**Repo:** `AlphaLab-USTC/AlphaSteer`
**URL:** https://github.com/AlphaLab-USTC/AlphaSteer
**Created/Updated:** 2026 (ICLR 2026 paper)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Learns near-zero steering vectors for benign inputs (null-space constraint) while generating effective refusal vectors for malicious prompts, solving the safety-performance tradeoff that plagues indiscriminate activation steering.
**Why it qualifies:** ICLR 2026 paper, theoretically grounded approach to the core challenge of steering (safety without over-refusal), principled null-space formulation.
**Proposed tensaicompl name:** `tensai-safe-steering-alphasteer`
**Links to concept page:** craft/steering

---

### Control vectors via representation engineering

**Repo:** `vgel/repeng`
**URL:** https://github.com/vgel/repeng
**Created/Updated:** 2026 (active)
**Stars:** 693
**Licence:** MIT
**What it solves:** Train representation engineering control vectors in under 60 seconds and export them as GGUF format for use with llama.cpp and other inference engines, enabling behavioral steering of language models.
**Why it qualifies:** 693 stars, MIT license, practical "train in 60 seconds" workflow, GGUF export for production use, the go-to library for creating RepE control vectors.
**Proposed tensaicompl name:** `tensai-control-vectors-repeng`
**Links to concept page:** craft/steering

---

### Instruction-following via activation steering (Microsoft)

**Repo:** `microsoft/llm-steer-instruct`
**URL:** https://github.com/microsoft/llm-steer-instruct
**Created/Updated:** 2026 (ICLR 2025 paper, maintained)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Computes steering vectors as the difference in activations from paired inputs (with and without instructions), then adds them to the residual stream during inference to improve instruction-following behavior.
**Why it qualifies:** From Microsoft Research, ICLR 2025 paper, directly addresses instruction fidelity through activation steering, MIT licensed.
**Proposed tensaicompl name:** `tensai-instruction-steering`
**Links to concept page:** craft/steering

---

### vLLM activation extraction and steering

**Repo:** `UKGovernmentBEIS/vllm-lens`
**URL:** https://github.com/UKGovernmentBEIS/vllm-lens
**Created/Updated:** 2026 (active)
**Stars:** ~50
**Licence:** MIT
**What it solves:** Extracts residual-stream activations and applies steering vectors (including activation oracles) to any vLLM model during inference, with full tensor and pipeline parallelism support across GPUs and nodes.
**Why it qualifies:** From UK Government BEIS, production-oriented (built on vLLM), handles the hard problem of per-sample hooks in dynamically-batched inference, useful for both interpretability and runtime steering.
**Proposed tensaicompl name:** `tensai-vllm-activation-lens`
**Links to concept page:** craft/steering

---

### Steering LLM reasoning via bias-only adaptation

**Repo:** `corl-team/steering-reasoning`
**URL:** https://github.com/corl-team/steering-reasoning
**Created/Updated:** 2026 (active research)
**Stars:** ~80
**Licence:** MIT
**What it solves:** Trains lightweight steering vectors that match RL-tuned model accuracy on reasoning tasks, with mechanistic analysis showing how last-layer vectors act as token-substitution bias and penultimate-layer vectors operate through MLP/unembedding pathways.
**Why it qualifies:** Demonstrates that steering alone can match full RL training for reasoning, vectors transfer across model families, provides deep mechanistic understanding of why steering works.
**Proposed tensaicompl name:** `tensai-reasoning-steering`
**Links to concept page:** craft/steering

---

### Representation engineering for hallucination/safety control

**Repo:** `wisent-ai/wisent`
**URL:** https://github.com/wisent-ai/wisent
**Created/Updated:** 2026 (active)
**Stars:** ~200
**Licence:** Apache-2.0
**What it solves:** Open-source representation engineering framework that uses contrastive activation pairs to detect and prevent hallucinations and harmful outputs at the activation level, without modifying model weights.
**Why it qualifies:** Self-hosted, free, focused on the practical application of RepE for safety (hallucination + harm prevention), builds on the foundational Zou et al. RepE research.
**Proposed tensaicompl name:** `tensai-repeng-safety-wisent`
**Links to concept page:** craft/steering

---

### Structured output via constrained decoding (production-grade)

**Repo:** `mlc-ai/xgrammar`
**URL:** https://github.com/mlc-ai/xgrammar
**Created/Updated:** 2026-05 (XGrammar-2 released)
**Stars:** 1,701
**Licence:** Apache-2.0
**What it solves:** Fast, flexible structured generation engine enforcing context-free grammars on LLM output with near-zero overhead, supporting JSON, regex, and custom grammars; default backend for vLLM, SGLang, TensorRT-LLM.
**Why it qualifies:** 1.7k stars, default structured generation backend for most major inference engines, XGrammar-2 (May 2026) adds dynamic grammar support for agentic LLMs.
**Proposed tensaicompl name:** `tensai-structured-gen-xgrammar`
**Links to concept page:** craft/steering

---

### Structured outputs for LLMs (Python-native)

**Repo:** `dottxt-ai/outlines`
**URL:** https://github.com/dottxt-ai/outlines
**Created/Updated:** 2026-05 (active)
**Stars:** 11,900
**Licence:** Apache-2.0
**What it solves:** Python library guaranteeing structured outputs from any LLM via constrained decoding, supporting JSON Schema, regex, and custom grammars with integrations for OpenAI, Ollama, vLLM, and more.
**Why it qualifies:** 11.9k stars, Apache-2.0, the most popular Python-native structured generation library, enterprise licensing available.
**Proposed tensaicompl name:** `tensai-structured-outputs-outlines`
**Links to concept page:** craft/steering

---

### Super-fast constrained decoding engine (Rust)

**Repo:** `guidance-ai/llguidance`
**URL:** https://github.com/guidance-ai/llguidance
**Created/Updated:** 2026-04 (active)
**Stars:** 732
**Licence:** MIT
**What it solves:** Rust library implementing constrained decoding using Earley's algorithm with ~50 microsecond per-token overhead for 128k tokenizers, enforcing arbitrary context-free grammars on LLM output.
**Why it qualifies:** 732 stars, MIT license, Rust performance (~50us/token), from the Guidance team (21k stars on main repo), used by TensorRT-LLM and other inference engines.
**Proposed tensaicompl name:** `tensai-constrained-decoding-llguidance`
**Links to concept page:** craft/steering

---

### GPU-accelerated constrained decoding (Google/YouTube)

**Repo:** `youtube/static-constraint-decoding`
**URL:** https://github.com/youtube/static-constraint-decoding
**Created/Updated:** 2026-03-04
**Stars:** ~50
**Licence:** Apache-2.0
**What it solves:** STATIC (Sparse Transition-Accelerated Trie Index) algorithm for enforcing outputs within prespecified token sequences during autoregressive decoding, optimized for GPU/TPU with JAX and PyTorch backends.
**Why it qualifies:** From YouTube/Google, research paper (Su et al., 2026), designed for hardware accelerator efficiency, includes comprehensive benchmarks against baseline methods.
**Proposed tensaicompl name:** `tensai-gpu-constrained-decoding`
**Links to concept page:** craft/steering

---

### Programmatic grammar decoding (LLMs write their own constraints)

**Repo:** `maltelandgren/orate`
**URL:** https://github.com/maltelandgren/orate
**Created/Updated:** 2026-04-26
**Stars:** ~50
**Licence:** MIT
**What it solves:** Lets the model enforce legality of its own output via Python generators: at every yield the model proposes tokens while grammar and predicates constrain at the logit level, unifying types, tool calls, and control flow in one stream.
**Why it qualifies:** Novel approach where LLMs write their own constraint programs (not just static schemas), built at Claude Code hackathon April 2026, pushes constrained decoding beyond JSON-mode into programmatic territory.
**Proposed tensaicompl name:** `tensai-programmatic-decoding-orate`
**Links to concept page:** craft/steering

---

## Failure Taxonomy

### Agent failure diagnosis from execution trajectories (Microsoft)

**Repo:** `microsoft/AgentRx`
**URL:** https://github.com/microsoft/AgentRx
**Created/Updated:** 2026-02 (arXiv:2602.02475)
**Stars:** ~150
**Licence:** MIT
**What it solves:** Automated, domain-agnostic diagnostic framework that synthesizes constraints from failed agent trajectories, evaluates them step-by-step, and uses an LLM judge to localize the critical failure step and classify it into a 10-category taxonomy.
**Why it qualifies:** From Microsoft Research, 23.6% better failure localization than baselines, tested across three domains (API workflows, incident management, web/file tasks), includes 115-trajectory annotated benchmark.
**Proposed tensaicompl name:** `tensai-agent-failure-diagnosis-agentrx`
**Links to concept page:** craft/failure-taxonomy

---

### Agent error taxonomy, benchmark, and debugging framework

**Repo:** `ulab-uiuc/AgentDebug`
**URL:** https://github.com/ulab-uiuc/AgentDebug
**Created/Updated:** 2026 (active)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Three-part framework: AgentErrorTaxonomy (modular classification across memory, reflection, planning, action, system-level), AgentErrorBench (annotated failure trajectories from ALFWorld/GAIA/WebShop), and AgentDebug (root-cause isolation with corrective feedback enabling 24% higher accuracy).
**Why it qualifies:** First comprehensive agent error taxonomy with matching benchmark dataset, from UIUC, provides both classification system and practical debugging tool.
**Proposed tensaicompl name:** `tensai-agent-debug-taxonomy`
**Links to concept page:** craft/failure-taxonomy

---

### Multi-agent systems failure taxonomy (MAST)

**Repo:** `multi-agent-systems-failure-taxonomy/MAST`
**URL:** https://github.com/multi-agent-systems-failure-taxonomy/MAST
**Created/Updated:** 2026 (active)
**Stars:** 328
**Licence:** MIT
**What it solves:** First comprehensive taxonomy of failure modes in multi-agent LLM workflows, based on analysis of 150+ tasks, with open-sourced data for identifying coordination failures, role deviation, and orchestration breakdowns.
**Why it qualifies:** 328 stars, fills a gap (multi-agent-specific failures vs single-agent), provides structured data for building failure detection systems.
**Proposed tensaicompl name:** `tensai-multi-agent-failures-mast`
**Links to concept page:** craft/failure-taxonomy

---

### Community-curated agent failure modes and solutions

**Repo:** `vectara/awesome-agent-failures`
**URL:** https://github.com/vectara/awesome-agent-failures
**Created/Updated:** 2026-05 (active)
**Stars:** 160
**Licence:** CC-BY-4.0
**What it solves:** Curated collection of real-world AI agent failure modes with battle-tested solutions, including case studies of infinite loops (AutoGPT), supply chain attacks, sandbox escapes, and drive-wiping incidents.
**Why it qualifies:** From Vectara, grounded in real incidents (not theoretical), includes specific case studies with root cause analysis and solutions, practical reference for building failure-resilient agents.
**Proposed tensaicompl name:** `tensai-agent-failure-cases`
**Links to concept page:** craft/failure-taxonomy

---

### Runtime guardrails: budget enforcement, loop detection, kill switch

**Repo:** `tazsat0512/reivo-guard`
**URL:** https://github.com/tazsat0512/reivo-guard
**Created/Updated:** 2026-05 (active)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Drop-in guardrail layer for AI agents providing budget enforcement (USD limits), loop detection (configurable thresholds), and automatic kill switch, with before/after hooks and near-zero overhead, supporting JS/TS and Python.
**Why it qualifies:** Solves the three critical runtime safety problems (cost, loops, kill) in one focused library, multi-language support, managed proxy option available.
**Proposed tensaicompl name:** `tensai-agent-guardrails-reivo`
**Links to concept page:** craft/failure-taxonomy

---

### Real-time token spend tracking and runaway loop protection

**Repo:** `dipampaul17/AgentGuard`
**URL:** https://github.com/dipampaul17/AgentGuard
**Created/Updated:** 2026-05 (active)
**Stars:** ~80
**Licence:** MIT
**What it solves:** Real-time budget enforcement for Node.js AI agents: auto-monitors API calls (fetch, axios, undici), tracks token spend using tiktoken/Anthropic tokenizers with live pricing, and kills runaway loops before cost spirals.
**Why it qualifies:** Zero code changes required, real tokenizer-based cost tracking (not estimates), addresses the $150-in-2-hours runaway loop problem documented in production incidents.
**Proposed tensaicompl name:** `tensai-token-spend-guard`
**Links to concept page:** craft/failure-taxonomy

---

### Structured autonomous loop with guardrails and self-remediation

**Repo:** `VictorVVedtion/ouro-loop`
**URL:** https://github.com/VictorVVedtion/ouro-loop
**Created/Updated:** 2026-05 (active)
**Stars:** ~50
**Licence:** MIT
**What it solves:** Gives AI coding agents (Claude Code, Cursor, Aider) a structured autonomous loop with 5 verification gates, 3-layer self-reflection, and autonomous remediation playbooks, enforcing constraints via Claude Code Hooks (hard-block on exit 2).
**Why it qualifies:** Zero dependencies, pure Python, addresses the gap between "let agent run free" and "micromanage every step" with bounded autonomy via DANGER ZONES, NEVER DO rules, and IRON LAWS.
**Proposed tensaicompl name:** `tensai-bounded-autonomy-ouroloop`
**Links to concept page:** craft/failure-taxonomy

---

*Research completed 2026-05-24. All repos verified as actively maintained within the March-May 2026 window or having significant recent updates.*
