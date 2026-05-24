import { HarnessDiagram } from "./HarnessDiagram";
import { AgentsVsWorkflowsDiagram } from "./AgentsVsWorkflowsDiagram";
import { FivePatternsDiagram } from "./FivePatternsDiagram";
import { MemoryContextDiagram } from "./MemoryContextDiagram";
import { ToolsMcpDiagram } from "./ToolsMcpDiagram";

type DiagramComponent = () => React.JSX.Element;

const DIAGRAM_REGISTRY: Record<string, DiagramComponent> = {
  "harness-engineering": HarnessDiagram,
  "agents-vs-workflows": AgentsVsWorkflowsDiagram,
  "five-patterns": FivePatternsDiagram,
  "memory-context": MemoryContextDiagram,
  "tools-mcp": ToolsMcpDiagram,
};

export function getDiagramForSlug(slug: string): DiagramComponent | null {
  return DIAGRAM_REGISTRY[slug] ?? null;
}
