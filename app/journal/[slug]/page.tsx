import news from '@/data/news.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: news.find((n) => n.slug === slug)?.title || 'Story' };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();
  return (
    <main className="page section article">
      <Link className="text-link" href="/journal">
        ← Back to the journal
      </Link>
      <p className="eyebrow">
        {article.category} ·{' '}
        {new Date(article.date).toLocaleDateString('en-US', {
          timeZone: 'UTC',
        })}
      </p>
      <h1>{article.title}</h1>
      <p className="page-description">{article.excerpt}</p>
      <img
        className="article-image"
        src={`/photos/${article.image}.jpg`}
        alt={article.title}
      />
      <div className="article-body">
        {article.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </main>
  );
}
