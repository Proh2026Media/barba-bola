import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Bell, Calendar, Compass, Feather, MessageSquare, Settings, 
  ChevronRight, Sparkles, User, Trophy, Scissors, CheckCircle, Clock,
  Moon, Sun, Info, X, Zap, Beer, Star, CreditCard, Shield, Crown, Diamond,
  Briefcase, Armchair, BadgeCheck, Sparkle, Gem
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
  const [showVipInfo, setShowVipInfo] = useState(false);
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

  const getTierData = (pts: number) => {
    if (pts >= 500) return { 
      name: "Exclusive", 
      color: "text-[#FF00E5]", 
      bg: "bg-[#FF00E5]/10", 
      border: "border-[#FF00E5]/30",
      badge: "bg-gradient-to-br from-[#00D1FF] via-[#FF00E5] to-[#FFD600] text-white shadow-[0_0_15px_rgba(255,0,229,0.5)] animate-shimmer bg-[length:200%_auto]",
      icon: Gem,
      greeting: "Bem-vindo ao topo, Membro Exclusive."
    };
    if (pts >= 300) return { 
      name: "Privilege", 
      color: "text-[#D4AF37]", 
      bg: "bg-[#D4AF37]/10", 
      border: "border-[#D4AF37]/30",
      badge: "bg-gradient-to-r from-[#D4AF37] to-[#F9E272] text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]",
      icon: Sparkle,
      greeting: "Bom dia, Membro Privilege."
    };
    if (pts >= 100) return { 
      name: "Select", 
      color: "text-[#CD7F32]", 
      bg: "bg-[#CD7F32]/10", 
      border: "border-[#CD7F32]/30",
      badge: "bg-gradient-to-r from-[#CD7F32] to-[#A0522D] text-white shadow-[0_0_10px_rgba(205,127,50,0.3)]",
      icon: BadgeCheck,
      greeting: "Olá, Membro Select."
    };
    return { 
      name: "Classic", 
      color: "text-[#C0C0C0]", 
      bg: "bg-[#C0C0C0]/10", 
      border: "border-[#C0C0C0]/30",
      badge: "bg-gradient-to-r from-[#C0C0C0] to-[#808080] text-white shadow-[0_0_10px_rgba(192,192,192,0.3)]",
      icon: Armchair,
      greeting: "Bem-vindo, Membro Classic."
    };
  };

  const tier = getTierData(points);

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
          <Link 
            to="/icon-preview"
            className="p-2.5 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 flex items-center gap-2"
          >
            <Sparkles size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Ícones</span>
          </Link>
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
            <section className={`p-6 rounded-3xl border ${tier.border} text-center relative overflow-hidden transition-all duration-500 group shadow-2xl backdrop-blur-md bg-white/5 dark:bg-black/20 ${tier.name === 'Exclusive' ? 'border-[#FF00E5]/50 shadow-[0_0_40px_rgba(255,0,229,0.15)] ring-1 ring-[#FF00E5]/20' : 'border-white/10'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 p-3">
                <div className={`h-10 w-10 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-lg backdrop-blur-lg ${tier.bg} ${tier.color} ${tier.border} group-hover:scale-110`}>
                  <tier.icon size={20} className="drop-shadow-[0_0_8px_currentColor]" />
                </div>
              </div>
              <span className={`text-[10px] uppercase font-black px-4 py-1.5 rounded-full inline-block mb-3 tracking-[0.2em] shadow-lg transform transition-transform hover:scale-105 ${tier.badge}`}>
                {tier.name}
              </span>
              <h2 className="text-3xl font-black text-foreground tracking-tight uppercase drop-shadow-sm">Gabriel Rodrigues</h2>
              <p className="text-muted-foreground text-sm mt-2 font-medium italic opacity-80">{tier.greeting}</p>
              <div className="flex gap-4 justify-center mt-6">
                <div className="text-center px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Pontos</p>
                  <p className={`text-2xl font-black ${tier.color}`}>{points}</p>
                </div>
                <div className="w-px bg-border"></div>
                <div className="text-center px-4 relative">
                  <button 
                    onClick={() => setShowVipInfo(true)}
                    className={`absolute -top-1 -right-1 hover:scale-110 transition-transform ${tier.color}`}
                  >
                    <Info size={12} />
                  </button>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Status</p>
                  <p className="text-2xl font-black text-foreground">{tier.name}</p>
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
      <VipInfoModal isOpen={showVipInfo} onClose={() => setShowVipInfo(false)} />
    </div>
  );
}

const VipInfoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-card w-full max-w-sm rounded-[32px] border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-border flex items-center justify-between bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <Trophy size={20} />
            </div>
            <h3 className="font-black uppercase tracking-tight text-sm">Sistema de Pontos & VIP</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">Como Acumular</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-muted/30 p-3 rounded-2xl border border-border/50">
                <Zap size={16} className="text-primary mt-0.5" />
                <p className="text-xs font-medium leading-relaxed">Cada <span className="font-bold text-foreground">R$ 1,00 gasto</span> em serviços ou produtos equivale a <span className="font-bold text-primary">1 Ponto</span>.</p>
              </div>
              <div className="flex items-start gap-3 bg-muted/30 p-3 rounded-2xl border border-border/50">
                <MessageSquare size={16} className="text-primary mt-0.5" />
                <p className="text-xs font-medium leading-relaxed">Interação na <span className="font-bold text-foreground">Resenha IA</span> gera <span className="font-bold text-primary">5 Pontos</span> diários.</p>
              </div>
              <div className="flex items-start gap-3 bg-muted/30 p-3 rounded-2xl border border-border/50">
                <Star size={16} className="text-primary mt-0.5" />
                <p className="text-xs font-medium leading-relaxed">Check-in em <span className="font-bold text-foreground">dias de jogo</span> na Arena garante <span className="font-bold text-primary">10 Pontos</span> bônus.</p>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">A Escala do Clube</h4>
            <div className="space-y-4">
              {/* Classic */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg group hover:bg-white/10 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 flex items-center gap-2">
                    <div className="p-1.5 bg-orange-400/10 rounded-lg border border-orange-400/20">
                      <Armchair size={14} />
                    </div>
                    Classic
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full border border-border/50">0 - 99 pts</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed pl-9">O alicerce: Tradição e manutenção impecável do seu visual.</p>
              </div>
              
              {/* Select */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg group hover:bg-white/10 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                    <div className="p-1.5 bg-slate-300/10 rounded-lg border border-slate-300/20">
                      <BadgeCheck size={14} />
                    </div>
                    Select
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full border border-border/50">100 - 299 pts</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed pl-9">Conveniência: Prioridade na agenda e lugar cativo na Arena.</p>
              </div>

              {/* Privilege */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg group hover:bg-white/10 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                    <div className="p-1.5 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                      <Sparkle size={14} />
                    </div>
                    Privilege
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full border border-border/50">300 - 499 pts</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed pl-9">Experiência: Descontos em produtos e atendimento regado a benefícios.</p>
              </div>

              {/* Exclusive */}
              <div className="bg-[#D4AF37]/5 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/30 shadow-xl relative overflow-hidden group hover:bg-[#D4AF37]/10 transition-all ring-1 ring-[#D4AF37]/10">
                <div className="absolute -right-2 -top-2 opacity-5 transition-transform group-hover:scale-110">
                  <Gem size={64} fill="currentColor" className="text-[#D4AF37]" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
                    <div className="p-1.5 bg-[#D4AF37]/20 rounded-lg border border-[#D4AF37]/30 shadow-inner">
                      <Gem size={14} fill="currentColor" />
                    </div>
                    Exclusive
                  </span>
                  <span className="text-[9px] font-black text-black bg-gradient-to-r from-[#D4AF37] to-[#F9E272] px-2 py-0.5 rounded-full shadow-md">500+ pts ou Assinatura</span>
                </div>
                <ul className="space-y-1.5">
                  <li className="text-[10px] font-bold flex items-center gap-2">
                    <CheckCircle size={10} className="text-[#D4AF37]" /> Prioridade máxima nos horários disputados
                  </li>
                  <li className="text-[10px] font-bold flex items-center gap-2 text-foreground/80">
                    <CheckCircle size={10} className="text-[#D4AF37]" /> Acesso irrestrito ao Lounge VIP
                  </li>
                  <li className="text-[10px] font-bold flex items-center gap-2 text-foreground/80">
                    <CheckCircle size={10} className="text-[#D4AF37]" /> Plano de Cortes Ilimitados (Exclusivo)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-card p-4 rounded-2xl border border-border text-center">
            <p className="text-[10px] font-black text-foreground uppercase tracking-widest">
              Por que assinar o Sócio Arena?
            </p>
            <p className="text-[11px] mt-2 text-muted-foreground leading-relaxed">
              Diferente dos pontos, a assinatura garante benefícios <span className="font-bold text-foreground">imediatos</span> e exclusivos como o <span className="font-bold text-foreground italic">Corte Ilimitado mensal</span> e acesso ao Lounge VIP.
            </p>
          </div>
        </div>

        <div className="p-4 bg-muted/20 border-t border-border space-y-2">
          <Link 
            to="/politica"
            onClick={onClose}
            className="w-full bg-background border border-border text-foreground font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-2xl hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            Política Completa <ChevronRight size={12} />
          </Link>
          <button 
            onClick={onClose}
            className="w-full bg-foreground text-background font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-2xl hover:opacity-90 transition-opacity"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
