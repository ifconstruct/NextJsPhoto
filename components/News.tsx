import Link from 'next/link';
import news from '@/data/news.json';
export default function News() {
  return (
    <div className="news-grid">
      {news.map((n) => (
        <Link className="news-card" href={`/journal/${n.slug}`} key={n.slug}>
          <div className="news-image">
            <img src={`/photos/${n.image}.jpg`} alt={n.title} loading="lazy" />
          </div>
          <div className="news-meta">
            {new Date(n.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              timeZone: 'UTC',
            })}{' '}
            <span>{n.category}</span>
          </div>
          <h3>
            {n.title} <span>↗</span>
          </h3>
          <p>{n.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
