import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getBriefingContent(slug: string, locale: string = 'en'): Promise<string | null> {
  try {
    const filePath = path.join(contentDirectory, locale, 'briefings', `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    const processed = await remark().use(html).process(content);
    return processed.toString();
  } catch {
    return null;
  }
}

export async function getArticleContent(pillarSlug: string, articleSlug: string, locale: string = 'en'): Promise<string | null> {
  try {
    const filePath = path.join(contentDirectory, locale, pillarSlug, `${articleSlug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    const processed = await remark().use(html).process(content);
    return processed.toString();
  } catch {
    return null;
  }
}
