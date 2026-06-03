import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Scissors, Bell, Calendar, MapPin, Star, Clock,
  Trophy, Tv, ChevronRight, Flame, CheckCheck, Sparkles,
  User, Settings, Heart, MessageSquare, Play,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lâmina & Gol — Barbearia + Esportes ao vivo" },
      { name: "description", content: "Agende seu corte e acompanhe os resultados do esporte nacional e internacional em um só app." },
      { property: "og:title", content: "Lâmina & Gol — Barbearia + Esportes" },
      { property: "og:description", content: "Cortes premium e placares ao vivo. Tudo em um lugar." },
    ],
  }),
  component: Index,
});

const barbers = [
  { name: "Rafael Costa", role: "Master Barber", rating: 4.9, slot: "14:30" },
  { name: "Diego Almeida", role: "Especialista Fade", rating: 4.8, slot: "15:00" },
  { name: "Lucas Pereira", role: "Barba & Navalha", rating: 5.0, slot: "16:15" },
];

const services = [
  { name: "Corte Clássico", time: "45 min", price: "R$ 60" },
  { name: "Corte + Barba", time: "1h 15", price: "R$ 95" },
  { name: "Pigmentação", time: "1h", price: "R$ 120" },
  { name: "Combo Premium", time: "1h 30", price: "R$ 150" },
];

const matches = [
  { league: "Brasileirão Série A", home: "Flamengo", away: "Palmeiras", scoreH: 2, scoreA: 1, status: "AO VIVO", min: "78'", flag: "🇧🇷" },
  { league: "La Liga", home: "Real Madrid", away: "Barcelona", scoreH: 1, scoreA: 1, status: "AO VIVO", min: "63'", flag: "🇪🇸" },
  { league: "Premier League", home: "Arsenal", away: "Man City", scoreH: 0, scoreA: 2, status: "ENC", min: "FT", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { league: "Champions League", home: "PSG", away: "Bayern", scoreH: 0, scoreA: 0, status: "21:00", min: "Hoje", flag: "🏆" },
];

const notifications = [
  { icon: Trophy, title: "GOOOL! Flamengo 2x1 Palmeiras", time: "agora", hot: true },
  { icon: Calendar, title: "Lembrete: corte com Rafael às 14:30", time: "2h" },
  { icon: Flame, title: "Real Madrid vs Barcelona começa em 15min", time: "15min", hot: true },
  { icon: CheckCheck, title: "Avaliação solicitada — Diego Almeida", time: "ontem" },
];

function Index() {
  const [tab, setTab] = useState<"agenda" | "esportes" | "clube" | "admin">("agenda");
  const [isAdmin, setIsAdmin] = useState(false);
  const [points, setPoints] = useState(120);
  const [resenha, setResenha] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Fala craque! No que posso ajudar hoje? Quer saber sobre o jogo do Mengão ou dicas de estilo?' }
  ]);

  const handleResenha = () => {
    if (!resenha) return;
    const newHistory = [...chatHistory, { role: 'user' as const, text: resenha }];
    setChatHistory(newHistory);
    setResenha("");
    // Simulando resposta da IA
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Com certeza! Esse clássico vai ser histórico. A propósito, seu corte 'Fade' combinaria muito com o clima do estádio hoje!" }]);
    }, 1000);
  };


  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md gradient-gold shadow-gold">
              <Scissors className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="display text-xl">LÂMINA & GOL</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">BARBEARIA · ESPORTES</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#agenda" className="hover:text-gold transition">Agenda</a>
            <a href="#esportes" className="hover:text-gold transition">Esportes</a>
            <a href="#servicos" className="hover:text-gold transition">Serviços</a>
            <a href="#unidade" className="hover:text-gold transition">Unidade</a>
          </nav>
          <button className="relative rounded-full border border-border bg-card p-2.5 transition hover:border-gold/50">
            <Bell className="h-4 w-4 text-gold" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-primary-foreground">4</span>
          </button>
        </div>
        
        {/* SPORTS MARQUEE */}
        <div className="bg-gold/10 border-y border-gold/20 py-1 overflow-hidden">
          <div className="marquee flex gap-12 text-[10px] font-bold tracking-tighter text-gold/80 uppercase">
            <span>⚽ FLAMENGO 2 x 1 PALMEIRAS (78')</span>
            <span>🏀 CELTICS 112 x 105 LAKERS (FINAL)</span>
            <span>🎾 BIA HADDAD VENCE NO ROLAND GARROS</span>
            <span>🏆 CHAMPIONS: FINAL SERÁ EM LONDRES</span>
            <span>💇 PROMO: CORTE + BARBA COM 10% DE DESCONTO HOJE</span>
            <span>⚽ REAL MADRID 1 x 1 BARCELONA (63')</span>
          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold">
                <Sparkles className="h-3 w-3" /> Novo · Notificações de placar em tempo real
              </div>
              <h1 className="display mt-6 text-6xl leading-[0.95] md:text-8xl">
                CORTE <span className="text-gradient-gold">AFIADO.</span><br />
                JOGO <span className="text-gradient-gold">NA TELA.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
                Agende seu horário, receba lembretes e acompanhe Brasileirão, Champions, NBA e mais — tudo no mesmo app da sua barbearia.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="gradient-gold rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
                  Agendar agora
                </button>
                <button className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold/50">
                  Ver jogos de hoje
                </button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
                {[
                  { v: "12k+", l: "Cortes/mês" },
                  { v: "4.9★", l: "Avaliação" },
                  { v: "180+", l: "Ligas cobertas" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display text-3xl text-gold">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup card */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gold/20 blur-3xl" />
              <div className="glass rounded-3xl p-5 shadow-gold">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Notificações</div>
                  <div className="flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-bold text-destructive">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" /> AO VIVO
                  </div>
                </div>
                <div className="space-y-2.5">
                  {notifications.map((n, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-3 transition hover:border-gold/40">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${n.hot ? "gradient-gold" : "bg-muted"}`}>
                        <n.icon className={`h-4 w-4 ${n.hot ? "text-primary-foreground" : "text-gold"}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium leading-snug">{n.title}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAB SWITCHER */}
      <section className="px-6 py-12" id="agenda">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setTab("agenda")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${tab === "agenda" ? "gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Calendar className="mr-2 inline h-4 w-4" /> Agenda
            </button>
            <button
              onClick={() => setTab("esportes")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${tab === "esportes" ? "gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Trophy className="mr-2 inline h-4 w-4" /> Esportes
            </button>
            <button
              onClick={() => setTab("clube")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${tab === "clube" ? "gradient-gold text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Heart className="mr-2 inline h-4 w-4" /> Clube & IA
            </button>
            <button
              onClick={() => {
                setIsAdmin(!isAdmin);
                setTab(isAdmin ? "agenda" : "admin");
              }}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${isAdmin ? "bg-gold/20 text-gold" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Settings className="mr-2 inline h-4 w-4" /> {isAdmin ? "Modo Barbeiro" : "Admin"}
            </button>
          </div>

          {tab === "clube" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                {/* Fidelidade */}
                <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-gold/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="display text-2xl text-gold">Clube de Fidelidade</h3>
                    <div className="text-3xl font-bold">{points} PTS</div>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gold transition-all" style={{ width: `${(points / 200) * 100}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">Faltam 80 pts para sua <b>Barboterapia Grátis</b></p>
                </div>

                {/* Preferências */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="display text-xl mb-4">Assinatura de Estilo</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Estilo Padrão</span>
                      <span className="font-medium text-gold">Mid Fade + Barba</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Barbeiro Favorito</span>
                      <span className="font-medium">Rafael Costa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Times Favoritos</span>
                      <span className="font-medium">Flamengo, Celtics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* IA Resenha */}
              <div className="rounded-2xl border border-border bg-card flex flex-col h-[400px]">
                <div className="p-4 border-b border-border flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full gradient-gold flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="display text-lg">Resenha de Cadeira IA</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-gold text-primary-foreground' : 'bg-muted'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-border flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Pergunte sobre esportes..." 
                    className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-gold"
                    value={resenha}
                    onChange={(e) => setResenha(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleResenha()}
                  />
                  <button onClick={handleResenha} className="bg-gold p-2 rounded-lg text-primary-foreground">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === "admin" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-gold/50 bg-gold/5 p-8 text-center">
                <h3 className="display text-3xl mb-4 text-gold">Painel do Barbeiro</h3>
                <p className="text-muted-foreground mb-8">Gerencie sua fila e agendamentos em tempo real.</p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs uppercase text-muted-foreground">Cortes Hoje</div>
                  </div>
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="text-2xl font-bold text-gold">R$ 840</div>
                    <div className="text-xs uppercase text-muted-foreground">Receita Estimada</div>
                  </div>
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="text-2xl font-bold text-destructive">2</div>
                    <div className="text-xs uppercase text-muted-foreground">Cancelamentos</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="display text-xl">Simulador de Eventos</h3>
                  <Sparkles className="text-gold h-5 w-5" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-destructive/20 text-destructive border border-destructive/30 rounded-lg text-xs font-bold" onClick={() => alert("GOOOL! Notificação enviada para todos os clientes.")}>
                    Simular Gol (Real Time)
                  </button>
                  <button className="px-4 py-2 bg-gold/20 text-gold border border-gold/30 rounded-lg text-xs font-bold" onClick={() => alert("Lembrete de Agendamento enviado.")}>
                    Lembrete de Horário
                  </button>
                  <button className="px-4 py-2 bg-secondary border border-border rounded-lg text-xs font-bold" onClick={() => alert("Notificação de Notícia de Última Hora enviada.")}>
                    Breaking News Esportiva
                  </button>
                </div>
              </div>
            </div>
          )}


          {tab === "agenda" ? (
            <div className="grid gap-4 md:grid-cols-3">
              {barbers.map((b) => (
                <div key={b.name} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-gold/50">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-gold text-xl font-bold text-primary-foreground">
                      {b.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gold">
                      <Star className="h-3.5 w-3.5 fill-current" /> {b.rating}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="display text-xl">{b.name}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{b.role}</div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-gold" /> Próximo: <span className="text-foreground">{b.slot}</span>
                    </div>
                    <button className="text-sm font-medium text-gold transition group-hover:translate-x-0.5">
                      Reservar <ChevronRight className="inline h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div id="esportes" className="grid gap-3">
              {matches.map((m, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-gold/40">
                  <div className="hidden w-40 shrink-0 sm:block">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.flag} {m.league}</div>
                  </div>
                  <div className="grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-4">
                    <div className="text-right text-sm font-medium md:text-base">{m.home}</div>
                    <div className="display flex items-center gap-3 text-2xl">
                      <span className={m.scoreH > m.scoreA ? "text-gold" : ""}>{m.scoreH}</span>
                      <span className="text-muted-foreground">:</span>
                      <span className={m.scoreA > m.scoreH ? "text-gold" : ""}>{m.scoreA}</span>
                    </div>
                    <div className="text-left text-sm font-medium md:text-base">{m.away}</div>
                  </div>
                  <div className="w-20 shrink-0 text-right">
                    <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      m.status === "AO VIVO" ? "bg-destructive/20 text-destructive" :
                      m.status === "ENC" ? "bg-muted text-muted-foreground" :
                      "bg-gold/15 text-gold"
                    }`}>
                      {m.status === "AO VIVO" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />}
                      {m.status}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.min}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16" id="servicos">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Serviços</div>
              <h2 className="display mt-2 text-4xl md:text-5xl">A NAVALHA <span className="text-gradient-gold">PERFEITA</span></h2>
            </div>
            <a href="#" className="hidden text-sm text-muted-foreground hover:text-gold md:block">Ver tudo →</a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-gold/50 hover:shadow-gold">
                <div className="display text-2xl">{s.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.time}</div>
                <div className="mt-8 flex items-end justify-between">
                  <div className="display text-3xl text-gradient-gold">{s.price}</div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT + TV */}
      <section className="px-6 py-16" id="unidade">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                <MapPin className="h-3.5 w-3.5" /> Unidade Vila Madalena
              </div>
              <h3 className="display mt-3 text-3xl">RUA HARMONIA, 312 · SP</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Aberto seg–sáb, 9h às 22h. Som ambiente, chope gelado e o jogo passando em 4 TVs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Wi-Fi", "Estacionamento", "Bar", "TVs 4K", "Massagem"].map(t => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gold/30 gradient-gold p-8 text-primary-foreground">
              <Tv className="absolute -right-6 -top-6 h-40 w-40 opacity-20" />
              <div className="text-xs font-bold uppercase tracking-widest">Modo Estádio</div>
              <h3 className="display mt-3 text-3xl">SEU CORTE NO INTERVALO</h3>
              <p className="mt-3 max-w-md text-sm opacity-90">
                Escolhemos o horário do seu agendamento para coincidir com o intervalo do seu time. Você assiste, a gente corta.
              </p>
              <button className="mt-6 rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-foreground">
                Ativar Modo Estádio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 Lâmina & Gol · Todos os direitos reservados</div>
          <div className="flex items-center gap-2">
            <Scissors className="h-3 w-3 text-gold" /> Onde a barbearia encontra o esporte.
          </div>
        </div>
      </footer>
    </div>
  );
}
