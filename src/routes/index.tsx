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
  { id: 3, league: "NBA", home: "Lakers", away: "Celtics", scoreH: 102, scoreA: 108, status: "ENC", min: "FT" },
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
      className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all flex-1 ${tab === id ? "text-primary" : "text-muted-foreground"}`}
    >
      <Icon className="h-5 w-5 mb-1" />
      <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans selection:bg-primary/20 transition-colors duration-300">
      {/* Editorial Marquee */}
      <div className="bg-muted/30 text-muted-foreground py-1.5 overflow-hidden border-b border-border/50 flex items-center relative h-7">
        <div className="absolute left-0 bg-background px-3 z-10 font-bold text-[9px] text-primary border-r border-border">
          LIVE:
        </div>
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[10px] font-bold tracking-tight pl-16">
          {matches.map(m => (
            <span key={m.id} className="flex items-center gap-2">⚽ {m.home} <span className="text-primary">{m.scoreH}:{m.scoreA}</span> {m.away}</span>
          ))}
          {/* Duplicate for infinite effect */}
          {matches.map(m => (
            <span key={`${m.id}-dup`} className="flex items-center gap-2">⚽ {m.home} <span className="text-primary">{m.scoreH}:{m.scoreA}</span> {m.away}</span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-7 z-30 bg-background/95 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-primary font-bold text-lg">A</div>
          <div>
            <h1 className="text-sm font-bold uppercase tracking-tight text-foreground">Arena Barber</h1>
            <p className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground font-sans font-bold">Club & Lounge</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setTab("notifications")} className="relative text-muted-foreground hover:text-foreground transition-colors p-2">
            <Bell size={18} />
            {notifications.length > 0 && <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-primary rounded-full" />}
          </button>
          <div className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground bg-card">
            <User size={18} />
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="p-4 max-w-xl mx-auto">
        {tab === "dashboard" && (
          <div className="space-y-6">
            <section className="border-b border-border pb-6">
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold block mb-1">Membro VIP</span>
              <h2 className="text-2xl font-bold text-foreground tracking-tight uppercase">Gabriel Rodrigues</h2>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed font-medium">Sua cadeira está pronta. Desfrute da resenha e do lounge.</p>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-2">Pontos</p>
                <p className="text-xl font-bold text-primary">{points} <span className="text-[10px] text-muted-foreground">PTS</span></p>
              </div>
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-2">Plano</p>
                <p className="text-xl font-bold text-foreground">Premium</p>
              </div>
            </div>

            <section className="bg-card p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <h3 className="text-[10px] font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> Placares do Dia
                </h3>
              </div>
              <div className="space-y-3">
                {matches.slice(0, 2).map(m => (
                  <div key={m.id} className="bg-muted/20 p-3.5 rounded-xl border border-border/50 flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">{m.league}</span>
                    <div className="flex items-center space-x-3 text-xs font-bold">
                      <span className="text-foreground tracking-tight">{m.home}</span>
                      <span className="text-primary px-2 py-0.5 rounded-md border border-border bg-background font-mono">{m.scoreH}:{m.scoreA}</span>
                      <span className="text-foreground tracking-tight">{m.away}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <button onClick={() => setTab("agenda")} className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold text-[10px] uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <Calendar size={14} /> Novo Agendamento
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
      <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-2 flex justify-around z-40 overflow-x-auto">
        <NavItem id="dashboard" icon={Compass} label="Início" />
        <NavItem id="agenda" icon={Calendar} label="Agenda" />
        <NavItem id="esportes" icon={Feather} label="Esportes" />
        <NavItem id="barberchat" icon={MessageSquare} label="Resenha" />
        <NavItem id="admin" icon={Settings} label="Admin" />
      </nav>
    </div>
  );
}
