import { HarnessDiagram } from "./HarnessDiagram";
import { AgentsVsWorkflowsDiagram } from "./AgentsVsWorkflowsDiagram";

type DiagramComponent = () => React.JSX.Element;

const DIAGRAM_REGISTRY: Record<string, DiagramComponent> = {
  "harness-engineering": HarnessDiagram,
  "agents-vs-workflows": AgentsVsWorkflowsDiagram,
};

export function getDiagramForSlug(slug: string): DiagramComponent | null {
  return DIAGRAM_REGISTRY[slug] ?? null;
}
