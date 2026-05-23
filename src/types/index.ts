export interface ConceptFrontmatter {
  title: string;
  pillar: 'groundwork' | 'operating-model' | 'craft';
  slug: string;
  definition: string;
  spineConcepts: number[];
  relatedNotes?: string[];
  status: 'stub' | 'draft' | 'published';
  order: number;
}

export interface ConceptPage {
  frontmatter: ConceptFrontmatter;
  content: string;
  slug: string;
}

export interface NoteFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'Engineering' | 'Product' | 'Industry';
  tags?: string[];
  published: boolean;
}

export interface NotePage {
  frontmatter: NoteFrontmatter;
  content: string;
  slug: string;
  readingTime: string;
}

export interface SpineConcept {
  number: number;
  name: string;
  gloss: string;
  pillarSlug: 'groundwork' | 'operating-model' | 'craft';
  conceptSlug: string;
}

export type PillarSlug = 'groundwork' | 'operating-model' | 'craft';

export interface PillarInfo {
  slug: PillarSlug;
  numeral: string;
  tag: string;
  name: string;
  sub: string;
  throughline: string;
}
