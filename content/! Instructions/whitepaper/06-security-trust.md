# AI Security & Trust at Scale

Research compiled: 24 May 2026
Sources searched: 30+ queries across OWASP, NIST, NSA, Gartner, IBM, Google, Microsoft, Anthropic, CSA, Adversa AI, Lakera, Vectra, Palo Alto Networks, academic papers (ICLR, AAAI, arXiv), VentureBeat, SecurityWeek, CrowdStrike, Docker

---

## Key Findings

---

### 1. OWASP Top 10 for LLM Applications (2025 Edition)

**Source:** OWASP GenAI Security Project — "OWASP Top 10 for LLM Applications 2025"
**URL:** https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/
**Project page:** https://owasp.org/www-project-top-10-for-large-language-model-applications/
**PDF:** https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf
**GitHub:** https://github.com/OWASP/www-project-top-10-for-large-language-model-applications/
**Complete list:**
1. **LLM01:2025 — Prompt Injection** — Manipulating LLMs via crafted inputs to cause unintended actions. Remains #1 risk for the second consecutive edition
2. **LLM02:2025 — Sensitive Information Disclosure** — LLMs inadvertently revealing confidential data through responses
3. **LLM03:2025 — Supply Chain** — Compromised components, training data, or pre-trained models introducing vulnerabilities
4. **LLM04:2025 — Data and Model Poisoning** — Manipulation of training data or fine-tuning processes to introduce backdoors or biases
5. **LLM05:2025 — Improper Output Handling** — Insufficient validation of LLM outputs before passing to downstream systems
6. **LLM06:2025 — Excessive Agency** — LLMs granted too much autonomy or access to tools without adequate controls
7. **LLM07:2025 — System Prompt Leakage** — Exposure of system prompts revealing architecture, guardrails, or internal instructions
8. **LLM08:2025 — Vector and Embedding Weaknesses** — Vulnerabilities in RAG systems' vector stores and embedding pipelines (new in 2025)
9. **LLM09:2025 — Misinformation** — LLM-generated content that is factually incorrect but appears authoritative
10. **LLM10:2025 — Unbounded Consumption** — Resource exhaustion through uncontrolled LLM usage (denial-of-wallet attacks)

**Key changes from 2023:** Two new categories added (LLM07 System Prompt Leakage, LLM08 Vector/Embedding Weaknesses). Substantial reworks of several categories. Reordering based on community feedback and real-world incident data.

**Relevance to whitepaper:** The definitive taxonomy of LLM security risks. Any enterprise AI security architecture must map controls to these ten categories. The addition of vector/embedding weaknesses reflects the maturation of RAG-based enterprise deployments.

---

### 2. OWASP Top 10 for Agentic Applications (2026 Edition)

**Source:** OWASP GenAI Security Project — "OWASP Top 10 for Agentic Applications for 2026" (Released December 2025)
**URL:** https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
**Announcement:** https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/
**Press release:** https://www.prnewswire.com/news-releases/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security-302637364.html
**Palo Alto Networks analysis:** https://www.paloaltonetworks.com/blog/cloud-security/owasp-agentic-ai-security/
**Auth0 analysis:** https://auth0.com/blog/owasp-top-10-agentic-applications-lessons/
**Methodology:** Developed with input from 100+ security researchers, industry practitioners, and leading cybersecurity providers. Evaluated by a Distinguished Expert Review Board including representatives from NIST, the Alan Turing Institute, Microsoft's AI Red Team, and AWS
**Complete list:**
1. **ASI01 — Agent Goal Hijack** — Attackers manipulate agent goals, plans, or decision paths through direct or indirect instruction injection, causing agents to pursue unintended or malicious objectives
2. **ASI02 — Tool Misuse & Exploitation** — Agents misuse or exploit legitimate tools to perform unintended actions, including calling tools with malicious parameters or chaining tools in harmful sequences
3. **ASI03 — Agent Identity & Privilege Abuse** — Agents inherit, misuse, or retain privileges improperly across sessions, users, or delegated workflows
4. **ASI04 — Agentic Supply Chain Compromise** — Compromised or impersonated components at runtime introduce supply chain risk (plugins, MCP servers, tool registries)
5. **ASI05 — Unexpected Code Execution** — Agents that generate or execute code are manipulated into running malicious instructions
6. **ASI06 — Memory & Context Poisoning** — Attackers corrupt the agent's memory or conversation context to influence future behavior across sessions
7. **ASI07 — Insecure Inter-Agent Communication** — Messages between agents in multi-agent systems can be intercepted, spoofed, or manipulated
8. **ASI08 — Cascading Agent Failures** — A failure in one component propagates through the agent system, causing widespread outages or compromise
9. **ASI09 — Human-Agent Trust Exploitation** — Attackers exploit the trust users place in agent recommendations without independent verification
10. **ASI10 — Rogue Agents** — Compromised or misaligned agents that act harmfully while appearing legitimate

**Key insight:** Agentic systems inherit ALL LLM risks and introduce entirely new vulnerability classes arising from autonomy, tool integration, multi-agent coordination, and persistent state. The 2026 edition focuses on failures from goal misalignment, tool misuse, delegated trust, inter-agent communication, persistent memory, and emergent autonomous behavior.

**Relevance to whitepaper:** This is the companion taxonomy to the LLM Top 10 specifically for agentic AI. As enterprises deploy AI agents in production (62% experimenting per McKinsey), these ten risks become the security architecture checklist. The fact that it required a separate document from the LLM Top 10 underscores how fundamentally different agentic security is from traditional LLM security.

---

### 3. Real-World AI Security Incidents: The Evidence Base

**Source (primary):** Adversa AI — "Top AI Security Incidents Report 2025 Edition"
**URL:** https://adversa.ai/blog/adversa-ai-unveils-explosive-2025-ai-security-incidents-report-revealing-how-generative-and-agentic-ai-are-already-under-attack/
**Full report:** https://www.adversa.ai/top-ai-security-incidents-report-2025-edition/
**Source (secondary):** IBM — "Cost of a Data Breach Report 2025"
**URL:** https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls
**Source (tertiary):** Reco AI — "AI & Cloud Security Breaches: 2025 Year in Review"
**URL:** https://www.reco.ai/blog/ai-and-cloud-security-breaches-2025
**Source (OWASP):** OWASP — "Gen AI Incident & Exploit Round-up, Q2 2025"
**URL:** https://genai.owasp.org/2025/07/14/owasp-gen-ai-incident-exploit-round-up-q225/

**Key incidents and data points:**

**Samsung ChatGPT Data Leak (April 2023):**
- Samsung Semiconductor engineers leaked proprietary source code, internal meeting transcripts, and test sequence data by pasting them into ChatGPT on at least three separate occasions
- Samsung subsequently banned all generative AI tool usage company-wide
- By mid-2023, 75%+ of Fortune 500 companies had implemented generative AI usage policies, many citing the Samsung incident explicitly
- OpenAI accelerated development of ChatGPT Enterprise (August 2023) and ChatGPT Team (January 2024) as a direct response
- Sources: https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/ and https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak

**EchoLeak / CVE-2025-32711 (June 2025):**
- Zero-click vulnerability in Microsoft 365 Copilot allowing remote attacker to steal confidential data simply by sending an email
- CVSS score: 9.3 (Critical)
- No user interaction required beyond receiving the email
- Source: https://arxiv.org/html/2509.10540v1

**GitHub Copilot RCE / CVE-2025-53773 (June-August 2025):**
- Remote code execution via prompt injection in GitHub Copilot for Visual Studio
- Attack manipulates .vscode/settings.json to enable "YOLO mode" (auto-approve all tool calls)
- Enables creation of self-propagating "ZombAI" botnets through infected repositories
- Uses invisible Unicode characters to hide malicious instructions from developers
- CVSS score: 7.8 (High)
- Patched in August 2025 Patch Tuesday
- Sources: https://cybersecuritynews.com/github-copilot-rce-vulnerability/ and https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/

**Langflow / CVE-2025-3248 (May 2025):**
- Critical unauthenticated RCE in Langflow AI agent builder, CVSS 9.8
- Unauthenticated API endpoint (/api/v1/validate/code) accepted and executed arbitrary Python code
- Added to CISA Known Exploited Vulnerabilities (KEV) catalogue on May 5, 2025
- 361 malicious IPs observed exploiting the vulnerability
- Active campaign deploying Flodrix botnet through compromised Langflow servers
- Sources: https://www.helpnetsecurity.com/2025/05/06/langflow-cve-2025-3248-exploited/ and https://www.trendmicro.com/en_us/research/25/f/langflow-vulnerability-flodric-botnet.html

**Cursor IDE Vulnerabilities (2025):**
- CurXecute (CVE-2025-54135): RCE via MCP configuration manipulation, CVSS 8.6
- MCPoison (CVE-2025-54136): Persistent silent code execution via MCP trust bypass
- CVE-2025-59944: Case-sensitivity bypass enabling configuration file modification
- All demonstrate how AI-powered developer tools create new attack surfaces
- Sources: https://research.checkpoint.com/2025/cursor-vulnerability-mcpoison/ and https://www.lakera.ai/blog/cursor-vulnerability-cve-2025-59944

**Mexican Government Breach (December 2025):**
- Individual used Claude Code and ChatGPT to breach 10+ Mexican government agencies
- Stole 195+ million taxpayer records
- Demonstrates AI tools lowering barrier to entry for sophisticated attacks
- Source: https://www.reco.ai/blog/ai-and-cloud-security-breaches-2025

**ChatGPT Memory Feature Exploitation (2024):**
- Persistent prompt injection attack manipulated ChatGPT's memory feature
- Enabled long-term data exfiltration across multiple conversations
- Demonstrates that attacks can have lasting effects beyond single sessions

**IBM Data Points (2025 Cost of a Data Breach Report):**
- 13% of organisations reported breaches of AI models or applications
- 97% of those compromised reported lacking proper AI access controls
- 63% of breached organisations either don't have an AI governance policy or are still developing one
- Only 34% of organisations with AI governance policies perform regular audits for unsanctioned AI
- Shadow AI adds an extra USD 670,000 to the global average breach cost
- 300,000+ ChatGPT credential sets advertised on the dark web in 2025
- Source: https://www.ibm.com/think/x-force/2025-cost-of-a-data-breach-navigating-ai

**Adversa AI Aggregate Statistics (2025 Report):**
- 35% of all real-world AI security incidents caused by simple prompts (no code required)
- Some prompt-only attacks led to $100K+ in real losses
- 2025 surpassed all prior years combined in AI breach volume
- 72% year-over-year increase in AI-assisted cyberattacks since 2024
- GenAI was involved in 70% of incidents; agentic AI caused the most dangerous failures
- Report includes 17 real-world case studies (Amazon Q, Asana AI, and others)
- Systems failed across multiple layers: Model, Infrastructure, and Human Oversight

**Relevance to whitepaper:** These incidents collectively demonstrate that AI security is not theoretical -- it is an active, rapidly evolving threat landscape with real financial impact. The progression from data leakage (Samsung 2023) to weaponised prompt injection (EchoLeak, Copilot RCE 2025) to AI-assisted mass breaches (Mexican government 2025) shows accelerating sophistication.

---

### 4. The State of Prompt Injection Defence

**Source (primary):** OpenAI — "Introducing Lockdown Mode and Elevated Risk Labels in ChatGPT" (February 13, 2026)
**URL:** https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/
**Source (research):** PromptArmor paper — "Simple yet Effective Prompt Injection Defenses" (ICLR 2026 submission)
**URL:** https://arxiv.org/abs/2507.15219
**OpenReview:** https://openreview.net/forum?id=IeNXtofK6T
**Source (market):** Vectra AI — "Prompt Injection: Types, Real-World CVEs, and Enterprise Defenses"
**URL:** https://www.vectra.ai/topics/prompt-injection
**Source (enterprise readiness):** Obsidian Security — "Prompt Injection Attacks: The Most Common AI Exploit in 2025"
**URL:** https://www.obsidiansecurity.com/blog/prompt-injection
**Source (defence guide):** TokenMix — "Prompt Injection Defense 2026: 8 Tested Techniques Ranked"
**URL:** https://tokenmix.ai/blog/prompt-injection-defense-techniques-2026
**Key data points:**

**Severity:**
- Prompt injection ranked #1 on OWASP Top 10 for LLM Applications for two consecutive editions (2023, 2025)
- Attack success rates reach 84% in agentic systems
- Production exploits now carry CVSS scores above 9.0 (EchoLeak: 9.3)
- AI prompt security market grew from $1.51B (2024) to $1.98B (2025), 31.5% CAGR

**Enterprise readiness gap:**
- Only 34.7% of enterprises have deployed dedicated prompt injection solutions
- Enterprise AI has fewer prompt injection defences than comparable SQL injection defences
- Anthropic dropped its direct prompt injection metric in February 2026 system card, arguing indirect injection is the more relevant enterprise threat

**OpenAI's Lockdown Mode (February 2026):**
- Explicit acknowledgement that prompt injection in AI browsers "may never be fully patched"
- Lockdown Mode deterministically disables certain tools and capabilities that an adversary could attempt to exploit
- Web browsing limited to cached content (no live network requests leave OpenAI's controlled network)
- Deep research, Agent Mode, Canvas network access, and file downloads all disabled
- Available to ChatGPT Enterprise, Edu, Healthcare, and Teachers plans
- Represents a trade-off: security through capability restriction rather than mitigation

**State-of-the-art technical defences (ranked by benchmarks):**
1. PromptArmor (ICLR 2026): Achieves <1% false positive AND false negative rates on AgentDojo using GPT-4o/4.1/o4-mini. Uses an off-the-shelf LLM as a dedicated preprocessor to detect and strip injection content. Adds 200-600ms latency and processes 500-1000 filter tokens per request
2. PromptGuard: Cuts injection success rates by 67%. Adding an LLM-as-Critic output validation layer improved detection precision by 21% over input-layer filtering alone
3. Layered defence: No single fix exists. Defence requires input filtering + output validation + behavioural monitoring + capability restriction working as a coordinated system

**Relevance to whitepaper:** The most important finding is OpenAI's admission that prompt injection may never be fully solved. This reframes the enterprise security conversation from "prevent all injection" to "assume injection will succeed sometimes; limit blast radius through defence in depth, sandboxing, and capability restriction." The PromptArmor result (<1% FP/FN) shows that near-zero-false-positive detection is achievable, but at a latency and cost trade-off.

---

### 5. AI Gateway Security Architecture

**Source (primary):** Vedcraft — "Agentic AI Gateway: The Proven Architecture Pattern for Enterprise GenAI Security and Governance"
**URL:** https://medium.com/vedcraft/agentic-ai-gateway-the-proven-architecture-pattern-for-enterprise-genai-security-and-governance-3abe0ca8af6a
**Source (comparison):** Maxim AI — "Enterprise AI Gateway Security: Top Options Compared"
**URL:** https://www.getmaxim.ai/articles/enterprise-ai-gateway-security-top-options-compared/
**Source (deep dive):** Jimmy Song — "AI Gateway Deep Dive (2026): Architecture, Product Comparison, and Production Practices"
**URL:** https://jimmysong.io/blog/ai-gateway-in-depth/
**Source (market analysis):** Lakera — "AI Gateways: What They Are, What They Control, and Why They Matter"
**URL:** https://www.lakera.ai/blog/ai-gateways-what-they-are-what-they-control-and-why-they-matter
**Source (security gap):** Traefik — "The AI Triple Security Gap: Why Your Gateway Strategy Is..."
**URL:** https://traefik.io/blog/the-triple-ai-security-gap
**Key data points:**

**What an AI gateway does:**
- Control plane between applications and any model (commercial, open-source, or internal)
- Centralises policy enforcement so security isn't copy-pasted across services
- Handles: multi-model routing, prompt/response security controls, token-level governance, content guardrails, access control, secrets management, audit logging, deployment isolation, and observability

**Enterprise adoption:**
- Estimated at 10-25% in 2025, with sharp growth expected as multi-model/multi-agent deployments scale
- Gartner predicts >50% of enterprises will deploy an AI security platform by 2028 to enforce consistent guardrails across all third-party and custom AI applications

**Protocol support:**
- Model Context Protocol (MCP) and Agent2Agent (A2A) have emerged as standards for model context engineering and inter-agent communication
- Leading gateways support Google Gemini, OpenAI GPT-3/4/5, Anthropic Claude, Llama 3/4, Mistral

**Architecture pattern (defence-in-depth layers):**
1. Identity & access: Tenant isolation, per-user/per-agent authentication, dynamic permission binding
2. Input security: Prompt injection detection, PII/secrets scanning, content classification
3. Routing & orchestration: Model selection, load balancing, fallback chains
4. Output security: Response validation, hallucination checking, data leakage prevention
5. Observability: Immutable audit trail of every prompt-response pair with full metadata
6. Cost governance: Token budgets, rate limiting, denial-of-wallet prevention

**Relevance to whitepaper:** AI gateways are the enterprise control plane for AI -- analogous to API gateways for microservices. The 10-25% adoption rate in 2025 vs. Gartner's 50% prediction for 2028 represents a critical infrastructure gap. This is a key architectural recommendation for the whitepaper.

---

### 6. Sandboxing and Isolation for AI Agents

**Source (primary):** Docker — "Comparing Sandboxing Approaches for AI Agents"
**URL:** https://www.docker.com/blog/comparing-sandboxing-approaches-ai-agents/
**Source (enterprise guide):** Northflank — "How to Sandbox AI Agents in 2026: MicroVMs, gVisor & Isolation Strategies"
**URL:** https://northflank.com/blog/how-to-sandbox-ai-agents
**Source (analysis):** SoftwareSeni — "AI Agent Sandboxing Explained: Why Docker Is Not Enough and What Actually Works"
**URL:** https://www.softwareseni.com/ai-agent-sandboxing-explained-why-docker-is-not-enough-and-what-actually-works/
**Source (comparison):** ContainAI — Security Comparison
**URL:** https://github.com/novotnyllc/ContainAI/blob/main/docs/security-comparison.md
**Key data points:**

**Why Docker alone is insufficient:**
- Docker containers share the host OS kernel; a container escape gives attackers access to the host
- AI agents require stronger isolation because they execute untrusted/generated code, make autonomous decisions, and can be manipulated through prompt injection

**Three isolation approaches compared:**

| Technology | Isolation Type | Boot Time | Memory Overhead | Best For |
|---|---|---|---|---|
| gVisor | User-space kernel (syscall interception) | Minimal | 10-30% I/O overhead | Internal agents, no user-supplied code |
| Firecracker | MicroVM (hardware virtualisation) | ~125ms | <5 MiB per VM | Serverless agent tasks, SaaS with user code |
| Kata Containers | VM-based with Firecracker/Cloud Hypervisor VMM | ~seconds | Higher | SaaS with user-supplied code (hardware isolation required) |

**Enterprise guidance:**
- Internal agents with no user-supplied code: gVisor (syscall interception handles most kernel-level attacks, lower overhead)
- SaaS with user-supplied code: Kata Containers with Firecracker VMM (hardware isolation required)
- Serverless/function-like agent tasks: Firecracker (125ms boot, sub-5 MiB footprint)

**Security incident context:**
- Langflow CVE-2025-3248 (CVSS 9.8) and Cursor MCP RCE demonstrate the practical need for strong isolation
- Running AI agents in containers without additional isolation is equivalent to running user-submitted code in a shared environment

**Relevance to whitepaper:** Sandboxing is the last line of defence when prompt injection succeeds and an agent executes malicious code. The three-tier approach (gVisor for internal, Firecracker for multi-tenant, Kata for untrusted code) provides a practical decision framework for enterprise architects.

---

### 7. Zero-Trust Architecture for AI Agents

**Source (primary):** Cloud Security Alliance — "The Agentic Trust Framework: Zero Trust Governance for AI Agents" (February 2026)
**URL:** https://cloudsecurityalliance.org/blog/2026/02/02/the-agentic-trust-framework-zero-trust-governance-for-ai-agents
**Source (Microsoft):** Microsoft Security Blog — "New Tools and Guidance: Announcing Zero Trust for AI" (March 2026)
**URL:** https://www.microsoft.com/en-us/security/blog/2026/03/19/new-tools-and-guidance-announcing-zero-trust-for-ai/
**Source (architecture):** VentureBeat — "AI Agent Zero Trust Architecture: Audit Credential Isolation" (featuring Anthropic and NVIDIA NemoClaw)
**URL:** https://venturebeat.com/security/ai-agent-zero-trust-architecture-audit-credential-isolation-anthropic-nvidia-nemoclaw/
**Source (enterprise platforms):** Mindra — "Enterprise AI Agent Platforms in 2026: Architecture, Zero-Trust Security, and the New Integration Criteria"
**URL:** https://mindra.co/blog/enterprise-ai-agent-platforms-2026-integration-criteria
**Source (market data):** Gravitee — "State of AI Agent Security 2026" report
**Key data points:**

**Current state:**
- Only 14.4% of organisations report full security approval for their entire agent fleet (Gravitee 2026)
- By mid-2026, 40%+ of Fortune 1000 companies run at least one production AI agent workflow touching core business systems (ERP, CRM, ITSM, financial ledgers)

**Zero-Trust Agent Identity (ZTAI) -- the 2026 standard:**
- Every agent call must be authenticated, authorised, and audited independently
- Traditional perimeter security models break down the moment an AI agent is granted credentials
- Rather than authenticating once and letting the agent run, organisations continuously verify every action

**Agentic Trust Framework (ATF):**
- Open governance specification from CSA designed for autonomous AI agents
- Provides structured approach to deploy agents while maintaining governance controls
- Core principles: least-privilege access, continuous verification, session-scoped credentials, immutable audit trails

**Architecture evolution:**
- Leading platforms have shifted from hub-and-spoke to composable agent mesh architecture
- Agents dynamically form task graphs and broadcast structured capability manifests (including compliance tags, data residency, real-time load)
- Enables dynamic peer selection without single orchestration failure point

**Microsoft Zero Trust for AI (March 2026):**
- Extends Microsoft's Zero Trust architecture specifically for AI workloads
- Provides tools and guidance for identity, device, network, data, application, and infrastructure layers applied to AI

**Relevance to whitepaper:** Zero trust for AI agents is not an incremental improvement -- it requires fundamentally different identity and access management. The shift from "authenticate the user, trust the agent" to "verify every agent action independently" is the defining architectural change for enterprise AI security in 2026.

---

### 8. Google Secure AI Framework (SAIF)

**Source:** Google — "Secure AI Framework"
**URL:** https://saif.google/secure-ai-framework
**Safety Centre:** https://safety.google/intl/en_in/safety/saif/
**Blog announcement:** https://blog.google/innovation-and-ai/technology/safety-security/introducing-googles-secure-ai-framework/
**Google Cloud:** https://cloud.google.com/use-cases/secure-ai-framework
**AI Safety Directory entry:** https://aisecurityandsafety.org/en/frameworks/google-saif/
**CoSAI donation:** https://www.oasis-open.org/2025/09/16/google-donates-secure-ai-framework-saif-data-to-coalition-for-secure-ai/
**Key data points:**

**Six core elements:**
1. Expand strong security foundations to the AI ecosystem (secure-by-default infrastructure)
2. Extend detection and response to bring AI into an organisation's threat universe
3. Automate defences to keep pace with existing and new threats
4. Harmonise platform-level controls to ensure consistent security across the organisation
5. Adapt controls to adjust mitigations and create faster feedback loops for AI deployment
6. Contextualise AI system risks in surrounding business processes

**Four component areas:** Data, Infrastructure, Model, Application
**Threats addressed:** Model theft, training data poisoning, prompt injection, confidential data extraction, model source tampering

**SAIF Risk Assessment tool:** Helps organisations identify and mitigate AI-specific vulnerabilities through a structured self-assessment

**CoSAI donation (September 2025):**
- Google donated SAIF data to the Coalition for Secure AI (CoSAI), an OASIS Open Project
- CoSAI-RM (Risk Model) provides a structured map of the AI security landscape and common language for addressing vulnerabilities
- 45+ partner organisations, including Anthropic, Cisco, IBM, Meta, Microsoft, NVIDIA, and OpenAI

**Relevance to whitepaper:** SAIF is the most comprehensive vendor-published AI security framework, and its donation to CoSAI/OASIS signals industry convergence toward shared security standards. The six-element structure provides a practical implementation checklist for enterprise AI security programmes.

---

### 9. NIST AI Security Guidelines

**Source (AI RMF):** NIST — "AI Risk Management Framework (AI RMF 1.0)"
**URL:** https://www.nist.gov/itl/ai-risk-management-framework
**PDF:** https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf
**Source (GenAI Profile):** NIST — "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)" (July 2024)
**Source (Cyber AI Profile):** NIST — "Cybersecurity Framework Profile for Artificial Intelligence (NISTIR 8596)" (December 2025, preliminary draft)
**URL:** https://www.nist.gov/news-events/news/2025/12/draft-nist-guidelines-rethink-cybersecurity-ai-era
**Source (Adversarial ML):** NIST AI 100-2e2025 — Adversarial Machine Learning Taxonomy (March 2025 update)
**PDF:** https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf
**Key data points:**

**AI RMF 1.0 (January 2023):**
- Voluntary framework for managing AI risks to individuals, organisations, and society
- Defines characteristics of trustworthy AI: validity, reliability, safety, security, resilience, accountability, transparency, explainability, privacy-enhancement, and fairness with managed bias
- Four core functions: Govern, Map, Measure, Manage
- Now spans the full AI lifecycle: concept, design, data acquisition, model development, testing, deployment, monitoring, retirement

**GenAI Profile (NIST AI 600-1, July 2024):**
- Specific guidance for managing unique generative AI risks including prompt injection, confabulation, CBRN information generation, data privacy, environmental impact, and obscene/degrading content

**Cybersecurity Framework Profile for AI (NISTIR 8596, December 2025 draft):**
- Maps NIST Cybersecurity Framework (CSF 2.0) to AI-specific security concerns
- Three overlapping focus areas: (1) securing AI systems, (2) conducting AI-enabled cyber defence, (3) thwarting AI-enabled cyberattacks
- Open for public comment until January 30, 2026

**NIST AI 100-2e2025 — Adversarial ML Taxonomy (March 2025 update):**
- Extended adversarial ML attack taxonomy to cover autonomous AI agent vulnerabilities for the first time
- New categories: indirect prompt injection, agent memory poisoning, supply chain attacks on agent tools
- Referenced by CSA in establishing NIST AI agent red-teaming standards (March 2026)
- Source: https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/

**Relevance to whitepaper:** NIST provides the government-endorsed framework for AI risk management. The December 2025 Cyber AI Profile is significant because it explicitly bridges the well-established CSF 2.0 (used by thousands of organisations) with AI-specific security requirements, providing a familiar on-ramp for security teams already operating under NIST frameworks.

---

### 10. NSA and Five Eyes AI Security Guidance

**Source (MCP Security):** NSA Artificial Intelligence Security Center — "Model Context Protocol (MCP): Security Design Considerations" (May 2026)
**URL:** https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf
**Press release:** https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/
**Source (Agentic AI):** NSA + ASD ACSC + CCCS + NCSC-NZ + NCSC-UK — "Careful Adoption of Agentic AI Services"
**URL:** https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4475134/nsa-joins-the-asds-acsc-and-others-to-release-guidance-on-agentic-artificial-in/
**Source (Data Security):** NSA + CISA + FBI + Five Eyes — "AI Data Security: Best Practices for Securing Data Used to Train & Operate AI Systems" (May 2025)
**URL:** https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/3741371/nsa-publishes-guidance-for-strengthening-ai-system-security/
**Source (OT Integration):** CISA + ASD ACSC — "Principles for Secure Integration of AI in Operational Technology"
**URL:** https://www.cisa.gov/resources-tools/resources/principles-secure-integration-artificial-intelligence-operational-technology
**Key data points:**

**MCP Security Design Considerations (May 2026):**
- First government-issued security guidance specifically for Model Context Protocol
- Addresses MCP server credential aggregation as a single point of failure
- Focuses on authentication, authorisation, and audit of MCP-connected tools

**Five Eyes Agentic AI Guidance:**
- Joint guidance from US (NSA), Australia (ASD ACSC), Canada (CCCS), New Zealand (NCSC-NZ), and UK (NCSC-UK)
- Agentic AI systems inherit all LLM risks and contribute to an evolving cybersecurity landscape
- Emphasises that autonomy introduces fundamentally different risk profiles from interactive AI

**AI Data Security Best Practices (May 2025):**
- Joint guidance from NSA, CISA, FBI, and international partners
- Covers securing data used to train and operate AI systems
- Addresses data poisoning, supply chain integrity, and operational data protection

**Relevance to whitepaper:** Government and intelligence community guidance carries weight in regulated industries and defence supply chains. The NSA's MCP security publication (May 2026) is particularly significant as the first government acknowledgement of MCP-specific security risks, and the Five Eyes joint guidance signals international consensus on agentic AI risks.

---

### 11. Anthropic's Enterprise Safety Architecture

**Source (RSP):** Anthropic — "Responsible Scaling Policy Version 3.0"
**URL:** https://www.anthropic.com/news/responsible-scaling-policy-v3
**Full policy:** https://anthropic.com/responsible-scaling-policy/rsp-v3-0
**Source (Constitution):** Anthropic — "Claude's Constitution"
**URL:** https://www.anthropic.com/constitution
**Source (ASL-3):** Anthropic — "Activating AI Safety Level 3 Protections" (May 2025)
**URL:** https://www.anthropic.com/news/activating-asl3-protections
**Source (enterprise adoption):** VentureBeat — "How Anthropic's Safety Obsession Became Enterprise AI's Killer Feature"
**URL:** https://venturebeat.com/security/how-anthropics-safety-obsession-became-enterprise-ais-killer-feature
**Source (Claude Security):** DevOps.com — "Anthropic Brings AI-Powered Security Scanning to Enterprise Teams with Claude Security"
**URL:** https://devops.com/anthropic-brings-ai-powered-security-scanning-to-enterprise-teams-with-claude-security/
**Key data points:**

**Responsible Scaling Policy (RSP):**
- AI Safety Levels (ASL) that scale safeguards with model capability
- ASL-1: No meaningful catastrophic risk (historical/toy models)
- ASL-2: Current standard -- moderate risk with standard safety testing
- ASL-3: Substantially increased risk of catastrophic misuse OR low-level autonomous capabilities. Activated May 2025
- ASL-4+: Not yet defined; will require even stricter measures
- ASL-3 Security Standard includes unusually strong security requirements and commitment not to deploy if models show meaningful catastrophic misuse risk under adversarial testing by world-class red-teamers
- ASL-3 Deployment Standard covers targeted measures against CBRN weapons development

**Constitutional AI:**
- Self-governing ethical framework baked into models at training stage
- Constitution draws from: UN Declaration of Human Rights, Apple's terms of service, DeepMind Sparrow Principles, non-Western perspectives
- Tool permission-based architecture requires explicit approval for agentic actions
- 10+ million neural features monitored during evaluation using dictionary learning, mapping to human-interpretable concepts including deception, sycophancy, and bias

**Claude Security (2026):**
- Launched in public beta for Claude Enterprise customers
- Scans entire codebases for vulnerabilities and generates targeted patches
- Powered by Claude Opus 4.7 with built-in guardrails (not bolted-on filters) that detect and block prohibited cybersecurity uses

**Market impact:**
- Anthropic now commands 40% of enterprise LLM spend vs. OpenAI's 27%
- Grew from under 1,000 to over 300,000 enterprise customers in two years
- Safety-first positioning has become a competitive advantage in enterprise sales

**Relevance to whitepaper:** Anthropic demonstrates that safety is not a tax on capability -- it is a market differentiator. The RSP/ASL framework provides the clearest example of "graduated security controls that scale with capability," a pattern directly applicable to enterprise AI governance.

---

### 12. Microsoft Responsible AI in Practice

**Source (Transparency Report):** Microsoft — "2025 Responsible AI Transparency Report"
**URL:** https://www.microsoft.com/en-us/corporate-responsibility/responsible-ai-transparency-report/
**PDF:** https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Responsible-AI-Transparency-Report-2025-vertical.pdf
**Source (Framework):** Microsoft — "Responsible AI Principles and Approach"
**URL:** https://www.microsoft.com/en-us/ai/principles-and-approach
**Source (Zero Trust for AI):** Microsoft Security Blog — "Announcing Zero Trust for AI" (March 2026)
**URL:** https://www.microsoft.com/en-us/security/blog/2026/03/19/new-tools-and-guidance-announcing-zero-trust-for-ai/
**Key data points:**

**Six principles:** Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability

**2025 Transparency Report highlights:**
- Mature, scaled governance programme built around NIST's Govern-Map-Measure-Manage loop
- Frontier Governance Framework for frontier capabilities
- Expanded red teaming across 67 operations
- 77% of 2024 Sensitive Uses consultations related to generative AI
- All 2024 incidents stemmed from malicious users circumventing safety systems, not technical malfunctions
- PromptShield from Azure AI deployed to defend against prompt injection attacks
- Expanded risk measurement and mitigation beyond text to images, audio, video, and agentic systems

**Azure AI Content Safety:**
- Content classifiers targeting toxicity, violence, and misinformation
- PromptShield for prompt injection defence
- Expanded modality support (text, images, audio, video)
- Support for agentic systems

**PyRIT (Python Risk Identification Tool for generative AI):**
- Open-source red-teaming framework
- Integrates with Azure AI Foundry
- AI Red Teaming Agent released April 2025 for automated testing workflows
- Attack library covers prompt injection, jailbreaking, and content safety testing

**Relevance to whitepaper:** Microsoft's approach illustrates how to operationalise responsible AI at enterprise scale -- governance frameworks, red-teaming tooling (PyRIT), content safety infrastructure (Azure AI), and transparency reporting. The finding that all 2024 incidents came from malicious circumvention rather than technical failure highlights that adversarial resilience is the core challenge.

---

### 13. AI Threat Modelling Frameworks

**Source (MAESTRO):** Cloud Security Alliance — "Agentic AI Threat Modeling Framework: MAESTRO" (February 2025)
**URL:** https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro
**GitHub:** https://github.com/CloudSecurityAlliance/MAESTRO
**Source (STRIDE-AI):** arXiv — "STRIDE-AI: A Threat Modeling Framework for Generative AI Security Assessment"
**URL:** https://arxiv.org/html/2605.17163
**Source (multi-agent):** arXiv — "Securing Agentic AI: A Comprehensive Threat Model and Mitigation Framework for Generative AI Agents"
**URL:** https://arxiv.org/pdf/2504.19956
**Source (MCP threat model):** Detection at Scale — "Building Threat Models with MCP and AI Agents"
**URL:** https://www.detectionatscale.com/p/threat-modeling-ai-agents-mcp
**Key data points:**

**MAESTRO (Multi-Agent Environment, Security, Threat, Risk, and Outcome):**
- Created by Cloud Security Alliance specifically for agentic AI
- Seven-layer architecture for identifying, assessing, and mitigating risks
- Addresses adversarial attacks, goal misalignment, and malicious agent collusion
- Builds upon STRIDE, PASTA, and LINDDUN with AI-specific considerations
- Two threat categories: Traditional Threats and Agentic Threats (arising from non-determinism, autonomy, and no trust boundary)
- AI-powered MAESTRO Threat Analyzer tool available (supports Gemini, OpenAI, Ollama)
- Applied to real-world protocols: Google A2A, OpenAI Responses API
- February 2026: Extended to CI/CD pipeline integration

**STRIDE-AI:**
- Bridges NIST AI RMF (high-level risk standards) and OWASP LLM Top 10 (technical vulnerability taxonomy)
- Six-phase assessment lifecycle adapting classical STRIDE for AI systems

**ATFAA (Advanced Threat Framework for Autonomous AI Agents):**
- Organises agent-specific risks in a structured taxonomy

**SHIELD:**
- Practical mitigation strategies framework designed to reduce enterprise exposure

**Market context:**
- 61% of organisations deploying AI lack a dedicated security strategy (HiddenLayer 2025 AI Threat Landscape Report)

**Relevance to whitepaper:** MAESTRO is the leading AI-specific threat modelling framework. Its seven-layer architecture provides the structured approach enterprises need to move from ad hoc AI security to systematic risk management. The 61% statistic (no dedicated AI security strategy) represents the gap that threat modelling frameworks aim to close.

---

### 14. AI Supply Chain Security

**Source (market impact):** CyberSecFeed — "AI Model Poisoning: The $12B Supply Chain Crisis Nobody Saw Coming"
**URL:** https://docs.cybersecfeed.com/blog/ai-model-poisoning-supply-chain-crisis
**Source (Hugging Face):** CISO Marketplace — "Poisoned at the Source: Training Data Attacks, Model Supply Chain Risks, and the Open-Source AI Security Crisis"
**URL:** https://cisomarketplace.com/blog/ai-model-supply-chain-training-data-poisoning-open-source-risk
**Source (NIST taxonomy):** NIST AI 100-2e2025
**PDF:** https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf
**Source (DOD/NDAA):** DOD — NDAA FY2026 AI security requirements
**URL:** https://www.crowell.com/en/insights/client-alerts/cmmc-for-ai-defense-policy-law-imposes-ai-security-framework-and-requirements-on-contractors
**Source (DOD/Pentagon guidance):** US Department of Defense — "Artificial Intelligence and Machine Learning Supply Chain Risks and Mitigations" (March 2026)
**PDF:** https://media.defense.gov/2026/Mar/04/2003882809/-1/-1/0/AI_ML_SUPPLY_CHAIN_RISKS_AND_MITIGATIONS.PDF
**Key data points:**

**Scale of the threat:**
- $12 billion in losses from compromised ML models in 2025
- Three Fortune 500 companies had AI fraud detection systems turned into fraud enablers
- A major healthcare provider's diagnostic AI began recommending dangerous treatments
- Financial sector saw compromised trading algorithms cost investors billions

**Model repository vulnerabilities:**
- 23% of top 1,000 most-downloaded models on Hugging Face had been compromised at some point (March 2025)
- 100 poisoned models uploaded to Hugging Face allowed attackers to inject malicious code into user machines
- LoRA adapters (small fine-tuning files, typically tens of megabytes) perceived as lower-risk but have full access to modify model behaviour -- can introduce backdoors indistinguishable from legitimate fine-tuning

**Attack characteristics:**
- Poisoned models pass all standard validation tests, security scans, and human review
- Malicious behaviour only manifests under specific conditions (certain input patterns, date triggers, or operational contexts)
- Data poisoning attacks now occur across the entire AI lifecycle, not just during initial training
- Attacks have evolved to target fine-tuning, RAG data sources, and agent tool descriptions

**Government response (NDAA FY2026):**
- DOD must establish department-wide cybersecurity and governance policy for AI/ML
- Framework to be incorporated into DFARS and CMMC programme
- Must address lifecycle security, model tampering, and data leakage
- Cross-functional team for AI model assessment and oversight required by June 2026
- Assessment framework covering performance standards, testing procedures, security requirements, and ethical use principles by June 2027

**MCP supply chain risks:**
- First malicious MCP package appeared in September 2025, operated undetected for two weeks while exfiltrating email data
- CVE-2025-49596 (CVSS 9.4): Arbitrary commands through unauthenticated MCP Inspector instances
- CoSAI/OASIS released "Model Context Protocol Security" white paper in January 2026
- Source: https://www.oasis-open.org/2026/01/27/coalition-for-secure-ai-releases-extensive-taxonomy-for-model-context-protocol-security/

**Relevance to whitepaper:** AI supply chain security is fundamentally different from software supply chain security. Models cannot be scanned like code; poisoned weights are statistically indistinguishable from clean weights. The 23% Hugging Face compromise rate and $12B in losses demonstrate this is not theoretical. The DOD/NDAA response shows governments are now treating AI supply chain as a national security concern.

---

### 15. AI Red-Teaming Methodologies

**Source (tools comparison):** Giskard — "Best 7 Tools for AI Red Teaming in 2025 to Detect AI Vulnerabilities"
**URL:** https://www.giskard.ai/knowledge/best-ai-red-teaming-tools-2025-comparison-features
**Source (NIST):** NIST AI 100-2 update (March 2025) + CSA research note
**URL:** https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/
**Source (academic):** arXiv — "Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours"
**URL:** https://arxiv.org/html/2605.04019v1
**Source (Georgetown CSET):** CSET — "AI Red-Teaming Design: Threat Models and Tools"
**URL:** https://cset.georgetown.edu/article/ai-red-teaming-design-threat-models-and-tools/
**Key data points:**

**Leading enterprise tools:**
1. Microsoft PyRIT: Integrates with Azure AI Foundry, AI Red Teaming Agent (April 2025), covers prompt injection, jailbreaking, and content safety testing
2. NVIDIA Garak: LLM vulnerability scanning with extensive probe library; v0.14.0 adding enhanced agentic AI support
3. Anthropic internal red-teaming: ASL-3 requires adversarial testing by "world-class red-teamers" before deployment
4. Promptfoo: Open-source LLM testing framework supporting OWASP LLM Top 10 and Agentic Top 10 benchmarks

**Standards evolution:**
- NIST AI 100-2 (March 2025): First extension of adversarial ML attack taxonomy to autonomous AI agents
- Covers: indirect prompt injection, agent memory poisoning, supply chain attacks on agent tools
- OWASP Top 10 for Agentic Applications (December 2025): Codifies the threat landscape for autonomous agents

**Enterprise methodology best practices:**
- Blend human creativity with automated tooling
- Integrate red-team tests into CI/CD pipelines
- Measure against OWASP LLM Top 10 and CyberSecEval benchmarks
- Test both direct and indirect prompt injection
- Evaluate tool-use safety for agentic systems
- Microsoft expanded to 67 red-teaming operations in 2025

**Relevance to whitepaper:** AI red-teaming has matured from research curiosity to enterprise operational practice. The key shift is from one-time assessments to continuous, CI/CD-integrated adversarial testing. Tool availability (PyRIT, Garak, Promptfoo) lowers the barrier to entry, but human creativity remains essential for discovering novel attack vectors.

---

### 16. GDPR, EU AI Act, and the Regulatory Landscape

**Source (EU AI Act):** EU Artificial Intelligence Act
**URL:** https://artificialintelligenceact.eu/high-level-summary/
**Source (compliance timeline):** LegalNodes — "EU AI Act 2026 Updates: Compliance Requirements and Business Risks"
**URL:** https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks
**Source (GDPR + AI):** Crescendo AI — "AI and GDPR in 2026"
**URL:** https://www.crescendo.ai/blog/ai-and-gdpr
**Source (CSA Lab Space):** CSA — "EU AI Act High-Risk Deadline: Enterprise Readiness Gap"
**URL:** https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-compliance-deadline-20/
**Source (Digital Omnibus):** IAPP — "European Commission Proposes Significant Reforms to GDPR, AI Act"
**URL:** https://iapp.org/news/a/european-commission-proposes-significant-reforms-to-gdpr-ai-act
**Key data points:**

**EU AI Act timeline:**
- February 2, 2025: Bans on prohibited AI practices took effect (social scoring, real-time biometric mass surveillance, emotion recognition in workplaces/schools, manipulation of vulnerable groups)
- August 2, 2025: Transparency obligations for general-purpose AI (GPAI) models
- August 2, 2026: Full enforcement for high-risk AI systems (Articles 9-17 provider requirements, Article 26 deployer requirements)
- NOTE: November 2025 Digital Omnibus package proposes delaying Annex III compliance to December 2, 2027 due to late arrival of harmonised standards

**High-risk AI system requirements:**
- Risk management system
- Data governance and quality management
- Technical documentation and record-keeping
- Transparency and information provision to users
- Human oversight capabilities
- Accuracy, robustness, and cybersecurity standards
- Conformity assessment, CE marking, EU database registration

**Penalties:**
- Up to EUR 35 million or 7% of global annual revenue for AI Act violations (double GDPR's maximum)
- EUR 1.2 billion in GDPR fines issued during 2024 alone; cumulative EUR 5.88 billion since GDPR took effect

**GDPR + AI intersection:**
- LLMs rarely achieve anonymisation standards
- Controllers deploying third-party LLMs must conduct comprehensive legitimate interests assessments
- GDPR's data minimisation principle conflicts with AI's data-hungry nature
- Right to explanation becomes critical for AI-driven decisions affecting individuals
- Data residency requirements complicate multi-region AI deployments

**Gartner AI TRiSM prediction:**
- Through 2026, 80%+ of unauthorised AI transactions will be caused by internal policy violations (information oversharing, unacceptable use, misguided AI behaviour) rather than malicious external attacks
- Source: https://www.gartner.com/en/articles/ai-trust-and-ai-risk

**Relevance to whitepaper:** The regulatory landscape creates a dual compliance burden (GDPR + AI Act) with substantially higher penalties (7% revenue vs. 4% for GDPR alone). The potential delay of Annex III requirements to December 2027 gives enterprises additional time but should not reduce urgency. The Gartner finding that 80%+ of AI compliance violations are internal (not attacks) reframes the governance challenge.

---

### 17. Coalition for Secure AI (CoSAI) and Industry Convergence

**Source:** OASIS Open — Coalition for Secure AI
**URL:** https://www.coalitionforsecureai.org/
**Source (MCP Security):** OASIS — "Coalition for Secure AI Releases Extensive Taxonomy for Model Context Protocol Security" (January 2026)
**URL:** https://www.oasis-open.org/2026/01/27/coalition-for-secure-ai-releases-extensive-taxonomy-for-model-context-protocol-security/
**Source (Agentic Identity):** OASIS — "Coalition for Secure AI Unveils New Agentic Identity and Security Research" (May 2026)
**URL:** https://www.oasis-open.org/2026/05/06/coalition-for-secure-ai-unveils-new-agentic-identity-and-security-research-following-high-profile-sessions-at-rsac-2026/
**Source (SAIF donation):** OASIS — "Google Donates Secure AI Framework (SAIF) Data to CoSAI" (September 2025)
**URL:** https://www.oasis-open.org/2025/09/16/google-donates-secure-ai-framework-saif-data-to-coalition-for-secure-ai/
**Key data points:**

**Membership and scope:**
- 40+ organisations including Anthropic, Cisco, Google, IBM, Meta, Microsoft, NVIDIA, and OpenAI
- Operates under OASIS Open, an international standards and open-source consortium
- Forum for creating vendor-neutral standards for securing enterprise AI development and deployments

**Key deliverables (2025-2026):**
1. CoSAI-RM (Risk Model): Structured map of AI security landscape with common vulnerability language
2. MCP Security white paper (January 2026): First industry taxonomy of MCP-specific security risks
3. Agentic Identity and Access Management research paper (May 2026)
4. "The Future of Agentic Security: From Chatbots to Autonomous Swarms" (May 2026)
5. Model signing and incident response frameworks

**Relevance to whitepaper:** CoSAI represents industry convergence on AI security standards. The participation of competing companies (Anthropic, Google, Microsoft, OpenAI) in a shared security framework signals that AI security is becoming a pre-competitive concern -- similar to how TLS/HTTPS became a shared standard rather than a competitive differentiator.

---

### 18. Gartner AI TRiSM and Market Data

**Source (TRiSM):** Gartner — "AI Trust, Risk and Security Management"
**URL:** https://www.gartner.com/en/articles/ai-trust-and-ai-risk
**Source (market guide):** Gartner — "Market Guide for AI Trust, Risk and Security Management" (2025)
**URL:** https://www.gartner.com/en/documents/6185655
**Source (spending forecast):** Gartner — "Worldwide End-User Spending on Information Security to Total $213 Billion in 2025"
**URL:** https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025
**Source (AI spending):** Gartner — "Worldwide AI Spending Will Total $2.5 Trillion in 2026"
**URL:** https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026
**Source (spending gap):** Software Strategies Blog — "Gartner's $244.2B Security Forecast Shows Enterprises Spend 17x More on AI Tools than Securing AI Itself"
**URL:** https://softwarestrategiesblog.com/2026/03/24/information-security-spending-2026/
**Key data points:**

**AI TRiSM framework:**
- Four-layer architecture: AI governance, AI runtime inspection and enforcement, information governance, infrastructure and stack
- Spans the entire AI lifecycle: design, development, deployment, monitoring
- Through 2026: 80%+ of unauthorised AI transactions caused by internal policy violations, not external attacks

**Market sizing:**
- Global information security spending: $244.2B in 2026 (up 13.3% YoY)
- AI cybersecurity spending: $25.9B (2025) growing to $51.3B (2026) -- nearly doubling. Expected to reach ~$86B by 2027
- AI-amplified security market: $49B (2025) projected to $160B by 2029
- Total global AI spending: $2.59 trillion in 2026 (up 47%)

**The 17x spending gap:**
- Enterprises spend 17x more on AI tools than on securing AI itself
- This is the single most striking data point for enterprise AI security investment decisions

**Adoption forecast:**
- 75%+ of enterprises will use AI-amplified cybersecurity products by 2028 (up from <25% in 2025)
- AI security platforms expected to become a strategic standard for 2026

**Relevance to whitepaper:** The 17x spending gap (AI tools vs. AI security) is the defining metric for the whitepaper's security chapter. It quantifies the systemic underinvestment in AI security relative to AI adoption. Combined with the 80% internal-violation prediction, it argues for governance and policy investment, not just technical controls.

---

### 19. MCP Security: The Emerging Attack Surface

**Source (comprehensive guide):** Practical DevSecOps — "MCP Security: The Complete Guide to Securing Model Context Protocol in 2026"
**URL:** https://www.practical-devsecops.com/mcp-security-guide/
**Source (NSA):** NSA — "Model Context Protocol (MCP): Security Design Considerations"
**URL:** https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf
**Source (OWASP MCP Top 10):** Referenced in multiple sources, published 2025
**Source (breach timeline):** AuthZed — "A Timeline of Model Context Protocol (MCP) Security Breaches"
**URL:** https://authzed.com/blog/timeline-mcp-breaches
**Source (vulnerability analysis):** Practical DevSecOps — "MCP Security Vulnerabilities: How to Prevent Prompt Injection and Tool Poisoning Attacks in 2026"
**URL:** https://www.practical-devsecops.com/mcp-security-vulnerabilities/
**Key data points:**

**Protocol context:**
- MCP released by Anthropic in late 2024, now backed by OpenAI, Google, Microsoft, and Block
- Rapidly becoming the standard for connecting AI agents to external tools and data sources
- MCP servers aggregate credentials for multiple enterprise services, creating single points of failure

**Key vulnerabilities:**
1. Prompt Injection: Hidden instructions in data or tool outputs hijack the agent
2. Tool Poisoning: Malicious instructions planted inside tool descriptions and metadata
3. Rug Pulls: Clean tool silently updates with malicious behaviour with no re-approval or alert
4. Confused Deputy: MCP server acts with broader privileges than the requesting user

**Incidents:**
- September 2025: First malicious MCP package appeared, operated undetected for two weeks exfiltrating email data
- CVE-2025-49596 (CVSS 9.4): Arbitrary commands through unauthenticated MCP Inspector instances

**OWASP MCP Top 10 (2025):** First proper classification of MCP-specific risks

**Relevance to whitepaper:** MCP is rapidly becoming foundational infrastructure for agentic AI. Its security posture in 2025-2026 is analogous to early API security -- powerful functionality deployed before security patterns mature. The NSA issuing MCP-specific guidance in May 2026 signals the urgency. Enterprise architects must treat MCP servers as high-value targets requiring the same security rigour as API gateways.

---

### 20. Multi-Agent System Security Architecture

**Source (architecture):** arXiv — "Architecture Matters for Multi-Agent Security"
**URL:** https://arxiv.org/html/2604.23459v1
**Source (enterprise platforms):** Mindra — "Enterprise AI Agent Platforms in 2026"
**URL:** https://mindra.co/blog/enterprise-ai-agent-platforms-2026-integration-criteria
**Source (practical guide):** ClickIT — "Multi-Agent System Architecture Guide for 2026"
**URL:** https://www.clickittech.com/ai/multi-agent-system-architecture/
**Key data points:**

**Architecture evolution:**
- 2025: Hub-and-spoke (central orchestrator controlling all agents)
- 2026: Composable agent mesh architecture (agents dynamically form task graphs, broadcast structured capability manifests including compliance tags, data residency, and real-time load)

**Security challenges unique to multi-agent systems:**
- Collusion: Agents coordinating to circumvent safety controls
- Infection-style attacks: Viral misalignment via subliminal prompting that spreads between agents
- Privilege escalation through delegation chains
- Inter-agent communication interception and spoofing (OWASP ASI07)
- Cascading failures across agent networks (OWASP ASI08)
- Emergent behaviour: Groups of safe individual agents producing unsafe collective outcomes

**Enterprise adoption:**
- By mid-2026, 40%+ of Fortune 1000 companies run at least one production AI agent workflow
- Three-quarters of companies cite security, compliance, and auditability as mandatory prerequisites for agent deployment

**Relevance to whitepaper:** Multi-agent systems introduce emergent security risks that do not exist in single-agent architectures. The shift from hub-and-spoke to mesh architecture compounds these risks by removing the central control point. This is the frontier of AI security -- there are no established patterns, and the threat models are still being developed.

---

## Identified Gaps

1. **Quantified enterprise ROI of AI security investment:** Sparse data on cost-benefit of specific security controls. The 17x spending gap is striking but the return on closing it is not well-quantified beyond incident cost avoidance
2. **Industry-specific AI security benchmarks:** Healthcare, financial services, and critical infrastructure have different risk profiles, but most frameworks are sector-agnostic
3. **AI security workforce data:** No reliable statistics on the number of AI security specialists vs. demand, or training pipeline adequacy
4. **Longitudinal incident trend data:** Adversa AI's 2025 report is the best available but covers only one year. Multi-year trend analysis comparing AI incidents to traditional application security incidents is lacking
5. **Enterprise AI security maturity models:** No widely-adopted maturity model (akin to CMMI for software or NIST CSF tiers) specifically for AI security posture assessment
6. **Cross-border AI security cooperation:** Limited data on how multinational enterprises handle AI security across jurisdictions with different regulatory requirements (EU AI Act vs. US Executive Orders vs. China's AI regulations)
7. **Cost of AI red-teaming at scale:** Enterprise cost benchmarks for continuous AI red-teaming programmes are not publicly available

---

## Recommended Whitepaper Sections

### Section 6: AI Security & Trust at Scale

**6.1 The AI Security Landscape: A New Category of Risk**
- AI security differs fundamentally from application security (non-determinism, autonomy, no trust boundary)
- The 17x spending gap: enterprise underinvestment in AI security
- OWASP Top 10 for LLM + Agentic as the twin taxonomies
- Real-world incident evidence: from Samsung (2023) to EchoLeak/Copilot RCE (2025)

**6.2 The Prompt Injection Problem: Enterprise's Unsolved Challenge**
- OpenAI's admission: may never be fully patched
- Current state-of-the-art defences (PromptArmor, layered defence)
- Enterprise defence readiness gap (34.7% have deployed dedicated solutions)
- Strategic reframe: from "prevent all injection" to "assume breach, limit blast radius"

**6.3 Enterprise AI Security Architecture**
- AI gateway as the control plane (10-25% adoption today, Gartner predicts 50% by 2028)
- Defence-in-depth layers: identity, input security, routing, output security, observability, cost governance
- Zero-trust for AI agents (ZTAI): every action authenticated, authorised, audited
- Sandboxing hierarchy: gVisor (internal) > Firecracker (multi-tenant) > Kata (untrusted code)
- MCP as the emerging attack surface requiring gateway-level protection

**6.4 Frameworks and Standards**
- Google SAIF (six elements), NIST AI RMF + Cyber AI Profile, Gartner AI TRiSM (four layers)
- MAESTRO threat modelling framework for agentic AI
- NSA/Five Eyes guidance for government and regulated industries
- CoSAI/OASIS as industry convergence vehicle
- EU AI Act + GDPR dual compliance burden

**6.5 Securing Multi-Agent Systems**
- OWASP Agentic Top 10 as the security checklist
- Architecture-dependent risks: hub-and-spoke vs. mesh
- Emergent threats: collusion, infection-style attacks, cascading failures
- Agentic Trust Framework (CSA) for governance

**6.6 AI Supply Chain Security**
- $12B in 2025 losses from compromised models
- Model repository vulnerabilities (23% of top Hugging Face models compromised)
- MCP supply chain risks (tool poisoning, rug pulls)
- Government response (NDAA FY2026, DOD frameworks)

**6.7 Safety as a Market Differentiator**
- Anthropic RSP/ASL framework: graduated safety controls that scale with capability
- Constitutional AI: ethical principles baked into training, not bolted on
- Microsoft Responsible AI: governance at 67-operation scale
- Safety-first positioning as competitive advantage (Anthropic: 40% enterprise LLM spend)

**6.8 AI Red-Teaming: From Research to Operations**
- Tools: PyRIT, Garak, Promptfoo -- lowering the barrier to entry
- CI/CD integration for continuous adversarial testing
- NIST AI 100-2 agent-specific attack taxonomy
- The irreplaceable role of human creativity in discovering novel attack vectors
