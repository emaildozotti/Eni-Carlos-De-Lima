import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const ABOUT_IMAGE_URL = '/sobre.jpg'

const CREDENTIALS = [
  'Terapeuta Sistêmica',
  'Constelação Familiar',
  'Consciência Sistêmica',
]

const PhotoPlaceholder = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg, #D4C4A8 0%, #C8B898 40%, #BCA880 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '55%', opacity: 0.3 }}>
      <circle cx="100" cy="80" r="45" stroke="#2A1A0E" strokeWidth="1.5" />
      <path d="M30 280 C30 200 170 200 170 280" stroke="#2A1A0E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export const About = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <>
      <RootsDivider opacity={0.25} />
      <section
        style={{ background: '#F5EDD8' }}
        className="section-padding"
        id="sobre"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* TEXTO — primeira no DOM = primeira no mobile (topo), esquerda no desktop */}
            <div>

              <FadeIn delay={0}>
                <p className="eyebrow-ultra mb-5">SOBRE ENI</p>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#2A1A0E',
                    fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)',
                    lineHeight: 1.2,
                    fontWeight: 400,
                    marginBottom: '2rem',
                  }}
                >
                  Da defensora ferida ao pertencimento pleno: a travessia de Eni Lima
                </h2>
              </FadeIn>

              {/* Bio ANTES */}
              <FadeIn delay={0.14}>
                <p
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: '#3D2510',
                    fontSize: 'clamp(0.93rem, 1.25vw, 1rem)',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  Perdi meu pai e minha mãe muito cedo. Aprendi que depender era perigoso, porque as pessoas vão embora. Durante décadas, operei assim: saía antes de ser deixada. Brigas constantes, família cada vez mais distante, dinheiro que nunca se estabilizava.
                </p>
              </FadeIn>

              {/* Bio VIRADA — blockquote */}
              <FadeIn delay={0.20}>
                <blockquote
                  style={{
                    borderLeft: '2px solid #B8860B',
                    paddingLeft: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sub)',
                      color: '#1C1410',
                      fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                    }}
                  >
                    "Quando encontrei a Consciência Sistêmica, entendi pela primeira vez o mecanismo que regia minha vida. Não era fraqueza. Era uma raiz que nunca tinha sido vista, e que pedia para ser acolhida."
                  </p>
                </blockquote>
              </FadeIn>

              {/* Bio HOJE */}
              <FadeIn delay={0.26}>
                <p
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: '#3D2510',
                    fontSize: 'clamp(0.93rem, 1.25vw, 1rem)',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                  }}
                >
                  Me reconciliei com irmãos, com primos que não via há anos. A fluidez voltou, emocional e financeira. Hoje não ensino o que li em livros. Ensino o caminho que percorri, da reclusão defensiva para o pertencimento pleno.
                </p>
              </FadeIn>

              {/* Credenciais como chips */}
              <FadeIn delay={0.32}>
                <div className="flex flex-wrap gap-3 mb-6">
                  {CREDENTIALS.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#2A1A0E',
                        border: '1px solid rgba(184,134,11,0.4)',
                        padding: '0.45rem 1rem',
                        background: 'rgba(184,134,11,0.06)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* Transição */}
              <FadeIn delay={0.38}>
                <p
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'rgba(44,26,16,0.55)',
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                  }}
                >
                  "Deixa eu te mostrar como o processo funciona na prática."
                </p>
              </FadeIn>

            </div>

            {/* FOTO — segunda no DOM = segunda no mobile (abaixo), direita no desktop */}
            <FadeIn delay={0.1}>
              <div
                style={{
                  height: 'clamp(380px, 55vh, 600px)',
                  position: 'relative',
                  transform: 'translateY(1rem)',
                  overflow: 'hidden',
                }}
              >
                {/* Overlay dourado */}
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: '#B8860B14',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />
                {imgError || ABOUT_IMAGE_URL.startsWith('[') ? (
                  <PhotoPlaceholder />
                ) : (
                  <img
                    src={ABOUT_IMAGE_URL}
                    alt="Eni Lima"
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
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
