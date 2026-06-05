import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Bell, Calendar, Compass, Feather, MessageSquare, Settings, 
  ChevronRight, Sparkles, User, Trophy, Scissors, CheckCircle, Clock,
  Moon, Sun
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: UnifiedArenaApp,
});

const matches = [
  { id: 1, league: "Brasileirão", home: "Flamengo", away: "Palmeiras", scoreH: 2, scoreA: 1, status: "AO VIVO", min: "82'" },
  { id: 2, league: "Champions League", home: "Real Madrid", away: "Man City", scoreH: 3, scoreA: 3, status: "PRORROGAÇÃO", min: "ET" },
  { id: 3, league: "Brasileirão", home: "Galo", away: "Cruzeiro", scoreH: 1, scoreA: 0, status: "ENC", min: "FT" },
  { id: 4, league: "NBA", home: "Lakers", away: "Celtics", scoreH: 102, scoreA: 108, status: "ENC", min: "FT" },
];

function UnifiedArenaApp() {
  const [tab, setTab] = useState("dashboard");
  const [points, setPoints] = useState(120);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState([{
    id: 1, title: "Reserva de Atendimento", text: "Seu horário com o Mestre Carlão está confirmado hoje às 18:30.", time: "Há 10 min"
  }]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const NavItem = ({ id, icon: Icon, label }: any) => (
    <button 
      onClick={() => setTab(id)}
      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl transition-all flex-1 min-w-[64px] ${tab === id ? "text-primary bg-primary/5 shadow-inner" : "text-muted-foreground"}`}
    >
      <Icon className={`h-5 w-5 mb-1.5 transition-transform ${tab === id ? "scale-110" : ""}`} />
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans selection:bg-primary/20 transition-colors duration-300">
      {/* Editorial Marquee */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden border-b border-border/50 flex items-center relative h-9">
        <div className="absolute left-0 bg-primary px-4 z-10 font-black text-[10px] border-r border-primary-foreground/20">
          PLACAR AO VIVO
        </div>
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[10px] font-black tracking-widest pl-24">
          {matches.map(m => (
            <span key={m.id} className="flex items-center gap-2">⚽ {m.home} <span className="text-primary-foreground/70 bg-primary-foreground/10 px-1.5 py-0.5 rounded">{m.scoreH}:{m.scoreA}</span> {m.away}</span>
          ))}
          {/* Duplicate for infinite effect */}
          {matches.map(m => (
            <span key={`${m.id}-dup`} className="flex items-center gap-2">⚽ {m.home} <span className="text-primary-foreground/70 bg-primary-foreground/10 px-1.5 py-0.5 rounded">{m.scoreH}:{m.scoreA}</span> {m.away}</span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-xl border-b border-border/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-11 w-11 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-center text-primary font-black text-xl shadow-inner">A</div>
          <div>
            <h1 className="text-base font-black uppercase tracking-tighter text-foreground leading-none">Arena Barber</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-black mt-1">Club & Lounge</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-2xl bg-muted/30 text-muted-foreground hover:text-foreground transition-all border border-border/50"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setTab("notifications")} className="relative bg-muted/30 text-muted-foreground hover:text-foreground transition-all p-2.5 rounded-2xl border border-border/50">
            <Bell size={20} />
            {notifications.length > 0 && <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full border-2 border-background" />}
          </button>
          <div className="h-11 w-11 rounded-2xl border border-border/50 flex items-center justify-center text-muted-foreground bg-muted/30">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="p-4 max-w-xl mx-auto">
        {tab === "dashboard" && (
          <div className="space-y-6">
            <section className="bg-gradient-to-b from-primary/10 to-transparent p-6 rounded-3xl border border-primary/20 text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold block mb-2 px-3 py-1 bg-primary/10 rounded-full inline-block">Membro VIP</span>
              <h2 className="text-3xl font-black text-foreground tracking-tight uppercase">Gabriel Rodrigues</h2>
              <p className="text-muted-foreground text-sm mt-2 font-medium">Sua cadeira está pronta.</p>
              <div className="flex gap-4 justify-center mt-6">
                <div className="text-center px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Pontos</p>
                  <p className="text-2xl font-black text-primary">{points}</p>
                </div>
                <div className="w-px bg-border"></div>
                <div className="text-center px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Status</p>
                  <p className="text-2xl font-black text-foreground">VIP</p>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-3xl border border-border shadow-sm">
              <h3 className="text-xs font-black text-foreground uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" /> Próxima Resenha (IA)
              </h3>
              <div className="bg-muted/30 p-4 rounded-2xl text-xs font-medium text-foreground leading-relaxed italic border-l-4 border-primary">
                "E aí, Gabriel! O Flamengo joga hoje às 21h, vamos preparar o visual?"
              </div>
            </section>

            <section className="bg-card p-6 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-black text-foreground uppercase tracking-widest">Placares do Dia</h3>
                <button className="text-[10px] font-bold text-primary uppercase">Ver todos</button>
              </div>
              <div className="space-y-3">
                {matches.slice(0, 2).map(m => (
                  <div key={m.id} className="bg-muted/20 p-4 rounded-2xl border border-border/50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[9px] text-muted-foreground font-bold uppercase">{m.league}</span>
                        <span className="text-xs font-black tracking-tight text-foreground">{m.home} x {m.away}</span>
                    </div>
                    <div className="bg-background px-3 py-1 rounded-lg border border-border font-mono font-bold text-primary text-xs">
                      {m.scoreH}:{m.scoreA}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <button onClick={() => setTab("agenda")} className="w-full bg-primary hover:opacity-90 text-primary-foreground font-black text-xs uppercase tracking-widest py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
              <Calendar size={16} /> Novo Agendamento
            </button>
          </div>
        )}

        {tab === "agenda" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground uppercase tracking-tight">Agendar Atendimento</h2>
            <div className="space-y-4">
              <div className="bg-card p-5 rounded-2xl border border-border space-y-4">
                <label className="block text-[9px] font-bold text-muted-foreground uppercase tracking-widest">1. Seleção de Tratamento</label>
                <div className="grid grid-cols-1 gap-3">
                  {["Corte Tradicional", "Barboterapia", "Combo Premium"].map((s, i) => (
                    <button key={i} className={`p-4 rounded-xl border text-left text-xs font-bold transition-all ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-muted/20 border-border text-muted-foreground"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest py-4 rounded-xl shadow-lg">
                Confirmar Reserva
              </button>
            </div>
          </div>
        )}

        {tab === "barberchat" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground uppercase tracking-tight">Resenha de Cadeira</h2>
              <span className="text-[8px] font-bold tracking-widest text-primary uppercase">IA GEMINI</span>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 min-h-[350px] flex flex-col justify-between overflow-hidden shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <p className="text-[10px] uppercase font-bold tracking-widest text-foreground">Lounge Virtual</p>
                </div>
                <div className="bg-muted/20 p-4 rounded-xl text-xs font-medium text-muted-foreground leading-relaxed border border-border">
                  "E aí, Gabriel! Vi que o Flamengo tá ganhando. O que vamos resenhar hoje?"
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <input placeholder="Digite sua resenha..." className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-xs font-medium outline-none focus:border-primary transition-all text-foreground" />
                <button className="bg-primary text-primary-foreground p-3 rounded-xl shadow-md"><MessageSquare size={16} /></button>
              </div>
            </div>
          </div>
        )}

        {tab === "esportes" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground uppercase tracking-tight">Noticiário & Resultados</h2>
            <div className="flex space-x-2 overflow-x-auto pb-2 border-b border-border">
              {["Todos", "Futebol", "NBA"].map((f, i) => (
                <button key={i} className={`text-[10px] uppercase font-bold px-4 py-2 rounded-xl border transition-all whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground"}`}>{f}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {matches.map(m => (
                <div key={m.id} className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] text-muted-foreground font-bold uppercase">{m.league} · {m.status}</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span className="text-foreground">{m.home}</span>
                    <span className="text-primary font-mono">{m.scoreH}</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-sm mt-2">
                    <span className="text-muted-foreground">{m.away}</span>
                    <span className="text-muted-foreground/50 font-mono">{m.scoreA}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "notifications" && (
          <div className="space-y-6">
             <h2 className="text-xl font-bold text-foreground uppercase tracking-tight">Notificações</h2>
             <div className="space-y-3">
               {notifications.map(n => (
                 <div key={n.id} className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                   <div className="flex justify-between items-start mb-1">
                     <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">{n.title}</h4>
                     <span className="text-[8px] text-muted-foreground font-bold">{n.time}</span>
                   </div>
                   <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">{n.text}</p>
                 </div>
               ))}
             </div>
          </div>
        )}

        {tab === "admin" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground uppercase tracking-tight">Admin</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-4">Eventos</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => alert("Simulando Gol...")} className="bg-muted/20 text-[10px] py-2.5 rounded-xl border border-border font-bold text-foreground">⚽ Gol FLA</button>
                  <button onClick={() => alert("Simulando Gol...")} className="bg-muted/20 text-[10px] py-2.5 rounded-xl border border-border font-bold text-foreground">⚽ Gol RMA</button>
                  <button onClick={() => alert("Notificação enviada")} className="col-span-2 bg-primary/10 text-primary text-[10px] py-3 rounded-xl border border-primary/20 font-bold uppercase tracking-widest mt-2">Lembrete</button>
                </div>
              </div>
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-4">Próximos Clientes</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-foreground">Gabriel Rodrigues</span>
                    <span className="text-primary">18:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-2xl border border-border/50 p-2 flex justify-around z-40 rounded-3xl shadow-2xl overflow-x-auto no-scrollbar">
        <NavItem id="dashboard" icon={Compass} label="Início" />
        <NavItem id="agenda" icon={Calendar} label="Agenda" />
        <NavItem id="esportes" icon={Feather} label="Esportes" />
        <NavItem id="barberchat" icon={MessageSquare} label="Resenha" />
        <NavItem id="admin" icon={Settings} label="Admin" />
      </nav>
    </div>
  );
}
