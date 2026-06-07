import { pillars } from "@/lib/content";
import ArticleClient from "@/components/ArticleClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return pillars.flatMap(p => p.articles.map(a => ({ pillar: p.slug, article: a.slug })));
}

export default function ArticlePage({ params }: { params: { pillar: string; article: string } }) {
  const pillar = pillars.find(p => p.slug === params.pillar);
  if (!pillar) return notFound();
  const article = pillar.articles.find(a => a.slug === params.article);
  if (!article) return notFound();
  return <ArticleClient pillar={pillar} article={article} />;
}
