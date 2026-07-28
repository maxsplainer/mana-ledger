import './App.css'

type Activity = {
  id: number
  title: string
  date: string
  amount: number
  image: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Modern Horizons 3 Display',
    date: 'Heute',
    amount: 189,
    image: '📦',
  },
  {
    id: 2,
    title: 'FNM Draft',
    date: 'Gestern',
    amount: 35,
    image: '🎴',
  },
  {
    id: 3,
    title: 'Dragon Shield Sleeves',
    date: 'Montag',
    amount: 12.6,
    image: '🛡️',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

function App() {
  return (
    <div className="app-shell">
      <main className="dashboard">
        <header className="dashboard-header">
          <div>
            <div className="brand-mark" aria-label="Mana Ledger">
              ▲
            </div>

            <button className="month-selector" type="button">
              <strong>Juli</strong>
              <span>2026</span>
              <span className="chevron">⌄</span>
            </button>
          </div>

          <button className="trend-button" type="button" aria-label="Entwicklung anzeigen">
            ↗
          </button>
        </header>

        <section className="hero-card">
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-topline">
              <span className="metric-label">
                <span className="metric-dot" />
                Ausgaben diesen Monat
              </span>

              <button className="calendar-button" type="button" aria-label="Monat auswählen">
                ▣
              </button>
            </div>

            <div className="hero-value">{formatCurrency(248.6)}</div>

            <div className="hero-change">
              ↗ 14 % gegenüber Juni
            </div>

            <div className="pagination-dots" aria-hidden="true">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        </section>

        <section className="summary-grid">
          <article className="summary-card">
            <div className="summary-icon green">▣</div>

            <div>
              <p className="summary-label">Jahr 2026</p>
              <p className="summary-value">{formatCurrency(1462.3)}</p>
              <p className="summary-change positive">
                ↗ 8 % gegenüber 2025
              </p>
            </div>
          </article>

          <article className="summary-card">
            <div className="summary-icon blue">⟳</div>

            <div>
              <p className="summary-label">Recovery</p>
              <p className="summary-value">41 %</p>
              <p className="summary-change info">
                ↗ 3 % gegenüber Juni
              </p>
            </div>
          </article>
        </section>

        <section className="spotlight-card">
          <div className="section-heading">
            <span className="spotlight-title">✦ Spotlight</span>
            <button className="icon-button" type="button" aria-label="Spotlight wechseln">
              ⟳
            </button>
          </div>

          <div className="spotlight-content">
            <div className="donut-chart" aria-label="61 Prozent Singles">
              <div className="donut-hole" />
            </div>

            <div className="spotlight-copy">
              <p>Singles machen diesen Monat</p>
              <strong>61 %</strong>
              <p>deiner Ausgaben aus.</p>
            </div>
          </div>

          <div className="pagination-dots spotlight-dots" aria-hidden="true">
            <span className="dot yellow active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </section>

        <section className="activities-section">
          <div className="section-heading">
            <h2>Letzte Aktivitäten</h2>
            <button className="text-button" type="button">
              Alle anzeigen
            </button>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <button className="activity-row" type="button" key={activity.id}>
                <span className="activity-image">{activity.image}</span>

                <span className="activity-info">
                  <strong>{activity.title}</strong>
                  <small>{activity.date}</small>
                </span>

                <span className="activity-amount">
                  {formatCurrency(activity.amount)}
                </span>

                <span className="activity-arrow">›</span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-navigation">
        <button className="nav-item active" type="button">
          <span>⌂</span>
          <small>Home</small>
        </button>

        <button className="nav-item" type="button">
          <span>▤</span>
          <small>Journal</small>
        </button>

        <button className="add-button" type="button" aria-label="Neue Ausgabe hinzufügen">
          +
        </button>

        <button className="nav-item" type="button">
          <span>▥</span>
          <small>Statistiken</small>
        </button>

        <button className="nav-item" type="button">
          <span>•••</span>
          <small>Mehr</small>
        </button>
      </nav>
    </div>
  )
}

export default App