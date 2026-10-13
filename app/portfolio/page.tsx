import Gallery from '@/components/Gallery';
export const metadata = { title: 'Portfolio' };
export default function Portfolio() {
  return (
    <main className="page section">
      <p className="eyebrow">PORTFOLIO / 2026</p>
      <h1>
        Little moments.
        <br />
        <em>Lasting stories.</em>
      </h1>
      <p className="page-description">
        People, nature, and journeys. Choose a story and take a closer look.
      </p>
      <Gallery />
      <p className="demo-note">
        Real Unsplash photographs selected for this demo. These are not works by
        the featured demo photographer.
      </p>
    </main>
  );
}
