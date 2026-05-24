# Diagram Brief — Tools & MCP

## Title
The MCP Interface

## Single idea
A single MCP server exposes tools, resources, and prompts through one standardised interface — and any number of MCP clients connect to it without custom integration. The diagram shows this one-to-many decoupling as the central structural insight.

## Layout
Vertical centre: a single box labelled **MCP Server** (e.g. "billing") with three compartments or stacked rows inside it — **Tools**, **Resources**, **Prompts** — each with one or two example names (e.g. `create_invoice`, `get_invoice` under Tools). A thin horizontal wire labelled **JSON-RPC 2.0** runs from the server leftward. On the left side, three or four client boxes fan out from that wire — labelled generically as **Client A**, **Client B**, **Client C** (not branded). Between the wire and the server, a small annotation: **capability negotiation at connect**. Below the server, a single annotation line: **stdio (local) · streamable HTTP (remote)** indicating transport options. The composition reads left-to-right: many clients, one protocol wire, one server exposing three primitives.

## Style
- Background: off-white (#FAFAFA)
- All structural lines and box borders: midnight (#0F172A), 1.5px stroke
- One accent colour: TensAI violet (#6D28D9) — used only on the **JSON-RPC 2.0** wire label and the three primitive labels inside the server box (Tools, Resources, Prompts)
- Text: #0F172A, set in a clean sans-serif (Inter or system equivalent)
- No gradients, no drop shadows, no fills except a very faint violet tint (#6D28D9 at 5% opacity) inside the server box to distinguish it from the clients
- No icons, no illustrations, no logos — pure structural diagram
- Generous whitespace; the diagram should breathe

## Caption
An MCP server exposes tools, resources, and prompts through a single JSON-RPC interface. Any MCP client connects without custom integration — the provider builds once, every consumer inherits for free.
