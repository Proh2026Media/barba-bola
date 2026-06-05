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
      className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all flex-1 ${tab === id ? "text-[#c5a880]" : "text-[#8e8984]"}`}
    >
      <Icon className="h-5 w-5 mb-1" />
      <span className="text-[10px] font-medium uppercase tracking-tighter">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans selection:bg-[#c5a880]/30 transition-colors duration-300">
      {/* Editorial Marquee */}
      <div className="bg-secondary/10 text-muted-foreground py-1.5 overflow-hidden border-b border-white/[0.05] flex items-center relative h-7">
        <div className="absolute left-0 bg-secondary/10 px-3 z-10 font-classic italic text-[10px] text-gold font-bold border-r border-white/5">
          BOLETIM:
        </div>
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[10px] font-classic italic tracking-wide pl-20">
          {matches.map(m => (
            <span key={m.id}>⚽ {m.home} {m.scoreH} x {m.scoreA} {m.away} ({m.min})</span>
          ))}
          {/* Duplicate for infinite effect */}
          {matches.map(m => (
            <span key={`${m.id}-dup`}>⚽ {m.home} {m.scoreH} x {m.scoreA} {m.away} ({m.min})</span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-7 z-30 bg-background/95 backdrop-blur-md border-b border-white/[0.05] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold italic font-classic font-bold text-lg">A</div>
          <div>
            <h1 className="text-sm font-classic font-bold uppercase tracking-wider text-foreground">Arena Barber</h1>
            <p className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground font-sans">Club & Lounge</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-foreground transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setTab("notifications")} className="relative text-muted-foreground hover:text-foreground transition-colors p-2">
            <Bell size={18} />
            {notifications.length > 0 && <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-gold rounded-full" />}
          </button>
          <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground">
            <User size={16} />
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="p-4 max-w-xl mx-auto">
        {tab === "dashboard" && (
          <div className="space-y-6">
            <section className="border-b border-white/[0.05] pb-6">
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold block mb-1">MEMBRO VIP RECONHECIDO</span>
              <h2 className="text-2xl font-classic font-bold text-foreground tracking-wide uppercase italic">Gabriel Rodrigues</h2>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Sua cadeira está em processo de higienização. Desfrute da resenha e bebidas do clube.</p>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded border border-white/[0.04]">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold mb-2">Afiliação</p>
                <p className="text-lg font-classic font-bold text-gold">{points} <span className="text-[10px] font-sans font-light italic text-muted-foreground">PTS</span></p>
              </div>
              <div className="bg-card p-5 rounded border border-white/[0.04]">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold mb-2">Preferência</p>
                <p className="text-lg font-classic font-bold text-foreground">Degradê Razor</p>
              </div>
            </div>

            <section className="bg-card p-5 rounded-xl border border-white/[0.04]">
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                <h3 className="text-[10px] font-classic font-bold text-gold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" /> Sintonizador de Jogos
                </h3>
              </div>
              <div className="space-y-4">
                {matches.slice(0, 2).map(m => (
                  <div key={m.id} className="bg-secondary p-3.5 rounded border border-white/[0.02] flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-widest">{m.league}</span>
                    <div className="flex items-center space-x-3 text-xs font-bold">
                      <span className="font-classic text-foreground tracking-wide">{m.home}</span>
                      <span className="text-gold px-2 py-0.5 rounded border border-white/5 bg-background">{m.scoreH}</span>
                      <span className="text-foreground/20 font-light">x</span>
                      <span className="text-foreground/40 px-2 py-0.5 rounded border border-white/5 bg-background">{m.scoreA}</span>
                      <span className="font-classic text-foreground tracking-wide">{m.away}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <button onClick={() => setTab("agenda")} className="w-full bg-gold hover:bg-gold/80 text-primary-foreground font-bold text-[10px] uppercase tracking-widest py-4 rounded transition-all shadow-lg shadow-gold/10 flex items-center justify-center gap-2">
              <Calendar size={14} /> Novo Agendamento
            </button>
          </div>
        )}

        {tab === "agenda" && (
          <div className="space-y-6">
            <h2 className="text-xl font-classic font-bold text-foreground uppercase tracking-wide">Agendar Atendimento</h2>
            <div className="space-y-4">
              <div className="bg-card p-5 rounded border border-white/[0.04] space-y-4">
                <label className="block text-[9px] font-semibold text-muted-foreground uppercase tracking-widest">1. Seleção de Tratamento</label>
                <div className="grid grid-cols-1 gap-3">
                  {["Corte Tradicional (R$ 45)", "Barboterapia (R$ 35)", "Combo VIP (R$ 75)"].map((s, i) => (
                    <button key={i} className={`p-4 rounded border text-left text-xs transition-all ${i === 0 ? "bg-secondary border-gold/30 text-foreground" : "border-white/5 text-muted-foreground"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button className="w-full bg-gold text-primary-foreground font-bold text-[10px] uppercase tracking-widest py-4 rounded shadow-lg shadow-gold/10">
                Confirmar Reserva
              </button>
            </div>
          </div>
        )}

        {tab === "barberchat" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-classic font-bold text-foreground uppercase tracking-wide">Resenha de Cadeira</h2>
              <span className="text-[8px] font-classic tracking-widest text-gold uppercase">IA GEMINI</span>
            </div>
            <div className="bg-card border border-white/[0.04] rounded-2xl p-6 min-h-[350px] flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                  <p className="text-[10px] uppercase font-bold tracking-widest text-foreground">Lounge Editorial Pronto</p>
                </div>
                <div className="bg-secondary p-4 rounded-xl text-xs italic text-muted-foreground leading-relaxed border border-white/5">
                  "Fala craque! Já vi aqui que o Mengão tá no 2x1 contra o Palmeiras. Quer saber as estatísticas ou prefere falar sobre o corte pro fim de semana?"
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <input placeholder="Digite sua resenha..." className="flex-1 bg-background border border-white/5 rounded-xl px-4 py-3 text-xs outline-none focus:border-gold/30 transition-all text-foreground" />
                <button className="bg-gold text-primary-foreground p-3 rounded-xl"><MessageSquare size={16} /></button>
              </div>
            </div>
          </div>
        )}

        {tab === "esportes" && (
          <div className="space-y-6">
            <h2 className="text-xl font-classic font-bold text-white uppercase tracking-wide">Noticiário & Resultados</h2>
            <div className="flex space-x-2 overflow-x-auto pb-2 border-b border-white/5">
              {["Todos", "Futebol", "NBA"].map((f, i) => (
                <button key={i} className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${i === 0 ? "border-[#c5a880] text-[#c5a880]" : "border-white/5 text-[#8e8984]"}`}>{f}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {matches.map(m => (
                <div key={m.id} className="bg-[#161513] p-5 rounded border border-white/[0.04]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] text-[#8e8984] font-semibold uppercase">{m.league} · {m.status}</span>
                  </div>
                  <div className="flex items-center justify-between font-classic text-sm">
                    <span className="text-white">{m.home}</span>
                    <span className="text-[#c5a880] font-sans font-bold">{m.scoreH}</span>
                  </div>
                  <div className="flex items-center justify-between font-classic text-sm mt-2">
                    <span className="text-[#8e8984]">{m.away}</span>
                    <span className="text-white/40 font-sans font-bold">{m.scoreA}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {tab === "notifications" && (
          <div className="space-y-6">
             <h2 className="text-xl font-classic font-bold text-white uppercase tracking-wide">Alertas do Clube</h2>
             <div className="space-y-3">
               {notifications.map(n => (
                 <div key={n.id} className="bg-[#161513] p-5 rounded border border-white/[0.04]">
                   <div className="flex justify-between items-start mb-1">
                     <h4 className="text-xs font-classic font-bold text-white uppercase tracking-wider">{n.title}</h4>
                     <span className="text-[8px] text-[#8e8984] font-semibold">{n.time}</span>
                   </div>
                   <p className="text-[11px] text-[#8e8984] leading-relaxed">{n.text}</p>
                 </div>
               ))}
             </div>
          </div>
        )}

        {tab === "admin" && (
          <div className="space-y-6">
            <h2 className="text-xl font-classic font-bold text-white uppercase tracking-wide italic">Modo Barbeiro</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#161513] p-5 rounded border border-white/[0.04]">
                <p className="text-[9px] text-[#8e8984] uppercase tracking-widest font-semibold mb-4">Simulador de Eventos</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => alert("Simulando Gol...")} className="bg-[#1c1a18] text-[10px] py-2 rounded border border-white/5 font-bold">⚽ Gol Flamengo</button>
                  <button onClick={() => alert("Simulando Gol...")} className="bg-[#1c1a18] text-[10px] py-2 rounded border border-white/5 font-bold">⚽ Gol Real Madrid</button>
                  <button onClick={() => alert("Notificação enviada")} className="col-span-2 bg-[#c5a880]/10 text-[#c5a880] text-[10px] py-3 rounded border border-[#c5a880]/20 font-bold uppercase tracking-widest mt-2">Lembrar Horário</button>
                </div>
              </div>
              <div className="bg-[#161513] p-5 rounded border border-white/[0.04]">
                <p className="text-[9px] text-[#8e8984] uppercase tracking-widest font-semibold mb-4">Agenda do Dia</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-medium">Gabriel Rodrigues</span>
                    <span className="text-[#c5a880]">18:30</span>
                  </div>
                  <div className="flex justify-between items-center text-xs opacity-50">
                    <span className="text-white font-medium">Mateus Silva</span>
                    <span className="text-[#8e8984]">15:00 (Concluído)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#121110]/95 backdrop-blur-md border-t border-white/[0.05] p-2 flex justify-around z-40 overflow-x-auto">
        <NavItem id="dashboard" icon={Compass} label="Início" />
        <NavItem id="agenda" icon={Calendar} label="Agenda" />
        <NavItem id="esportes" icon={Feather} label="Esportes" />
        <NavItem id="barberchat" icon={MessageSquare} label="Resenha" />
        <NavItem id="admin" icon={Settings} label="Admin" />
      </nav>
    </div>
  );
}
