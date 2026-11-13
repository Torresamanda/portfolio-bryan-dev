import { ImageResponse } from 'next/og';

export const alt = 'Bryan Lima — Desenvolvedor Full Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        background: '#f5f1e9',
        color: '#171717',
        padding: '64px 80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24, letterSpacing: 4, fontWeight: 700 }}>
        PORTFÓLIO / DESENVOLVIMENTO WEB
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: -6,
          }}
        >
          Bryan <span style={{ color: '#bb171f' }}>/</span>
        </div>
        <div style={{ display: 'flex', fontSize: 48 }}>Desenvolvedor Full Stack</div>
      </div>
      <div
        style={{
          display: 'flex',
          borderTop: '2px solid #171717',
          paddingTop: 24,
          fontSize: 24,
          letterSpacing: 2,
        }}
      >
        ANGULAR / TYPESCRIPT / JAVA / NODE.JS
      </div>
    </div>,
    size,
  );
}
