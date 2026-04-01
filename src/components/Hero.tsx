import { useState } from 'react'

const HERO_IMAGE_URL = '/hero.jpg'
const WHATSAPP_URL = 'https://wa.me/5561991750684?text=Ol%C3%A1%2C%20Eni%21%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20como%20o%20processo%20de%20Restaura%C3%A7%C3%A3o%20do%20Fluxo%20funciona.%20Pode%20me%20contar%20mais%3F'

const PhotoPlaceholder = () => (
  <div
    style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg, #3D2510 0%, #2A1A0E 60%, #4A2C14 100%)' }}
    className="flex items-center justify-center rounded-sm"
  >
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60%', opacity: 0.25 }}>
      <circle cx="100" cy="80" r="45" stroke="#B8860B" strokeWidth="1.5" />
      <path d="M30 280 C30 200 170 200 170 280" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export const Hero = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      style={{ background: '#2A1A0E', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
      className="flex flex-col"
    >
      {/* Aurora blobs */}
      <div
        className="aurora-blob"
        style={{
          width: '600px', height: '600px',
          background: '#B8860B1F',
          top: '-100px', left: '-150px',
          animationDelay: '0s',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: '500px', height: '500px',
          background: '#8B5E3C1A',
          bottom: '-80px', right: '-100px',
          animationDelay: '4s',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: '350px', height: '350px',
          background: '#6B7C6A14',
          top: '40%', left: '30%',
          animationDelay: '8s',
        }}
      />

      {/* Desktop Header — sticky, apenas desktop */}
      <header className="hidden md:flex w-full items-center justify-between px-10 py-5 relative z-20" style={{ borderBottom: '1px solid rgba(184,134,11,0.12)' }}>
        <span style={{ fontFamily: 'var(--font-display)', color: '#F5EDD8', fontSize: '1.2rem', letterSpacing: '0.02em' }}>
          Eni Lima
        </span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-shimmer" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
          Fale pelo WhatsApp
        </a>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center relative z-10">

        {/* LEFT — Texto (mobile: primeiro, desktop: metade esquerda) */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-12 md:py-0"
          style={{ minHeight: '100vh' }}
        >
          {/* Callout */}
          <div
            className="eyebrow-ultra mb-6"
            style={{
              animation: 'fadeUp 1.2s ease forwards',
              animationDelay: '0s',
              opacity: 0,
            }}
          >
            AMOR INTERROMPIDO
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              color: '#F5EDD8',
              fontSize: 'clamp(2.6rem, 5vw, 5rem)',
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: '1.5rem',
              animation: 'fadeUp 1.2s ease forwards',
              animationDelay: '0.15s',
              opacity: 0,
            }}
          >
            Amor interrompido ainda governa sua vida hoje.
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'rgba(245,237,216,0.72)',
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '480px',
              animation: 'fadeUp 1.2s ease forwards',
              animationDelay: '0.30s',
              opacity: 0,
            }}
          >
            Restaurando o fluxo do amor para que a vida volte a caminhar.
          </p>

          {/* CTA */}
          <div
            style={{
              animation: 'fadeUp 1.2s ease forwards',
              animationDelay: '0.45s',
              opacity: 0,
            }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-shimmer">
              Quero entender o que está me travando
            </a>
          </div>

          {/* Scroll indicator — apenas desktop */}
          <div
            className="hidden md:flex items-center gap-3 mt-16"
            style={{ color: 'rgba(245,237,216,0.35)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}
          >
            <div style={{ width: '1px', height: '40px', background: 'rgba(184,134,11,0.4)' }} />
            Role para continuar
          </div>
        </div>

        {/* RIGHT — Foto (mobile: abaixo do fold, desktop: metade direita) */}
        <div
          className="w-full md:w-1/2 flex items-end justify-center md:items-center md:justify-end px-0 md:px-10 lg:px-16"
          style={{ minHeight: '60vh', paddingBottom: '0' }}
        >
          <div
            className="relative w-full max-w-sm md:max-w-none"
            style={{
              height: 'clamp(420px, 70vh, 720px)',
              animation: 'fadeUp 1.4s ease forwards',
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            {/* Overlay dourado sobre a foto */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: '#B8860B14',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
            {imgError || HERO_IMAGE_URL.startsWith('[') ? (
              <PhotoPlaceholder />
            ) : (
              <img
                src={HERO_IMAGE_URL}
                alt="Eni Lima — Terapeuta Sistêmica"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'contrast(1.05) brightness(0.98)',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
