import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const PILLARS = [
  {
    num: '01',
    title: 'Olhar Para Si',
    text: 'O ponto de partida não é a família. É você. Antes de olhar para o sistema, precisamos entender qual é o seu lugar dentro dele. O trabalho começa por dentro, não por fora. Isso é o que torna o processo sustentável.',
  },
  {
    num: '02',
    title: 'Consciência Sistêmica',
    text: 'Cada pessoa faz parte de um sistema familiar com suas próprias leis e vínculos. Quando esses vínculos são ignorados, o sistema cria padrões de compensação que se repetem nas gerações seguintes. A Consciência Sistêmica revela esses vínculos e o que está impedindo o fluxo do amor de chegar até você.',
  },
  {
    num: '03',
    title: 'Sem Pó de Pirlimpimpim',
    text: 'Não trabalho com soluções mágicas, reconciliações forçadas ou prazos impossíveis. O processo exige sua presença e disposição para olhar. O que prometo é acompanhamento honesto, estruturado e profundamente humano.',
  },
]

export const Method = () => {
  return (
    <>
      <RootsDivider opacity={0.2} />
      <section
        style={{ background: '#2A1A0E', position: 'relative', overflow: 'hidden' }}
        className="section-padding-lg"
        id="metodo"
      >
        {/* Aurora sutil */}
        <div
          className="aurora-blob"
          style={{
            width: '400px', height: '400px',
            background: '#B8860B1F',
            top: '10%', right: '-100px',
            animationDelay: '2s',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

          {/* Eyebrow */}
          <FadeIn delay={0}>
            <p className="eyebrow-ultra mb-4">O MÉTODO</p>
          </FadeIn>

          {/* Título */}
          <FadeIn delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5EDD8',
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                maxWidth: '700px',
                marginBottom: '1.5rem',
              }}
            >
              Processo de Restauração do Fluxo pela Consciência Sistêmica
            </h2>
          </FadeIn>

          {/* Intro 1ª pessoa */}
          <FadeIn delay={0.15}>
            <p
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'rgba(245,237,216,0.7)',
                fontSize: 'clamp(0.98rem, 1.3vw, 1.08rem)',
                lineHeight: 1.8,
                maxWidth: '600px',
                marginBottom: '4rem',
                fontStyle: 'italic',
              }}
            >
              "Não criei uma metodologia de prateleira. Sistematizei o que me curou, refinado por anos de prática clínica com pessoas reais."
            </p>
          </FadeIn>

          {/* 3 Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.num} delay={0.1 + i * 0.12}>
                <div
                  style={{
                    border: '1px solid rgba(184,134,11,0.2)',
                    padding: '2.5rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'rgba(184,134,11,0.03)',
                  }}
                >
                  {/* Número decorativo de fundo */}
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '6rem',
                      lineHeight: 1,
                      color: '#B8860B',
                      opacity: 0.07,
                      position: 'absolute',
                      top: '-0.5rem',
                      right: '1rem',
                      userSelect: 'none',
                    }}
                  >
                    {p.num}
                  </span>
                  {/* Barra top dourada */}
                  <div style={{ width: '32px', height: '2px', background: '#B8860B', marginBottom: '1.5rem' }} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: '#F5EDD8',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sub)',
                      color: 'rgba(245,237,216,0.65)',
                      fontSize: '0.93rem',
                      lineHeight: 1.75,
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* NÃO PROMETO — bloco separado */}
          <FadeIn delay={0.25}>
            <div
              style={{
                borderLeft: '3px solid rgba(184,134,11,0.5)',
                paddingLeft: '2rem',
                maxWidth: '680px',
                marginBottom: '4rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  color: 'rgba(245,237,216,0.75)',
                  fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                "Não prometo que sua família vai mudar. Prometo que, quando você encontra seu lugar no sistema, o sistema inteiro responde diferente."
              </p>
            </div>
          </FadeIn>

          {/* Transição chaperon */}
          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(245,237,216,0.5)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                fontStyle: 'italic',
              }}
            >
              "Mas antes de tudo, preciso te contar de onde eu vim."
            </p>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
