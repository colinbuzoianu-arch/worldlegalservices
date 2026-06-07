import { pillars } from '@/lib/content';
import ArticleClient from '@/components/ArticleClient';
import { getArticleContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return ['en', 'de', 'ro'].flatMap(locale =>
    pillars.flatMap(p =>
      p.articles.map(a => ({ locale, pillar: p.slug, article: a.slug }))
    )
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; pillar: string; article: string }>;
}) {
  const { locale, pillar: pillarSlug, article: articleSlug } = await params;
  setRequestLocale(locale);
  const pillar = pillars.find(p => p.slug === pillarSlug);
  if (!pillar) return notFound();
  const article = pillar.articles.find(a => a.slug === articleSlug);
  if (!article) return notFound();
  const content = await getArticleContent(pillarSlug, articleSlug);
  return <ArticleClient pillar={pillar} article={article} content={content} />;
}
