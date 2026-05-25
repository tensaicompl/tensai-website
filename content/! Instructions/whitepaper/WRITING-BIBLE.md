# TensAI Whitepaper — Writing Bible

Every writing agent reads this file before drafting a single sentence. It governs coherence, voice, and the discipline of not sounding like a machine wrote it.

---

## Part 1: Coherence — how 10 chapters read as one document

### The running example: EuroCorp

EuroCorp is a composite European industrial conglomerate — 12,000 employees, four business units (automotive components, industrial sensors, logistics software, aftermarket services), headquartered in Munich, operating across 9 EU countries. It has a 14-person AI team inside a shared-services IT function, a CTO who reports to the board, and a CDO who was hired 18 months ago.

EuroCorp has completed 23 AI pilots. Three are in production. The rest are in various states of limbo.

**Use EuroCorp consistently:**
- Chapter 1: EuroCorp's 23 pilots and $4.2M spend — the paradox in miniature
- Chapter 2: Why 20 of those pilots stalled — the structural gap
- Chapter 3: How EuroCorp redesigns its AI function — CoE to platform team
- Chapter 4: EuroCorp's governance framework — from nothing to minimum viable
- Chapter 5: The architecture gap between EuroCorp's pilots and production
- Chapter 6: EuroCorp's cost attribution problem — $380K/month, no idea what's working
- Chapter 7: The prompt injection incident EuroCorp didn't see coming
- Chapter 8: Real companies that solved what EuroCorp is facing
- Chapter 9: EuroCorp's scorecard — what to measure after 12 months
- Chapter 10: EuroCorp's 18-month plan — from here to operating at scale

**EuroCorp is not a character study.** It is structural scaffolding. It appears 2–3 times per chapter to ground a framework in a concrete decision. It does not have named people, dialogue, or narrative drama. It is a reference architecture for the reader's own organisation.

### Shared terminology

Use these terms consistently. Do not invent synonyms.

| Term | Meaning | Do NOT say |
|---|---|---|
| Pilot | A bounded experiment, not in production | POC, prototype, demo, proof of concept |
| Production | Serving real users with real consequences | Deployed, live, in the wild |
| Operating model | The organisational machinery for running AI | Framework, structure, setup |
| Harness | Everything around the model — guides and sensors | Wrapper, scaffold, infrastructure (when meaning harness) |
| Gateway | The routing and security layer for model access | Proxy, middleware, API layer |
| CoE | Centre of Excellence — the central AI team | AI team, AI group, AI department |
| Platform team | The team that builds internal AI infrastructure | Enablement team, tooling team |
| Risk tier | The classification of an AI system by potential harm | Risk level, risk category, risk band |
| Unit economics | Cost per task, per outcome, per user | Cost metrics, cost analysis |
| Governance | The organisational machinery for accountability | Compliance (governance ≠ compliance) |

### Cross-references

Chapters reference each other by number, not by vague allusion:

- Good: "The operating model described in Chapter 3 determines who can deploy the architectures covered here."
- Bad: "As we discussed earlier..."
- Bad: "As mentioned in a previous section..."

### Data citation consistency

Every statistic appears with the same attribution everywhere it is used:

- Good: "88% of enterprises report using AI in at least one business function (McKinsey, 2025)"
- Bad: "Most enterprises use AI" in one chapter and "88% adoption" in another without the source

If a number appears in multiple chapters, it must cite the same source with the same wording. Do not paraphrase the same statistic differently across chapters.

### Narrative arc

The 10 chapters follow a single argument. Each chapter's opening sentence connects to the previous chapter's close:

1–2: **The problem.** AI adoption is nearly universal. AI value is nearly absent. The gap is structural, not technical.
3–6: **The framework.** Four pillars — operating model, governance, architecture, economics — that close the gap.
7–8: **The evidence.** Security as the trust prerequisite. Case evidence that the framework works.
9–10: **The measurement and the road.** How to know it's working. What comes next.

A reader who reads only the first and last sentence of each chapter should be able to follow the entire argument.

---

## Part 2: Voice — the architectural provocateur

The voice profile below is the primary steering for every writing agent. It is derived from the author's actual writing voice, not a generic prescription. Match it.

### The archetype

**The architectural provocateur.** Writes like someone who sees the whole structure of an idea before putting down the first word, then drops the reader into the sharpest part of it. Authoritative without being academic. Warm without being soft. The writing feels built, not written.

**The signature move:** opens with a provocation that reframes the familiar, then constructs the scaffolding to prove it. The reader is caught off-guard in the first two sentences, then guided through a framework that makes the provocation feel inevitable by the end.

### Thought architecture

**Structure: explosive-then-architectural.** Lead with the insight — drop it on the reader without preamble. Then build the supporting structure backward: why this matters, what it means, what to do about it. Never bury the lede. Never start with context-setting. The structure feels like: punch → framework → evidence → reframe.

**Opening style: drop into the sharpest edge.** The first sentence is the most provocative or counterintuitive claim in the section. The second sentence either deepens the provocation or pivots to "here's why this matters to you." The reader should feel slightly destabilised and compelled to continue.

**Closing style: single-sentence reframe.** Does not summarise. Does not repeat key points. Ends with a single sentence — sometimes a question, sometimes a declaration — that reframes everything the reader just absorbed. The closing should make the reader want to re-read the opening.

**Transitions: hard cuts between sections, rhetorical bridges within.** Sections end and the next one starts without connective tissue — the reader jumps. Within sections, transitions are rhetorical questions or a short bridge sentence that pivots the angle. No "Furthermore," or "Additionally," or "That said," ever.

### Emotional register

**Temperature: warm.** Engaged, human, grounded. The warmth comes through in care for the subject and respect for the reader — not through emotional display. Passion shows as precision: the more deeply it matters, the more carefully every word is chosen. Never hot, never cold. The warmth is steady.

**Humour: dry, sharp, rare.** The humour cuts — through pretension, through conventional wisdom, through comfortable assumptions. Never silly. Never self-deprecating. Observational with an edge. Often arrives as a single deadpan sentence dropped between serious points, creating a beat of surprise before the argument continues. When it appears, it is the most memorable line in the piece.

**Passion markers:** the writing gets denser and more precisely constructed when the stakes are high. Not louder — tighter. Sentence rhythm shortens. Word choice becomes more deliberate. The architecture becomes more visible. You feel the care in the construction.

### Stylistic signature

**Sentence rhythm:** short-short-long. Opens paragraphs with two punchy sentences, then expands into a longer developing sentence that carries the nuance. Closes sections with a single short sentence that lands the point. Uses fragments for emphasis only — never more than one per page, at structural pivot points.

**Vocabulary: conversational-smart.** Uses sophisticated concepts in accessible language. Reaches for concrete, Anglo-Saxon words over Latinate abstractions when possible. When a technical term is necessary, defines it in the same sentence — not as a footnote, but woven in. Never uses consulting or corporate vocabulary.

**Metaphor families:**
- **Primary: architectural** — scaffolding, foundation, load-bearing, framework, blueprint
- **Secondary: craft** — forging, shaping, building with your hands, the grain of the material
- **Tertiary: water/journey** — current, depth, navigate, passage
- **Never:** military, sports, or food metaphors

**Punctuation:**
- Em dash: heavy — the signature punctuation, used for sharp asides, pivots, dramatic pauses before a punchline
- Semicolons: rare — they feel too academic
- Exclamation marks: never — if the emphasis needs punctuation, the sentence is weak
- Parentheticals: occasional — intimate asides to the reader

### Reader relationship

**Stance: guide.** Leads from slightly ahead — someone who has been where the reader is going and is showing them the path. Not lecturing from a podium. Not writing as a peer figuring it out alongside. Has authority but wears it lightly. The reader should feel respected, slightly challenged, and in capable hands.

**Pronouns:**
- **"You"** — used frequently and directly. Pulls the reader into the argument, makes abstract points personal. "You've seen this. You know what happens next."
- **"I"** — rare and purposeful. Appears only when personal experience adds irreplaceable weight. Never habitual.
- **"We"** — sparingly, only when genuinely inclusive. Never the royal "we" or the corporate "we."

**Persuasion mode: authority-first, then invitation.** Opens with a strong position — states it cleanly, without hedging, without asking permission. Then invites the reader into the framework: "Here's what I see. Here's why it matters. Here's what you can do with it." Doesn't argue against objections — builds the case so completely that objections dissolve.

### The 12 voice rules (for the system prompt)

1. Open every section with the sharpest, most provocative sentence. No throat-clearing. No context-setting. Drop the reader into the insight.
2. Structure is explosive-then-architectural: lead with the punch, then build the framework backward.
3. Short punchy sentences for assertions. Longer flowing sentences for nuance. Single-sentence paragraphs at structural turning points.
4. Ground every abstract claim with one specific, concrete example.
5. Use "you" to pull the reader in. Use "I" only when personal experience adds irreplaceable weight.
6. Em dashes are the signature punctuation — use them for sharp pivots and asides.
7. Vocabulary is conversational-smart. Anglo-Saxon over Latinate. No consulting jargon. No corporate vocabulary.
8. Humour is dry, sharp, and rare. One deadpan line between serious points. Never silly, never self-deprecating.
9. Close every section with a single sentence that reframes what came before. Close the chapter with resonance, not a summary.
10. Metaphors come from architecture and craft: scaffolding, foundation, forging, shaping. Never sports, military, or food.
11. State positions with authority. No hedging. No passive constructions to avoid ownership. Be wrong confidently rather than right vaguely.
12. Passion shows as precision, not volume. The more it matters, the tighter the prose gets.

### The NEVER list

- Open with "In today's world" or any throat-clearing
- Use "leverage", "synergize", "actionable", "best practices", "move the needle", "at the end of the day"
- Write a paragraph that is pure setup without a payoff
- Use exclamation marks
- Summarise with "In conclusion", "To sum up", "As we've seen", "In summary"
- Use passive voice to avoid taking a position — "It could be argued that...", "One might say...", "It's worth considering..."
- Use "Furthermore", "Moreover", "Additionally", "It's worth noting", "Interestingly"
- Use semicolons to join independent clauses
- Explain what a CTO already knows (REST APIs, cloud infrastructure, what a database is)
- Write three examples of equal weight (the rule of three is a machine fingerprint — break it)
- Start consecutive paragraphs with "This..."
- End a section with a neat bow when tension would serve better

### The ALWAYS list

- Open with the strongest sentence in the piece — drop the reader into the insight, not the context
- Ground every abstract claim in at least one specific, concrete example
- End each section with a single sentence that reframes or elevates what came before
- Use em dashes for rhythm and surprise
- British spelling throughout (organisation, optimisation, colour)
- Numerals for all statistics ("88%", "$4.2M", "23 pilots"). Words for structural counts under ten ("three pillars", "two models")

### Paragraph and section discipline

**Paragraphs:**
- One idea per paragraph. Two points = two paragraphs.
- The first sentence carries the claim. The rest is evidence or elaboration.
- No paragraph longer than 6 sentences. No paragraph shorter than 2 sentences except at structural pivots.
- Vary paragraph lengths deliberately. A two-sentence paragraph hits harder after a long one.

**Sections:**
- Every section opens with its whole — the fractal rule. State the complete point before decomposing it.
- Every section closes by connecting forward — to the next section or to the chapter's argument.
- Headings are descriptive, not clever. "Risk Classification Without Bureaucracy" — not "Getting Risk Right." The reader is a CTO scanning the table of contents.

---

## Part 3: Not sounding AI-written — the hardest discipline

The rules above address voice. This section addresses the deeper problem: machine prose has a texture that experienced readers detect in the first paragraph. It is not one thing — it is the accumulation of many small patterns. Here is how to break them.

### 1. Have an opinion

AI prose hedges. Human prose takes a position. This whitepaper has opinions:
- Boost is the dominant strategy. Build is almost always wrong for the model layer. Say so.
- Most governance frameworks are compliance theatre. Say so.
- The CoE-as-builder model is the bottleneck, not the solution. Say so.
- Fine-tuning is justified in fewer than 5% of enterprise use cases. Say so.

State positions and defend them with evidence. The reader came for judgment, not balance.

### 2. Use asymmetric evidence

AI gives three examples of equal weight. A human writer leads with the strongest example, adds one contrasting case, and sometimes stops at two. The Klarna case is more interesting than a generic "financial services firm" — lead with Klarna by name, with the specific numbers, and let the reader feel the weight of one real story rather than three balanced abstractions.

### 3. Let some things be simple

AI explains everything. A human writer trusts the reader. If your audience is CTOs, you do not need to explain what a REST API is. You do not need to define "cloud infrastructure." Over-explanation is a machine marker because the model doesn't know what the reader already knows — and it resolves that uncertainty by explaining everything. Fight this actively. Assume the reader is sharp.

### 4. Write ugly first sentences

AI opening sentences are polished and generic. Human opening sentences are often specific, odd, or abrupt:
- "EuroCorp spent $4.2 million on AI in 2024 and cannot name a single initiative that paid for itself."
- "The failure rate is somewhere between 80% and 95%, depending on which consulting firm you ask and how generously you define failure."
- "Three pilots are in production. Twenty are not. Nobody has formally killed the twenty."

These sentences have texture. They have a point of view. They would not survive a "make this more professional" prompt — which is exactly why they read as human.

### 5. Include the uncomfortable

AI tends toward resolution. Human writing acknowledges what it cannot resolve:
- "We do not yet know whether agentic AI will follow the same scaling patterns as traditional ML. The data does not exist."
- "This framework has not been validated across regulated industries. Apply it with that limitation in mind."
- "Klarna's initial results were impressive. Then they had to rehire the humans."

Admitting limits builds trust faster than claiming completeness.

### 6. Vary the texture across chapters

Chapters 1–2 should feel urgent — short sentences, confronting data, uncomfortable questions. Chapter 3 should feel architectural — longer sentences, more structure, more framework. Chapter 7 should feel technical — precision, specificity, less rhetoric. Chapter 8 should feel like case law — evidence presented, patterns extracted, judgment reserved for the reader.

If every chapter sounds the same, the document reads as generated. Humans naturally shift register when the subject shifts. Do it deliberately.

### 7. Delete 20% of what you write

The single most effective anti-AI move is cutting. AI prose is fluent, which means it is wordy. After drafting, delete:
- Every sentence that restates the previous one in different words
- Every transition that the reader doesn't need
- Every qualifier ("somewhat", "relatively", "arguably", "to some extent")
- Every throat-clearing opener
- Every summary that repeats what the section just said

A 10-page chapter should be drafted at 12 pages and cut to 10. The cut is what gives it density.

---

## Part 4: Writing process

### Phase 1: Anchor chapters (sequential)

Write Chapters 1 and 2 first, in sequence. These set the voice, introduce EuroCorp, and establish the argument. Every subsequent chapter agent reads Chapters 1 and 2 before writing.

### Phase 2: Framework chapters (parallel, but reading Ch 1–2)

Write Chapters 3, 4, 5, 6 in parallel. Each agent reads:
- This Writing Bible
- The WHITEPAPER-OUTLINE-WITH-VISUALS.md for their chapter
- Chapters 1 and 2 (for voice and EuroCorp continuity)
- Their research file(s)

### Phase 3: Evidence and measurement (parallel)

Write Chapters 7, 8, 9 in parallel, reading Chapters 1–2 and relevant framework chapters.

### Phase 4: Synthesis

Write Chapter 10 and the Executive Summary last — they synthesise everything.

### Phase 5: Consistency pass

One agent reads all 10 chapters and checks:
- EuroCorp continuity (does the running example track?)
- Terminology consistency (see the shared terms table)
- Cross-reference accuracy (do chapter references point correctly?)
- Data citation consistency (same stat, same source, same wording?)
- Voice consistency (does any chapter drift into a different register?)
- Cut 20% of anything that sounds generated
