import type { SpineConcept, PillarInfo, PillarSlug } from '@/types';

export const SPINE_CONCEPTS: SpineConcept[] = [
  {
    number: 1,
    name: 'Model',
    gloss: 'The reasoning core — a commodity, selected by tier not vendor',
    pillarSlug: 'craft',
    conceptSlug: 'agents-vs-workflows',
  },
  {
    number: 2,
    name: 'Harness',
    gloss: 'Everything around the model — guides and sensors',
    pillarSlug: 'craft',
    conceptSlug: 'harness-engineering',
  },
  {
    number: 3,
    name: 'Tools',
    gloss: 'External capabilities the agent invokes',
    pillarSlug: 'craft',
    conceptSlug: 'tools-mcp',
  },
  {
    number: 4,
    name: 'Context Engineering',
    gloss: 'Designing what enters the window, and when',
    pillarSlug: 'craft',
    conceptSlug: 'memory-context',
  },
  {
    number: 5,
    name: 'Context Management',
    gloss: 'Runtime budgeting, compaction, eviction',
    pillarSlug: 'craft',
    conceptSlug: 'memory-context',
  },
  {
    number: 6,
    name: 'Memory',
    gloss: 'Persistent state — episodic, semantic, procedural',
    pillarSlug: 'craft',
    conceptSlug: 'memory-context',
  },
  {
    number: 7,
    name: 'Retrieval / RAG',
    gloss: 'Grounding in external knowledge',
    pillarSlug: 'craft',
    conceptSlug: 'rag-evolutions',
  },
  {
    number: 8,
    name: 'Skills',
    gloss: 'Portable, reusable, packaged capability',
    pillarSlug: 'operating-model',
    conceptSlug: 'skills',
  },
  {
    number: 9,
    name: 'Workflows',
    gloss: 'Orchestration along predefined code paths',
    pillarSlug: 'craft',
    conceptSlug: 'five-patterns',
  },
  {
    number: 10,
    name: 'Agents',
    gloss: 'Systems that direct their own process',
    pillarSlug: 'craft',
    conceptSlug: 'agents-vs-workflows',
  },
  {
    number: 11,
    name: 'Handoffs',
    gloss: 'One-way transfer of execution between agents',
    pillarSlug: 'craft',
    conceptSlug: 'multi-agent',
  },
  {
    number: 12,
    name: 'Multi-Agent Orchestration',
    gloss: 'Supervisor, swarm, mesh, hierarchy',
    pillarSlug: 'craft',
    conceptSlug: 'multi-agent',
  },
  {
    number: 13,
    name: 'Steering',
    gloss: 'Run-time control — mechanistic and operational',
    pillarSlug: 'craft',
    conceptSlug: 'steering',
  },
  {
    number: 14,
    name: 'Evals & Observability',
    gloss: 'The quality and reliability layer',
    pillarSlug: 'craft',
    conceptSlug: 'evals-observability',
  },
  {
    number: 15,
    name: 'Guardrails & Safety',
    gloss: 'Input filtering, output validation, injection defence',
    pillarSlug: 'groundwork',
    conceptSlug: 'security-architecture',
  },
  {
    number: 16,
    name: 'AFK & Autonomous Agents',
    gloss: 'Long-running agents with no human in the loop',
    pillarSlug: 'craft',
    conceptSlug: 'afk-autonomous',
  },
  {
    number: 17,
    name: 'Code & Doc Indexing',
    gloss: 'Specialised retrieval for software agents',
    pillarSlug: 'craft',
    conceptSlug: 'code-doc-indexing',
  },
  {
    number: 18,
    name: 'Standards & Interop',
    gloss: 'MCP, Agent Skills, A2A, OpenTelemetry',
    pillarSlug: 'craft',
    conceptSlug: 'tools-mcp',
  },
];

export const PILLARS: PillarInfo[] = [
  {
    slug: 'groundwork',
    numeral: 'I',
    tag: 'groundwork',
    name: 'Groundwork',
    sub: 'The foundations every practitioner must hold',
    throughline: 'Before you build, you must understand.',
  },
  {
    slug: 'operating-model',
    numeral: 'II',
    tag: 'operating-model',
    name: 'Operating Model',
    sub: 'How teams and organisations run AI systems in production',
    throughline: 'Craft alone does not scale.',
  },
  {
    slug: 'craft',
    numeral: 'III',
    tag: 'craft',
    name: 'Craft',
    sub: 'The technical patterns for building reliable AI systems',
    throughline: 'Mastery is in the details.',
  },
];

export function getConceptByNumber(n: number): SpineConcept | undefined {
  return SPINE_CONCEPTS.find((c) => c.number === n);
}

export function getConceptsByPillar(pillarSlug: PillarSlug): SpineConcept[] {
  return SPINE_CONCEPTS.filter((c) => c.pillarSlug === pillarSlug);
}

export function getSpineConceptsForConcept(conceptSlug: string): SpineConcept[] {
  return SPINE_CONCEPTS.filter((c) => c.conceptSlug === conceptSlug);
}
