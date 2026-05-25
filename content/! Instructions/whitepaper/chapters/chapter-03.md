# Chapter 3: The Operating Model -- Organising for AI at Scale

---

## 3.1 The Three Operating Models -- and Why You'll Use All Three

EuroCorp's 14-person AI team is the bottleneck it was designed to prevent.

Every AI request from every business unit flows through the same team. The automotive division waits three months for a model deployment. The logistics group has stopped submitting requests entirely -- they hired a contractor and built their own. The aftermarket services team is running a pilot on an API key that nobody in the central team knows about. The CDO, who was supposed to bring coherence, has become a traffic controller for a queue that never shortens. The CoE -- Centre of Excellence -- has become a centre of delay.

This is not a staffing problem. It is a structural one. And the structure has a name.

Three operating models dominate enterprise AI: centralised, federated, and hub-and-spoke. Every organisation will use all three -- not simultaneously, but sequentially, as the demands of scale force the structure to evolve. The mistake is choosing one and defending it past the point where it serves. The bigger mistake is not choosing at all and letting the organisation improvise its way into a hybrid that nobody designed and nobody governs.

**Centralised** puts all AI activity -- strategy, development, deployment, governance -- under a single team. EuroCorp's current model. It works when the organisation has fewer than a dozen production deployments, a small team building institutional knowledge, and a governance surface that one group can see end to end. The advantages are real: consistency of standards, unified governance, efficient use of scarce talent. The disadvantages become disqualifying at scale. The central team becomes the approval bottleneck. Business units lose patience and build around it. Domain expertise -- the knowledge of how the automotive supply chain actually works, what the logistics dispatchers actually need -- lives in the business units, not in the CoE. A central team building for four business units builds for none of them well enough.

**Federated** distributes AI capability to each business unit. Each unit runs its own AI pod, hires its own engineers, chooses its own tools, sets its own priorities. Domain expertise is high. Speed is high. Everything else is a mess. Governance fragments -- four business units, four risk classifications, four approaches to data quality, four vendor contracts with overlapping scope. The EU AI Act requires documentation consistency across an organisation's AI systems. A federated model cannot deliver it without a coordination layer, and the moment you add that layer, you have a hub-and-spoke model with extra steps.

**Hub-and-spoke** is the structural answer. The hub owns the platform, the governance framework, the shared infrastructure, and the standards. The spokes -- business unit AI teams or embedded AI engineers -- own use case prioritisation, workflow integration, and domain configuration. The hub builds the road. The spokes drive on it. The most common Fortune 500 pattern in 2026 is a primary enterprise AI platform relationship managed by the hub, with hub approval required for any spoke adopting a different foundation model or specialised vendor (AWS, 2026).

[VIS-18: Operating Model Selection Matrix]

The data supports the structural argument. Purely centralised models do not scale past 50--100 production deployments -- the coordination overhead exceeds the team's capacity to deliver (AWS/Microsoft CAF, 2026). Purely federated models cannot satisfy EU AI Act Article 9 risk-management documentation consistency across jurisdictions. Hub-and-spoke becomes structurally superior once an enterprise crosses approximately 30 production deployments or operates in two or more regulatory jurisdictions. Accenture's research sharpens the point: 57% of AI front-runners -- the organisations generating measurable value -- employ a CoE, compared to just 16% of followers (Accenture, 2025). The CoE is not optional. Its design is what determines whether it accelerates or obstructs.

The evolution is not a one-time decision. It is a three-phase migration:

**Phase 1 (months 0--12): Centralised.** Consolidate expertise. Establish governance foundations. Run the first production deployments. Build the platform primitives -- the shared model gateway, the cost attribution framework, the monitoring infrastructure -- that the spokes will later consume. Centralisation at this stage accelerates AI adoption because it concentrates scarce talent where it has the most leverage.

**Phase 2 (months 12--24): Hub-and-spoke.** Embed AI champions in key business units. The central team shifts from building solutions to building the platform and governance layer that enables business units to build their own. The hub still approves new model deployments, still owns the gateway, still runs the governance programme. But the queue is gone -- business units pull capabilities from the platform rather than waiting for the central team to push solutions to them.

**Phase 3 (months 24--36): Federated with central governance.** The CoE becomes advisory. Business unit AI pods operate with high autonomy, sustained by shared infrastructure and central governance. The central team's role is now standards, architecture review, cross-unit knowledge sharing, and regulatory compliance. Direct operational involvement decreases as AI capabilities become embedded throughout the organisation.

EuroCorp is stuck at Phase 1 with Phase 2 demands. The logistics division building its own solution is not insubordination -- it is the organisation telling the operating model that the operating model has failed. The fix is not more authority for the central team. It is redesigning the central team's purpose.

---

## 3.2 The CoE That Doesn't Become a Bottleneck

The signals that a CoE has become a bottleneck are not subtle. Approval delays stretch past two weeks. Business units hire their own engineers rather than wait. The CoE and the business units debate priorities instead of delivering value. The team's best engineers spend their time on governance reviews rather than building. When more than 40% of the central team's capacity is allocated to standards, governance, and business unit coordination rather than building, the function has shifted from delivery to oversight -- and it should be reorganised accordingly (Microsoft CAF, 2026).

Microsoft's Cloud Adoption Framework prescribes the most detailed CoE guidance of any cloud provider, and the prescription is explicit: "As your AI adoption matures, you should move toward an advisory approach where the AI CoE supports AI use" (Microsoft, 2026). Not replaces. Supports.

The CoE's seven responsibility areas -- define AI strategy, develop AI skills, lead pilot projects, define and enforce standards, create intake and prioritisation workflows, develop reusable assets, measure and report outcomes -- do not change as the organisation matures. What changes is who does them. In Phase 1, the CoE does all seven. In Phase 2, the CoE does four (strategy, standards, reusable assets, measurement) and the business units do three (skill development within their domain, leading their own pilots, running their own intake). In Phase 3, the CoE does two (standards and measurement) and facilitates the rest.

[VIS-19: CoE Blueprint -- Three-Phase Evolution]

The five-step build process -- secure executive sponsorship, appoint a CoE leader, assemble a multidisciplinary team, determine organisational placement, define the operating model -- sounds like consulting boilerplate. It is not. The sequence matters. Executive sponsorship before team assembly means the team has air cover when business units resist centralisation. Organisational placement before operating model means the CoE reports to the right executive before it starts defining how work flows. Microsoft recommends integrating the AI CoE into an existing Cloud Centre of Excellence rather than creating a standalone team, unless the organisation faces critical AI-specific risks that demand dedicated attention.

The team composition reveals the operating model's priorities. A CoE staffed entirely with engineers will build. A CoE staffed with engineers, data scientists, governance experts, security specialists, and AI operations professionals will build systems that can operate in production. The difference is the difference between EuroCorp's 23 pilots and production at scale.

EuroCorp's redesign follows the Phase 1 to Phase 2 transition. The 14-person team splits. Six engineers form the platform team -- they build the shared AI gateway, the model serving infrastructure, the monitoring and cost attribution layer, the reusable components that business units will consume. Two become embedded AI leads in the highest-priority business units (automotive and logistics), carrying central standards into domain-specific delivery. Two focus on governance -- risk classification, compliance documentation, the AI inventory that Chapter 4 builds. The remaining four continue production support for the three production systems while training business unit engineers to take over. The CDO stops being a traffic controller and starts being a platform product manager -- defining the internal AI platform's roadmap based on business unit demand, not CoE supply.

The transition takes six months. It feels slow. But the alternative -- a central team that builds everything for everyone, forever -- does not scale, has never scaled, and will not scale for EuroCorp or anyone else.

---

## 3.3 The Roles You Need -- and When You Need Them

The most expensive hiring mistake in enterprise AI is the unicorn job description.

EuroCorp posted a role requiring expertise in PyTorch, TensorFlow, Kubernetes, MLOps, NLP, computer vision, and reinforcement learning, plus five years of production ML experience. The listing was open for nine months. It attracted 14 applicants. None met more than 60% of the requirements. The role was not a job description -- it was four jobs stapled together by a hiring manager who did not understand the AI talent market. The combined AI/ML Engineer is the fastest-growing technical role on LinkedIn's Jobs on the Rise report (LinkedIn, 2025). But "combined" means a professional who bridges foundation model adaptation and traditional ML -- not a professional who does everything from prompt engineering to infrastructure operations.

Two role distinctions matter more than any others. The **AI Engineer** is product-focused -- adapts foundation models through prompt engineering, fine-tuning, and retrieval-augmented generation. Deploys quickly, refines later. Deep generative AI knowledge. The **ML Engineer** is algorithm-focused -- builds models from scratch for specific tasks like recommendation, fraud detection, or demand forecasting. Deeper mathematical and statistical foundation. The roles are converging, but the skills are not identical, and conflating them produces the unicorn search that takes nine months and fills nothing.

The highest-leverage non-technical hire is the **AI Product Manager** -- demand has increased more than 300% in three years (Product School, 2026). This is the person who bridges technology and business: owns data strategy, defines dual success metrics (product outcomes and model evaluation), manages the organisational change that AI demands, and decides what not to build. EuroCorp's AI team has twelve engineers and two data scientists. It has no AI Product Manager. The team builds well. It builds things that nobody uses, because nobody on the team is responsible for ensuring that the organisation can absorb what the team produces.

[VIS-20: Role Sequencing Ladder]

The **Chief AI Officer** is the strategic anchor. 26% of organisations now have one, up from 11% two years ago (IBM, 2026). More recent data puts it higher -- 76% of surveyed organisations have established a CAIO office. The ones that have a CAIO report approximately 10% higher ROI on AI investments. The CAIO is not a super engineer. The role mixes strategy, governance, and change work -- setting the AI roadmap, defining guardrails, building cross-functional teams, measuring outcomes. Nearly 30% of organisations now say their CEO is directly responsible for generative AI governance, double the figure from a year ago (McKinsey, 2025). That is a signal: AI governance has reached the level where the board cares.

The **Prompt Engineer** as a standalone role is dead. The models have absorbed the skill. Prompt engineering is now a core competency expected of every AI engineer, not a dedicated position. The organisations still hiring standalone prompt engineers are hiring for a role that the technology has already automated.

The sequencing matters more than any individual hire. Get it wrong and you have junior engineers without a senior architect to guide them, or data scientists without the data infrastructure to work on.

**Early stage (0--3 production systems):** One senior AI engineer who can build end to end. One AI Product Manager who can decide what to build and sequence the work. These two roles -- builder and decider -- are the minimum viable AI team.

**Growth stage (3--10 production systems):** Add MLOps and platform engineering. Add a governance lead. The platform engineer builds the shared infrastructure that prevents every project from reinventing the deployment pipeline. The governance lead builds the classification and documentation framework before the EU AI Act makes it mandatory.

**Scale stage (10+ production systems):** Add domain specialists embedded in business units. Add ethics and responsible AI capability. Add change management -- the role that most organisations never hire and most programmes die without. By this stage, the AI team is no longer a team. It is a function, distributed across the organisation, connected by shared standards and infrastructure.

The emerging roles -- AI compliance specialists (13% of companies have hired one), AI ethics officers (6%) -- are not luxuries. They are the roles that prevent the governance failures Chapter 4 dissects. The organisations hiring them now are building the capability before the regulation demands it. The organisations that wait will build it under pressure, at premium cost, with less time to get it right.

---

## 3.4 Team Topologies for AI -- Platform Teams as the Scaling Engine

The most respected organisational design framework in software engineering -- Team Topologies, by Matthew Skelton and Manuel Pais -- maps directly onto the AI scaling problem. The framework defines four team types and three interaction modes. The insight for AI is that one of those team types -- the platform team -- is the structural mechanism that converts a centralised CoE into a scaling engine.

The four types: **stream-aligned teams** deliver value directly to users (a business unit AI team building a customer-facing recommendation system). **Platform teams** build and maintain the internal infrastructure that stream-aligned teams consume (the AI gateway, the model serving layer, the monitoring stack, the shared evaluation framework). **Enabling teams** help stream-aligned teams acquire new capabilities (the CoE in its Phase 3 advisory role). **Complicated-subsystem teams** own domains requiring deep specialist knowledge that would overload a stream-aligned team.

AI is reshaping the complicated-subsystem team most dramatically. Knowledge that previously required a dedicated specialist team -- how to fine-tune a model, how to build a retrieval pipeline, how to evaluate prompt performance -- is being democratised by the models themselves. AI-assisted onboarding means new team members build working mental models of complex codebases in days rather than weeks. The complicated-subsystem team does not disappear, but its boundary shifts: it owns the genuinely complex infrastructure (model training pipelines, custom model development, performance optimisation at scale) while the foundation-model-based work migrates to stream-aligned teams supported by platform APIs.

[VIS-21: AI Team Topology Map]

The platform team is the scaling engine because it applies the **Platform-as-a-Product** principle to AI capabilities. Instead of business units requesting the CoE to build an AI solution -- the bottleneck that paralysed EuroCorp -- business units consume AI capabilities through well-designed APIs, pre-built components, and self-service environments. The platform team exposes capabilities the way a product team exposes features: with documentation, with SLAs, with versioning, with a roadmap driven by internal customer demand.

Skelton frames Team Topologies as "infrastructure for agency" -- bounded agency where authority to act is intentionally constrained by guardrails to ensure that delegated initiatives remain governable (Skelton, QCon London 2026). The concept maps perfectly onto the agentic AI challenge covered in Section 3.5. When a business unit has the autonomy to deploy an AI agent using the platform team's infrastructure, the guardrails -- cost limits, governance classification, security controls, escalation thresholds -- are baked into the platform, not bolted on by an approval process. The platform is the governance.

Skelton's critical question cuts through the hype: why would a business grant an agentic AI write access to any data store when it would never permit a human to do the same? The question is not rhetorical. It is a design constraint. And the answer -- that AI agents should operate under the same access controls, audit requirements, and accountability structures as the humans they augment -- is a Team Topologies principle applied to a problem the original framework did not anticipate.

The three interaction modes -- collaboration, X-as-a-service, and facilitating -- define how teams relate. In EuroCorp's redesigned operating model, the platform team interacts with business unit AI teams primarily through X-as-a-service: the platform provides capabilities, the business unit consumes them through defined interfaces. During the transition period, the enabling team (the advisory remnant of the former CoE) interacts through facilitation: helping business units build the skills to use the platform effectively. Collaboration mode -- intensive, high-bandwidth, time-limited joint work -- is reserved for complex cross-unit initiatives where the platform must evolve to support new patterns.

The result: 80% of firms report no tangible benefit from AI adoption (QCon London 2026, keynote data). The organisations that do report benefit are the ones where AI capability flows through a platform -- not through a ticket queue, not through a central team, not through improvisation. Through a product, with a team that owns it.

---

## 3.5 The Agentic Organisation -- What Comes After the CoE

The operating model designed for copilots will not survive agents.

Copilots suggest. Agents act. The distinction is not semantic -- it is structural. A copilot that recommends a procurement decision requires a human operating model: someone reviews the recommendation, someone approves it, someone is accountable for the outcome. An agent that executes a procurement decision requires a fundamentally different operating model: one that governs autonomous action, defines escalation thresholds, allocates accountability when the agent makes a decision the business disagrees with, and measures quality on dimensions that the agent cannot self-assess.

McKinsey's five-pillar agentic organisation framework -- business model, operating model, governance, workforce and culture, technology and data -- is the most forward-looking operating model prescription from a Tier 1 consultancy (McKinsey, 2025). The framework's central insight is that workflow redesign has the biggest effect on EBIT impact from generative AI, out of 25 attributes tested. Not model selection. Not infrastructure investment. Not talent acquisition. Workflow redesign -- fundamentally rethinking how work gets done when some of the workers are not human.

Three emerging workforce roles define the agentic organisation:

**M-shaped supervisors** -- broad generalists fluent in AI, orchestrating agents and the hybrid workforce across domains. Not engineers. Not managers in the traditional sense. Professionals who understand enough about AI capability to direct agents effectively, enough about the business to know what the agents should be doing, and enough about risk to know when to pull them back.

**T-shaped experts** -- deep specialists who reimagine workflows, handle exceptions, and safeguard quality. The human in the loop is not a checkbox -- it is the quality mechanism. When Klarna replaced 700 customer service agents with AI and declared victory, the T-shaped experts who would have caught the quality degradation were the ones who had been let go.

**AI-augmented frontline workers** -- employees in sales, service, HR, or operations who spend less time interacting with systems and more time interacting with humans. Early evidence shows that employees without technical backgrounds can learn to manage agentic workflows as quickly as trained engineers (McKinsey, 2025). The constraint is not aptitude. It is organisational design -- whether the operating model gives them the tools, the training, and the permission to work differently.

[VIS-23: The Klarna Lesson (Case Study Card)]

Klarna's story is the most instructive cautionary tale in enterprise AI -- not because the technology failed, but because the operating model failed. The AI assistant handled 2.3 million customer chats in its first month. It automated 67% of conversations. It was equivalent to 700 full-time agents. It delivered $40 million in projected annual savings. The resolution time dropped 82%. Every volume metric pointed upward. Then CEO Sebastian Siemiatkowski admitted: "We focused too much on efficiency and cost. The result was lower quality, and that's not sustainable" (Siemiatkowski, 2025). Hallucinations on edge cases degraded quality for roughly 5% of conversations. Complex disputes, fraud claims, and hardship cases -- the interactions where human judgment is irreplaceable -- showed noticeably lower AI resolution quality. Customer complaints increased. Satisfaction dropped. Klarna reversed course, rehiring human agents under an Uber-style flexible workforce model: AI handles routine high-volume queries, humans handle escalations, emotional complexity, and judgment calls. The operating model that replaced humans with AI was redesigned to combine humans with AI. The cost savings were real but incomplete -- they did not account for the quality degradation that volume metrics masked.

BCG's Enterprise-as-Code concept pushes the operating model further: defining operations as code to accelerate innovation, boost resilience, and make human-machine collaboration more transparent and adaptive (BCG, 2025). The concept is aspirational but directional -- the agentic organisation is one where workflows are explicit enough to be shared between humans and agents, where decision rights are codified rather than implicit, and where the boundary between human work and agent work is a design parameter, not an accident.

Shopify's approach sits at the opposite end from Klarna's. CEO Tobi Lutke's internal memo made AI usage a "fundamental expectation" for all employees -- but the mandate was additive, not substitutive. Employees must demonstrate why AI cannot perform a task before requesting additional headcount. AI usage is factored into performance reviews. The company provides access to GitHub Copilot, Cursor, and Claude Code with an "anyone can use every tool and model" philosophy. The result: Lutke reports employees approaching "implausible tasks with reflexive and brilliant usage of AI to get 100X the work done" (Lutke, 2025). Shopify's headcount fell by roughly 500 year-over-year, but the operating model was designed around AI augmenting humans, not replacing them -- and the quality governance that Klarna skipped was embedded in the product development workflow.

Gartner predicts that by 2030, 80% of organisations will evolve large teams into smaller, more nimble teams augmented by AI (Gartner, 2026). 45% of executives expect reductions in middle management layers. 66% of those with extensive agentic AI adoption expect operating model changes. The word "workforce" is acquiring a second meaning. Most operating models have not caught up.

McKinsey's internal transformation is the evidence that the framework works at scale. The firm deployed 25,000 AI agents supporting 60,000 human employees -- up from 3,000 agents eighteen months earlier (Sternfels, CES January 2026). Its custom platform, Lilli, reached 72% firm-wide adoption with 75% or more monthly active users and 500,000 prompts per month. The average consultant saves over one full day per week. Auto-generated decks and proposals account for roughly a third of all Lilli usage since early 2025, each invocation saving 90--120 minutes of deck-building time. The ratio -- 25,000 agents to 60,000 humans, roughly 2.5 agents per 5 humans -- is the first published benchmark for agentic workforce density at a knowledge-work enterprise. The operating model that supports it is flat, high-context, with decision structures designed for speed rather than hierarchy.

The operating model for the agentic era is not a future concern. It is a current one. 62% of organisations are already experimenting with agents. 23% are scaling them (McKinsey, 2025). The organisations designing the operating model now -- the decision rights, the escalation paths, the quality governance, the human-agent span of control -- will have the structure in place when the technology demands it. The organisations that wait will retrofit structure onto agents that are already operating without it. Retrofitting governance is always more expensive, always slower, and always less effective than building it in.

---

## 3.6 Scaling the 6% -- From Power Users to Organisation-Wide Adoption

McKinsey qualifies only 6% of enterprises as AI high performers. The other 94% are spending on AI without extracting proportional value. The operating model's final challenge is not building AI capability at the centre or even distributing it to business units -- it is getting the entire organisation to work differently.

The distribution follows a pattern: **builders** (5--10% of the workforce) create AI solutions and workflows. **Power users** (15--20%) use AI daily across multiple workflows, starting tasks with AI as the default. **Consumers** (70--80%) use AI occasionally, often only when prompted, and rarely in ways that change how they work. The critical leverage is not making the builders more productive -- they already are. It is distributing the 30% or more productivity boost that power users experience to the 80% who are not yet there. That is the difference between a marginal improvement and a structural transformation.

The mistake most organisations make is training. Not because training is wrong -- when employers provide structured AI training, adoption jumps from 25% to 76% (DataCamp, 2026). Companies with structured upskilling programmes see 2 times higher AI ROI: 42% report significant positive returns versus 21% without formal programmes. The mistake is treating training as sufficient. Only 28% of employees know how to use their company's AI applications. Only 35% of organisations have a mature, organisation-wide AI upskilling programme. Nearly 25% of leaders say learning paths are not tailored to specific roles. Generic AI literacy sessions fail because they do not connect to day-to-day responsibilities.

[VIS-22: Adoption Cascade]

The adoption cascade has four levels, each with its own intervention and its own metric:

**Level 1: Awareness.** Employees understand what AI can do and what the organisation expects of them. The intervention is communication -- from leadership, not from the training department. Active, visible sponsorship increases the likelihood of achieving AI adoption success by 72% (Prosci, 2026). The metric is not "did they attend the session" but "can they describe one way AI could change their work."

**Level 2: Skill-building.** Employees can use the organisation's AI tools for specific tasks within their role. The intervention is role-specific, hands-on training -- not classroom instruction but guided practice on real work. AI literacy is most effectively developed through direct use: building confidence by applying AI to actual tasks in context. The metric is task-level proficiency, measured through the tools themselves.

**Level 3: Workflow integration.** Employees have redesigned how they work -- AI is embedded in their daily process, not added alongside it. The intervention is workflow redesign, led jointly by the business unit and the AI team. 78% of CHROs agree that workflows and roles must change to get the most out of AI investments (Gartner, 2026). The metric is workflow cycle time -- did the process get faster, not just the individual task?

**Level 4: Behaviour change.** The new way of working is the default. Employees reach for AI first, not as an afterthought. The intervention is reinforcement -- Prosci's ADKAR model (Awareness, Desire, Knowledge, Ability, Reinforcement) adapted for AI. Performance reviews, team norms, and leadership behaviour all signal that the new way of working is expected. The metric is sustained adoption over time -- not a launch spike, but a plateau that holds.

The power-user distribution strategy is the highest-leverage intervention in the cascade. Rather than training the 80% from scratch, distil what the 20% of power users have already figured out. Identify the workflows where power users have achieved the largest gains. Extract the prompts, the patterns, the tool configurations. Package them as defaults, templates, and automations that the consumer tier can adopt without learning to build from scratch. This is how coding patterns became autocomplete -- not by training every developer to write the pattern, but by embedding the pattern in the tool.

56% of executives say the biggest barriers to AI adoption are organisational, not technical (Prosci, 2026). 38% of barriers stem from insufficient training. The operating model must include adoption as a design parameter, not as an afterthought. The organisations that treat AI adoption as a training problem will train employees to use tools that their workflows are not designed to absorb. The organisations that treat AI adoption as an operating model problem -- redesigning workflows, redefining roles, redistributing decision rights, and reinforcing new behaviours -- will build the organisational muscle that separates the 6% from the rest.

EuroCorp's adoption data tells the story in miniature. Of the three AI systems in production, one has 78% adoption (the customer-service chatbot -- the one that survived despite data quality issues, because the business unit invested in workflow redesign). One has 34% adoption (the demand-forecasting model -- technically functional after remediation, but the planners who are supposed to use it do not trust it, because nobody involved them in the redesign). One has 12% adoption (the warranty extraction tool -- works for one country, maintained by one engineer, unknown to most of the aftermarket services team). The technology does not differ meaningfully across the three. The operating model does.

---

The operating model -- who builds, who governs, who enables -- is the first structural element that separates organisations that scale AI from those that stall. But the operating model defines only who does the work and how the work flows. It does not define the rules within which that work operates -- the risk classifications, the approval authorities, the documentation requirements, the accountability structures, the kill switches. That is governance. And governance, as Chapter 4 argues, is where most organisations mistake a 47-page PDF for a functioning system.
