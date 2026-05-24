import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = {
  title: "TensAI Reusables — Curated Reference Repos",
  description:
    "59 curated open-source repos mapped to the 18-concept Spine. Clone, learn, adapt.",
};

interface Repo {
  name: string;
  original: string;
  subProblem: string;
  stars: string;
}

interface ConceptGroup {
  concept: string;
  href: string;
  repos: Repo[];
}

interface PillarSection {
  pillar: string;
  numeral: string;
  groups: ConceptGroup[];
}

const DATA: PillarSection[] = [
  {
    pillar: "The Craft",
    numeral: "III",
    groups: [
      {
        concept: "Memory & Context",
        href: "/craft/memory-context",
        repos: [
          { name: "tensai-memory-layer", original: "mem0ai/mem0", subProblem: "Universal memory layer — semantic, episodic, factual", stars: "56k" },
          { name: "tensai-memory-graph", original: "getzep/graphiti", subProblem: "Temporal knowledge graph memory", stars: "23k" },
          { name: "tensai-memory-mcp", original: "rohitg00/agentmemory", subProblem: "Persistent memory for coding agents via MCP", stars: "9.4k" },
          { name: "tensai-memory-compress", original: "aiming-lab/SimpleMem", subProblem: "Lifelong memory with semantic compression", stars: "3.3k" },
          { name: "tensai-memory-zettelkasten", original: "agiresearch/A-mem", subProblem: "Self-organizing dynamic memory", stars: "973" },
          { name: "tensai-context-engine", original: "ace-agent/ace", subProblem: "Self-improving context via reflection", stars: "1k" },
        ],
      },
      {
        concept: "Harness Engineering",
        href: "/craft/harness-engineering",
        repos: [
          { name: "tensai-harness-control", original: "emcie-co/parlant", subProblem: "Interaction control harness for customer-facing agents", stars: "18.1k" },
          { name: "tensai-harness-open", original: "HKUDS/OpenHarness", subProblem: "Full Agent = Model + Harness reference", stars: "12.6k" },
          { name: "tensai-harness-learn", original: "walkinglabs/learn-harness-engineering", subProblem: "Harness engineering tutorial", stars: "4.4k" },
        ],
      },
      {
        concept: "RAG & Its Evolutions",
        href: "/craft/rag-evolutions",
        repos: [
          { name: "tensai-rag-graph", original: "HKUDS/LightRAG", subProblem: "Lightweight graph RAG", stars: "35k" },
          { name: "tensai-rag-corrective", original: "HuskyInSalt/CRAG", subProblem: "Self-correcting / corrective RAG", stars: "300" },
          { name: "tensai-rag-chunking", original: "chonkie-inc/chonkie", subProblem: "Multi-strategy chunking library", stars: "3.7k" },
          { name: "tensai-rag-late-chunk", original: "jina-ai/late-chunking", subProblem: "Context-preserving chunk embeddings", stars: "490" },
          { name: "tensai-rag-reranker", original: "AnswerDotAI/rerankers", subProblem: "Unified reranker API", stars: "1.6k" },
          { name: "tensai-rag-eval", original: "explodinggradients/ragas", subProblem: "RAG evaluation framework", stars: "12.9k" },
        ],
      },
      {
        concept: "Code & Doc Indexing",
        href: "/craft/code-doc-indexing",
        repos: [
          { name: "tensai-index-graph", original: "tirth8205/code-review-graph", subProblem: "Codebase knowledge graph (tree-sitter + MCP)", stars: "17.2k" },
          { name: "tensai-index-incremental", original: "cocoindex-io/cocoindex", subProblem: "Incremental data indexing engine", stars: "6.9k" },
          { name: "tensai-index-search", original: "probelabs/probe", subProblem: "Semantic code search (ripgrep + tree-sitter)", stars: "1k" },
          { name: "tensai-index-memory", original: "DeusData/codebase-memory-mcp", subProblem: "High-perf code intelligence (155 languages)", stars: "2.5k" },
        ],
      },
      {
        concept: "Tools & MCP",
        href: "/craft/tools-mcp",
        repos: [
          { name: "tensai-mcp-servers", original: "modelcontextprotocol/servers", subProblem: "Official MCP reference server implementations", stars: "86.1k" },
          { name: "tensai-mcp-framework", original: "punkpeye/fastmcp", subProblem: "High-level TypeScript MCP server framework", stars: "3.1k" },
          { name: "tensai-mcp-database", original: "googleapis/mcp-toolbox", subProblem: "Production MCP server for databases", stars: "15.3k" },
          { name: "tensai-mcp-gateway", original: "docker/mcp-gateway", subProblem: "Containerised MCP server management", stars: "1.3k" },
          { name: "tensai-mcp-connect", original: "mcp-use/mcp-use", subProblem: "Agent-to-MCP integration framework", stars: "10k" },
        ],
      },
      {
        concept: "Multi-Agent, Handoffs & A2A",
        href: "/craft/multi-agent",
        repos: [
          { name: "tensai-multi-swarm", original: "openai/swarm", subProblem: "Educational multi-agent with handoffs", stars: "20k" },
          { name: "tensai-multi-router", original: "awslabs/agent-squad", subProblem: "Classifier-based multi-agent routing", stars: "7.6k" },
          { name: "tensai-multi-dag", original: "open-multi-agent/open-multi-agent", subProblem: "Goal-to-DAG orchestration (TypeScript)", stars: "5.5k" },
        ],
      },
      {
        concept: "The Five Patterns",
        href: "/craft/five-patterns",
        repos: [
          { name: "tensai-patterns-canonical", original: "anthropics/claude-cookbooks", subProblem: "Anthropic's canonical five pattern implementations", stars: "5k" },
          { name: "tensai-patterns-mcp", original: "lastmile-ai/mcp-agent", subProblem: "Five patterns + MCP + Temporal durability", stars: "7.9k" },
          { name: "tensai-patterns-minimal", original: "The-Pocket/PocketFlow", subProblem: "100-line minimal agent/workflow core", stars: "9.3k" },
        ],
      },
      {
        concept: "Agents vs Workflows",
        href: "/craft/agents-vs-workflows",
        repos: [
          { name: "tensai-agentic-workflows", original: "githubnext/agentics", subProblem: "Workflow-as-agent patterns", stars: "651" },
        ],
      },
      {
        concept: "AFK & Autonomous Agents",
        href: "/craft/afk-autonomous",
        repos: [
          { name: "tensai-afk-governance", original: "microsoft/agent-governance-toolkit", subProblem: "Kill-switch, policy enforcement, OWASP coverage", stars: "1.5k" },
          { name: "tensai-afk-runner", original: "ColeMurray/background-agents", subProblem: "Self-hosted background agent runner", stars: "1.5k" },
          { name: "tensai-afk-fleet", original: "Yeachan-Heo/oh-my-claudecode", subProblem: "Teams-first multi-agent orchestration", stars: "8.5k" },
          { name: "tensai-afk-credentials", original: "joelhooks/agent-secrets", subProblem: "Agent credential management with kill-switch", stars: "—" },
        ],
      },
      {
        concept: "Evals & Observability",
        href: "/craft/evals-observability",
        repos: [
          { name: "tensai-eval-framework", original: "promptfoo/promptfoo", subProblem: "Prompt/agent/RAG testing with CI/CD", stars: "21k" },
          { name: "tensai-eval-otel", original: "traceloop/openllmetry", subProblem: "OpenTelemetry-native LLM observability", stars: "7k" },
          { name: "tensai-eval-trajectory", original: "langchain-ai/agentevals", subProblem: "Agent trajectory evaluators", stars: "300" },
          { name: "tensai-eval-regression", original: "hidai25/eval-view", subProblem: "Snapshot-based agent regression testing", stars: "100" },
        ],
      },
      {
        concept: "Steering",
        href: "/craft/steering",
        repos: [
          { name: "tensai-steer-vectors", original: "vgel/repeng", subProblem: "Control vectors via representation engineering", stars: "693" },
          { name: "tensai-steer-structured", original: "dottxt-ai/outlines", subProblem: "Structured outputs (Python constrained decoding)", stars: "11.9k" },
          { name: "tensai-steer-grammar", original: "mlc-ai/xgrammar", subProblem: "Fast grammar-based constrained decoding", stars: "1.7k" },
          { name: "tensai-steer-safety", original: "wisent-ai/wisent", subProblem: "RepE for hallucination/safety control", stars: "200" },
        ],
      },
      {
        concept: "The Failure Taxonomy",
        href: "/craft/failure-taxonomy",
        repos: [
          { name: "tensai-failure-diagnosis", original: "microsoft/AgentRx", subProblem: "Agent failure diagnosis from trajectories", stars: "150" },
          { name: "tensai-failure-taxonomy", original: "multi-agent-systems-failure-taxonomy/MAST", subProblem: "Multi-agent failure taxonomy", stars: "328" },
          { name: "tensai-failure-cases", original: "vectara/awesome-agent-failures", subProblem: "Real-world agent failure case studies", stars: "160" },
        ],
      },
    ],
  },
  {
    pillar: "The Operating Model",
    numeral: "II",
    groups: [
      {
        concept: "Skills",
        href: "/operating-model/skills",
        repos: [
          { name: "tensai-skills-collection", original: "addyosmani/agent-skills", subProblem: "Production-grade agent skills + SKILL.md standard", stars: "45.4k" },
          { name: "tensai-skills-standard", original: "microsoft/skills", subProblem: "Agent skills standard and registry", stars: "2.4k" },
        ],
      },
      {
        concept: "Agent Catalog",
        href: "/operating-model/agent-catalog",
        repos: [
          { name: "tensai-catalog-gateway", original: "IBM/mcp-context-forge", subProblem: "Unified discovery (MCP + A2A + REST/gRPC)", stars: "3.8k" },
        ],
      },
    ],
  },
  {
    pillar: "The Groundwork",
    numeral: "I",
    groups: [
      {
        concept: "Token Sourcing",
        href: "/groundwork/token-sourcing",
        repos: [
          { name: "tensai-gateway-perf", original: "maximhq/bifrost", subProblem: "High-performance AI gateway (Go, 23+ providers)", stars: "5.2k" },
          { name: "tensai-gateway-router", original: "ulab-uiuc/LLMRouter", subProblem: "LLM quality-cost routing", stars: "1.9k" },
        ],
      },
      {
        concept: "Security Architecture",
        href: "/groundwork/security-architecture",
        repos: [
          { name: "tensai-security-scanner", original: "NVIDIA/garak", subProblem: "LLM vulnerability scanner (red-teaming)", stars: "7.9k" },
          { name: "tensai-security-guard", original: "protectai/llm-guard", subProblem: "LLM input/output security scanner", stars: "3k" },
          { name: "tensai-security-audit", original: "HeadyZhang/agent-audit", subProblem: "Static security scanner for agents (OWASP)", stars: "172" },
          { name: "tensai-security-sandbox", original: "kubernetes-sigs/agent-sandbox", subProblem: "Kubernetes-native agent sandbox", stars: "2.3k" },
        ],
      },
      {
        concept: "FinOps for AI",
        href: "/groundwork/finops",
        repos: [
          { name: "tensai-finops-pricing", original: "AgentOps-AI/tokencost", subProblem: "Token price database (400+ LLMs)", stars: "2k" },
          { name: "tensai-finops-cache", original: "messkan/prompt-cache", subProblem: "Semantic cache for LLM cost reduction", stars: "231" },
        ],
      },
      {
        concept: "Governance & Risk",
        href: "/groundwork/governance-risk",
        repos: [
          { name: "tensai-govern-pii", original: "microsoft/presidio", subProblem: "PII detection and anonymisation", stars: "8.3k" },
          { name: "tensai-govern-validate", original: "guardrails-ai/guardrails", subProblem: "LLM output validation and guardrails", stars: "6.9k" },
        ],
      },
    ],
  },
];

const TOTAL_REPOS = DATA.reduce((sum, p) => sum + p.groups.reduce((s, g) => s + g.repos.length, 0), 0);

export default function ReusablesPage() {
  return (
    <>
      <SiteNav />

      <main>
        {/* ── Header ───────────────────────────────────────── */}
        <section style={{ paddingTop: "96px", paddingBottom: "48px", paddingLeft: "24px", paddingRight: "24px" }}>
          <div
            className="reusables-hero"
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "48px",
            }}
          >
            <div>
              <Eyebrow>REFERENCE IMPLEMENTATIONS</Eyebrow>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "var(--fg-1)",
                  marginTop: "12px",
                }}
              >
                TensAI Reusables
              </h1>

              <p
                style={{
                  maxWidth: "680px",
                  color: "var(--fg-2)",
                  fontSize: "20px",
                  lineHeight: 1.55,
                  marginTop: "16px",
                }}
            >
              {TOTAL_REPOS} curated open-source repos, each solving one sub-problem from the Spine.
              Clone the one that matches your need. Every repo maps to a concept page that teaches the context.
            </p>
            </div>

            <div className="reusables-hero-icon" style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at center, rgba(109,40,217,0.06), transparent 60%)",
                }}
              />
              <img
                src="/logos/icon-black.svg"
                alt=""
                style={{ width: "min(400px, 25vw)", height: "auto", objectFit: "contain", display: "block", position: "relative" }}
              />
            </div>
          </div>
        </section>

        {/* ── Pillar sections ──────────────────────────────── */}
        {DATA.map((pillar) => (
          <section key={pillar.numeral} style={{ padding: "0 24px 64px" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
              {/* Pillar header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", borderBottom: "1px solid var(--border)", paddingBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(48px, 6vw, 72px)",
                    lineHeight: 0.85,
                    color: "var(--color-surface)",
                    WebkitTextStroke: "1.2px var(--color-midnight)",
                  }}
                >
                  {pillar.numeral}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "var(--fg-1)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pillar.pillar}
                </span>
              </div>

              {/* Concept groups */}
              {pillar.groups.map((group) => (
                <div key={group.concept} style={{ marginBottom: "40px" }}>
                  {/* Concept heading */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <Link
                      href={group.href}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "17px",
                        color: "var(--fg-1)",
                        textDecoration: "none",
                        transition: "color 120ms var(--ease-out)",
                      }}
                    >
                      {group.concept}
                    </Link>
                    <span style={{ fontSize: "12px", color: "var(--fg-3)" }}>
                      {group.repos.length} {group.repos.length === 1 ? "repo" : "repos"}
                    </span>
                  </div>

                  {/* Repo cards grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {group.repos.map((repo) => (
                      <a
                        key={repo.name}
                        href={`https://github.com/tensaicompl/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-card"
                      >
                        {/* Repo name + stars */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--fg-1)",
                            }}
                          >
                            {repo.name}
                          </span>
                          {repo.stars !== "—" && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "var(--fg-3)",
                                fontFamily: "var(--font-mono)",
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--fg-3)" stroke="none">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              {repo.stars}
                            </span>
                          )}
                        </div>

                        {/* Sub-problem */}
                        <p
                          style={{
                            fontSize: "13px",
                            color: "var(--fg-2)",
                            lineHeight: 1.45,
                            marginTop: "6px",
                          }}
                        >
                          {repo.subProblem}
                        </p>

                        {/* Original attribution */}
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--fg-3)",
                            marginTop: "8px",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          forked from {repo.original}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />

      <style>{`
        @media (max-width: 768px) {
          .reusables-hero { grid-template-columns: 1fr !important; }
          .reusables-hero-icon { display: none; }
        }
        .repo-card {
          display: block;
          padding: 16px 18px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: inherit;
          transition: border-color 150ms var(--ease-out), box-shadow 150ms var(--ease-out);
          background: var(--bg-card);
        }
        .repo-card:hover {
          border-color: var(--color-midnight-muted);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </>
  );
}
