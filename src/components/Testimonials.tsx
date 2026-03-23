import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const TESTIMONIALS = [
  {
    nome: 'Fernanda R., 42 anos',
    resultado: 'Reconciliação com família após 8 anos de distância',
    texto: 'Eu cheguei na Eni sem acreditar que aquilo podia funcionar. Tinha tentado de tudo — terapia convencional, medicação, até me afastar da família achando que era o melhor. Depois de três sessões de Constelação, algo em mim se moveu. O ódio que eu sentia pelo meu pai simplesmente perdeu o peso. Hoje a gente se fala. Hoje eu duermo.',
    destaque: 'O ódio que eu sentia pelo meu pai simplesmente perdeu o peso.',
  },
  {
    nome: 'Marcos T., 38 anos',
    resultado: 'Desbloqueio financeiro e mudança de carreira',
    texto: 'Nunca imaginei que problema de dinheiro tinha raiz familiar. A Eni me mostrou um padrão que se repetia há três gerações. Depois que vi isso no campo, tudo mudou. Fechei dois contratos no mesmo mês.',
    destaque: 'Não era azar, não era falta de esforço. Era algo maior sendo carregado.',
  },
  {
    nome: 'Patricia M., 51 anos',
    resultado: 'Saída de relacionamento repetitivo',
    texto: 'Eu me separei quatro vezes. Quatro vezes do mesmo tipo de homem. A Eni me ajudou a ver que eu estava repetindo uma lealdade inconsciente à minha mãe. Quando entendi isso, parei de me punir. Hoje estou num relacionamento diferente de tudo que já vivi.',
    destaque: 'Eu estava repetindo uma lealdade inconsciente à minha mãe.',
  },
]

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const prev = () => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => go((current + 1) % TESTIMONIALS.length)

  const t = TESTIMONIALS[current]

  return (
    <>
      <RootsDivider opacity={0.18} />
      <section
        style={{ background: '#2A1A0E', position: 'relative', overflow: 'hidden' }}
        className="section-padding"
        id="depoimentos"
      >
        {/* Aurora */}
        <div
          className="aurora-blob"
          style={{
            width: '450px', height: '450px',
            background: '#8B5E3C1A',
            bottom: '-100px', left: '-80px',
            animationDelay: '3s',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

          <FadeIn delay={0}>
            <p className="eyebrow-ultra mb-4 text-center">DEPOIMENTOS</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5EDD8',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                lineHeight: 1.2,
                fontWeight: 400,
                textAlign: 'center',
                marginBottom: '3.5rem',
              }}
            >
              O que muda quando o sistema encontra seu lugar
            </h2>
          </FadeIn>

          {/* Carrossel */}
          <div style={{ position: 'relative', minHeight: '320px' }}>

            {/* Aspa decorativa */}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px',
                lineHeight: 1,
                color: '#B8860B',
                opacity: 0.18,
                position: 'absolute',
                top: '-1.5rem',
                left: '0',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ paddingLeft: '3rem' }}
              >
                {/* Resultado badge */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#B8860B',
                    marginBottom: '1.5rem',
                  }}
                >
                  {t.resultado}
                </p>

                {/* Destaque em DM Serif */}
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#F5EDD8',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                    lineHeight: 1.3,
                    fontWeight: 400,
                    marginBottom: '1.5rem',
                  }}
                >
                  "{t.destaque}"
                </p>

                {/* Texto completo */}
                <p
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'rgba(245,237,216,0.62)',
                    fontSize: '0.93rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    maxWidth: '640px',
                  }}
                >
                  {t.texto}
                </p>

                {/* Nome */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'rgba(245,237,216,0.45)',
                    letterSpacing: '0.06em',
                  }}
                >
                  — {t.nome}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegação */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(184,134,11,0.35)',
                background: 'transparent',
                color: '#B8860B',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(184,134,11,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: '18px' }}>
                <path d="M15 19l-7-7 7-7" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#B8860B' : 'rgba(184,134,11,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.35s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(184,134,11,0.35)',
                background: 'transparent',
                color: '#B8860B',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(184,134,11,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: '18px' }}>
                <path d="M9 5l7 7-7 7" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
