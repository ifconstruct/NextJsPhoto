'use client';
import { useEffect, useRef, useState } from 'react';
import photos from '@/data/photos.json';
export default function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const list = compact
    ? photos.slice(0, 3)
    : photos.filter((p) => filter === 'All work' || p.category === filter);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  return (
    <>
      {!compact && (
        <div className="filters">
          {['All work', 'Portraits', 'Nature', 'Travel'].map((c) => (
            <button
              className={filter === c ? 'selected' : ''}
              key={c}
              onClick={() => {
                setFilter(c);
                setSelected(null);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className={compact ? 'gallery compact' : 'gallery'}>
        {list.map((p, i) => (
          <button
            className="photo-card"
            key={p.id}
            onClick={() => setSelected(i)}
          >
            <div className="photo-wrap">
              <img src={`/photos/${p.id}.jpg`} alt={p.alt} loading="lazy" />
              <span className="photo-open">↗</span>
            </div>
            <div className="photo-caption">
              <h3>{p.title}</h3>
              <span>
                {p.category} · {p.location}
              </span>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {selected !== null && (
          <>
            <button
              className="close"
              aria-label="Close photograph"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={`/photos/${list[selected].id}.jpg`}
              alt={list[selected].alt}
            />
            <div className="lightbox-caption">
              <button
                aria-label="Previous photograph"
                onClick={() =>
                  setSelected((selected - 1 + list.length) % list.length)
                }
              >
                ←
              </button>
              <p>
                {list[selected].title}{' '}
                <small>
                  {selected + 1} / {list.length}
                </small>
              </p>
              <button
                aria-label="Next photograph"
                onClick={() => setSelected((selected + 1) % list.length)}
              >
                →
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
