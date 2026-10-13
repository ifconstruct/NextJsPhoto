import News from '@/components/News';
export const metadata = { title: 'Journal' };
export default function Journal() {
  return (
    <main className="page section">
      <p className="eyebrow">NOTES / BEHIND THE SCENES</p>
      <h1>
        A little more
        <br />
        <em>than photographs.</em>
      </h1>
      <p className="page-description">
        On light, journeys, and learning to notice. Sample stories from the
        journal.
      </p>
      <News />
    </main>
  );
}
