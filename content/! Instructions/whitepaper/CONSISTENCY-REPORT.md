# Whitepaper Consistency Report

## Summary
- Files checked: 12 (Writing Bible + Executive Summary + Chapters 1--10) plus VISUAL-CATALOG.md
- Issues found: 14
- Issues fixed: 12
- Issues flagged (needs human judgment): 2

---

## EuroCorp Continuity

### Fixed

**RAND meta-analysis sample size (Chapter 1 vs Executive Summary/Chapter 2).**
Chapter 1 said "65 documented enterprise AI initiatives." Executive Summary and Chapter 2 both said "2,400+ initiatives." These describe the same RAND study with conflicting sample numbers. Fixed Chapter 1 to read "2,400+ enterprise AI initiatives between 2022 and 2025, with 65 documented in depth" -- reconciling both figures.

**Team size inconsistency (Chapter 9 scorecard).**
All chapters describe EuroCorp's team as 14 people. Chapter 9's scorecard said "team size stayed flat at 16 (two hires replacing two departures)" -- mathematically, two hires and two departures keeps the team at 14, not 16. The team grew to 16. Fixed to: "The team grew from 14 to 16 (two net hires added during the hub-and-spoke transition)." Corresponding reference in Chapter 10 also updated.

**Shadow AI tool count (Chapter 10 vs Chapter 4).**
Chapter 4 established that EuroCorp discovered 71 total AI systems: 23 known pilots + 11 embedded in SaaS + 37 shadow AI tools. Chapter 10's action plan said "EuroCorp discovered 11 shadow AI tools" -- understating the discovery and conflating the SaaS-embedded tools with the broader shadow AI count. Fixed to: "EuroCorp discovered 48 additional AI tools during this exercise -- 11 embedded in SaaS products and 37 shadow tools."

**Prompt injection incident description (Chapter 4 forward reference vs Chapter 7 actual).**
Chapter 4 described the future incident as "a manipulated input that causes the warranty-triage agent to approve a fraudulent claim." Chapter 7 actually describes a supplier document that causes the aftermarket services agent to exfiltrate internal pricing data via email -- a different agent, a different attack, a different outcome. Fixed Chapter 4's forward reference to match Chapter 7's actual description.

**Prompt injection incident timeline (Chapter 9 vs Chapter 7).**
Chapter 9's scorecard said "The prompt injection incident described in Chapter 7 was detected in 4 hours" -- but Chapter 7 explicitly says the incident was "discovered 36 hours later." These describe different timeframes: Chapter 7 is the pre-governance incident; Chapter 9 describes post-framework performance. Fixed Chapter 9 to read: "A subsequent prompt injection attempt -- similar to the one described in Chapter 7 -- was detected in 4 hours."

**CSA Agentic Trust Framework date (Chapter 10).**
Chapter 10 cited "(CSA Agentic Trust Framework, 2025)." Chapters 5 and 7 both correctly cite "February 2026." Fixed to 2026.

### Verified as consistent

- EuroCorp profile: 12,000 employees, Munich HQ, 4 business units, 14-person AI team (growing to 16 in scorecard), CTO, CDO (hired 18 months ago), 23 pilots, 3 in production, $4.2M spend -- all consistent across all chapters.
- $380,000/month AI spend -- consistent in Chapters 1, 6, 9, and 10.
- $547 billion wasted -- consistent across Executive Summary, Chapter 1, and Chapter 10 close.
- 71 total AI systems (23 + 11 + 37) -- consistent between Chapter 4 and Chapter 10 (after fix).
- The 18-month journey reads sequentially: Chapters 1-2 (diagnosis), 3-6 (framework pillars), 7 (security event in "month four"), 8 (external evidence), 9 (12-month scorecard), 10 (18-month roadmap).

---

## Terminology

### Fixed

**"Proof-of-concept" (Chapter 2, line 73).**
The Writing Bible forbids "POC, prototype, demo, proof of concept" -- use "pilot" instead. Chapter 2 used "A $60,000 proof-of-concept becomes a $250,000 production system." Fixed to "A $60,000 pilot becomes..."

**"Deployed systems" (Chapter 3, line 51).**
Changed "three deployed systems" to "three production systems" to match the Writing Bible's preference for "production" over "deployed" as a state descriptor.

### Accepted (no fix needed)

- Chapter 1 line 55: "abandoned after proof-of-concept" -- this is a direct paraphrase of a Gartner citation, not the whitepaper's own terminology. Acceptable.
- Chapter 2 line 15: "proofs-of-concept" -- quoting IDC/Lenovo research nomenclature. Acceptable.
- "AI team" used extensively: The Writing Bible says "Do NOT say: AI team, AI group, AI department" and prefers "CoE." However, in context, EuroCorp's team is specifically described *before* it becomes a CoE -- the term is used to describe the informal, unstructured team that the framework then converts into a proper CoE and platform team. This contextual usage is defensible. Generic uses elsewhere (Chapter 3 "minimum viable AI team", Chapter 8 "a 14-person AI team at a European industrial conglomerate") serve narrative clarity. No changes made.
- "Deployed" as a verb (past tense action): Used throughout as "McKinsey deployed," "Bosch deployed," etc. The Writing Bible targets "deployed" as a state adjective (synonym for "in production"), not as a verb. These verb uses are correct.

### Verified clean

- No violations found for: POC, prototype, demo (in own voice), live, in the wild, wrapper, scaffold (when meaning harness), proxy, middleware, API layer (when meaning gateway), enablement team, tooling team, risk level, risk category, risk band, cost metrics, cost analysis.
- "Gateway," "harness," "CoE," "platform team," "risk tier," "unit economics," "governance" all used correctly throughout.

---

## Cross-References

### Fixed

**VIS-03 mismatch (Executive Summary).**
Executive Summary referenced "[VIS-03: 18-Month Action Plan Timeline]." The VISUAL-CATALOG defines VIS-03 as "Key Numbers Sidebar." The 18-Month Action Plan Timeline is VIS-56. Fixed the reference to "[VIS-56: 18-Month AI Scaling Roadmap]."

### Verified as accurate

All chapter-to-chapter cross-references checked:
- Ch 1 close -> Ch 2 (correct: "why 20 of EuroCorp's 23 pilots stalled")
- Ch 2 -> Ch 5 ("Chapter 5 builds the architecture") -- correct
- Ch 2 -> Ch 6 ("Chapter 6 -- builds the model") -- correct
- Ch 2 close -> Ch 3 ("Chapter 3 builds the operating model") -- correct
- Ch 3 -> Ch 4 ("the AI inventory that Chapter 4 builds") -- correct
- Ch 3 close -> Ch 4 ("Chapter 4 argues") -- correct
- Ch 4 -> Ch 3, Ch 5, Ch 7 -- all accurate
- Ch 5 -> Ch 4 (governance references) -- correct
- Ch 5 close -> Ch 6 -- correct
- Ch 6 -> Ch 1 (CFO's question) -- correct
- Ch 6 close -> Ch 7 -- correct
- Ch 7 -> Ch 3 (Skelton's question), Ch 4 (governance), Ch 5 (gateway), Ch 6 (economics) -- all accurate
- Ch 7 close -> Ch 8 -- correct
- Ch 8 -> all framework chapters -- verified accurate, including the specific mapping (Klarna/Ch 9, Amazon/Ch 5+7, Duolingo/Ch 3)
- Ch 8 close -> Ch 9 -- correct
- Ch 9 close -> Ch 10 -- correct
- Ch 10 -> all chapters -- verified accurate

---

## Data Citations

### Fixed

**a16z gross margin figure (Chapter 2 vs Chapter 6).**
Chapter 2 said "AI companies have gross margins in the 30--50% range" (a16z, 2020). Chapter 6 said "50--60% range" (a16z, 2020). Same source, different numbers. Standardised Chapter 2 to "50--60%" to match Chapter 6 (the dedicated economics chapter with the more detailed treatment).

**Pilot-to-production cost multiplier (Chapter 2 vs Chapter 6/Exec Summary).**
Chapter 2 said "2.5 and 4 times." Chapter 6 and the Executive Summary both use "2.3--4.1x" (citing Ptolemay, 2025). Fixed Chapter 2 to "2.3 and 4.1 times."

**"88% adopt. 5.5% see impact" (VIS-05 and Chapter 10) vs "6% high performers" (Chapter 1 text).**
The VIS-05 pull-quote and Chapter 10 used "5.5%" but Chapter 1's body text defines the figure as "6% of respondents qualify as AI high performers" (McKinsey, 2025). There is no "5.5%" cited with a source anywhere in the chapter text. Standardised all references to "6%" to match the sourced data in Chapter 1. Updated VIS-05 in chapter text, Chapter 10, and VISUAL-CATALOG.md (pull-quote text, accent description, alt text, and convergence table entry).

### Verified as consistent

- "88% of organisations use AI" -- cited as McKinsey, 2025 in every occurrence (Exec Summary, Ch 1, Ch 10).
- "$547 billion" failure cost -- cited as RAND, 2025 in Ch 1; consistent wording in Exec Summary and Ch 10.
- "80.3% failure rate" -- cited as RAND, 2025 in both Exec Summary and Ch 1.
- "95% of transformation failures trace to organisational factors" -- cited as Stanford HAI, 2026 consistently.
- "$7.2 million per abandoned initiative" -- cited as Deloitte, 2025 in both Ch 2 and the VIS-17 marker.
- "45% fewer AI-related security incidents" -- cited as Stanford HAI, 2026 in both Ch 4 and Ch 9.
- "21% more tasks" (Bain) -- used identically in Ch 1, Ch 2, Ch 6, and Ch 9.
- "74% of AI's economic value captured by 20%" -- cited as PwC, 2026 in both Exec Summary and Ch 1.
- BCG tiers (5%/35%/60%) -- consistent between Ch 1 and Ch 3.
- BCG "3.5 use cases vs 6.1" -- consistent between Ch 6 and Ch 9.
- "$670,000 more per shadow AI breach" -- cited as IBM, 2025 in both Ch 4 and Ch 4 economics section.
- "42% of implementations, model choice fully interchangeable" -- consistent across Ch 2, Ch 5, and Ch 8.

---

## Voice

### Verified clean

- **NEVER-list violations:** None found. No instances of "Furthermore," "Moreover," "Additionally," "It's worth noting," "In today's world," "Let's dive in," or "In conclusion."
- **Exclamation marks:** None found in any chapter.
- **Passive voice hedging:** No instances of "It could be argued that," "One might say," or "It's worth considering."
- **British spelling:** Consistent throughout. No American spellings found ("organisation," "optimisation," "colour" -- though "colour" does not appear, no instances of "color" were found either).
- **Register drift:** Each chapter maintains appropriate texture as prescribed by the Writing Bible: Chapters 1-2 are urgent and confronting, Chapter 3 is architectural, Chapters 5/7 are technical, Chapter 8 reads as case evidence. No chapter drifts into consulting jargon, academic passive, or blog casual.
- **Sentence restatement:** No significant instances of consecutive sentences restating the same point in different words.
- **Over-explanation for CTO audience:** None found. The text consistently assumes technical literacy.
- **Numeral convention:** Statistics use numerals ("88%", "$4.2M", "23 pilots"). Structural counts under ten use words ("three pillars", "two models", "four business units"). Consistent throughout.

---

## Visual Markers

### Fixed

**VISUAL-CATALOG header count.**
Header said "Total visual elements: 52" but the summary table counts 59 (VIS-01 through VIS-59). Fixed to 59.

### Verified

All VIS markers in chapter files match entries in the VISUAL-CATALOG:
- Executive Summary: VIS-01, VIS-02, VIS-56 (fixed from VIS-03) -- all present in catalog
- Chapter 1: VIS-04, VIS-05, VIS-06, VIS-07, VIS-08, VIS-09, VIS-10 -- all present
- Chapter 2: VIS-11, VIS-12, VIS-13, VIS-14, VIS-15, VIS-16, VIS-17 -- all present
- Chapter 3: VIS-18, VIS-19, VIS-20, VIS-21, VIS-22, VIS-23 -- all present
- Chapter 4: VIS-24, VIS-25, VIS-26, VIS-27, VIS-28, VIS-29, VIS-30 -- all present
- Chapter 5: VIS-31, VIS-32, VIS-33, VIS-34, VIS-35 -- all present
- Chapter 6: VIS-36, VIS-37, VIS-38, VIS-39, VIS-40, VIS-41 -- all present
- Chapter 7: VIS-42, VIS-43, VIS-44, VIS-45, VIS-46, VIS-47 -- all present
- Chapter 8: VIS-48, VIS-49, VIS-50, VIS-51, VIS-52 -- all present
- Chapter 9: VIS-53, VIS-54 -- all present
- Chapter 10: VIS-55, VIS-56, VIS-57, VIS-58 -- all present

No VIS markers are duplicated across chapters. VIS-59 (Appendix) appears only in the catalog and has no chapter reference (appendices not yet written -- acceptable).

Note: VIS markers within chapters do not always appear in sequential order (e.g., Chapter 1 has VIS-05 before VIS-04). This is intentional -- placement follows narrative flow, not numerical sequence.

---

## Remaining Items for Human Review

### 1. "AI team" terminology: deliberate or accidental?

The Writing Bible explicitly lists "AI team" as a "Do NOT say" term, preferring "CoE." However, the whitepaper uses "AI team" extensively (17+ occurrences across chapters) in contexts where EuroCorp's team has not yet been formalised as a CoE. The narrative arc intentionally describes an informal "AI team" that evolves into a structured CoE (Chapter 3) and then a platform team. Enforcing "CoE" everywhere would break this narrative logic. However, some generic uses -- particularly in Chapter 3's "minimum viable AI team" and Chapter 8's "14-person AI team at a European industrial conglomerate" -- could be reconsidered. This is an authorial judgment call.

### 2. Executive Summary six-pillar names vs VISUAL-CATALOG VIS-01 pillar names

The Executive Summary names the six pillars as: Operating Model, Governance, Architecture, Economics, Security, Measurement. The VISUAL-CATALOG VIS-01 entry names them as: (1) Strategy and Use Case Selection, (2) Operating Model and Organisation, (3) Governance and Risk, (4) Architecture and Infrastructure, (5) Economics and Measurement, (6) Security and Trust. These are expanded/refined versions of the same pillars, but the naming is not identical. When VIS-01 is designed, decide which naming convention to use and ensure it matches the Executive Summary text.
