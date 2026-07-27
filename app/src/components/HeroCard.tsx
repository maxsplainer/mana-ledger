import "./HeroCard.css";

type HeroCardProps = {
  label: string;
  amount: string;
  comparison: string;
};

export default function HeroCard({
  label,
  amount,
  comparison,
}: HeroCardProps) {
  return (
    <section className="hero-card">
      <div className="hero-card__label">
        <span className="hero-card__dot" />
        {label}
      </div>

      <div>
        <h2 className="hero-card__amount">{amount}</h2>
        <p className="hero-card__comparison">{comparison}</p>
      </div>

      <div className="hero-card__pagination" aria-hidden="true">
        <span className="hero-card__page hero-card__page--active" />
        <span className="hero-card__page" />
        <span className="hero-card__page" />
      </div>
    </section>
  );
}