import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const FAQS = [
  {
    q: 'Já fiz terapia antes e não resolveu. Por que seria diferente?',
    a: 'Terapia convencional trabalha o indivíduo. A abordagem sistêmica trabalha o sistema familiar completo. Se o que te trava tem raiz geracional — perdas, rupturas e conflitos que vieram antes de você — trabalhar só o presente não alcança essa camada. A diferença não é a teoria, é o ângulo de onde se olha.',
  },
  {
    q: 'As sessões funcionam online?',
    a: 'Sim, e com a mesma profundidade. A Constelação Familiar e o trabalho sistêmico acontecem no campo interno de cada pessoa, não dependem de presença física. A maior parte das pessoas que acompanho trabalha online, de cidades diferentes, com resultados reais.',
  },
  {
    q: 'Qual é o investimento?',
    a: 'Sei que é uma decisão financeira real. Sei também que o custo de continuar carregando padrões que travam relacionamentos, bloqueiam o dinheiro e produzem a sensação de não pertencer tem um preço que o corpo e a vida já estão pagando. O valor é discutido na nossa conversa inicial, depois que eu entendo o que você está vivendo. Não trabalho com pacotes fixos porque cada processo tem profundidade própria.',
  },
  {
    q: 'Quanto tempo dura o processo?',
    a: 'O processo geralmente leva entre 3 e 8 meses, dependendo do que você traz e do ritmo que faz sentido para você. Não trabalho com prazos artificiais. O que fica claro desde o início é o caminho, não a data de chegada.',
  },
  {
    q: 'Nunca fiz terapia. Por onde começo?',
    a: 'Pela conversa inicial, que é gratuita e sem compromisso. Não é necessário saber nada sobre terapia sistêmica ou Constelação Familiar para começar. O processo é adaptado ao que você está vivendo agora.',
  },
  {
    q: 'E se o problema for a outra pessoa, e ela não quiser mudar?',
    a: 'Não trabalho com a outra pessoa. Trabalho com você. Quando você encontra seu lugar no sistema e reorganiza seus vínculos internos, a dinâmica com as outras pessoas costuma mudar, mesmo sem que elas façam nada. O sistema é interdependente.',
  },
  {
    q: 'Constelação Familiar é coisa de espiritualismo?',
    a: 'Não. É um método terapêutico com décadas de uso clínico. Não exige crença, não é ritual, não tem base religiosa. O mecanismo é sistêmico e observacional. Funciona independentemente de qualquer visão de mundo.',
  },
]

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <>
      <RootsDivider opacity={0.22} />
      <section
        style={{ background: '#F5EDD8' }}
        className="section-padding"
        id="faq"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12">

          <FadeIn delay={0}>
            <p className="eyebrow-ultra mb-4">PERGUNTAS FREQUENTES</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                color: '#2A1A0E',
                fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                lineHeight: 1.2,
                fontWeight: 400,
                marginBottom: '3rem',
              }}
            >
              Dúvidas antes de começar
            </h2>
          </FadeIn>

          <div>
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={0.05 + i * 0.04}>
                <div
                  style={{
                    borderBottom: '1px solid rgba(44,26,16,0.15)',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      padding: '1.5rem 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    aria-expanded={open === i}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sub)',
                        fontSize: 'clamp(0.93rem, 1.25vw, 1.02rem)',
                        color: '#2A1A0E',
                        lineHeight: 1.5,
                        fontWeight: open === i ? 600 : 400,
                        transition: 'font-weight 0.2s',
                      }}
                    >
                      {faq.q}
                    </span>
                    {/* Seta rotate */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: '18px',
                        height: '18px',
                        flexShrink: 0,
                        color: '#B8860B',
                        transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.35s ease',
                      }}
                    >
                      <path d="M6 9l6 6 6-6" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-sub)',
                            fontSize: '0.93rem',
                            color: '#3D2510',
                            lineHeight: 1.8,
                            paddingBottom: '1.5rem',
                            maxWidth: '620px',
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
