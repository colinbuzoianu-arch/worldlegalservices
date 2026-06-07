import { pillars } from "@/lib/content";
import ArticleClient from "@/components/ArticleClient";
import { getArticleContent } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return pillars.flatMap(p => p.articles.map(a => ({ pillar: p.slug, article: a.slug })));
}

export default async function ArticlePage({ params }: { params: Promise<{ pillar: string; article: string }> }) {
  const { pillar: pillarSlug, article: articleSlug } = await params;
  const pillar = pillars.find(p => p.slug === pillarSlug);
  if (!pillar) return notFound();
  const article = pillar.articles.find(a => a.slug === articleSlug);
  if (!article) return notFound();
  const content = await getArticleContent(pillarSlug, articleSlug);
  return <ArticleClient pillar={pillar} article={article} content={content} />;
}
