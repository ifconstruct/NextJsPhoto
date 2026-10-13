import Link from 'next/link';
export const metadata = { title: 'About the photographer' };
export default function About() {
  return (
    <main className="page section">
      <p className="eyebrow">ABOUT THE PHOTOGRAPHER</p>
      <div className="about-page">
        <div>
          <h1>
            Hello,
            <br />
            I’m Alexander.
            <br />
            <em>I follow the light.</em>
          </h1>
          <p className="page-description">
            I believe the most meaningful photographs bring you back to how a
            moment felt.
          </p>
          <p>
            My approach is to observe, listen, and make room for real emotion. A
            relaxed pace, simple direction, and space for you to be yourself.
          </p>
          <p>
            A portrait, a couple’s story, or a visual journey through a place —
            it all begins with an idea and a conversation.
          </p>
          <Link className="button" href="/contact">
            Let’s meet ↗
          </Link>
          <p className="demo-note">
            Alexander Volkov is a demo character. Replace this name and text
            with your own biography.
          </p>
        </div>
        <img
          src="/photos/mountains.jpg"
          alt="A mountain peak inspiring new journeys"
        />
      </div>
      <div className="services">
        <div>
          <span>01</span>
          <h3>Portraits</h3>
          <p>Personal stories in natural light.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Couples</h3>
          <p>Connection, movement, and moments together.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Travel</h3>
          <p>The character of a place, through details and atmosphere.</p>
        </div>
      </div>
    </main>
  );
}
