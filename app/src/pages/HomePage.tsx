import HeroCard from "../components/HeroCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__title">Juli 2026</h1>

        <HeroCard
          label="Ausgaben diesen Monat"
          amount="248,60 €"
          comparison="↗ 14 % gegenüber Juni"
        />
      </div>
    </main>
  );
}