import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import heroOffice from "@/assets/hero-office.jpg";
import scaleImg from "@/assets/scale.jpg";
import lawyersImg from "@/assets/lawyers.jpg";

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
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Castro & Henrich Advocacia" className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#areas" className="hover:text-primary">Áreas</a>
            <a href="#extrajudicial" className="hover:text-primary">Extrajudicial</a>
            <a href="#equipe" className="hover:text-primary">Advogados</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <button
            onClick={directWhats}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
          >
            <WhatsIcon className="h-4 w-4" /> Falar agora
          </button>
        </div>
      </header>

      {/* HERO with background image */}
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
        </div>

        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:pt-28 md:pb-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Direito de família · Novo Hamburgo/RS
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-[3.75rem]">
              Divórcio, inventário e testamento com{" "}
              <span className="italic text-primary">clareza e agilidade</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Quando possível, resolvemos seu caso em{" "}
              <strong className="text-foreground">cartório</strong> — sem processo judicial. Mais
              rápido, mais discreto e com menos desgaste emocional para a sua família.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
              >
                Falar com um advogado
                <span aria-hidden>→</span>
              </a>
              <button
                onClick={directWhats}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                <WhatsIcon className="h-4 w-4" /> WhatsApp direto
              </button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat k="15+" v="anos de atuação" />
              <Stat k="7 dias" v="média para extrajudicial*" />
              <Stat k="100%" v="atendimento humanizado" />
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-elegant">
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
                  <Check>Análise inicial gratuita do seu caso</Check>
                  <Check>Honorários combinados por escrito, sem surpresas</Check>
                  <Check>Atendimento presencial e online em todo o RS</Check>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAND — brand emphasis */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={scaleImg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          width={1200}
          height={1400}
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
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
      <section id="areas" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Áreas de atuação</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Especialistas em Direito de Família</h2>
            <p className="mt-4 text-muted-foreground">
              Cada caso pede a solução certa. Avaliamos a sua situação e indicamos o caminho mais eficiente,
              seja em cartório ou em juízo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              title="Inventário"
              desc="Extrajudicial em cartório ou judicial quando exigido. Cuidamos de partilha, ITCMD e documentação."
            />
            <AreaCard
              title="Testamento"
              desc="Planejamento sucessório para proteger patrimônio e garantir que sua vontade seja cumprida."
            />
          </div>
        </div>
      </section>

      {/* EXTRAJUDICIAL FOCUS */}
      <section id="extrajudicial" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Nosso diferencial</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Por que a via <span className="italic text-primary">extrajudicial</span> pode ser a melhor escolha?
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
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-secondary to-transparent" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={scaleImg}
                alt="Balança da justiça"
                className="h-72 w-full object-cover md:h-96"
                loading="lazy"
                width={1200}
                height={1400}
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-soft">
              <p className="font-serif text-sm uppercase tracking-widest text-navy-soft">Comparativo</p>
              <div className="mt-4 grid gap-3 text-sm">
                <Compare label="Prazo médio" a="7 a 30 dias" b="1 a 3 anos" />
                <Compare label="Audiência" a="Não" b="Sim" />
                <Compare label="Privacidade" a="Alta" b="Autos públicos" />
                <Compare label="Recursos" a="Não cabem" b="Cabem múltiplos" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                *Prazos estimados. Cada caso é avaliado individualmente pelo escritório.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:items-center md:py-28">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={lawyersImg}
                alt="Luan Castro e Greicy Maura Henrich"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1408}
                height={1600}
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Quem cuida do seu caso</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Advogados com nome, rosto e responsabilidade</h2>
            <p className="mt-5 text-muted-foreground">
              Você não fala com um call center. Do primeiro contato à assinatura da escritura, seu
              caso é acompanhado pessoalmente pelos sócios do escritório.
            </p>

            <div className="mt-8 space-y-5">
              <Lawyer
                name="Luan Castro"
                oab="OAB/RS 124.511"
                bio="Sócio-fundador. Atua com foco em soluções extrajudiciais e em processos de família complexos."
              />
              <Lawyer
                name="Greicy Maura Henrich"
                oab="OAB/RS 124.744"
                bio="Sócia-fundadora. Especialista em direito sucessório, inventários e planejamento patrimonial."
              />
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-border bg-white/70 p-4 backdrop-blur">
              <img src={logo.url} alt="" className="h-10 w-auto" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Castro &amp; Henrich Advogados Associados</strong>
                <br />
                Novo Hamburgo — Rio Grande do Sul
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Como funciona</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Três passos até a solução</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Step n="01" t="Conversa inicial" d="Você nos conta o caso pelo WhatsApp ou formulário. Avaliamos sem compromisso." />
            <Step n="02" t="Plano e honorários" d="Definimos a estratégia (extrajudicial ou judicial) e apresentamos honorários por escrito." />
            <Step n="03" t="Resolução" d="Cuidamos da documentação, cartório ou processo, e mantemos você informado em cada etapa." />
          </div>
        </div>
      </section>

      {/* FORMULÁRIO / CONTATO */}
      <section id="contato" className="relative isolate overflow-hidden">
        <img
          src={heroOffice}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          loading="lazy"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-soft">Fale conosco</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Vamos conversar sobre o seu caso</h2>
            <p className="mt-5 text-muted-foreground">
              Preencha os dados abaixo e clique em <strong className="text-foreground">Conversar</strong>.
              Você será direcionado ao nosso WhatsApp com a mensagem pronta — respondemos em horário
              comercial.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-white/80 p-5 text-sm backdrop-blur">
              <p className="font-medium text-foreground">Sobre os honorários</p>
              <p className="mt-1 text-muted-foreground">
                A primeira conversa é <strong className="text-foreground">gratuita e sem compromisso</strong>.
                Os serviços jurídicos são particulares, com valores combinados por escrito antes de qualquer
                contratação — sem surpresas.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Novo Hamburgo — RS</strong></p>
              <p>Atendimento presencial e online</p>
              <p>Segunda a sexta · 9h às 18h</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-elegant"
          >
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
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Se quiser, adicione algum detalhe importante do seu caso."
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90"
              >
                <WhatsIcon className="h-4 w-4" />
                Conversar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você será redirecionado para o WhatsApp do escritório.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
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
            <p>Greicy Maura Henrich — OAB/RS 124.744</p>
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
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition hover:scale-105"
      >
        <WhatsIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-serif text-2xl text-primary md:text-3xl">{k}</dt>
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

function AreaCard({ title, desc, tag }: { title: string; desc: string; tag?: string }) {
  return (
    <div className="group relative rounded-xl border border-border bg-white p-6 transition hover:border-primary/40 hover:shadow-soft">
      {tag && (
        <span className="absolute -top-2 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
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
      <div className="mt-1 h-6 w-1 flex-none rounded-full bg-primary" />
      <div>
        <p className="font-serif text-lg text-foreground">{t}</p>
        <p className="text-sm text-muted-foreground">{d}</p>
      </div>
    </div>
  );
}

function Compare({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border pb-3 last:border-none last:pb-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{a}</span>
      <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{b}</span>
    </div>
  );
}

function Step({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div>
      <p className="font-serif text-4xl text-primary-foreground/40">{n}</p>
      <p className="mt-3 font-serif text-xl">{t}</p>
      <p className="mt-2 text-sm text-primary-foreground/70">{d}</p>
    </div>
  );
}

function Lawyer({ name, oab, bio }: { name: string; oab: string; bio: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-serif text-xl text-foreground">{name}</p>
        <p className="text-xs font-medium uppercase tracking-widest text-primary">{oab}</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{bio}</p>
    </div>
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
