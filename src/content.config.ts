import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { blogCategories } from "./lib/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    summary: z.string(),
    preview: z.boolean().default(false),
    category: z.enum(blogCategories).optional(),
    tags: z.array(z.string()).default([]),
    geography: z.string().optional(),
    period: z.string().optional(),
    level: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const pesquisas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pesquisas" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["working_paper", "anais"]).optional(),
    year: z.number().int().optional(),
    authors: z.array(z.string()).min(1).optional(),
    venue: z.string().optional(),
    summary: z.string().optional(),
    pageUrl: z.string().url().optional(),
    pdfUrl: z.string().url().optional(),
    pages: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    status: z.enum(["em_andamento", "submetido", "publicado"]).optional(),
    question: z.string().optional(),
    geography: z.string().optional(),
    period: z.string().optional(),
    level: z.enum(["regional", "nacional", "internacional"]).optional(),
    method: z.string().optional(),
    dataSource: z.string().optional(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const projetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projetos" }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    dataset: z.string(),
    tool: z.array(z.enum(["Python", "R", "SQL"])).min(1),
    result: z.string(),
    repository: z.string().url().optional(),
    replicationNotes: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const tutoriais = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tutoriais" }),
  schema: z.object({
    title: z.string(),
    format: z.enum(["texto", "video"]),
    audience: z.string(),
    objective: z.string(),
    supportMaterial: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const paginas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/paginas" }),
  schema: z.object({
    title: z.string(),
    updatedAt: z.coerce.date().optional()
  })
});

export const collections = {
  blog,
  pesquisas,
  projetos,
  tutoriais,
  paginas
};
