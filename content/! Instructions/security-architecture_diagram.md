# Security Architecture — Diagram Specification

## Diagram: Three-Layer Defence-in-Depth

A single diagram that shows the three concentric security layers and how a request flows through them. Orientation: left-to-right flow, with concentric rectangles (not circles) representing the three layers from outside to inside.

### Layout

```
+------------------------------- GATEWAY (outermost) --------------------------------+
|                                                                                     |
|  [Input Scan] --> [Rate Limit] -->                                                  |
|                                                                                     |
|  +----------------------- CITADEL ISOLATION (middle) -------------------------+     |
|  |                                                                            |     |
|  |  +--- Filesystem ---+   +--- Network ---+   +--- Capabilities ---+        |     |
|  |  | Read-only mounts |   | Allowlist     |   | Explicit tool      |        |     |
|  |  | Output path only |   | outbound only |   | grants only        |        |     |
|  |  +------------------+   +---------------+   +--------------------+        |     |
|  |                                                                            |     |
|  |  +--------------- AGENT (innermost) ----------------+                      |     |
|  |  |                                                   |                     |     |
|  |  |  System prompt  |  Retrieved context  |  User     |                     |     |
|  |  |  (trusted)      |  (scanned)          |  query    |                     |     |
|  |  |                 |                     |  (untrust)|                     |     |
|  |  |                                                   |                     |     |
|  |  |  Tools: [query_benefits] [read_policy]            |                     |     |
|  |  |  Blocked: [send_email] [write_file] [exec_code]   |                     |     |
|  |  +---------------------------------------------------+                      |     |
|  |                                                                            |     |
|  +----------------------------------------------------------------------------+     |
|                                                                                     |
|  <-- [Output Validation] <-- [PII Redaction] <-- [System Prompt Leak Check]         |
|                                                                                     |
|  [Audit Log] --------> [Immutable Store]                                            |
|                                                                                     |
+-------------------------------------------------------------------------------------+
```

### Visual Design Notes

- **Colour coding:** Gateway border in amber/warning tone. Citadel border in blue/security tone. Agent core in neutral grey. Use TensAI design tokens from `tokens.json`.
- **Flow arrows:** Left-to-right for the request path (input scan -> rate limit -> agent). Right-to-left for the response path (agent -> output validation -> user). Both paths pass through all three layers.
- **Blocked elements:** Tools the agent cannot access (send_email, write_file, exec_code) should be rendered in red/muted with a strike-through or lock icon to visually communicate denial.
- **Audit log:** A vertical line from the gateway layer down to an immutable store icon, indicating that logging spans the entire interaction, not just one stage.

### Data for the Diagram

**Gateway stage pipeline (left to right):**
1. Input scanning — injection classifier (ensemble: keyword + ML + heuristic), PII detection
2. Rate limiting — per-user (20 req/min, 50k tokens/hr), per-endpoint (200 req/min)
3. Output validation — PII leakage check, system prompt leakage check
4. Audit logging — full prompt + completion, immutable, 365-day retention

**Citadel isolation mechanisms:**
1. Filesystem — read-only mounts for policy docs, designated output path, no credentials on disk
2. Network — allowlist: benefits API + model provider; all other outbound blocked
3. Capabilities — granted: query_benefits, read_policy; denied: everything else

**Agent interior:**
- Three prompt sections: system (trusted), context (scanned), user (untrusted)
- Structural delimiter between sections (TRUSTED_BOUNDARY marker)
- Tool inventory with explicit grant/deny list

### Attack Flow Overlay (optional second diagram or toggle)

Show the indirect injection attack from the page's running example:

```
1. Attacker modifies policy PDF (invisible payload)
2. Employee asks routine question --> Gateway: input scan CLEAN
3. Agent retrieves policy PDF --> reads injected instruction
4. Agent attempts tool call: query_personnel --> BLOCKED (tool does not exist)
5. Agent responds with available data --> Gateway: output scan detects PII --> REDACTS
6. Audit log records: clean input, blocked tool call, PII redaction event
7. Security team reviews log --> traces to modified PDF --> remediates
```

### Implementation

- Build as an SVG component in `src/components/diagrams/SecurityArchitectureDiagram.tsx`
- Server-renderable (no client-side JS required for static version)
- Responsive: stack vertically on mobile (gateway on top, agent at bottom)
- Use the `DiagramSlot` component as a placeholder until the SVG is built
- Reference the HR assistant example from the page content for labels and annotations
