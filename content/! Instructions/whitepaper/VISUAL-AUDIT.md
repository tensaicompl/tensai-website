# Visual Rendering Audit

## Summary
- Total embedded visuals: **56** (of 59 visual files; 3 not embedded)
- Rendering correctly (fully inline styles): **0**
- Partially inline (layout works, details broken): **5** (Figures 1, 2, 3, 30, 31)
- Broken (missing CSS): **51**
- Width overflow issues: **6** (in whitepaper); **44** (in original files)

Every single one of the 59 visual HTML files has a `<style>` block. When they were embedded into the whitepaper, only the `<body>` content was extracted -- no `<style>` blocks were carried over. This means **all 56 embedded visuals are affected** to some degree. Five were re-created with inline styles (Figures 1-3, 30-31) but still use a handful of unstyled class names. The remaining 51 are entirely class-based and render as unstyled plain text.

### Visual files NOT embedded (3 of 59)
- `vis-02-paradox-numbers.html` -- replaced by inline-styled Figure 1
- `vis-17-sunk-cost.html` -- not used
- `vis-41-tokenmaxxing.html` -- not used
- `vis-45-security-gap.html` -- not used

Note: vis-01, vis-03, vis-31, vis-32, vis-56 were also not directly embedded but have counterpart figures that were re-created with inline styles.


## Broken visuals (missing CSS)

### Figure 4 (Embed #4): Adoption-impact gap
- **Original file:** `visuals/vis-05-88-percent.html`
- **Issue:** Uses classes `accent`, `card`, `context`, `quote-line`, `source` -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 59 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 780px
- **Fix approach:** Extract CSS from original file and add to whitepaper, OR convert to inline styles

### Figure 5 (Embed #5): Adoption-impact matrix
- **Original file:** `visuals/vis-04-adoption-matrix.html`
- **Issue:** Uses 31 classes (`visual`, `matrix-container`, `quadrant-grid`, `quadrant`, `q-purgatory`, `q-scaled`, `dots`, `dot`, `axis-x`, `axis-y`, `arrow-x`, `arrow-y`, `axis-label`, `eurocorp`, etc.) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 251 lines of CSS needed
- **Inline styles:** 3
- **Width overflow in original:** 800px, 700px
- **Fix approach:** Extract CSS from original. This is a complex SVG-like quadrant chart; converting to inline would be impractical

### Figure 6 (Embed #6): Failure convergence
- **Original file:** `visuals/vis-06-failure-convergence.html`
- **Issue:** Uses 14 classes (`container`, `title`, `subtitle`, `convergence-zone`, `bar-wrapper`, `bar-cell`, `bar-track`, `bar-fill`, `bar-value`, `methodology-cell`, `bracket`, `year-badge`, `caption`, `label`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 174 lines of CSS needed
- **Inline styles:** 8 (partial)
- **Width overflow in original:** 900px, 800px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 7 (Embed #7): Failure rate pull quote
- **Original file:** `visuals/vis-10-failure-rate.html`
- **Issue:** Uses classes `accent`, `card`, `line-one`, `line-two` -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 50 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 780px
- **Fix approach:** Extract CSS from original file

### Figure 8 (Embed #8): BCG three-tier segmentation
- **Original file:** `visuals/vis-07-bcg-tiers.html`
- **Issue:** Uses 23 classes (`visual`, `title`, `subtitle`, `bar-container`, `segment`, `seg-future`, `seg-scalers`, `seg-laggards`, `seg-label`, `pct-labels`, `pct-label`, `bracket-area`, `bracket`, `bracket-line-left`, `bracket-line-right`, `bracket-line-bottom`, `bracket-label`, `metrics`, `metric-card`, `metric-header`, `metric-value`, `metric-desc`, `caption`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 212 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 9 (Embed #9): Regional comparison (US/ASPAC/EU)
- **Original file:** `visuals/vis-08-regional-comparison.html`
- **Issue:** Uses 14 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 158 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 920px, 800px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 10 (Embed #10): Agentic readiness radar
- **Original file:** `visuals/vis-09-agentic-readiness.html`
- **Issue:** Uses 15 classes (`radar-container`, `radar-svg`, `axis-label`, `legend`, `legend-item`, `legend-swatch`, `card`, `card-header`, `card-title`, `card-subtitle`, `footer-note`, etc.) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 126 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 11 (Embed #11): AI iceberg
- **Original file:** `visuals/vis-11-iceberg.html`
- **Issue:** Uses classes `frame`, `title`, `iceberg-container`, `iceberg-svg`, `caption` -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 53 lines of CSS needed
- **Inline styles:** 1
- **Width overflow in original:** 800px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 12 (Embed #12): Five structural failure modes
- **Original file:** `visuals/vis-12-failure-modes.html`
- **Issue:** Uses 20 classes (`frame`, `title`, `diagnostic-row`, `row-number`, `row-body`, `row-content`, `mode-name`, `mode-stat`, `mode-ask`, `severity-bar-container`, `severity-bar-track`, `severity-bar-fill`, `severity-label`, `critical`, `high`, `medium-high`, `scoring`, `scoring-title`, `scoring-text`, `caption`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 171 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 13 (Embed #13): Technical debt taxonomy
- **Original file:** `visuals/vis-15-tech-debt.html`
- **Issue:** Uses 17 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 139 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 14 (Embed #14): Cost multiplier waterfall
- **Original file:** `visuals/vis-13-cost-multiplier.html`
- **Issue:** Uses 17 classes (`visual`, `title`, `waterfall`, `wf-col`, `wf-label`, `wf-bar`, `wf-bar-start`, `wf-bar-add`, `wf-bar-total`, `wf-connector`, `wf-pct`, `wf-pct-total`, `multiplier`, `mult-line`, `mult-badge`, `baseline`, `caption`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 149 lines of CSS needed
- **Inline styles:** 9 (partial)
- **Width overflow in original:** 800px, 720px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 15 (Embed #15): TCO model (visible vs hidden costs)
- **Original file:** `visuals/vis-14-tco-model.html`
- **Issue:** Uses 15 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 144 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 720px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 16 (Embed #16): Scaling readiness assessment
- **Original file:** `visuals/vis-16-scaling-readiness.html`
- **Issue:** Uses 17 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 168 lines of CSS needed
- **Inline styles:** 6 (partial)
- **Width overflow in original:** 980px, 740px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 17 (Embed #17): Operating model selection matrix
- **Original file:** `visuals/vis-18-operating-model.html`
- **Issue:** Uses 23 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 228 lines of CSS needed
- **Inline styles:** 7 (partial)
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 18 (Embed #18): CoE evolution blueprint
- **Original file:** `visuals/vis-19-coe-evolution.html`
- **Issue:** Uses 24 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 264 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 19 (Embed #19): Role sequencing ladder
- **Original file:** `visuals/vis-20-role-ladder.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 203 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 20 (Embed #20): Team topology map
- **Original file:** `visuals/vis-21-team-topology.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 215 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 860px, 780px
- **Fix approach:** Extract CSS from original file

### Figure 21 (Embed #21): Klarna case study
- **Original file:** `visuals/vis-23-klarna.html`
- **Issue:** Uses 10 classes (`card`, `company-name`, `sector-badge`, `headline-stat`, `stat-value`, `stat-reversal`, `divider`, `bullet-list`, `lesson`, `lesson-label`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 118 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 22 (Embed #22): Adoption cascade
- **Original file:** `visuals/vis-22-adoption-cascade.html`
- **Issue:** Uses 17 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 174 lines of CSS needed
- **Inline styles:** 2
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 23 (Embed #23): Governance maturity diagnostic
- **Original file:** `visuals/vis-24-governance-maturity.html`
- **Issue:** Uses 18 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 180 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 24 (Embed #24): 90-day MVG timeline
- **Original file:** `visuals/vis-25-mvg-timeline.html`
- **Issue:** Uses 24 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 215 lines of CSS needed
- **Inline styles:** 14 (partial)
- **Width overflow in original:** 880px
- **Fix approach:** Extract CSS from original file

### Figure 25 (Embed #25): EU AI Act timeline
- **Original file:** `visuals/vis-30-eu-ai-act.html`
- **Issue:** Uses 28 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 271 lines of CSS needed
- **Inline styles:** 5 (partial)
- **Width overflow in original:** 880px
- **Fix approach:** Extract CSS from original file

### Figure 26 (Embed #26): Tri-pillar compliance map
- **Original file:** `visuals/vis-26-compliance-map.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 226 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 960px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 27 (Embed #27): Classification decision tree
- **Original file:** `visuals/vis-27-classification-tree.html`
- **Issue:** Uses classes `frame`, `title`, `tree-svg`, `caption` -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 47 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 28 (Embed #28): AI incident growth timeline
- **Original file:** `visuals/vis-28-incident-timeline.html`
- **Issue:** Uses 25 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 233 lines of CSS needed
- **Inline styles:** 5 (partial)
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 29 (Embed #29): Governance ROI
- **Original file:** `visuals/vis-29-governance-roi.html`
- **Issue:** Uses 24 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 226 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 32 (Embed #32): Model health dashboard
- **Original file:** `visuals/vis-35-model-health.html`
- **Issue:** Uses 30 classes (`dashboard`, `dash-header`, `dash-title`, `model-name`, `dash-alert`, `alert-icon`, `metrics-grid`, `metric-card`, `metric-header`, `metric-name`, `metric-status`, `metric-value-row`, `metric-value`, `metric-unit`, `metric-trend`, `trend-up`, `trend-down`, `trend-stable`, `sparkline`, `spark-bar`, `thresholds`, `threshold`, `threshold-dot`, `status-green`, `status-amber`, `spec-note`, `container`, `subtitle`, `caption`, `title`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 223 lines of CSS needed
- **Inline styles:** 58 (mixed -- has both inline and class-based)
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file. Note: despite 58 inline styles, the 30 class-based rules control the dashboard grid layout and metric card styling

### Figure 33 (Embed #33): Data architecture layers
- **Original file:** `visuals/vis-34-data-arch.html`
- **Issue:** Uses 20 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 202 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 740px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 34 (Embed #34): Build/buy/boost decision tree
- **Original file:** `visuals/vis-33-build-buy-boost.html`
- **Issue:** Uses 28 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 227 lines of CSS needed
- **Inline styles:** 8 (partial)
- **Width overflow in original:** 860px, 780px
- **Fix approach:** Extract CSS from original file

### Figure 35 (Embed #35): LLM API price deflation chart
- **Original file:** `visuals/vis-36-price-deflation.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 207 lines of CSS needed
- **Inline styles:** 39 (mixed -- both inline positioning and class-based styling)
- **Width overflow in whitepaper:** 720px
- **Width overflow in original:** 800px, 720px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 36 (Embed #36): Jevons paradox diagram
- **Original file:** `visuals/vis-39-jevons.html`
- **Issue:** Uses 21 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 212 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 37 (Embed #37): TCO calculator
- **Original file:** `visuals/vis-37-tco-calculator.html`
- **Issue:** Uses 20 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 242 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 880px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 38 (Embed #38): Cost optimisation levers
- **Original file:** `visuals/vis-38-optimisation-stack.html`
- **Issue:** Uses 25 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 219 lines of CSS needed
- **Inline styles:** 13 (partial)
- **Width overflow in original:** 800px, 740px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 39 (Embed #39): Cost attribution model
- **Original file:** `visuals/vis-40-cost-attribution.html`
- **Issue:** Uses 20 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 192 lines of CSS needed
- **Inline styles:** 2
- **Width overflow in original:** 800px, 720px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 40 (Embed #40): Incident evolution timeline
- **Original file:** `visuals/vis-47-incident-evolution.html`
- **Issue:** Uses 15 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 215 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 41 (Embed #41): Threat landscape / defence-in-depth
- **Original file:** `visuals/vis-44-threat-landscape.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 208 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 760px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 42 (Embed #42): Six-layer defence-in-depth stack
- **Original file:** `visuals/vis-43-defence-depth.html`
- **Issue:** Uses 15 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 145 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 43 (Embed #43): Security architecture / standards
- **Original file:** `visuals/vis-42-security-arch.html`
- **Issue:** Uses 23 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 223 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 720px, 700px
- **Fix approach:** Extract CSS from original file

### Figure 44 (Embed #44): Security standards convergence
- **Original file:** `visuals/vis-46-security-standards.html`
- **Issue:** Uses 16 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 193 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 960px, 760px
- **Fix approach:** Extract CSS from original file

### Figure 45 (Embed #45): Success factors heatmap
- **Original file:** `visuals/vis-48-success-factors.html`
- **Issue:** Uses 14 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 157 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px, 740px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 46 (Embed #46): Failure case study cards
- **Original file:** `visuals/vis-50-failure-cards.html`
- **Issue:** Uses 10 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 104 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 960px, 720px
- **Fix approach:** Extract CSS from original file

### Figure 47 (Embed #47): Governance comparison grid
- **Original file:** `visuals/vis-52-gov-comparison.html`
- **Issue:** Uses 20 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 218 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 960px, 760px
- **Fix approach:** Extract CSS from original file

### Figure 48 (Embed #48): ROI table
- **Original file:** `visuals/vis-49-roi-table.html`
- **Issue:** Uses 17 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 183 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 980px, 760px
- **Fix approach:** Extract CSS from original file

### Figure 49 (Embed #49): Pilot timeline / metrics ladder
- **Original file:** `visuals/vis-51-pilot-timeline.html`
- **Issue:** Uses 19 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 179 lines of CSS needed
- **Inline styles:** 6 (partial)
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file

### Figure 50 (Embed #50): Metrics maturity ladder
- **Original file:** `visuals/vis-53-metrics-ladder.html`
- **Issue:** Uses 30 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 276 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file

### Figure 51 (Embed #51): Enterprise AI scorecard
- **Original file:** `visuals/vis-54-scorecard.html`
- **Issue:** Uses 13 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 126 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 920px
- **Fix approach:** Extract CSS from original file

### Figure 52 (Embed #52): Three waves timeline
- **Original file:** `visuals/vis-55-three-waves.html`
- **Issue:** Uses 22 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 278 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 880px
- **Fix approach:** Extract CSS from original file

### Figure 53 (Embed #53): Agentic readiness full assessment
- **Original file:** `visuals/vis-57-agentic-full.html`
- **Issue:** Uses 21 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 196 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** 1040px, 780px, 740px
- **Fix approach:** Extract CSS from original file

### Figure 54 (Embed #54): 18-month roadmap (detailed)
- **Original file:** `visuals/vis-56-18-month-roadmap.html`
- **Issue:** Uses 26 classes -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 237 lines of CSS needed
- **Inline styles:** 15 (partial)
- **Width overflow in original:** 920px
- **Fix approach:** Extract CSS from original file

### Figure 55 (Embed #55, no caption): Six pillars final (closing framework)
- **Original file:** `visuals/vis-58-six-pillars-final.html`
- **Issue:** Uses 26 classes (`frame`, `title`, `hex-grid`, `hex-row`, `pillar`, `pillar-header`, `pillar-number`, `pillar-chapter`, `pillar-name`, `pillar-framework`, `maturity`, `maturity-track`, `maturity-fill`, `maturity-label`, `maturity-label-right`, `centre-node`, `centre-label`, `centre-sub`, `centre-band`, `interdep`, `interdep-row`, `interdep-item`, `interdep-arrow`, `subtitle`, `subtitle-text`, `caption`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 240 lines of CSS needed
- **Inline styles:** 6 (partial -- maturity bar widths)
- **Width overflow in original:** 800px
- **Fix approach:** Extract CSS from original file. Note: this embed has no `<p class="figure-caption">` -- may also need caption added

### Figure 56 (Embed #56, no caption): Penalty comparison table
- **Original file:** `visuals/vis-59-penalty-comparison.html`
- **Issue:** Uses 15 classes (`container`, `title`, `subtitle`, `penalty-table`, `dim-col`, `reg-col`, `reg-year`, `dim-label`, `fine-value`, `fine-or`, `fine-pct`, `multiplier-row`, `multiplier-badge`, `scope-text`, `caption`) -- none defined in whitepaper CSS
- **Has `<style>` block:** YES -- 171 lines of CSS needed
- **Inline styles:** 0
- **Width overflow in original:** None
- **Fix approach:** Extract CSS from original file. Note: this embed has no `<p class="figure-caption">` -- may also need caption added


## Partially rendering visuals (inline-heavy but with missing classes)

### Figure 1 (Embed #1): Key numbers (trillion-dollar paradox)
- **Original file:** Re-created with inline styles (corresponds to `vis-03-key-numbers.html` concept)
- **Issue:** Mostly inline-styled but uses classes `card`, `stat`, `stats` that are not defined in whitepaper CSS. These are container classes -- visual likely renders with correct spacing/fonts from inline styles but missing border-radius, shadow, or card background from class-based rules
- **Inline styles:** 16
- **Missing classes:** 3
- **Width overflow in whitepaper:** 920px
- **Fix approach:** Add the 3 missing class definitions or convert remaining classes to inline. Also fix width overflow

### Figure 2 (Embed #2): Six-pillar framework hexagon
- **Original file:** Re-created with inline styles (corresponds to `vis-01-six-pillars.html` concept)
- **Issue:** Mostly inline-styled but uses classes `frame`, `hex-container`, `lines-layer`, `title` -- not defined. SVG connecting lines are inline-styled and render. The `frame` class likely controls the outer container styling
- **Inline styles:** 37
- **Missing classes:** 4
- **Width overflow in whitepaper:** 800px
- **Fix approach:** Add the 4 missing class definitions or convert to inline. Also fix width overflow

### Figure 3 (Embed #3): 18-month roadmap (executive summary version)
- **Original file:** Re-created with inline styles (corresponds to `vis-56-18-month-roadmap.html` concept)
- **Issue:** Extensively inline-styled (113 inline attributes) but uses class `frame` for outer container -- not defined
- **Inline styles:** 113
- **Missing classes:** 1 (`frame`)
- **Width overflow in whitepaper:** 920px
- **Fix approach:** Add `frame` class definition (simple container styling) or convert to inline. Fix width overflow

### Figure 30 (Embed #30): MLOps maturity levels
- **Original file:** Re-created with inline styles (corresponds to `vis-32-mlops-maturity.html` concept)
- **Issue:** Extensively inline-styled (53 inline attributes) but uses class `container` -- not defined
- **Inline styles:** 53
- **Missing classes:** 1 (`container`)
- **Width overflow in whitepaper:** 960px, 760px
- **Fix approach:** Add `container` class or convert to inline. Fix width overflow

### Figure 31 (Embed #31): Six-layer AI gateway architecture
- **Original file:** Re-created with inline styles (corresponds to `vis-31-gateway-arch.html` concept)
- **Issue:** Extensively inline-styled (68 inline attributes) but uses class `visual` -- not defined
- **Inline styles:** 68
- **Missing classes:** 1 (`visual`)
- **Width overflow in whitepaper:** 800px, 720px
- **Fix approach:** Add `visual` class or convert to inline. Fix width overflow


## Width overflow issues

The A4 content column is approximately 170mm / 640px within 20mm margins. The following visuals have elements wider than this limit **in the whitepaper as embedded**:

### Figure 1 (Embed #1): Key numbers
- **Issue:** Root container has `width:920px` (from inline `max-width:920px`), exceeds 640px content column
- **Fix:** Set `max-width:100%` on outer container, or reduce to 640px

### Figure 2 (Embed #2): Six pillars hexagon
- **Issue:** Frame has `width:800px` (inline style), exceeds 640px
- **Fix:** Scale down to `max-width:100%` or redesign for narrower column

### Figure 3 (Embed #3): 18-month roadmap (exec summary)
- **Issue:** Frame has `width:920px` (inline style), exceeds 640px
- **Fix:** Set `max-width:100%` and ensure internal layout scales

### Figure 30 (Embed #30): MLOps maturity
- **Issue:** Container has `max-width:960px`, inner table `min-width:760px`, exceeds 640px
- **Fix:** Reduce widths or use `max-width:100%` with horizontal scaling

### Figure 31 (Embed #31): Gateway architecture
- **Issue:** Visual has `width:800px`, inner elements `width:720px`, exceeds 640px
- **Fix:** Scale down or set `max-width:100%`

### Figure 35 (Embed #35): Price deflation chart
- **Issue:** Inner chart elements at `width:720px`, exceeds 640px
- **Fix:** Reduce chart width to fit content column

### Note on original visual files
44 of the 59 original visual files have elements wider than 640px. When their CSS is extracted and added to the whitepaper, all of these will also overflow. The fix approach should include adding `max-width: 100%; overflow-x: hidden;` to the `.figure-embedded` class, and potentially using CSS `transform: scale()` for visuals that cannot be reflowed.


## Correctly rendering visuals

None of the 56 embedded visuals render fully correctly. Every embedded visual has at least one undefined class.

The 5 inline-heavy visuals (Figures 1, 2, 3, 30, 31) render **mostly** correctly -- their layout and text styling comes through via inline styles -- but each has 1-4 undefined container/wrapper classes that affect the outer frame styling.


## Recommended fix strategy

### Option A: Extract all CSS (recommended)
1. For each of the 51 fully broken visuals, extract the `<style>` block from the original `visuals/vis-XX-*.html` file
2. Namespace each visual's CSS under `.figure-embedded` to avoid collisions (e.g., `.figure-embedded .title` instead of `.title`)
3. Append the consolidated CSS to the whitepaper's `<style>` block
4. Total CSS to extract: approximately 10,200 lines across 51 files
5. Add `.figure-embedded { max-width: 100%; overflow-x: hidden; }` to handle width overflow
6. For the 5 inline-heavy visuals, add the handful of missing class definitions

### Option B: Convert class-based to inline styles
1. For each broken visual, convert all CSS classes to inline `style=""` attributes
2. Pros: No CSS conflicts, self-contained
3. Cons: Extremely labour-intensive (51 visuals, ~10,000 CSS rules), makes future edits harder

### Option C: Hybrid -- namespace and consolidate
1. Extract CSS from originals
2. Prefix all visual CSS selectors with a per-visual scope class (e.g., `.vis-05 .accent`)
3. Add the scoped class to each embedded visual's wrapper div
4. Add `max-width: 100%` overflow handling
5. Pros: No naming collisions between visuals; Cons: Requires renaming in both CSS and HTML
