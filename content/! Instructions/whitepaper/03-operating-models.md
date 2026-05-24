# Domain 3: AI Operating Models & Organisational Design

## Key Findings

---

### Finding 1: Three Canonical Operating Models for AI Capability

**Source:** AWS Prescriptive Guidance, CIOPages, Covasant, Intelance, multiple
**URLs:**
- https://aws.amazon.com/blogs/machine-learning/generative-ai-operating-models-in-enterprise-organizations-with-amazon-bedrock/
- https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-transform-adm-operating-model-gen-ai/org-structure-layer.html
- https://www.ciopages.com/articles/centralized-vs-federated-ai-teams
- https://www.covasant.com/blogs/ai-operating-model-centralized-federated-or-hybrid
- https://www.intelance.co.uk/enterprise-architecture-operating-models-and-governance-2026-centralised-vs-federated-vs-hybrid/
- https://medium.com/@amitkharche/ai-coes-centralized-vs-federated-models-for-scalable-delivery-6d5d8565bbdd
- https://medium.com/@nayan.j.paul/hub-spoke-vs-federated-gen-ai-platform-design-3840892779b2

**Key data points:**
- Three operating models dominate: **Centralised**, **Federated**, and **Hybrid (Hub-and-Spoke)**.
- **Centralised:** All AI activities flow through a single AI/ML team that provisions and manages end-to-end workflows, models, and data. Ensures consistency, governance, and control. Limits speed and domain relevance.
- **Federated:** Each business unit runs its own AI pod, closer to domain needs. Enables fast response and deep domain knowledge but risks inconsistent governance, fragmentation, and duplication.
- **Hub-and-Spoke (Hybrid):** The hub owns platform, governance, and enablement; spokes own use case prioritisation, workflow integration, and domain configuration. Balances central control with localised autonomy.
- The dominant 2026 pattern at Fortune 500 scale is hybrid -- purely centralised models do not scale past 50-100 deployments; purely federated models cannot satisfy EU AI Act Article 9 risk-management documentation consistency.
- Hybrid model is structurally superior once an enterprise crosses approximately 30 production deployments or operates in 2+ regulatory jurisdictions.
- Most common Fortune 500 pattern: a primary enterprise AI platform relationship managed by the hub, with hub approval required for any spoke adopting a different foundation model or specialised vendor.

**Relevance to whitepaper:** Foundational framework for the operating model chapter -- enterprises need a clear model choice mapped to maturity stage.

---

### Finding 2: CoE Maturity Evolution -- Centralised to Advisory

**Source:** Microsoft Cloud Adoption Framework, Deloitte, Tredence, multiple
**URLs:**
- https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/center-of-excellence
- https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/articles/ai-center-of-excellence.html
- https://www.tredence.com/blog/ai-center-of-excellence
- https://mariothomas.com/blog/ai-coe-future/
- https://www.moveworks.com/us/en/resources/blog/enterprise-ai-center-of-excellence

**Key data points:**
- Recommended three-phase progression:
  - **Phase 1 (0-12 months):** Centralised CoE -- consolidate expertise, establish governance foundations, run pilot projects. Centralisation at the onset accelerates AI adoption.
  - **Phase 2 (12-24 months):** Hub-and-spoke -- AI champions embedded in key business units, central team shifts to platform and governance.
  - **Phase 3 (24-36 months):** Federated pods with high autonomy, sustained by central governance and shared infrastructure. CoE becomes advisory.
- Microsoft CAF explicitly states: "As your AI adoption matures, you should move toward an advisory approach where the AI CoE supports AI use."
- Signals for transition: approval delays, knowledge bottlenecks where AI experts can't support all teams, growing friction where product teams and CoE debate priorities instead of focusing on value delivery.
- At advanced maturity, direct operational involvement decreases as AI capabilities become embedded throughout the organisation.
- When more than 40% of central-team capacity is allocated to standards, governance, and BU coordination rather than building, the function has shifted from delivery to oversight.

**Relevance to whitepaper:** Critical for maturity-stage prescriptions -- the CoE design must change as the organisation matures.

---

### Finding 3: McKinsey's Agentic Organisation Framework

**Source:** McKinsey & Company (September 2025)
**URLs:**
- https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era
- https://medium.com/@wasowski.jarek/5-pillars-15-topics-2-5-people-per-50-100-agents-agentic-organizations-6c17fe251b4e

**Key data points:**
- The agentic organisation is built around **five pillars**: business model, operating model, governance, workforce/people/culture, technology and data.
- Winning operating models will empower agentic teams with flat decision and communication structures, high context sharing and alignment.
- Three emerging workforce roles:
  - **M-shaped supervisors:** Broad generalists fluent in AI, orchestrating agents and the hybrid workforce across domains.
  - **T-shaped experts:** Deep specialists who reimagine workflows, handle exceptions, and safeguard quality.
  - **AI-augmented frontline workers:** Employees in sales, service, HR, or operations who spend less time on systems and more time with humans.
- CEOs, product officers, and compliance heads will increasingly need the technology fluency once expected only of CIOs.
- Early evidence shows employees without technical backgrounds can learn to manage agentic workflows as quickly as trained engineers.
- Six dimensions for capturing AI value: strategy, talent, operating model, technology, data, adoption and scaling.
- Workflow redesign has the biggest effect on EBIT impact from gen AI, out of 25 attributes tested.
- Only ~31% report scaling AI enterprise-wide; majority remain in experimenting or piloting stages.

**Relevance to whitepaper:** The most forward-looking operating model framework from a Tier 1 consultancy -- positions the whitepaper as current.

---

### Finding 4: BCG's Enterprise-as-Code Operating Model

**Source:** BCG (2025)
**URLs:**
- https://www.bcg.com/publications/2025/enterprise-as-code-operating-model-for-ai-era
- https://www.bcg.com/capabilities/artificial-intelligence

**Key data points:**
- BCG proposes defining operations as code to accelerate innovation, boost resilience, and make human-machine collaboration more transparent and adaptive.
- Key recommendations: AI-first operating model, business-IT co-responsibility, role of the chief AI officer, modular architectures.
- BCG goes further than McKinsey in organisational recommendations and target architecture.
- Of companies on their AI transformation journey, 68% have "reshape plays" in motion, transforming support functions with AI before moving to core functions.
- AI-mature companies generate 72% of their AI value in core functions (operations, marketing, sales), not support functions.
- Only 5% of companies create substantial value at scale; 60% generate no material value despite investments.
- BCG recommends widening the platform operating model to maximise value from the AI tech stack.

**Relevance to whitepaper:** The "Enterprise as Code" concept is a strong framing device and contrasts well with McKinsey's agentic model.

---

### Finding 5: Team Topologies Applied to AI

**Source:** Team Topologies 2nd Edition (Matthew Skelton & Manuel Pais, September 2025), Thoughtworks, Conflux, SAFe
**URLs:**
- https://teamtopologies.com/keynote-talks/team-topologies-as-the-infrastructure-for-agency-with-ai
- https://matthewskelton.com/blog/team-topologies-as-the-infrastructure-for-agency
- https://www.thoughtworks.com/insights/podcasts/technology-podcasts/organizational-design-team-topologies-ai
- https://futuria.ai/s2e18-matthew-skelton-team-topologies-for-agentic-ai/
- https://confluxhq.com/insight/team-topologies-in-action-effective-structures-for-machine-learning-teams
- https://agility-at-scale.com/safe/safe-team-topologies-for-ai-enabled-teams/
- https://www.infoq.com/news/2026/03/ai-agency-team-topologies/

**Key data points:**
- Core principles translate directly to AI: organising teams around independently-viable services, cognitive load as a key design principle, capabilities available via clear "vending machine" interfaces.
- Skelton frames Team Topologies as "infrastructure for agency" -- bounded agency where authority to act is intentionally constrained by guardrails to ensure delegated initiatives remain governable.
- **Platform teams** expose AI capabilities through well-designed APIs, pre-built components, and self-service environments. Key principle: Platform-as-a-Product.
- AI is reshaping the **complicated-subsystem team** topology most dramatically -- AI democratises specialist knowledge that previously justified dedicated teams.
- AI-assisted onboarding means new team members build working mental models of complex codebases in days rather than weeks.
- As many as 80% of firms report no tangible benefit from AI adoption (QCon London 2026 keynote data point).
- Skelton's critical question: why would a business grant an agentic AI write access to any data store when it would never permit a human to do the same?
- Four team types (stream-aligned, enabling, complicated subsystem, platform) and three interaction modes (collaboration, X-as-a-service, facilitating) remain the core model.

**Relevance to whitepaper:** Team Topologies is the most respected organisational design framework in engineering -- applying it to AI gives the whitepaper immediate credibility with CTO readers.

---

### Finding 6: The Chief AI Officer (CAIO) Role

**Source:** IBM, Gartner, Slayton Search, BeyondChiefs, CNBC, multiple
**URLs:**
- https://www.slaytonsearch.com/2025/10/the-rise-of-the-chief-ai-officer/
- https://www.beyondchiefs.com/en/blogs/the-rise-of-the-chief-ai-officer-caio-why-every-company-needs-one-in-2025
- https://www.cnbc.com/2026/05/11/heres-how-artificial-intelligence-is-changing-boardrooms.html
- https://www.ibm.com/think/topics/chief-ai-officer
- https://www.vantedgesearch.com/resources/blogs-articles/the-caio-emergence-why-the-chief-ai-officer-is-todays-critical-c-suite-role/

**Key data points:**
- 26% of organisations now have a CAIO, up from 11% two years ago (IBM).
- Gartner predicted 35% of large enterprises would have a CAIO by 2025.
- More recent data: 76% of surveyed organisations have established a CAIO office, up from 26% in 2025.
- Organisations with a CAIO report approximately 10% higher ROI on AI investments.
- CAIO role mixes strategy, governance, and change work -- setting the AI roadmap, defining guardrails, building cross-functional teams, measuring outcomes.
- A CAIO is not a "super engineer" but an enterprise strategist, risk leader, and change agent with deep AI fluency.
- Nearly 30% of organisations now say their CEO is directly responsible for gen AI governance, double the figure from a year ago (McKinsey 2025).

**Relevance to whitepaper:** The CAIO role is the leadership anchor for the operating model chapter -- organisations need clear accountability.

---

### Finding 7: AI Roles and Team Composition

**Source:** Burt Works, HireInSouth, Product School, LinkedIn, multiple
**URLs:**
- https://www.hireinsouth.com/post/ai-team-structure-what-roles-do-you-need
- https://www.burtchworks.com/industry-insights/the-types-of-ai-roles-you-need-on-your-team
- https://towardsdatascience.com/machine-learning-vs-ai-engineer-no-confusing-jargon/
- https://research-it.manchester.ac.uk/news/2025/10/14/ml-engineer-vs-ai-engineer/
- https://productschool.com/blog/artificial-intelligence/guide-ai-product-manager
- https://aakashgupta.medium.com/i-interviewed-100-ai-product-managers-heres-what-they-actually-do-9e55d393a287

**Key data points:**
- **AI Engineer:** Product-focused; adapts foundation models through prompt engineering, fine-tuning, RAG. Deploys quickly, refines later. GenAI knowledge depth.
- **ML Engineer:** Algorithm-focused; builds models from scratch for specific tasks (recommendation, fraud, forecasting). Deeper mathematical/statistical knowledge.
- **AI Product Manager:** Bridges technology and business; owns data strategy, dual success metrics (product outcomes + model evaluation), AI-specific evaluation (offline tests, A/B, edge cases). Demand increased 300%+ in three years.
- **Prompt Engineer:** Role is becoming obsolete as a standalone position (WSJ 2025). Prompt engineering now a core competency expected of AI engineers rather than a separate role.
- Combined "AI/ML Engineer" is the fastest-growing tech role on LinkedIn's Jobs on the Rise 2025 report.
- Common mistake: writing one job description for "AI Engineer" covering prompt engineering, fine-tuning, MLOps, and RAG produces unicorn searches that take 9 months to fill.
- Most in-demand roles per McKinsey 2025: software engineers and data engineers (for AI initiatives).
- Emerging roles: AI compliance specialists (13% of companies hired), AI ethics officers (6%).
- Early-stage team: One Senior AI Engineer handles full stack; Growth stage: add AI PM + MLOps/ML Platform Engineer at 3+ models in production.

**Relevance to whitepaper:** Provides the concrete role taxonomy enterprises need -- what to hire, when, and in what sequence.

---

### Finding 8: Builder / Power User / Consumer Distribution

**Source:** Connectifi, PYMNTS, McKinsey, GetFocusLab
**URLs:**
- https://www.connectifi.co/post/the-ai-power-user
- https://www.pymnts.com/artificial-intelligence-2/2025/agentic-ai-splits-the-field-between-builders-and-users
- https://getfocuslab.com/ai-skills-gap-5-5-trillion-crisis-power-users-win/

**Key data points:**
- Agentic AI is splitting the field between builders and users with fundamentally different organisational approaches.
- McKinsey qualifies only 6% of enterprises as AI "high performers" -- power users are a small segment.
- The critical leverage: a 30%+ productivity boost distributed to 80%+ of the organisation versus 5% is the difference between game-changing and marginal gains.
- Recommendation: distil patterns from power users and bring them to everyone else as defaults and automations -- similar to how coding examples are distilled into patterns for autocomplete.
- Companies producing goods lead on creative AI applications (33% use agentic AI for product design/innovation vs 6.7% of services firms).
- Power users use AI daily across multiple workflows and start workflows with AI as the default.

**Relevance to whitepaper:** The builder/power-user/consumer framework is a distribution model TensAI can claim -- how to scale the 6% to the 80%.

---

### Finding 9: AI Skills and Capability Frameworks

**Source:** Alan Turing Institute, DataCamp, Workera/IDC, U.S. Department of Labor, World Economic Forum
**URLs:**
- https://www.turing.ac.uk/skills/collaborate/ai-skills-business-framework
- https://www.datacamp.com/blog/the-most-important-ai-skills-for-2026-a-practical-ai-and-data-literacy-framework
- https://www.workera.ai/blog/the-5-5-trillion-skills-gap-what-idcs-new-report-reveals-about-ai-workforce-readiness
- https://www.dol.gov/newsroom/releases/eta/eta20260213
- https://www.weforum.org/stories/2026/01/ai-roadmap-transforming/
- https://zenodo.org/records/17815185

**Key data points:**
- **IDC:** Skills shortages may cost the global economy up to $5.5 trillion by 2026 in product delays, quality issues, missed revenue, and impaired competitiveness.
- **DataCamp 2026 Framework:** Enterprise capability falls into four layers. Layer 1 prioritises decision-making (85% demand) and data literacy (82%), ahead of AI concepts (78%) and Python (59%). Most important skills are interpretive, applied, and judgment-driven -- not deeply technical.
- **Alan Turing Institute:** Framework defines competencies to cultivate "T-shaped" professionals -- depth of knowledge in a particular expertise plus ability to work and communicate across disciplines. UK government-backed (DSIT, Innovate UK).
- **U.S. Department of Labor (February 2026):** Five foundational content areas: (1) Understanding AI Principles, (2) Exploring AI Uses, (3) Directing AI Effectively, (4) Evaluating AI Outputs, (5) Using AI Responsibly. Seven delivery principles: experiential learning, embedding in context, building complementary human skills, addressing prerequisites, creating pathways for continued learning, preparing enabling roles, designing for agility.
- **WEF:** 39% of workers' core skills anticipated to change by 2030. Employers demand human-centric skills (judgment, problem-solving, collaboration) alongside technical capabilities. 1.1 billion jobs could be transformed by technology over the next decade.
- Only a third of organisations say they're fully ready to adopt AI-driven ways of working.
- 88% of enterprise leaders say basic data literacy is important for day-to-day work; 72% say the same for AI literacy.

**Relevance to whitepaper:** Multiple authoritative frameworks provide a ready-made skills taxonomy that TensAI can synthesise into a practical capability model.

---

### Finding 10: AI Literacy Programmes at Scale

**Source:** Tredence, DataCamp, Training Industry, TESS Group, multiple
**URLs:**
- https://www.tredence.com/blog/how-ai-literacy-will-shape-enterprise-success-in-2026
- https://iternal.ai/ai-training-for-employees
- https://www.datacamp.com/blog/why-traditional-ai-training-isn-t-working-in-2026
- https://trainingindustry.com/articles/artificial-intelligence/how-ld-should-approach-building-ai-literacy-in-2026/
- https://tessgroup.co.uk/blog/ai-literacy-how-to-build-an-ai-ready-workforce

**Key data points:**
- 60% of leaders report a data skills gap; 59% report an AI skills gap (2026).
- AI adoption reached 78% of enterprises in 2025, yet most employees lack the skills to use these tools effectively.
- Only 35% have a mature, organisation-wide AI upskilling programme.
- Nearly 25% of leaders say learning paths are not tailored to specific roles.
- AI literacy is most effectively developed through direct, hands-on use -- building confidence by using AI in real-world contexts to solve actual tasks.
- When employers provide structured AI training, adoption jumps from 25% to 76%.
- Companies with structured AI upskilling programmes see 2x higher AI ROI: 42% report significant positive returns vs 21% without formal programmes.
- Generic AI literacy sessions often fail because they don't connect to day-to-day responsibilities.
- Only a third of employees report receiving any AI training in the past year, even as half of employers report difficulty filling AI-related positions.

**Relevance to whitepaper:** The training data makes the case that operating model design must include a skills/literacy programme -- it's not optional.

---

### Finding 11: Change Management for AI Adoption

**Source:** Prosci, Centric Consulting, Adoptify AI, Augment Code, California Management Review, IBM
**URLs:**
- https://www.prosci.com/ai-change-management
- https://www.prosci.com/blog/8-ways-ai-driven-change-is-different
- https://www.prosci.com/blog/why-ai-transformation-fails
- https://centricconsulting.com/blog/the-art-of-ai-adoption-a-people-centric-approach-to-ai-change-management/
- https://cmr.berkeley.edu/2025/11/bridging-the-gaps-in-ai-transformation-an-evidence-based-framework-for-scalable-adoption/
- https://sparkco.ai/blog/enterprise-ai-change-management-strategies-2025
- https://www.augmentcode.com/guides/6-change-management-strategies-to-scale-ai-adoption-in-engineering-teams
- https://www.ibm.com/think/topics/ai-change-management

**Key data points:**
- While technical implementation challenges exist, the biggest barriers to AI adoption are related to organisational change and workforce capability (56% of executives).
- 38% of AI adoption challenges stem from insufficient training in AI tools.
- Active, visible sponsorship increases the likelihood of achieving AI adoption success by 72%.
- Prosci identified 10 workplace conditions that differentiate successful AI implementations, organised around four pillars: Leadership and Bold AI Vision, Change Management Excellence, Transparency and Trust, Organisational Capabilities.
- **ADKAR Model** (Awareness, Desire, Knowledge, Ability, Reinforcement) adapted for AI: awareness-building must encompass ethical considerations and continuous learning expectations.
- 48% of change practitioners already incorporate AI tools into their change management practices.
- Only 28% of employees know how to use their company's AI applications.
- California Management Review identifies the "missing middle" of AI transformation -- the gap between ambition and scaled impact. Framework provides a repeatable playbook avoiding one-off pilots, building reusable assets, governance structures, and data literacy.
- Success requires a "domain technology leader" (or digital steward) who bridges strategy, operations, and execution.

**Relevance to whitepaper:** Change management is the most under-discussed element of AI operating models -- this data proves it's the primary failure mode.

---

### Finding 12: Citizen Developer and Power User Governance

**Source:** Security Magazine, TechTarget, Quickbase, Superblocks, Microsoft
**URLs:**
- https://www.securitymagazine.com/articles/101629-governance-in-the-age-of-citizen-developers-and-ai
- https://www.techtarget.com/searchenterpriseai/tip/Citizen-developers-are-redefining-enterprise-AI-development
- https://www.quickbase.com/blog/pro-developer-citizen-developer-ai-governance-quickbase
- https://www.superblocks.com/blog/citizen-developer-governance
- https://www.microsoft.com/insidetrack/blog/empowerment-with-good-governance-how-our-citizen-developers-get-the-most-out-of-the-microsoft-power-platform/

**Key data points:**
- By 2025, 70% of new applications developed by enterprises use low-code/no-code technologies, up from <25% in 2020.
- 80%+ of enterprises use no-code to empower developers outside IT through citizen development programmes.
- AI is redefining what's possible for non-technical users -- enterprise platforms (Microsoft Power Platform, ServiceNow, Salesforce Flow) now include AI-assisted development.
- Governance becomes critical: centralised oversight through a CoE ensures compliance with standards, security policies, and regulations.
- Professional developers are shifting to architects, integrators, and governors rather than builders of every application component.
- As citizen developers build more critical applications and AI takes on more decision-making, appropriate governance frameworks must be in place.

**Relevance to whitepaper:** Citizen development is the frontier of the operating model -- governs the "consumer" tier of the builder/power-user/consumer model.

---

### Finding 13: Cloud Provider Organisational Guidance

**Source:** AWS, Microsoft, Google Cloud
**URLs:**
- https://aws.amazon.com/blogs/machine-learning/generative-ai-operating-models-in-enterprise-organizations-with-amazon-bedrock/
- https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-enterprise-ready-gen-ai-platform/best-practices.html
- https://docs.aws.amazon.com/whitepapers/latest/aws-caf-for-ai/aws-caf-for-ai.html
- https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/center-of-excellence
- https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy
- https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/
- https://aws.amazon.com/blogs/enterprise-strategy/centralizing-or-decentralizing-generative-ai-the-answer-both/

**Key data points:**
- **AWS** recommends hybrid: "centralising the foundations while decentralising innovation." Three operating model patterns (centralised, decentralised, federated). Phase 2 capability building (months 3-6): launch AI CoE, expand to project management and operations roles.
- **Microsoft CAF** provides the most detailed AI CoE guidance of any cloud provider:
  - Five-step build process: executive sponsorship, appoint CoE leader, assemble multidisciplinary team, determine placement, define operating model.
  - Team includes: business leaders, senior data scientists, ML engineers, AI governance experts, AI security specialists, AI operations professionals.
  - Seven responsibility areas: define AI strategy, develop AI skills, lead pilot projects, define/enforce standards, create intake/prioritisation workflows, develop reusable assets, measure/report outcomes.
  - Explicit evolution path: centralised control to advisory team.
  - Recommends integrating into existing CCoE rather than standalone team unless critical risks exist.
- **AWS** prescribes phased implementation: capability building in months 3-6, CoE establishment, partner collaboration for SDLC redesign.
- All three providers converge on hybrid/federated as the target state.

**Relevance to whitepaper:** Vendor-neutral synthesis of cloud provider guidance strengthens the prescriptive credibility of TensAI's framework.

---

### Finding 14: Shopify and Klarna -- AI-First Restructuring Case Studies

**Source:** TechCrunch, Fast Company, Entrepreneur, multiple
**URLs:**
- https://techcrunch.com/2025/04/07/shopify-ceo-tells-teams-to-consider-using-ai-before-growing-headcount/
- https://technewsday.com/shopify-cuts-operations-staff-amid-ai-driven-restructuring/
- https://www.fastcompany.com/91468582/klarna-tried-to-replace-its-workforce-with-ai
- https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396
- https://lasoft.org/blog/klarna-walks-back-ai-overhaul-rehires-staff-after-customer-service-backlash/
- https://www.digitalapplied.com/blog/klarna-reverses-ai-layoffs-replacing-700-workers-backfired
- https://www.adweek.com/media/amazon-duolingo-spotify-ai-reshape-staffing/

**Key data points:**
- **Shopify:** CEO Tobi Lutke mandated teams must demonstrate why AI can't perform a job before additional headcount is granted. Workforce fell by ~500 year-over-year to ~7,600 by end of 2025. At least 30 employees cut in operations, customer support, revenue teams. AI-first policy embedded in hiring decisions.
- **Klarna:** Replaced ~700 customer service employees with AI (OpenAI partnership). AI handled 66% of customer service chats, equivalent of 700+ full-time agents, delivering ~$39M in cost savings (2024). Workforce shrank 40% to ~3,000.
- **Klarna reversal:** By May 2025, CEO Siemiatkowski admitted AI-only approach resulted in "lower quality" work. Customer complaints increased, satisfaction dropped. Company now rehiring human agents with an "Uber-style" flexible workforce model. New hybrid: AI handles routine high-volume queries, humans handle escalations, complex cases, and high-value interactions.
- **Key lesson:** Klarna's metrics initially looked good (cost savings, handle volume) but masked quality degradation. The case demonstrates that AI operating model design must include quality governance, not just efficiency metrics.

**Relevance to whitepaper:** Klarna is the definitive cautionary case study for the whitepaper -- the most public example of an AI operating model that optimised for the wrong metrics.

---

### Finding 15: Accenture's AI Operating Model and CoE Partnerships

**Source:** Accenture, AI Magazine
**URLs:**
- https://aimagazine.com/news/accenture-how-enterprises-can-close-the-ai-scaling-gap
- https://newsroom.accenture.com/news/2023/accenture-and-google-cloud-launch-joint-generative-ai-center-of-excellence-to-help-enterprises-harness-the-value-of-generative-ai
- https://newsroom.accenture.com/news/2025/accenture-and-anthropic-launch-multi-year-partnership-to-drive-enterprise-ai-innovation-and-value-across-industries
- https://www.accenture.com/us-en/services/talent-organization/operating-model-organization-design

**Key data points:**
- 57% of front-runners employ centres of excellence for AI strategy and deployment, vs only 16% of fast-followers.
- Accenture launched joint CoEs with Google Cloud (generative AI) and Anthropic (Claude Center of Excellence) -- model for vendor-specific expertise centres.
- Accenture advocates evolving to a product and platform-based operating model enabling collaboration across the organisation and driving accountability for customer and business outcomes.

**Relevance to whitepaper:** The 57% vs 16% CoE stat is a strong data point for the operating model argument.

---

### Finding 16: Enterprise AI Governance Frameworks

**Source:** Liminal, Databricks, TrueFoundry, Ivanti, AI21, Sprinto
**URLs:**
- https://www.liminal.ai/blog/enterprise-ai-governance-guide
- https://www.databricks.com/blog/practical-ai-governance-framework-enterprises
- https://www.truefoundry.com/blog/ai-governance-framework
- https://www.ivanti.com/blog/ai-governance-framework-responsible-ai-guardrails
- https://www.ai21.com/knowledge/ai-governance-frameworks/
- https://sprinto.com/blog/enterprise-ai-governance/

**Key data points:**
- AI governance frameworks built on six interconnected components: policy development, risk assessment, compliance alignment, technical controls, ethical guidelines, and monitoring.
- 72% of S&P 500 companies disclosed at least one material AI risk in 2025 annual filings.
- Only 50% of organisations have formal guardrails in place for AI deployment and operation.
- Responsible AI requires a holistic approach across the entire AI lifecycle -- data sourcing, model development, deployment, monitoring, and retirement.
- Implementation approach: map AI use cases, assess risk levels, establish internal review boards, implement versioning and audit trails, align with EU AI Act or NIST AI RMF.

**Relevance to whitepaper:** Governance is a necessary companion to the operating model -- feeds into Domain 4 but also shapes CoE responsibilities.

---

### Finding 17: Gartner Predictions for AI Organisation (2025-2026)

**Source:** Gartner
**URLs:**
- https://www.gartner.com/en/articles/strategic-predictions-for-2026
- https://www.gartner.com/en/newsroom/press-releases/2025-10-21-gartner-unveils-top-predictions-for-it-organizations-and-users-in-2026-and-beyond
- https://www.gartner.com/en/newsroom/press-releases/2026-05-13-gartner-predicts-by-2027-50-percent-of-enterprises-without-a-people-centric-ai-strategy-will-lose-their-top-ai-talent
- https://www.gartner.com/en/newsroom/press-releases/2026-3-16-gartner-identifies-top-change-management-trends-for-chros-in-age-of-ai
- https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations

**Key data points:**
- AI-first D&A organisations will have smaller, "tiny" teams organised as decision pods of broad-skilled talent augmented by AI specialists focused on business outcomes.
- By 2030, 80% of organisations evolving large software engineering teams into smaller, more nimble teams augmented by AI.
- By 2027, 75% of hiring processes will include certifications and testing for workplace AI proficiency.
- Through 2026, atrophy of critical-thinking skills due to GenAI use will push 50% of global organisations to require "AI-free" skills assessments.
- By 2027, 50% of enterprises without a people-centric AI strategy will lose their top AI talent.
- 78% of CHROs agree workflows and roles will need to change to get the most out of AI investments.
- Organisations with successful AI initiatives invest up to 4x more (% of revenue) in foundational areas: data quality, governance, AI-ready people, and change management.
- 40% of enterprise apps will have task-specific AI agents by end of 2026, up from <5% in 2025.

**Relevance to whitepaper:** Gartner predictions carry weight with CIO readers and provide forward-looking framing.

---

### Finding 18: Forrester's Data, AI, and Analytics Operating Model

**Source:** Forrester
**URLs:**
- https://www.forrester.com/report/tune-your-data-analytics-and-ai-operating-model-to-your-enterprise/RES188747
- https://www.strategy.com/software/research-and-reports/forresters-data-ai-and-analytics-architecture-model-2025

**Key data points:**
- Forrester suggests a federated DAAI model to balance agility, innovation, and governance.
- Identifies 10 key variables to tailor the operating model to organisational needs.
- Six-stage architecture framework for scalable, insight-driven systems.
- 28% of organisations are merging data and AI governance practices.
- Governance evolving from back-office compliance to strategic business enabler.
- No one-size-fits-all approach; alignment with specific business needs is essential.

**Relevance to whitepaper:** Adds Forrester as a third analyst voice alongside McKinsey/Gartner to the operating model synthesis.

---

### Finding 19: AI Maturity Models

**Source:** MIT Sloan, Gartner, Deloitte, MITRE, Parloa, Thinking Inc.
**URLs:**
- https://mitsloan.mit.edu/ideas-made-to-matter/whats-your-companys-ai-maturity-level
- https://mitsloan.mit.edu/ideas-made-to-matter/how-to-boost-your-organizations-ai-maturity-level
- https://thinking.inc/en/pillar-pages/ai-maturity-model/
- https://aimaturitymodel.mitre.org/
- https://www.parloa.com/blog/ai-maturity-framework/
- https://www.microsoft.com/insidetrack/blog/enterprise-ai-maturity-in-five-steps-our-guide-for-it-leaders/
- https://thedecisionlab.com/reference-guide/management/ai-maturity-models

**Key data points:**
- Multiple frameworks converge on 4-5 stage models:
  - **Four-stage:** Experimental, Operational, Strategic, Transformational.
  - **Five-stage:** Ad Hoc, Exploring, Implementing, Scaling, Transformative.
  - Assessed across six dimensions: leadership, strategy, operations, technology, people, governance.
- Financial performance of enterprises in stages 1-2 is below industry average; stages 3-4 are well above.
- Each stage builds capabilities required by the next -- the progression is sequential, not skippable.
- MITRE provides a public-sector AI maturity model.
- By 2025, only ~31% of organisations report scaling AI enterprise-wide.

**Relevance to whitepaper:** Maturity models provide the scaffolding for TensAI's prescriptions -- what to do at each stage.

---

### Finding 20: McKinsey State of AI 2025 -- Workforce and Reskilling Data

**Source:** McKinsey Global Survey (2025)
**URLs:**
- https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
- https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/2025/the-state-of-ai-how-organizations-are-rewiring-to-capture-value_final.pdf
- https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/designing-an-end-to-end-technology-workforce-for-the-ai-first-era

**Key data points:**
- 88% of companies use AI in at least one business function; only 39% see an impact on EBIT.
- Software engineers and data engineers are the most in-demand AI-related roles.
- 62% of organisations reskilled up to 10% of their workforce in the past year for AI.
- 36% expect to reskill 11-30% of employees over the next 3 years.
- 32% predict an overall workforce reduction of 3%+ in the year ahead; 13% predict increase of that magnitude.
- Rather than wholesale job elimination, organisations are restructuring roles to offload routine tasks to AI.
- Redesign of workflows has the biggest effect on EBIT impact -- out of 25 attributes tested.
- Key gap: adoption structures such as product platform model, enterprise agile, or decentralised network outperform traditional structures and are better prepared for AI scaling.

**Relevance to whitepaper:** The definitive annual benchmark -- the 88% adoption / 39% EBIT impact gap proves the thesis.

---

### Finding 21: Enterprise AI Adoption Failure Rates

**Source:** RAND Corporation, EPAM, Talyx, multiple
**URLs:**
- https://www.epam.com/insights/ai/blogs/enterprise-ai-deployment-challenges
- https://talyx.ai/insights/enterprise-ai-implementation-failure
- https://writer.com/blog/enterprise-ai-adoption-2026/
- https://beam.ai/agentic-insights/why-42-of-ai-projects-show-zero-roi-(and-how-to-be-in-the-58-)

**Key data points:**
- 70-90% of enterprise AI projects fail to deliver intended value.
- RAND Corporation: 80%+ of AI projects fail, at twice the rate of non-AI IT projects.
- 88% of AI pilots never make it to production (only 1 in 8 prototypes becomes operational).
- 79% of enterprises face challenges despite high investment (2026).
- 42% of AI projects show zero ROI.
- Root cause: "AI adoption doesn't fail because the technology isn't capable; it fails because the organisation isn't ready."
- Key barriers: lack of talent (46%), data privacy concerns (43%), poor data quality (40%), high implementation costs (40%), unclear ROI (26%).

**Relevance to whitepaper:** The failure rate data is the opening hook for the whitepaper -- it establishes urgency.

---

## Gaps Identified

1. **Quantitative benchmarks for team sizing:** Limited data on optimal ratios (e.g., 1 AI engineer per X business users, or central platform team as % of total engineering). Most guidance is structural, not numerical.

2. **European-specific operating model guidance:** Most frameworks are US-centric. Limited research found on how EU regulatory context (AI Act, GDPR) specifically shapes operating model design beyond general governance.

3. **AI operating model in regulated industries:** Financial services, healthcare, and defence have unique constraints. Found case study mentions but no dedicated operating model frameworks for these sectors.

4. **Cost of operating model transition:** No data found on the investment (time, money, disruption) required to move from centralised to federated. The evolution is prescribed but the cost is not estimated.

5. **Failure modes of specific operating models:** While we have Klarna as a case study, there is limited research on why specific CoE structures fail -- e.g., hub-and-spoke implementations that collapsed.

6. **Internal talent marketplace for AI:** Limited data on how enterprises are using internal mobility, rotation programmes, and talent marketplaces specifically for AI skills distribution.

7. **Contractor/consulting model for AI teams:** No clear guidance found on the build-vs-buy decision for AI teams -- when to hire FTEs vs use consultancies vs managed services.

8. **Google Cloud organisational guidance:** Google is notably quieter than AWS and Microsoft on organisational design prescriptions. Their CAF for AI focuses more on technical architecture than team design.

---

## Recommended Whitepaper Sections from This Domain

### Section 1: "The Three Operating Models -- and Why You'll Use All Three"
Core argument: Enterprises don't choose one model permanently. They evolve through centralised to hybrid to federated as maturity increases. Map operating model to maturity stage with clear triggers for transition.
Sources: AWS, Microsoft CAF, CIOPages, Covasant, Intelance.

### Section 2: "Designing the AI Centre of Excellence That Doesn't Become a Bottleneck"
Core argument: The CoE is essential but must be designed to evolve. Start centralised, embed into platform teams, shift to advisory. The 40% capacity threshold signals when to transition. Microsoft's seven responsibilities as the practical template.
Sources: Microsoft CAF, Deloitte, Accenture, Tredence.

### Section 3: "The Roles You Need -- and When You Need Them"
Core argument: Stage-appropriate hiring prevents both the talent gap and the unicorn search. AI Engineer and ML Engineer are converging. Prompt Engineer is dead as a standalone role. AI Product Manager is the highest-leverage non-technical hire. CAIO is the C-suite anchor.
Sources: LinkedIn, Burt Works, Product School, IBM, Gartner.

### Section 4: "Scaling the 6% -- From Power Users to Organisation-Wide Adoption"
Core argument: Only 6% of enterprises are AI high performers. The operating model must be designed to distribute power-user patterns to the 80%. Distil, don't train.
Sources: McKinsey, Connectifi, DataCamp, PYMNTS.

### Section 5: "The Skills Architecture -- Four Layers of AI Capability"
Core argument: Enterprise AI literacy is not one programme but four layers (decision-making, data literacy, AI concepts, technical depth). Role-specific, hands-on, embedded in context. The Alan Turing and U.S. DoL frameworks as reference models.
Sources: DataCamp, Alan Turing Institute, U.S. DoL, WEF, Workera/IDC.

### Section 6: "Change Management Is the Operating Model"
Core argument: 56% of AI adoption barriers are organisational, not technical. Change management is not a support function -- it's the primary implementation vehicle. Prosci's ADKAR adapted for AI. Active sponsorship increases success likelihood by 72%.
Sources: Prosci, CMR, McKinsey, Gartner.

### Section 7: "Team Topologies for AI -- Platform Teams as the Scaling Engine"
Core argument: The Team Topologies framework (platform, stream-aligned, enabling, complicated-subsystem) maps directly onto AI capability distribution. The AI platform team is the scaling engine. Bounded agency from Skelton provides governance principles for agentic AI.
Sources: Skelton/Pais, Thoughtworks, SAFe, Conflux.

### Section 8: "The Klarna Lesson -- Why Metrics Aren't Strategy"
Core argument: Klarna's AI-first pivot delivered $39M savings and handled 66% of chats -- then failed. Efficiency metrics masked quality degradation. Shopify's approach (prove AI can't do it first) is more sustainable. Operating model design must include quality governance loops.
Sources: TechCrunch, Fast Company, Entrepreneur, multiple.
