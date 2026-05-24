import { HarnessDiagram } from "./HarnessDiagram";

type DiagramComponent = () => React.JSX.Element;

const DIAGRAM_REGISTRY: Record<string, DiagramComponent> = {
  "harness-engineering": HarnessDiagram,
};

export function getDiagramForSlug(slug: string): DiagramComponent | null {
  return DIAGRAM_REGISTRY[slug] ?? null;
}
