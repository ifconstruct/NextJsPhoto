import Link from 'next/link';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-intro">
          <p className="eyebrow">
            <span className="dot" /> INDEPENDENT PHOTOGRAPHER
          </p>
          <h1>
            Every moment holds
            <br />
            <em>a story of its own.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Photographing people, places, and everything in between.
              <br />
              Real emotions. Natural light. Your story.
            </p>
            <Link className="text-link" href="/portfolio">
              Explore the portfolio <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/photos/coast.jpg"
            alt="Misty mountain ridges in soft morning light"
            fetchPriority="high"
          />
          <div className="hero-overlay">
            <span>LIGHT. STILLNESS. A MOMENT.</span>
            <span>01 — 06</span>
          </div>
          <span className="vertical-label">A DIFFERENT WAY OF SEEING</span>
        </div>
        <div className="image-note">
          <span>The world opens up when you look a little closer.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Stories in frames</h2>
          </div>
          <Link className="text-link" href="/portfolio">
            All work ↗
          </Link>
        </div>
        <Gallery compact />
      </section>
      <section className="about-strip">
        <div className="about-photo">
          <img
            src="/photos/forest.jpg"
            alt="Sunlight in a quiet forest"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">02 / BEHIND THE LENS</p>
          <h2>
            More than seeing.
            <br />
            <em>Feeling.</em>
          </h2>
          <p>
            I’m drawn to photographs that feel alive: wind in your hair, a
            passing glance, light on a familiar street. The little things worth
            remembering.
          </p>
          <p>Let’s create a story that feels like you.</p>
          <Link className="text-link" href="/about">
            More about me ↗
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / JOURNAL</p>
            <h2>Thoughts & observations</h2>
          </div>
          <Link className="text-link" href="/journal">
            All stories ↗
          </Link>
        </div>
        <News />
      </section>
      <section className="cta">
        <p className="eyebrow">GOOD STORIES BEGIN WITH A CONVERSATION</p>
        <h2>
          Let’s capture something <em>real?</em>
        </h2>
        <Link href="/contact" className="button">
          Let’s talk ↗
        </Link>
      </section>
    </main>
  );
}
