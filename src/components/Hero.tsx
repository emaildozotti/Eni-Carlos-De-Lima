const HERO_IMAGE_URL = '/hero.jpg'
const WHATSAPP_URL = 'https://wa.me/5561991750684?text=Ol%C3%A1%2C%20Eni%21%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20como%20o%20processo%20de%20Restaura%C3%A7%C3%A3o%20do%20Fluxo%20funciona.%20Pode%20me%20contar%20mais%3F'

export const Hero = () => {
  return (
    <>
      {/* Header — desktop only */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 py-4 backdrop-blur-md" style={{ background: 'rgba(42,26,14,0.9)', borderBottom: '1px solid rgba(184,134,11,0.12)' }}>
        <span style={{ fontFamily: 'var(--font-display)', color: '#F5EDD8', fontSize: '1.2rem', letterSpacing: '0.02em' }}>
          Eni Lima
        </span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-shimmer" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
          Fale pelo WhatsApp
        </a>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#2A1A0E' }}>
        {/* Aurora blobs */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #B8860B30 0%, transparent 70%)', filter: 'blur(80px)', animation: 'aurora-1 12s ease-in-out infinite' }}
          />
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, #6B7C6A25 0%, transparent 70%)', filter: 'blur(70px)', animation: 'aurora-2 15s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, #F5EDD818 0%, transparent 70%)', filter: 'blur(90px)', animation: 'aurora-3 18s ease-in-out infinite' }}
          />
        </div>

        {/* Split layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-24 md:pt-32 pb-16">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center">
            <div className="eyebrow-ultra mb-6" style={{ color: '#B8860B' }}>
              AMOR INTERROMPIDO
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5EDD8',
                fontSize: 'clamp(2.6rem, 5vw, 5rem)',
                lineHeight: 1.1,
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              Amor interrompido ainda governa sua vida hoje.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'rgba(245,237,216,0.72)',
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '480px',
              }}
            >
              Restaurando o fluxo do amor para que a vida volte a caminhar.
            </p>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-shimmer self-start">
              Quero entender o que esta me travando
            </a>
          </div>

          {/* Right — Photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
              <img
                src={HERO_IMAGE_URL}
                alt="Eni Lima — Terapeuta Sistemica"
                className="relative w-full h-full object-cover object-top rounded-tl-3xl rounded-br-3xl shadow-2xl ring-1 ring-white/10"
              />
              {/* Bottom gradient fade */}
              <div
                className="absolute inset-0 rounded-tl-3xl rounded-br-3xl pointer-events-none"
                style={{ background: 'linear-gradient(to top, #2A1A0E 0%, transparent 40%)' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2" style={{ color: 'rgba(245,237,216,0.35)' }}>
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <path d="M8 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
    </>
  )
}
