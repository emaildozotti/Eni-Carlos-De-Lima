import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const YOUTUBE_ID = 'KT15RF8yFUg'

export const VideoSection = () => {
  const isPlaceholder = YOUTUBE_ID.startsWith('[')

  return (
    <>
      <RootsDivider opacity={0.25} />
      <section
        style={{ background: '#2A1A0E' }}
        className="section-padding"
        id="video"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

          {/* Pré-vídeo */}
          <FadeIn delay={0}>
            <p
              className="eyebrow-ultra mb-6"
              style={{ textAlign: 'center' }}
            >
              ANTES DE CONTINUAR
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'rgba(245,237,216,0.78)',
                lineHeight: 1.8,
                maxWidth: '620px',
                margin: '0 auto 3rem',
                fontStyle: 'italic',
              }}
            >
              "Gravei esse vídeo para quem está se perguntando: o que está travando minha vida de verdade? Não falo de teoria. Falo do caminho que eu mesma percorri. Assiste antes de continuar lendo."
            </p>
          </FadeIn>

          {/* Container vídeo 9:16 */}
          <FadeIn delay={0.15}>
            <div className="flex justify-center mb-8">
              <div
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  aspectRatio: '9/16',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(184,134,11,0.3)',
                  background: '#1A1008',
                }}
              >
                {isPlaceholder ? (
                  <div
                    style={{ width: '100%', height: '100%', background: '#1A1008', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
                  >
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60px', opacity: 0.4 }}>
                      <circle cx="40" cy="40" r="38" stroke="#B8860B" strokeWidth="1.5" />
                      <polygon points="32,26 60,40 32,54" fill="#B8860B" opacity="0.6" />
                    </svg>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(245,237,216,0.35)', letterSpacing: '0.12em', textAlign: 'center', padding: '0 1rem' }}>
                      VÍDEO YOUTUBE<br />ID A INSERIR
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                    title="Eni Lima — Restauração do Fluxo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                )}
              </div>
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.25}>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                color: 'rgba(245,237,216,0.6)',
                lineHeight: 1.7,
                maxWidth: '500px',
                margin: '0 auto',
                fontStyle: 'italic',
              }}
            >
              "Se algo nesse vídeo ressoou, o que você vai ler aqui é para você."
            </p>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
