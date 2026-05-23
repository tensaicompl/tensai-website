import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type {
  ConceptFrontmatter,
  ConceptPage,
  NoteFrontmatter,
  NotePage,
  PillarSlug,
} from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// ---------------------------------------------------------------------------
// Frontmatter validators
// ---------------------------------------------------------------------------

export function validateConceptFrontmatter(
  data: Record<string, unknown>
): ConceptFrontmatter {
  const required: Array<keyof ConceptFrontmatter> = [
    'title',
    'pillar',
    'slug',
    'definition',
    'spineConcepts',
    'status',
    'order',
  ];

  const missing = required.filter((k) => data[k] === undefined || data[k] === null);
  if (missing.length > 0) {
    throw new Error(
      `Concept frontmatter is missing required fields: ${missing.join(', ')}`
    );
  }

  const validPillars: PillarSlug[] = ['groundwork', 'operating-model', 'craft'];
  if (!validPillars.includes(data.pillar as PillarSlug)) {
    throw new Error(
      `Concept frontmatter has invalid pillar "${data.pillar}". Must be one of: ${validPillars.join(', ')}`
    );
  }

  const validStatuses = ['stub', 'draft', 'published'];
  if (!validStatuses.includes(data.status as string)) {
    throw new Error(
      `Concept frontmatter has invalid status "${data.status}". Must be one of: ${validStatuses.join(', ')}`
    );
  }

  return {
    title: data.title as string,
    pillar: data.pillar as ConceptFrontmatter['pillar'],
    slug: data.slug as string,
    definition: data.definition as string,
    spineConcepts: data.spineConcepts as number[],
    relatedNotes: data.relatedNotes as string[] | undefined,
    status: data.status as ConceptFrontmatter['status'],
    order: data.order as number,
  };
}

export function validateNoteFrontmatter(
  data: Record<string, unknown>
): NoteFrontmatter {
  const required: Array<keyof NoteFrontmatter> = [
    'title',
    'excerpt',
    'date',
    'author',
    'category',
    'published',
  ];

  const missing = required.filter((k) => data[k] === undefined || data[k] === null);
  if (missing.length > 0) {
    throw new Error(
      `Note frontmatter is missing required fields: ${missing.join(', ')}`
    );
  }

  const validCategories = ['Engineering', 'Product', 'Industry'];
  if (!validCategories.includes(data.category as string)) {
    throw new Error(
      `Note frontmatter has invalid category "${data.category}". Must be one of: ${validCategories.join(', ')}`
    );
  }

  return {
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    author: data.author as string,
    category: data.category as NoteFrontmatter['category'],
    tags: data.tags as string[] | undefined,
    published: data.published as boolean,
  };
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
}

function parseMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return matter(raw);
}

// ---------------------------------------------------------------------------
// Concepts
// ---------------------------------------------------------------------------

const PILLAR_DIRS: PillarSlug[] = ['groundwork', 'operating-model', 'craft'];

export function getAllConcepts(): ConceptPage[] {
  const pages: ConceptPage[] = [];

  for (const pillar of PILLAR_DIRS) {
    const dir = path.join(CONTENT_DIR, pillar);
    const files = getMdxFiles(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const { data, content } = parseMdxFile(filePath);
      const frontmatter = validateConceptFrontmatter(data as Record<string, unknown>);
      const slug = file.replace(/\.(mdx|md)$/, '');

      pages.push({ frontmatter, content, slug });
    }
  }

  return pages.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getConceptBySlug(
  pillar: PillarSlug,
  slug: string
): ConceptPage | null {
  const dir = path.join(CONTENT_DIR, pillar);

  for (const ext of ['mdx', 'md']) {
    const filePath = path.join(dir, `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      const { data, content } = parseMdxFile(filePath);
      const frontmatter = validateConceptFrontmatter(data as Record<string, unknown>);
      return { frontmatter, content, slug };
    }
  }

  return null;
}

export function getConceptsByPillar(pillar: PillarSlug): ConceptPage[] {
  const dir = path.join(CONTENT_DIR, pillar);
  const files = getMdxFiles(dir);
  const pages: ConceptPage[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const { data, content } = parseMdxFile(filePath);
    const frontmatter = validateConceptFrontmatter(data as Record<string, unknown>);
    const slug = file.replace(/\.(mdx|md)$/, '');

    pages.push({ frontmatter, content, slug });
  }

  return pages.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

// ---------------------------------------------------------------------------
// Notes
// ---------------------------------------------------------------------------

export function getAllNotes(): NotePage[] {
  const dir = path.join(CONTENT_DIR, 'notes');
  const files = getMdxFiles(dir);
  const pages: NotePage[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const { data, content } = parseMdxFile(filePath);
    const frontmatter = validateNoteFrontmatter(data as Record<string, unknown>);

    if (!frontmatter.published) continue;

    const slug = file.replace(/\.(mdx|md)$/, '');
    const { text: readingTimeText } = readingTime(content);

    pages.push({ frontmatter, content, slug, readingTime: readingTimeText });
  }

  // Sort by date descending
  return pages.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getNoteBySlug(slug: string): NotePage | null {
  const dir = path.join(CONTENT_DIR, 'notes');

  for (const ext of ['mdx', 'md']) {
    const filePath = path.join(dir, `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      const { data, content } = parseMdxFile(filePath);
      const frontmatter = validateNoteFrontmatter(data as Record<string, unknown>);
      const { text: readingTimeText } = readingTime(content);
      return { frontmatter, content, slug, readingTime: readingTimeText };
    }
  }

  return null;
}
