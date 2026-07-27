import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    summary: z.string(),
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
    status: z.enum(["em_andamento", "submetido", "publicado"]),
    question: z.string(),
    geography: z.string(),
    period: z.string(),
    level: z.enum(["regional", "nacional", "internacional"]),
    method: z.string(),
    dataSource: z.string(),
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
