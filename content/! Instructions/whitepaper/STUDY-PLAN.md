# TensAI Whitepaper — Study Plan

## What we're building

One coherent whitepaper for CTO/CIO-level readers: **"Implementing AI at Enterprise Scale — From Pilot to Production"** (working title). It becomes part of the Groundwork pillar — the strategic layer of the TensAI Blueprint. Final deliverable is a branded PDF; this phase is research only.

## Target reader

- CTO, CIO, VP Engineering, Head of AI, Chief Data Officer
- Mid-to-large enterprise (500+ employees)
- Has done pilots, probably stalled at scaling
- Needs a decision framework, not a tutorial
- Reads McKinsey, Gartner, HBR — expects that register

## Thesis (to be validated by research)

Most enterprises fail at AI not because the technology doesn't work, but because they never built the organisational machinery to operate it. The gap between a successful pilot and a production system is not technical — it is structural: governance, operating model, skills distribution, cost attribution, and trust.

## Research domains — 8 parallel searches

### Domain 1: State of Enterprise AI Adoption (2024–2026)

**What to find:** The authoritative surveys and reports on where enterprises actually are.
- McKinsey Global AI Survey (2024, 2025)
- Gartner AI maturity assessments
- BCG/MIT Sloan AI adoption studies
- Deloitte State of AI in the Enterprise
- Stanford HAI AI Index Report
- IDC, Forrester AI spending forecasts
- EU-specific: European Commission AI adoption data

**Questions to answer:**
- What % of enterprises have moved beyond pilots?
- What's the failure rate of AI initiatives?
- Where do organisations stall (Stage 2→3)?
- What separates the 10% that scale from the 90% that don't?

### Domain 2: The Scaling Problem — Pilot to Production

**What to find:** Research and case studies on why AI pilots don't scale.
- "Pilot purgatory" analyses
- Technical debt in AI systems (Google's ML systems paper, Sculley et al.)
- The "last mile" problem in AI deployment
- Build-to-learn vs build-to-run trap
- MLOps maturity models (Google, Microsoft, AWS)

**Questions to answer:**
- What are the top 5 reasons AI pilots fail to scale?
- What infrastructure is missing when scaling fails?
- What does the transition from pilot to production actually require?

### Domain 3: AI Operating Models & Organisational Design

**What to find:** Frameworks for how enterprises organise AI capability.
- Hub-and-spoke vs federated vs hybrid CoE models
- AI platform team design (Team Topologies for AI)
- Roles: AI engineer, ML engineer, prompt engineer, AI product manager
- Builder / power user / consumer distribution models
- Skills and capability frameworks for AI teams

**Questions to answer:**
- What organisational structures correlate with successful scaling?
- How should the CoE evolve as maturity increases?
- What roles are necessary vs nice-to-have?

### Domain 4: AI Governance Frameworks

**What to find:** Governance frameworks that work in practice, not just on paper.
- EU AI Act implementation guidance (not just the regulation — the how-to)
- NIST AI RMF implementation case studies
- ISO/IEC 42001 adoption reports
- Internal governance frameworks from large enterprises
- Risk classification and tiering approaches
- Model inventory and model card practices
- Incident response for AI systems

**Questions to answer:**
- What does a minimum viable governance framework look like?
- How do you tier AI systems by risk without creating bureaucracy?
- What governance failures have led to real incidents?

### Domain 5: AI Economics — FinOps, ROI, Cost Attribution

**What to find:** The economics of AI at scale.
- FinOps Foundation AI/ML cost management guidance
- Token-level cost attribution approaches
- AI ROI measurement frameworks
- Total cost of ownership models for AI
- Prompt caching and cost optimisation data
- Model routing and tiering economics

**Questions to answer:**
- How do you measure AI ROI beyond "time saved"?
- What does cost-per-task vs cost-per-token attribution look like?
- What are the real unit economics of AI in production?

### Domain 6: AI Security & Trust at Scale

**What to find:** Enterprise security architecture for AI.
- OWASP Top 10 for LLM Applications (2025 edition)
- OWASP Agentic AI Top 10 (2026)
- Prompt injection at enterprise scale — real incidents and defences
- AI gateway security architecture patterns
- Sandboxing and isolation for AI agents
- Data privacy and AI (GDPR intersection)

**Questions to answer:**
- What is the enterprise security architecture for AI?
- What incidents have occurred and what do they teach?
- How does AI security differ from application security?

### Domain 7: Case Studies — Who Has Done It

**What to find:** Named enterprise case studies of successful AI scaling.
- Financial services (JPMorgan, Goldman Sachs, ING, BBVA)
- Healthcare (Mayo Clinic, NHS AI initiatives)
- Manufacturing (Siemens, BMW, Bosch)
- Retail (Walmart, Zalando, IKEA)
- Technology (Shopify, Klarna, Duolingo — AI-first pivots)
- Government (UK GDS, EU institutions, Singapore)
- Consulting firms' own AI transformations

**Questions to answer:**
- What patterns appear across successful cases?
- What organisational changes were made?
- What was the timeline from pilot to production?

### Domain 8: Whitepapers & Frameworks — The Definitive Sources

**What to find:** The actual published whitepapers we're building on.
- Anthropic's enterprise deployment guides
- OpenAI's enterprise best practices
- Google Cloud AI adoption framework
- AWS Well-Architected AI/ML lens
- Microsoft Responsible AI practices
- Accenture/McKinsey/BCG/Deloitte AI transformation whitepapers
- World Economic Forum AI governance papers
- OECD AI Policy Observatory publications

**Questions to answer:**
- What frameworks already exist and what do they cover?
- Where are the gaps that TensAI's whitepaper fills?
- What framing do CTO/CIO readers already expect?

## Execution plan

**8 parallel research agents**, one per domain. Each produces a structured report in `whitepaper/<domain-slug>.md`.

Output format per agent:

```markdown
# <Domain Title>

## Key findings

### <Finding 1>
**Source:** [Report name, author, date]
**URL:** (if available)
**Key data points:**
- ...
**Relevance to whitepaper:** One sentence.

### <Finding 2>
...

## Gaps identified
- What this domain's research does NOT cover that the whitepaper needs.

## Recommended whitepaper sections from this domain
- Section title suggestions with key arguments.
```

## After research — whitepaper outline

Once all 8 domains are researched, a synthesis agent will:
1. Read all 8 reports
2. Produce a whitepaper outline with chapter structure
3. Map each chapter to its source material
4. Identify the TensAI-original arguments (what no existing whitepaper covers)
5. Define the narrative arc from problem → framework → implementation → measurement

## Whitepaper structure (preliminary — to be refined after research)

1. **The state of play** — where enterprises actually are (Domain 1)
2. **Why pilots don't scale** — the structural gap (Domain 2)
3. **The operating model** — organisational design for AI (Domain 3)
4. **Governance that works** — beyond compliance theatre (Domain 4)
5. **The economics** — unit economics and attribution (Domain 5)
6. **Security architecture** — the new attack surface (Domain 6)
7. **Case studies** — who has done it, and how (Domain 7)
8. **The TensAI framework** — the integrated model (synthesis of all)

## Voice

Same as the TensAI Blueprint — authoritative, first-person-institutional, calm, exact, no hype. But adapted for the whitepaper register: longer form, more data, more frameworks, more executive-facing. Still no consulting jargon.
