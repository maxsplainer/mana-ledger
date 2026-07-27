import "./BottomNavigation.css";

export default function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Hauptnavigation">
      <button
        className="bottom-navigation__item bottom-navigation__item--active"
        type="button"
      >
        <svg
          className="bottom-navigation__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 10.8 12 3l9 7.8v9.7a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5z" />
        </svg>

        <span>Home</span>
      </button>

      <button className="bottom-navigation__item" type="button">
        <svg
          className="bottom-navigation__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 7v5l3 2" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>

        <span>Verlauf</span>
      </button>

      <button
        className="bottom-navigation__add"
        type="button"
        aria-label="Neue Ausgabe hinzufügen"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <button className="bottom-navigation__item" type="button">
        <svg
          className="bottom-navigation__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 19V9M12 19V5M19 19v-7" />
        </svg>

        <span>Analyse</span>
      </button>

      <button className="bottom-navigation__item" type="button">
        <svg
          className="bottom-navigation__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3" />
          <path d="M6.5 20c.7-3.4 2.5-5 5.5-5s4.8 1.6 5.5 5" />
        </svg>

        <span>Profil</span>
      </button>
    </nav>
  );
}