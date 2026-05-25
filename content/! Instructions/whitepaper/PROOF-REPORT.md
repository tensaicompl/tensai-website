# Final Proof Report

## Summary
- Issues found: 10
- Issues fixed: 8
- Issues flagged for human review: 5

## Fixes applied

1. **Line 940 -- Straight apostrophe in colophon title.** Changed `Practitioner's` to `Practitioner&rsquo;s` in the publication notice subtitle. All other apostrophes in prose already used `&rsquo;`.

2. **Line 971 -- Inconsistent email domain.** Changed `research@tensai.com` to `research@tensai.com.pl` to match the back cover URL (`tensai.com.pl`).

3. **Line 4502 -- Appendix table missing class.** Added `class="data-table"` to the Principal Sources table (Appendix A).

4. **Line 4538 -- Appendix table missing class.** Added `class="data-table"` to the Framework and Template Library table (Appendix B).

5. **Line 4609 -- Appendix table missing class.** Added `class="data-table"` to the EU AI Act Risk Tiers table (Appendix C).

6. **Line 4623 -- Appendix table missing class.** Added `class="data-table"` to the EU AI Act Key Dates table (Appendix C).

7. **Line 4644 -- Appendix table missing class.** Added `class="data-table"` to the EU AI Act Penalty Structure table (Appendix C).

8. **Line 4673 -- Appendix table missing class.** Added `class="data-table"` to the NIST AI RMF Four Core Functions table (Appendix C).

## Items for human review

1. **Lines 1119, 1163, 1172, 1200, 1532 -- Unstyled `<hr>` tags in Executive Summary.** Five `<hr>` elements appear before section headings in the Executive Summary. No CSS rule for `hr` exists in the stylesheet, so these will render with browser defaults, inconsistent with the document's design system (`section-rule`, `chapter-rule` divs). Each `<hr>` is redundant because the following `<h2 class="section-heading">` already has its own `<div class="section-rule">`. Consider removing the `<hr>` tags or adding a CSS rule. The last `<hr>` (line 1532) separates the numbered sections from a closing narrative passage and may serve a different visual purpose.

2. **VIS-47 (line 3343) and VIS-59 (line 4656) -- Inconsistent figure placeholder formatting.** These two figures use `<span>` tags inside the placeholder div instead of plain text (the pattern used by all other 54 figures). They also lack the `<strong>Figure N.</strong>` numbered caption prefix. They appear to be intentionally unnumbered supplementary figures (a sidebar and an appendix comparison table). Decide whether to assign them figure numbers (which would make the total 56 and require renumbering downstream) or leave them as unnumbered supplementary visuals.

3. **VIS numbering gaps.** VIS numbers 03, 17, 41, and 45 are not used. The 55 VIS markers that exist are not sequential (01-02, 04-16, 18-40, 42-44, 46-59). This may be intentional (markers dropped during content editing) but should be reconciled if the visual production pipeline expects sequential numbering.

4. **Line 4124 -- Section heading without number.** Chapter 9's final section heading reads "EuroCorp's Scorecard -- Twelve Months Later" without a section number (e.g., 9.5), while all other sections in the chapter are numbered 9.1 through 9.4. This may be a deliberate stylistic choice for a closing narrative section.

5. **VIS-56 appears twice.** Used in both the Executive Summary (Figure 3, line 1180) and Chapter 10 (Figure 53, line 4313). Same visualization referenced in both locations. Confirm this is intentional and that the visual production pipeline handles the duplication.

## Verification summary

### HTML structure
- All tags properly closed and nested (verified via Python HTML parser -- zero errors).
- All chapters follow consistent structural pattern: `page-break` div, `chapter-opener` with watermark number, eyebrow, title, subtitle, rule.
- Page-break divs properly placed between all chapters.

### CSS class consistency
- All body paragraphs use `class="body-text"`.
- All section headings use `class="section-heading"` with `<div class="section-rule"></div>` after.
- All subsection headings use `class="subsection-heading"`.
- All lists use `class="body-list"`.
- All callouts use `class="callout"`.
- All figure placeholders use the `class="figure"` pattern (except VIS-47 and VIS-59 noted above).
- All pull-quotes use the `class="pull-quote"` pattern.
- No raw markdown detected.

### Typography
- All em dashes use `&mdash;` in prose (three literal `—` exist in the `<title>` tag and CSS comments only, which is acceptable).
- All apostrophes in prose use `&rsquo;` (fixed one instance in colophon).
- British spelling used throughout: organisation, optimisation, standardise, behaviour, licence (noun), programme, etc.
- No American spellings found in prose text (CSS `color`/`center` properties are standard CSS, not prose).
- "TensAI P.S.A." used consistently throughout (no "TensAI Inc." found anywhere).

### Content flow
- Table of Contents matches all 10 chapter titles plus Executive Summary and Appendices.
- Cross-references to chapters are accurate.
- EuroCorp details are consistent throughout (Munich HQ, 4 business units, 9 EU countries, 14-person AI team, 23 pilots, 3 in production).
- No duplicate paragraphs detected.
- No truncated sections found.

### Visual placeholder integrity
- 55 unique VIS markers across 56 figure placeholders (VIS-56 appears twice).
- 54 numbered figures (Figure 1 through Figure 54) in sequential order with no gaps.
- 2 unnumbered supplementary figures (VIS-47, VIS-59).
- All numbered figures have captions with `<strong>Figure N.</strong>` prefix.

### Cover and back cover
- Cover: brand lockup, watermark enso, violet hairline, eyebrow, title, standfirst, footer with separator -- all present and correct.
- Back cover: enso, wordmark, tagline, URL (tensai.com.pl), footer -- all present and correct.
- All references use "TensAI P.S.A." (no "TensAI Inc." found).

## Document status
- Ready for visual embedding: YES (pending human decisions on the 5 flagged items, none of which block visual production)
