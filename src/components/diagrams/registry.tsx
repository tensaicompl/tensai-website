import { HarnessDiagram } from "./HarnessDiagram";
import { AgentsVsWorkflowsDiagram } from "./AgentsVsWorkflowsDiagram";
import { FivePatternsDiagram } from "./FivePatternsDiagram";
import { MemoryContextDiagram } from "./MemoryContextDiagram";
import { ToolsMcpDiagram } from "./ToolsMcpDiagram";
import { RagEvolutionsDiagram } from "./RagEvolutionsDiagram";
import { MultiAgentDiagram } from "./MultiAgentDiagram";
import { SteeringDiagram } from "./SteeringDiagram";

type DiagramComponent = () => React.JSX.Element;

const DIAGRAM_REGISTRY: Record<string, DiagramComponent> = {
  "harness-engineering": HarnessDiagram,
  "agents-vs-workflows": AgentsVsWorkflowsDiagram,
  "five-patterns": FivePatternsDiagram,
  "memory-context": MemoryContextDiagram,
  "tools-mcp": ToolsMcpDiagram,
  "rag-evolutions": RagEvolutionsDiagram,
  "multi-agent": MultiAgentDiagram,
  "steering": SteeringDiagram,
};

export function getDiagramForSlug(slug: string): DiagramComponent | null {
  return DIAGRAM_REGISTRY[slug] ?? null;
}
