import type { CollectionEntry } from "astro:content";

export const blogCategories = [
  "Economia",
  "Ciência de dados",
  "IA e automação"
] as const;

export type BlogPost = CollectionEntry<"blog">;

export const topicSlug = (label: string) => label.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const formatBlogDate = (date: Date) => new Intl.DateTimeFormat("pt-BR", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
}).format(date);

export const monthKey = (date: Date) => date.toISOString().slice(0, 7);

export function publicBlogPosts(posts: BlogPost[]) {
  return posts.filter((post) => !post.data.draft || (import.meta.env.DEV && post.data.preview))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function blogGroups(posts: BlogPost[]) {
  const published = publicBlogPosts(posts);
  const categories = blogCategories.map((label) => ({
    label, path: `categoria/${topicSlug(label)}`,
    posts: published.filter((post) => post.data.category === label)
  }));
  const tags = new Map<string, string>();
  published.forEach((post) => post.data.tags.forEach((tag) => {
    const slug = topicSlug(tag);
    if (slug && !tags.has(slug)) tags.set(slug, tag);
  }));
  const tagGroups = [...tags].map(([slug, label]) => ({
    label, path: `tag/${slug}`,
    posts: published.filter((post) => post.data.tags.some((tag) => topicSlug(tag) === slug))
  })).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
  const months = [...new Set(published.map((post) => monthKey(post.data.pubDate)))];
  const archives = months.map((month) => ({
    label: new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" })
      .format(new Date(`${month}-01T00:00:00Z`)),
    path: `mes/${month}`,
    posts: published.filter((post) => monthKey(post.data.pubDate) === month)
  }));
  return { categories, tags: tagGroups, archives };
}

export const blogGroupURL = (path: string) => `/blog/arquivo/${path}/`;
