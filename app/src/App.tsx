import './App.css'

type Activity = {
  id: number
  title: string
  date: string
  amount: number
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Modern Horizons 3 Display',
    date: 'Heute',
    amount: 189,
  },
  {
    id: 2,
    title: 'FNM Draft',
    date: 'Gestern',
    amount: 35,
  },
  {
    id: 3,
    title: 'Dragon Shield Sleeves',
    date: 'Montag',
    amount: 12.6,
  },
]

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #fffdf9 0%, #f8faf7 55%, #f2f7f2 100%)',
        color: '#17211c',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: '32px 20px 120px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '430px',
          margin: '0 auto',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
          }}
        >
          <div>
            <div
              style={{
                color: '#ec5b24',
                fontSize: '30px',
                marginBottom: '14px',
              }}
            >
              ◆
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: '34px',
                letterSpacing: '-1.4px',
              }}
            >
              Juli <span style={{ color: '#778078', fontWeight: 400 }}>2026</span>
            </h1>
          </div>

          <button
            type="button"
            aria-label="Insights öffnen"
            style={{
              width: '48px',
              height: '48px',
              border: 0,
              borderRadius: '50%',
              background: '#edf7ef',
              color: '#27964a',
              fontSize: '22px',
              cursor: 'pointer',
            }}
          >
            ↗
          </button>
        </header>

        <section
          style={{
            minHeight: '240px',
            borderRadius: '30px',
            padding: '28px',
            background:
              'linear-gradient(135deg, #fff0dc 0%, #fff8ee 48%, #dcecdc 100%)',
            boxShadow: '0 18px 45px rgba(45, 68, 52, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              width: 'fit-content',
              padding: '9px 14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.62)',
              color: '#55605a',
              fontSize: '14px',
            }}
          >
            <span style={{ color: '#ec5b24' }}>●</span>
            Ausgaben diesen Monat
          </div>

          <div>
            <strong
              style={{
                display: 'block',
                fontSize: '55px',
                lineHeight: 1,
                letterSpacing: '-3px',
                marginBottom: '16px',
              }}
            >
              248,60 €
            </strong>

            <div
              style={{
                color: '#27964a',
                fontSize: '17px',
                fontWeight: 600,
              }}
            >
              ↗ 14 % gegenüber Juni
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '7px',
            }}
          >
            <span style={{ color: '#ec5b24' }}>●</span>
            <span style={{ color: '#d5d9d5' }}>●</span>
            <span style={{ color: '#d5d9d5' }}>●</span>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
            marginBottom: '18px',
          }}
        >
          <article style={summaryCardStyle}>
            <span style={summaryLabelStyle}>Jahr 2026</span>
            <strong style={summaryValueStyle}>1.462,30 €</strong>
            <span style={positiveTextStyle}>↗ 8 % zum Vorjahr</span>
          </article>

          <article style={summaryCardStyle}>
            <span style={summaryLabelStyle}>Recovery</span>
            <strong style={summaryValueStyle}>41 %</strong>
            <span style={{ ...positiveTextStyle, color: '#348ae2' }}>
              ↗ 3 % zum Vormonat
            </span>
          </article>
        </section>

        <section
          style={{
            borderRadius: '28px',
            padding: '24px',
            background: '#ffffff',
            boxShadow: '0 14px 35px rgba(45, 68, 52, 0.09)',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                color: '#e29a00',
                fontWeight: 700,
                fontSize: '17px',
              }}
            >
              ✦ Spotlight
            </span>

            <span style={{ color: '#89908c', fontSize: '20px' }}>↻</span>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: '20px',
              lineHeight: 1.45,
            }}
          >
            Singles machen diesen Monat{' '}
            <strong
              style={{
                display: 'block',
                color: '#27964a',
                fontSize: '40px',
                margin: '8px 0',
              }}
            >
              61 %
            </strong>
            deiner Ausgaben aus.
          </p>
        </section>

        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '20px' }}>Letzte Aktivitäten</h2>
            <button
              type="button"
              style={{
                border: 0,
                background: 'transparent',
                color: '#27964a',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              Alle anzeigen
            </button>
          </div>

          <div
            style={{
              borderRadius: '24px',
              background: '#ffffff',
              boxShadow: '0 12px 30px rgba(45, 68, 52, 0.08)',
              padding: '4px 20px',
            }}
          >
            {activities.map((activity, index) => (
              <article
                key={activity.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '17px 0',
                  borderBottom:
                    index < activities.length - 1
                      ? '1px solid #edf0ed'
                      : 'none',
                }}
              >
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '16px',
                      marginBottom: '5px',
                    }}
                  >
                    {activity.title}
                  </strong>
                  <span style={{ color: '#818984', fontSize: '14px' }}>
                    {activity.date}
                  </span>
                </div>

                <strong style={{ fontSize: '16px' }}>
                  {formatCurrency(activity.amount)}
                </strong>
              </article>
            ))}
          </div>
        </section>
      </div>

      <nav
        style={{
          position: 'fixed',
          left: '50%',
          bottom: '18px',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '430px',
          height: '76px',
          borderRadius: '28px',
          background: 'rgba(255,255,255,0.94)',
          boxShadow: '0 12px 35px rgba(36, 55, 43, 0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backdropFilter: 'blur(18px)',
        }}
      >
        <button type="button" style={navButtonStyle}>
          <span style={{ fontSize: '22px' }}>⌂</span>
          Home
        </button>

        <button type="button" style={navButtonStyle}>
          <span style={{ fontSize: '21px' }}>▤</span>
          Historie
        </button>

        <button
          type="button"
          aria-label="Neue Transaktion"
          style={{
            width: '68px',
            height: '68px',
            marginTop: '-38px',
            border: 0,
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #48bd65, #249a45)',
            color: '#ffffff',
            fontSize: '40px',
            lineHeight: 1,
            boxShadow: '0 12px 24px rgba(39, 150, 74, 0.35)',
            cursor: 'pointer',
          }}
        >
          +
        </button>

        <button type="button" style={navButtonStyle}>
          <span style={{ fontSize: '21px' }}>▥</span>
          Insights
        </button>

        <button type="button" style={navButtonStyle}>
          <span style={{ fontSize: '22px' }}>•••</span>
          Mehr
        </button>
      </nav>
    </main>
  )
}

const summaryCardStyle = {
  minWidth: 0,
  padding: '20px',
  borderRadius: '24px',
  background: '#ffffff',
  boxShadow: '0 12px 30px rgba(45, 68, 52, 0.08)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '9px',
}

const summaryLabelStyle = {
  color: '#68716b',
  fontSize: '15px',
}

const summaryValueStyle = {
  fontSize: '25px',
  letterSpacing: '-0.7px',
}

const positiveTextStyle = {
  color: '#27964a',
  fontSize: '12px',
  fontWeight: 600,
}

const navButtonStyle = {
  width: '58px',
  border: 0,
  background: 'transparent',
  color: '#68716b',
  fontSize: '11px',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
}

export default App