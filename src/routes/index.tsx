import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import heroOffice from "@/assets/hero-office.jpg";
import scaleImg from "@/assets/scale.jpg";
import luanImg from "@/assets/luan.jpg.asset.json";
import greicyImg from "@/assets/greicy.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP = "5551997552493";

const AREAS = [
  { value: "divorcio-extrajudicial", label: "Divórcio extrajudicial (em cartório)" },
  { value: "divorcio-judicial", label: "Divórcio judicial" },
  { value: "inventario", label: "Inventário" },
  { value: "testamento", label: "Testamento" },
  { value: "outro", label: "Outro assunto de família" },
];

function Landing() {
  const [nome, setNome] = useState("");
  const [area, setArea] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const areaLabel = AREAS.find((a) => a.value === area)?.label ?? "Não informado";
    const texto = [
      `Olá! Meu nome é ${nome || "(não informado)"}.`,
      `Gostaria de uma orientação sobre: ${areaLabel}.`,
      mensagem ? `\n${mensagem}` : "",
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const directWhats = () =>
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de conversar com o escritório.")}`,
      "_blank",
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Decorative ambient blobs — global depth */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-navy-soft/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-steel/20 blur-[140px]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Castro & Henrich Advocacia" className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#areas" className="transition hover:text-primary">Áreas</a>
            <a href="#extrajudicial" className="transition hover:text-primary">Extrajudicial</a>
            <a href="#atendimento" className="transition hover:text-primary">Atendimento</a>
            <a href="#equipe" className="transition hover:text-primary">Advogados</a>
            <a href="#contato" className="transition hover:text-primary">Contato</a>
          </nav>
          <button
            onClick={directWhats}
            className="hidden items-center gap-2 rounded-full bg-metal px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-elegant md:inline-flex"
          >
            <WhatsIcon className="h-4 w-4" /> Falar agora
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroOffice}
            alt=""
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          {/* fine grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:pt-28 md:pb-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy-soft shadow-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Direito de família · Novo Hamburgo/RS
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-[3.75rem]">
              Divórcio, inventário e testamento com{" "}
              <span className="italic text-metal">clareza e agilidade</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Quando possível, resolvemos seu caso em{" "}
              <strong className="text-foreground">cartório</strong> — sem processo judicial. Mais
              rápido, mais discreto e com menos desgaste emocional para a sua família.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full bg-metal px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition hover:shadow-glow"
              >
                Falar com um advogado
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <button
                onClick={directWhats}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
              >
                <WhatsIcon className="h-4 w-4" /> WhatsApp direto
              </button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat k="5+" v="anos de atuação" />
              <Stat k="7 dias" v="média extrajudicial*" />
              <Stat k="100%" v="atendimento humanizado" />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-metal opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white/90 p-8 shadow-elegant backdrop-blur">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ backgroundImage: "var(--gradient-shine)", mixBlendMode: "overlay" }}
              />
              <img
                src={logo.url}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 object-contain opacity-[0.06]"
              />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <img src={logo.url} alt="" className="h-10 w-auto" />
                  <div className="h-8 w-px bg-border" />
                  <p className="text-xs uppercase tracking-widest text-navy-soft">
                    Advogados<br />Associados
                  </p>
                </div>
                <blockquote className="font-serif text-xl leading-snug text-foreground">
                  “Nosso objetivo é resolver — sempre pela via mais rápida e menos desgastante
                  para a família.”
                </blockquote>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <Check>Análise inicial do seu caso sem compromisso</Check>
                  <Check>Honorários combinados por escrito, sem surpresas</Check>
                  <Check>Atendimento presencial e online em todo o RS</Check>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAND */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-metal" />
        <img
          src={scaleImg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15 mix-blend-luminosity"
          width={1200}
          height={1400}
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center text-primary-foreground md:py-20">
          <img
            src={logo.url}
            alt="Castro & Henrich Advocacia"
            className="h-20 w-auto brightness-0 invert md:h-24"
          />
          <p className="max-w-2xl font-serif text-xl italic text-primary-foreground/90 md:text-2xl">
            “A justiça é a constante e perpétua vontade de dar a cada um o que é seu.”
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            Ulpiano · Jurista romano
          </p>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-metal-soft opacity-60" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Áreas de atuação</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Especialistas em Direito de Família</h2>
            <p className="mt-4 text-muted-foreground">
              Cada caso pede a solução certa. Avaliamos a sua situação e indicamos o caminho mais
              eficiente, seja em cartório ou em juízo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AreaCard
              tag="Mais rápido"
              title="Divórcio Extrajudicial"
              desc="Feito em cartório, geralmente concluído em poucos dias quando há consenso e não há filhos menores."
            />
            <AreaCard
              title="Divórcio Judicial"
              desc="Necessário em casos com litígio, filhos menores ou incapazes. Conduzimos com estratégia e sensibilidade."
            />
            <AreaCard
              tag="Mais rápido"
              title="Inventário Extrajudicial"
              desc="Realizado em cartório quando há consenso entre os herdeiros e não há testamento ou menores envolvidos."
            />
            <AreaCard
              title="Inventário Judicial"
              desc="Necessário em casos com litígio, herdeiros menores ou testamento. Cuidamos de partilha, ITCMD e documentação."
            />
            <AreaCard
              title="Testamento"
              desc="Planejamento sucessório para proteger patrimônio e garantir que sua vontade seja cumprida."
            />
          </div>
        </div>
      </section>

      {/* EXTRAJUDICIAL FOCUS + COMPARATIVO */}
      <section id="extrajudicial" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Nosso diferencial</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Por que a via <span className="italic text-metal">extrajudicial</span> pode ser a melhor escolha?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Desde 2007, divórcios e inventários consensuais podem ser feitos diretamente em cartório.
              Isso significa menos burocracia, mais privacidade e uma resolução em dias — não em anos.
            </p>
            <div className="mt-8 space-y-4">
              <Benefit t="Rápido" d="Escritura em poucos dias após reunir a documentação." />
              <Benefit t="Discreto" d="Sem audiências públicas nem exposição do processo." />
              <Benefit t="Econômico" d="Custos previsíveis e menos etapas do que uma ação judicial." />
              <Benefit t="Definitivo" d="Escritura pública com força de sentença — resolve de vez." />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-navy-soft/20 via-transparent to-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={scaleImg}
                alt="Balança da justiça"
                className="h-64 w-full object-cover md:h-72"
                loading="lazy"
                width={1200}
                height={1400}
              />
            </div>

            {/* Comparative table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white/90 shadow-soft backdrop-blur">
              <div className="border-b border-border/60 px-6 pt-5 pb-4">
                <p className="font-serif text-xs uppercase tracking-widest text-navy-soft">Comparativo</p>
                <p className="mt-1 text-sm text-muted-foreground">Extrajudicial vs. Judicial</p>
              </div>
              <div className="grid grid-cols-[1.1fr_1fr_1fr] items-center gap-3 border-b border-border bg-metal-soft px-6 py-3 text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-navy-soft">Critério</span>
                <span className="text-center text-primary">Extrajudicial</span>
                <span className="text-center text-muted-foreground">Judicial</span>
              </div>
              <div className="divide-y divide-border">
                <CompareRow label="Prazo médio" a="7 a 30 dias" b="1 a 3 anos" highlight />
                <CompareRow label="Local" a="Cartório" b="Fórum" />
                <CompareRow label="Audiência" a="Não" b="Sim" />
                <CompareRow label="Privacidade" a="Alta" b="Autos públicos" />
                <CompareRow label="Recursos" a="Não cabem" b="Cabem múltiplos" />
                <CompareRow label="Desgaste emocional" a="Baixo" b="Elevado" />
              </div>
              <p className="border-t border-border/60 px-6 py-3 text-xs text-muted-foreground">
                *Prazos estimados. Cada caso é avaliado individualmente pelo escritório.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNIL DE ATENDIMENTO */}
      <section id="atendimento" className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 -z-10 bg-metal-soft opacity-70" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px hairline"
        />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Como atendemos</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Do primeiro contato à <span className="italic text-metal">solução do seu caso</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um fluxo claro, transparente e sem burocracia — pensado para você entender exatamente
              o que vai acontecer em cada etapa.
            </p>
          </div>

          {/* Horizontal timeline */}
          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div
              aria-hidden
              className="absolute left-6 right-6 top-6 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklab, var(--navy-soft) 45%, transparent), color-mix(in oklab, var(--navy-soft) 45%, transparent), transparent)",
              }}
            />
            <FunnelStep n="01" t="Contato inicial" d="Você fala com o escritório pelo WhatsApp ou formulário para esclarecer dúvidas iniciais." icon={<IconChat />} />
            <FunnelStep n="02" t="Análise do caso" d="Reunião por chamada de vídeo ou telefone para entender a fundo a sua situação." icon={<IconVideo />} />
            <FunnelStep n="03" t="Honorários e contrato" d="Apresentamos o plano e os honorários por escrito. Contrato assinado antes de iniciar." icon={<IconDoc />} />
            <FunnelStep n="04" t="Início dos serviços" d="Começamos imediatamente a atuar no seu caso e mantemos você informado em cada etapa." icon={<IconRocket />} />
          </ol>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Nossa equipe</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Advogados sócios</h2>
            <p className="mt-4 text-primary-foreground/80 md:text-lg">
              Atendimento conduzido diretamente pelos sócios do escritório, com estratégia,
              discrição e proximidade em cada caso.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {/* LUAN */}
            <article className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10 shadow-elegant">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={luanImg.url}
                  alt="Luan Castro, advogado sócio"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/70">
                    Sócio-fundador
                  </p>
                  <h3 className="mt-1 font-serif text-2xl md:text-3xl">Luan Castro</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-primary-foreground/80">
                    OAB/RS 124.511
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-8">
                <p className="text-sm text-primary-foreground/85 md:text-base">
                  Atuação centrada em soluções extrajudiciais e em processos de família complexos.
                  Conduz cada caso com estratégia jurídica sólida, discrição e proximidade com o cliente.
                </p>
                <ul className="grid gap-2 text-sm text-primary-foreground/85">
                  <BulletLight>Direito de família e sucessões</BulletLight>
                  <BulletLight>Divórcios consensuais e litigiosos</BulletLight>
                  <BulletLight>Negociação e mediação de conflitos</BulletLight>
                </ul>
              </div>
            </article>

            {/* GREICY */}
            <article className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10 shadow-elegant">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={greicyImg.url}
                  alt="Greicy Maura Henrich, advogada sócia"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/70">
                    Sócia-fundadora
                  </p>
                  <h3 className="mt-1 font-serif text-2xl md:text-3xl">Greicy Maura Henrich</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-primary-foreground/80">
                    OAB/RS 124.784
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-8">
                <p className="text-sm text-primary-foreground/85 md:text-base">
                  Especialista em direito sucessório, inventários e planejamento patrimonial.
                  Combina técnica jurídica apurada com atendimento humano e cuidadoso em momentos delicados.
                </p>
                <ul className="grid gap-2 text-sm text-primary-foreground/85">
                  <BulletLight>Inventários extrajudiciais e judiciais</BulletLight>
                  <BulletLight>Testamentos e planejamento sucessório</BulletLight>
                  <BulletLight>Partilha de bens e ITCMD</BulletLight>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO / CONTATO */}
      <section id="contato" className="relative isolate overflow-hidden">
        <img
          src={heroOffice}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          loading="lazy"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-1/2 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 70% 0%, color-mix(in oklab, var(--navy-soft) 30%, transparent), transparent 60%)",
          }}
        />

        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Fale conosco</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Vamos conversar sobre o seu caso</h2>
            <p className="mt-5 text-muted-foreground">
              Preencha os dados abaixo e clique em <strong className="text-foreground">Conversar</strong>.
              Você será direcionado ao nosso WhatsApp com a mensagem pronta — respondemos em horário
              comercial.
            </p>

            {/* Transparência sobre honorários */}
            <div className="mt-8 rounded-2xl border border-border bg-white/85 p-6 text-sm shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-metal text-primary-foreground">
                  <IconShield className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-serif text-base text-foreground">Transparência sobre honorários</p>
                  <p className="mt-2 text-muted-foreground">
                    Todos os nossos serviços são <strong className="text-foreground">particulares e remunerados</strong>.
                    Os honorários são <strong className="text-foreground">ajustados previamente</strong>, por escrito,
                    e o pagamento é feito <strong className="text-foreground">antecipadamente ou de forma parcelada</strong>,
                    conforme o caso. Não trabalhamos com cobrança apenas ao final do processo.
                  </p>
                  <p className="mt-3 text-muted-foreground">
                    Nossa intenção é ser transparente desde a primeira conversa — para que você
                    contrate com clareza e tranquilidade.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-border/70 bg-metal-soft/60 p-4 text-xs text-muted-foreground">
                <p>
                  <strong className="text-foreground">Não tem condições de contratar advogado particular?</strong>{" "}
                  Recomendamos procurar a{" "}
                  <a
                    href="https://www.defensoria.rs.def.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Defensoria Pública do Estado do RS
                  </a>
                  , que presta excelente assistência jurídica gratuita a quem preenche os requisitos legais.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Novo Hamburgo — RS</strong></p>
              <p>Atendimento presencial e online</p>
              <p>Segunda a sexta · 9h às 18h</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-border bg-white/95 p-8 shadow-elegant backdrop-blur"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-60"
              style={{
                background:
                  "linear-gradient(140deg, color-mix(in oklab, var(--navy-soft) 40%, transparent), transparent 40%)",
              }}
            />
            <img
              src={logo.url}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 object-contain opacity-[0.05]"
            />
            <div className="relative space-y-5">
              <Field label="Seu nome" htmlFor="nome">
                <input
                  id="nome"
                  required
                  maxLength={100}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field label="Área do direito" htmlFor="area">
                <select
                  id="area"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Selecione uma área…</option>
                  {AREAS.map((a) => (
                    <option key={a.value} value={a.value}>{a.label}</option>
                  ))}
                </select>
              </Field>

              <Field label="Conte um pouco (opcional)" htmlFor="msg">
                <textarea
                  id="msg"
                  rows={4}
                  maxLength={1000}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Se quiser, adicione algum detalhe importante do seu caso."
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-metal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow"
              >
                <WhatsIcon className="h-4 w-4" />
                Conversar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você será redirecionado para o WhatsApp do escritório.
                Serviços remunerados — honorários combinados antes da contratação.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border text-primary-foreground">
        <div className="absolute inset-0 -z-10 bg-metal" />
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="Castro & Henrich" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-primary-foreground/70">
              Advogados Associados · Direito de Família e Sucessões.
            </p>
          </div>
          <div className="text-sm text-primary-foreground/80">
            <p className="mb-2 text-xs uppercase tracking-widest text-primary-foreground/50">Advogados</p>
            <p>Luan Castro — OAB/RS 124.511</p>
            <p>Greicy Maura Henrich — OAB/RS 124.784</p>
          </div>
          <div className="text-sm text-primary-foreground/80">
            <p className="mb-2 text-xs uppercase tracking-widest text-primary-foreground/50">Contato</p>
            <p>Novo Hamburgo — RS</p>
            <p>Seg a sex · 9h às 18h</p>
            <button onClick={directWhats} className="mt-1 underline underline-offset-4 hover:text-white">
              WhatsApp
            </button>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Castro &amp; Henrich Advogados Associados. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button
        onClick={directWhats}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-metal text-primary-foreground shadow-elegant transition hover:scale-105 hover:shadow-glow"
      >
        <WhatsIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-serif text-2xl text-metal md:text-3xl">{k}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg className="mt-0.5 h-4 w-4 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function BulletLight({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1 w-4 flex-none rounded-full bg-primary-foreground/70" />
      <span>{children}</span>
    </li>
  );
}

function BulletDark({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start justify-end gap-2">
      <span>{children}</span>
      <span className="mt-2 h-1 w-4 flex-none rounded-full bg-primary" />
    </li>
  );
}

function AreaCard({ title, desc, tag }: { title: string; desc: string; tag?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-white/90 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--navy-soft) 60%, transparent), transparent)",
        }}
      />
      {tag && (
        <span className="absolute -top-2 right-4 rounded-full bg-metal px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-soft">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-lg text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

function Benefit({ t, d }: { t: string; d: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-6 w-1 flex-none rounded-full bg-metal" />
      <div>
        <p className="font-serif text-lg text-foreground">{t}</p>
        <p className="text-sm text-muted-foreground">{d}</p>
      </div>
    </div>
  );
}

function CompareRow({
  label,
  a,
  b,
  highlight,
}: {
  label: string;
  a: string;
  b: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[1.1fr_1fr_1fr] items-center gap-3 px-6 py-3 text-sm ${
        highlight ? "bg-primary/[0.04]" : ""
      }`}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="text-center font-medium text-primary">{a}</span>
      <span className="text-center text-muted-foreground">{b}</span>
    </div>
  );
}

function FunnelStep({
  n,
  t,
  d,
  icon,
}: {
  n: string;
  t: string;
  d: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="relative rounded-2xl border border-border bg-white/85 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-metal text-primary-foreground shadow-soft">
          {icon}
        </span>
        <span className="font-serif text-sm uppercase tracking-widest text-navy-soft">{n}</span>
      </div>
      <p className="mt-4 font-serif text-lg text-foreground">{t}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
    </li>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.5 13.5 3.5 12 3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m22 8-6 4 6 4z" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 14h6M9 18h4" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
