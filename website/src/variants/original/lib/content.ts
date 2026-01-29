import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export type PageEntry = {
  slug: string;
  title: string;
  html: string;
};

export type PostEntry = {
  slug: string;
  title: string;
  html: string;
  date: Date | null;
  excerpt: string;
};

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
});

const CONTENT_ROOT = path.resolve(process.cwd(), "..", "content");

const extractTitle = (content: string, fallback: string) => {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() || fallback;
};

const extractExcerpt = (content: string) => {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.replace(/^#\s+.*$/m, "").trim())
    .filter(Boolean);
  return blocks[0] || "";
};

const stripFirstHeading = (content: string) =>
  content.replace(/^#\s+.*\n+/, "");

const readMarkdown = async (filePath: string) => {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
};

export const getPages = async (): Promise<PageEntry[]> => {
  const pagesDir = path.join(CONTENT_ROOT, "pages");
  const files = await fs.readdir(pagesDir);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(pagesDir, file);
        const { data, content } = await readMarkdown(filePath);
        const slug = file.replace(/\.md$/, "");
        const title = typeof data.title === "string"
          ? data.title
          : extractTitle(content, slug);
        return { slug, title, html: md.render(content) };
      })
  );

  return entries.sort((a, b) => a.slug.localeCompare(b.slug));
};

export const getPageBySlug = async (slug: string): Promise<PageEntry | null> => {
  const pages = await getPages();
  return pages.find((page) => page.slug === slug) || null;
};

const parsePostDate = (slug: string, data: Record<string, unknown>) => {
  if (typeof data.date === "string") {
    const parsed = new Date(data.date);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  const match = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
  if (match) {
    const parsed = new Date(match[1]);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return null;
};

export const getPosts = async (): Promise<PostEntry[]> => {
  const postsDir = path.join(CONTENT_ROOT, "posts");
  const files = await fs.readdir(postsDir);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(postsDir, file);
        const { data, content } = await readMarkdown(filePath);
        const slug = file.replace(/\.md$/, "");
        const title = typeof data.title === "string"
          ? data.title
          : extractTitle(content, slug);
        const strippedContent = stripFirstHeading(content);
        const excerpt = extractExcerpt(strippedContent);
        const date = parsePostDate(slug, data);
        return {
          slug: slug.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
          title,
          html: md.render(strippedContent),
          date,
          excerpt,
        };
      })
  );

  return entries.sort((a, b) => {
    if (a.date && b.date) {
      return b.date.getTime() - a.date.getTime();
    }
    if (a.date) {
      return -1;
    }
    if (b.date) {
      return 1;
    }
    return a.title.localeCompare(b.title);
  });
};

export const getPostBySlug = async (slug: string): Promise<PostEntry | null> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) || null;
};
