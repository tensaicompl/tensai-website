import { HarnessDiagram } from "./HarnessDiagram";
import { AgentsVsWorkflowsDiagram } from "./AgentsVsWorkflowsDiagram";
import { FivePatternsDiagram } from "./FivePatternsDiagram";
import { MemoryContextDiagram } from "./MemoryContextDiagram";
import { ToolsMcpDiagram } from "./ToolsMcpDiagram";
import { RagEvolutionsDiagram } from "./RagEvolutionsDiagram";
import { MultiAgentDiagram } from "./MultiAgentDiagram";
import { SteeringDiagram } from "./SteeringDiagram";
import { CodeDocIndexingDiagram } from "./CodeDocIndexingDiagram";
import { EvalsObservabilityDiagram } from "./EvalsObservabilityDiagram";
import { FailureTaxonomyDiagram } from "./FailureTaxonomyDiagram";
import { AfkAutonomousDiagram } from "./AfkAutonomousDiagram";
import { BuildBuyBoostDiagram } from "./BuildBuyBoostDiagram";
import { TokenSourcingDiagram } from "./TokenSourcingDiagram";
import { OperatingModelDiagram } from "./OperatingModelDiagram";
import { GovernanceRiskDiagram } from "./GovernanceRiskDiagram";
import { FinopsDiagram } from "./FinopsDiagram";
import { SecurityArchDiagram } from "./SecurityArchDiagram";
import { SkillsDiagram } from "./SkillsDiagram";
import { AgentCatalogDiagram } from "./AgentCatalogDiagram";
import { PowerUsersDiagram } from "./PowerUsersDiagram";
import { CoeEnablementDiagram } from "./CoeEnablementDiagram";
import { AdoptionPatternsDiagram } from "./AdoptionPatternsDiagram";

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
  "code-doc-indexing": CodeDocIndexingDiagram,
  "evals-observability": EvalsObservabilityDiagram,
  "failure-taxonomy": FailureTaxonomyDiagram,
  "afk-autonomous": AfkAutonomousDiagram,
  "build-buy-boost": BuildBuyBoostDiagram,
  "token-sourcing": TokenSourcingDiagram,
  "operating-model": OperatingModelDiagram,
  "governance-risk": GovernanceRiskDiagram,
  "finops": FinopsDiagram,
  "security-architecture": SecurityArchDiagram,
  "skills": SkillsDiagram,
  "agent-catalog": AgentCatalogDiagram,
  "power-users": PowerUsersDiagram,
  "coe-enablement": CoeEnablementDiagram,
  "adoption-patterns": AdoptionPatternsDiagram,
};

export function getDiagramForSlug(slug: string): DiagramComponent | null {
  return DIAGRAM_REGISTRY[slug] ?? null;
}
