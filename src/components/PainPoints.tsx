import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const PAINS = [
  {
    num: '01',
    text: 'Minha vida está parada. Trabalho, me relaciono, mas nunca saio do lugar.',
  },
  {
    num: '02',
    text: 'Brigo com todo mundo e me afasto. Não consigo manter nenhum relacionamento de paz.',
  },
  {
    num: '03',
    text: 'Meu dinheiro nunca fica. Parece que tem uma força que me puxa para baixo.',
  },
  {
    num: '04',
    text: 'Não me sinto parte de lugar nenhum. Na família, no trabalho, em nenhum lugar.',
  },
]

export const PainPoints = () => {
  return (
    <>
      <RootsDivider opacity={0.3} />
      <section
        style={{ background: '#F5EDD8' }}
        className="section-padding"
        id="dores"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Abertura em 1ª pessoa */}
          <FadeIn delay={0}>
            <blockquote
              style={{
                borderLeft: '3px solid #B8860B',
                paddingLeft: '2rem',
                maxWidth: '680px',
                marginBottom: '5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.22rem)',
                  color: '#1C1410',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                "Conheço esse peso. Durante anos, minha vida repetia o mesmo padrão, e eu não entendia por quê. Brigo, me afasto, recomeço, e tudo volta ao mesmo lugar."
              </p>
            </blockquote>
          </FadeIn>

          {/* Grid de dores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {PAINS.map((pain, i) => (
              <FadeIn key={pain.num} delay={i * 0.1}>
                <div
                  style={{
                    background: 'rgba(245, 237, 216, 0.6)',
                    border: '1px solid rgba(184,134,11,0.18)',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Número decorativo */}
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '5rem',
                      lineHeight: 1,
                      color: '#1C1410',
                      opacity: 0.08,
                      position: 'absolute',
                      top: '0.5rem',
                      right: '1.5rem',
                      userSelect: 'none',
                    }}
                  >
                    {pain.num}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                      color: '#1C1410',
                      lineHeight: 1.7,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {pain.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Transição separada */}
          <FadeIn delay={0.2}>
            <div className="text-center">
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                  color: '#2A1A0E',
                  lineHeight: 1.3,
                }}
              >
                Esse peso tem nome.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                  color: '#B8860B',
                  lineHeight: 1.3,
                  marginTop: '0.4rem',
                }}
              >
                E ele tem caminho de saída.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
