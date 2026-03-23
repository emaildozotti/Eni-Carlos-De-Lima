import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const WHATSAPP_URL = 'https://wa.me/5561991750684?text=Ol%C3%A1%2C%20Eni%21%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entender%20como%20o%20processo%20de%20Restaura%C3%A7%C3%A3o%20do%20Fluxo%20funciona.%20Pode%20me%20contar%20mais%3F'

export const Footer = () => {
  return (
    <>
      <RootsDivider opacity={0.2} />
      <section
        style={{ background: '#2A1A0E', position: 'relative', overflow: 'hidden' }}
        className="py-24 md:py-32"
        id="cta-final"
      >
        {/* Aurora */}
        <div
          className="aurora-blob"
          style={{
            width: '500px', height: '500px',
            background: '#B8860B1F',
            top: '-120px', right: '-100px',
            animationDelay: '1s',
          }}
        />
        <div
          className="aurora-blob"
          style={{
            width: '380px', height: '380px',
            background: '#8B5E3C1A',
            bottom: '-80px', left: '-80px',
            animationDelay: '5s',
          }}
        />

        {/* SVG raízes marca d'água */}
        <RootsDivider watermark opacity={0.12} />

        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">

          {/* Headline final */}
          <FadeIn delay={0}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5EDD8',
                fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                lineHeight: 1.2,
                fontWeight: 400,
                marginBottom: '1.2rem',
              }}
            >
              Se o amor interrompido ainda governa como você vive, há um caminho para mudar isso.
            </h2>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'rgba(245,237,216,0.68)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.7,
                marginBottom: '3rem',
                fontStyle: 'italic',
              }}
            >
              Não precisa estar pronta. Precisa estar disposta a dar o primeiro passo.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.22}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Fale comigo pelo WhatsApp
            </a>
          </FadeIn>

          {/* Divider */}
          <FadeIn delay={0.3}>
            <div style={{ width: '1px', height: '60px', background: 'rgba(184,134,11,0.25)', margin: '4rem auto' }} />
          </FadeIn>

          {/* Assinatura serifada */}
          <FadeIn delay={0.35}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(245,237,216,0.55)',
                fontSize: '1.6rem',
                fontStyle: 'italic',
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              Eni Lima
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(245,237,216,0.28)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Terapeuta Sistêmica · Constelação Familiar · Consciência Sistêmica
            </p>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
