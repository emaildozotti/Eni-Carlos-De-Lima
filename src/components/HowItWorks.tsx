import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const STEPS = [
  {
    num: '1',
    title: 'Conversa Inicial',
    text: 'Começamos com uma conversa pelo WhatsApp, gratuita e sem compromisso. Quero entender o que você está vivendo antes de qualquer proposta de trabalho.',
  },
  {
    num: '2',
    title: 'Sessões',
    text: 'As sessões são individuais, online ou presenciais, com frequência definida de acordo com o seu processo. Trabalhamos o seu lugar no sistema familiar, os vínculos que estão atuando de forma invisível e o que é necessário para que o fluxo seja restaurado. O ritmo é respeitoso. Não há pressão para avançar mais rápido do que o processo pede.',
  },
  {
    num: '3',
    title: 'Transformação',
    text: 'Com o tempo, as pessoas relatam um realinhamento que não se limita à área que trouxeram no início. Relacionamentos que estavam travados ganham outro tom. Dinheiro que não ficava começa a circular diferente. A sensação de não pertencer vai se dissolvendo. Não é magia. É o que acontece quando o sistema encontra o lugar que estava faltando.',
  },
]

const DEMISTIFICATIONS = [
  'Não é ritual. Constelação Familiar é um método terapêutico com décadas de uso clínico ao redor do mundo. Desenvolvido por Bert Hellinger, aplicado em saúde mental, educação e organizações.',
  'Não exige crença espiritual. Funciona a partir de observação dos padrões sistêmicos, não de fé em nada específico.',
  'Não pede que você perdoe ninguém antes de estar pronto. A reconciliação real, quando acontece, é consequência do processo, não pré-requisito.',
  'Sua família não precisa participar. Trabalho com você. Quando você encontra seu lugar no sistema, o sistema inteiro responde diferente.',
  'Não é rápido, mas é profundo. O que prometo é acompanhamento consistente, não resultados instantâneos.',
]

export const HowItWorks = () => {
  return (
    <>
      <RootsDivider opacity={0.22} />
      <section
        style={{ background: 'rgba(139,94,60,0.08)', borderTop: '1px solid rgba(184,134,11,0.1)', borderBottom: '1px solid rgba(184,134,11,0.1)' }}
        className="section-padding"
        id="como-funciona"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <FadeIn delay={0}>
            <p className="eyebrow-ultra mb-4">COMO FUNCIONA</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: '#2A1A0E',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)',
                lineHeight: 1.2,
                fontWeight: 400,
                maxWidth: '560px',
                marginBottom: '4rem',
              }}
            >
              Como é trabalhar com Eni
            </h2>
          </FadeIn>

          {/* 3 Passos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={0.1 + i * 0.12}>
                <div style={{ position: 'relative', paddingTop: '2rem' }}>
                  {/* Número grande decorativo de fundo */}
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '8rem',
                      lineHeight: 1,
                      color: '#B8860B',
                      opacity: 0.12,
                      position: 'absolute',
                      top: '-1rem',
                      left: '-1rem',
                      userSelect: 'none',
                    }}
                  >
                    {step.num}
                  </span>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: '#2A1A0E',
                        fontSize: '1.35rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sub)',
                        color: '#3D2510',
                        fontSize: '0.93rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Desmistificação */}
          <FadeIn delay={0.2}>
            <div
              style={{
                background: 'rgba(245,237,216,0.7)',
                border: '1px solid rgba(184,134,11,0.15)',
                padding: '2.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#2A1A0E',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem',
                  fontWeight: 400,
                }}
              >
                O que a Constelação Familiar não é
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {DEMISTIFICATIONS.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      alignItems: 'flex-start',
                      fontFamily: 'var(--font-sub)',
                      color: '#3D2510',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {/* Check icon */}
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: '16px', height: '16px', flexShrink: 0, marginTop: '3px' }}
                    >
                      <circle cx="8" cy="8" r="7.5" stroke="#B8860B" strokeWidth="1" />
                      <path d="M5 8.5l2 2 4-4" stroke="#B8860B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Remove ansiedade */}
          <FadeIn delay={0.28}>
            <div
              style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(184,134,11,0.05)',
                border: '1px solid rgba(184,134,11,0.12)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sub)',
                  color: '#2A1A0E',
                  fontSize: 'clamp(0.93rem, 1.2vw, 1rem)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  maxWidth: '550px',
                  margin: '0 auto',
                }}
              >
                A primeira conversa é para entender se esse processo faz sentido para o que você está vivendo hoje. Sem compromisso. Sem pressão.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
