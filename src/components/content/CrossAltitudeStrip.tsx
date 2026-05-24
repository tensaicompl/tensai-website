interface AltitudeCard {
  headline: string;
  text: string;
}

interface CrossAltitudeStripProps {
  workedExample: {
    name: string;
    craft: AltitudeCard;
    operatingModel: AltitudeCard;
    groundwork: AltitudeCard;
  };
}

export default function CrossAltitudeStrip({ workedExample }: CrossAltitudeStripProps) {
  const cards = [
    {
      eyebrow: "Pillar III · The Craft",
      headline: workedExample.craft.headline,
      text: workedExample.craft.text,
    },
    {
      eyebrow: "Pillar II · The Operating Model",
      headline: workedExample.operatingModel.headline,
      text: workedExample.operatingModel.text,
    },
    {
      eyebrow: "Pillar I · The Groundwork",
      headline: workedExample.groundwork.headline,
      text: workedExample.groundwork.text,
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "64px 24px",
      }}
    >
      {/* Label */}
      <p className="cas-label">
        Worked example —{" "}
        <span className="cas-label-name">{workedExample.name}</span>
      </p>

      {/* Cards row */}
      <div className="cas-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="cas-card">
            <p className="cas-eyebrow">{card.eyebrow}</p>
            <h3 className="cas-headline">{card.headline}</h3>
            <p className="cas-text">{card.text}</p>
            {idx < cards.length - 1 && (
              <span className="cas-arrow" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .cas-label {
          font-size: 13px;
          color: var(--fg-2);
          margin: 0 0 24px 0;
        }

        .cas-label-name {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--fg-1);
        }

        .cas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .cas-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          padding: 26px 24px;
          position: relative;
        }

        .cas-card + .cas-card {
          border-left: none;
        }

        .cas-eyebrow {
          font-size: 14px;
          font-style: italic;
          color: var(--fg-1);
          margin: 0 0 10px 0;
          line-height: 1.4;
        }

        .cas-headline {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          color: var(--fg-1);
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .cas-text {
          font-size: 14px;
          color: var(--fg-2);
          line-height: 1.55;
          margin: 0;
        }

        .cas-arrow {
          position: absolute;
          right: -13px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          color: var(--fg-3);
          z-index: 1;
          pointer-events: none;
          background: var(--bg-surface);
          line-height: 1;
        }

        @media (max-width: 767px) {
          .cas-grid {
            grid-template-columns: 1fr;
          }

          .cas-card + .cas-card {
            border-left: 1px solid var(--border);
            border-top: none;
          }

          .cas-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
