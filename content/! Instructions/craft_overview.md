# The Craft — Pillar III Overview Prose

Integration note: this prose sits between the pillar header/throughline and the diagram slot on `/craft`. Each section is marked with a comment boundary matching the TSX convention. The developer should wrap each section in its own `<section>` with the standard `maxWidth: 1440px` container and appropriate vertical padding.

---

## SECTION: fractal-opening

An agent is a model plus a harness. The model reasons; the harness shapes the reasoning before it begins, checks the result after it arrives, provides the memory that spans sessions, the tools that reach the world, the retrieval that grounds every claim in evidence, and the evaluation that tells you whether any of it worked. Everything hard lives in the harness — and everything in this pillar is a part of it.

That is The Craft stated whole, before decomposition. Twelve concept pages follow, each teaching one component of the harness in full — from the foundational choice between workflows and agents, through the patterns, infrastructure, and controls that make agentic systems reliable, to the taxonomy of failures that every harness exists to prevent. Read them in order and you walk a single gradient: from fixed-path compositions where you control every step, to fully autonomous agents that work while you sleep, with the harness as the constant at every point along the way. Read them in any order and each one stands alone — but the argument that connects them is worth seeing first.

---

## SECTION: the-gradient

The twelve concepts are not a list. They are a gradient — a deliberate progression from maximum human control to maximum model autonomy — and the organising question is always the same: how much of the decision do you hand to the model, and what do you build around the part you hand over.

The gradient begins at the fixed end. **Agents vs Workflows** draws the foundational distinction — who decides the next step, you or the model — and teaches the discipline of choosing the simplest architecture that holds. **The Five Patterns** stays on the workflow side of that line, codifying the five ways to compose model calls into fixed-path structures: chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser. These are the structural primitives, and they remain the building blocks even after you cross into agent territory — because an agent is not an alternative to these patterns but a system that selects and composes them at runtime.

The gradient then crosses into the harness itself. **Harness Engineering** is the frame every subsequent concept hangs on — guides that shape the attempt before the model acts, sensors that check the result after, and the discipline of iterating the loop between them. It is the page that makes the throughline explicit: the model is the commodity, the harness is the product, and the gap between a demo and a system you can trust lives entirely in what you built around the core.

From there, the concepts build the harness layer by layer. **Memory and Context** teaches what the agent thinks with — four memory types, four context-engineering operations, and the distinction between what the agent knows and what the agent can see right now. **Tools and MCP** teaches what the agent acts with — five principles of well-designed tool interfaces and the open protocol that made those interfaces portable. **RAG and Its Evolutions** teaches how the agent finds evidence — a ladder from naive vector search through hybrid, graph, agentic, and self-correcting retrieval, climbed only as far as the evaluation set demands.

The gradient continues toward higher autonomy. **Multi-Agent Handoffs and A2A** teaches coordination — five topologies, typed handoff contracts, and the wire protocol for agents that cross organisational boundaries. **Steering** teaches control — mechanistic activation interventions at the research frontier and operational techniques that practitioners use every day to keep an agent on task. **Code and Doc Indexing** teaches grounding — making the actual codebase, with its real symbols and real signatures, available to the agent before it writes a line of code, preventing the phantom APIs that are the costliest class of coding-agent error.

The final three concepts close the loop. **Evals and Observability** teaches measurement — three evaluation surfaces, traces with bodies, the issue lifecycle that turns a detected failure into a harness improvement. **AFK and Autonomous Agents** teaches trust — the Ralph loop, agent fleets, and the gradient from human-in-the-loop through on-rails to fully autonomous operation, earned rung by rung. And **The Failure Taxonomy** teaches diagnosis — five classes of failure (memory, reflection, planning, action, system), each with its own symptoms, its own root causes, and its own harness responses.

Read backward from the taxonomy and every earlier concept resolves into a defence against one or more of those five failure classes. Memory and context engineering prevent memory failures. Evals prevent reflection failures. The workflow patterns and multi-agent orchestration prevent planning failures. Tool design and MCP prevent action failures. The operational infrastructure a production harness requires — budgets, checkpoints, backoff, health checks — prevents system failures. The taxonomy is the capstone because it reveals the structure that was there all along.

---

## SECTION: the-throughline

The argument that runs beneath all twelve concepts is precise enough to state in a single paragraph, and it is the one The Craft exists to make.

The model improves on a schedule its vendors set. A stronger model arrives every few months, and when it does, the rational move is to swap it in and inherit the gain. Two teams building on the same model begin with exactly the same raw reasoning ability — the core is available to your rival on identical terms. What separates them — reliability, safety, cost, the standing to be trusted with real work — comes entirely from what each team built around that core. The harness is where you compete, the harness is where the hard engineering lives, and every concept in this pillar is a component of the harness that makes raw capability trustworthy. This is not a claim about the future. It is a description of the present — and it is the reason the most consequential technical decisions in the field are now made by the engineers who build the controls, not the researchers who build the models.

---

## SECTION: connection-to-pillars

The Craft does not stand alone. It is ground level — the practitioner's altitude — and it sits between two pillars that give it context above and structure below.

**Groundwork** sits above. It asks the questions that must be answered before a single agent is built: how models are sourced, how the security boundary is drawn, how governance is enforced, how cost is accounted for. A practitioner who ignores Groundwork builds systems that governance cannot approve, that security cannot clear, and that finance cannot sustain. The Craft inherits Groundwork's constraints — the guardrails page sets the boundary, the FinOps page sets the budget, and the governance page sets the approval gate. Every harness control taught in this pillar operates inside a space that Groundwork defined.

**Operating Model** is the bridge between the two. It asks how what one practitioner built becomes something another practitioner can find, use, govern, and retire. The centre-of-excellence structure, the skills layer, the maturity gradient from experimentation to AI factory — these are the mechanisms that turn a working harness into a repeatable capability. A harness that works for one team and cannot be adopted by another is a success that does not scale. Operating Model is where scale lives.

The three pillars are not independent layers. They are three altitudes over the same terrain. An eval surface built in Craft becomes a quality gate in Operating Model and a compliance artefact in Groundwork. A tool exposed through MCP in Craft becomes a governed skill in Operating Model and a standardisation commitment in Groundwork. The concepts taught here are the deepest on the site — and they are deep because depth is the authority proof. If The Craft is undeniable, the other two pillars inherit its credibility.

---

## SECTION: provocation

Here is the part that should change how a builder reads this pillar. The first ninety per cent of an agent is easy. A mid-level engineer can wire a working agent against a strong model in an afternoon, and it will demo well. The last ten per cent — idempotent tool use, evaluation pipelines that catch a regression before a user does, permission hierarchies that hold across a multi-agent chain, memory that stays coherent across a long-running task, steering that survives the composition of twenty constraints — is the actual work. It is systems engineering of the same kind senior engineers spent the previous decade applying to databases and distributed services, and the field has not yet fully reckoned with that fact. The harness is not a configuration you set once. It is a discipline you practise — and the twelve pages that follow are the curriculum.

---

## SECTION: forward-bridge

The concept grid below is the full map of The Craft. Each cell links to its concept page, and each concept page teaches one component of the harness with enough depth and precision to implement.

Start with Agents vs Workflows if you want the foundational distinction. Start with Harness Engineering if you want the frame. Start with The Failure Taxonomy if you learn best by understanding what goes wrong. The gradient holds regardless of where you enter — and the throughline holds on every page: an agent is a model plus a harness, and everything hard lives in the harness.
