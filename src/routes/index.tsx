import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Scissors, Bell, Calendar, MapPin, Star, Clock, Trophy, 
  ChevronRight, Sparkles, User, Settings, Heart, MessageSquare, 
  Compass, Feather, Info, ChevronLeft, Menu
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const barbers = [
  { name: "Rafael Costa", role: "Master Barber", rating: 4.9, slot: "14:30" },
  { name: "Diego Almeida", role: "Especialista Fade", rating: 4.8, slot: "15:00" },
  { name: "Lucas Pereira", role: "Barba & Navalha", rating: 5.0, slot: "16:15" },
];

const matches = [
  { league: "Brasileirão", home: "Flamengo", away: "Palmeiras", scoreH: 2, scoreA: 1, status: "AO VIVO", min: "82'" },
  { league: "La Liga", home: "Real Madrid", away: "Barcelona", scoreH: 1, scoreA: 1, status: "AO VIVO", min: "63'" },
  { league: "Premier League", home: "Arsenal", away: "Man City", scoreH: 0, scoreA: 2, status: "ENC", min: "FT" },
];

function Index() {
  const [tab, setTab] = useState("dashboard");
  const [resenha, setResenha] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Fala craque! O que vamos resenhar hoje? O jogo ou o estilo?' }
  ]);

  const handleResenha = () => {
    if (!resenha) return;
    setChatHistory([...chatHistory, { role: 'user', text: resenha }]);
    setResenha("");
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Essa é uma boa pergunta. Analisando as estatísticas aqui..." }]);
    }, 1000);
  };

  const NavItem = ({ id, icon: Icon, label }: any) => (
    <button 
      onClick={() => setTab(id)}
      className={`flex flex-col md:flex-row items-center justify-center md:justify-between px-2 md:px-4 py-2 md:py-3 rounded-xl transition-all flex-1 md:flex-none ${tab === id ? "bg-gold/15 text-gold border border-gold/20" : "text-muted-foreground hover:text-white"}`}
    >
      <Icon className="h-5 w-5 md:h-4 md:w-4 mb-1 md:mb-0 md:mr-3" />
      <span className="font-medium text-[10px] md:text-sm">{label}</span>
      {tab === id && <ChevronRight className="hidden md:block h-3 w-3 ml-2" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row pb-20 md:pb-0">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-white/5 glass sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full gradient-gold flex items-center justify-center font-classic text-sm italic text-primary-foreground font-bold">A</div>
          <h1 className="font-classic text-sm font-bold uppercase">Arena Barber</h1>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-gold" />
          <User className="h-5 w-5 text-muted-foreground" />
        </div>
      </header>

      {/* Desktop/Sidebar Nav - Becomes Bottom Bar on Mobile */}
      <aside className="fixed bottom-0 left-0 right-0 md:relative md:w-72 border-t md:border-t-0 md:border-r border-white/5 bg-secondary/10 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none flex flex-col p-2 md:p-6 z-40">
        <div className="hidden md:flex items-center gap-3 mb-10">
          <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center font-classic text-xl italic text-primary-foreground font-bold">A</div>
          <div>
            <h1 className="font-classic text-lg font-bold uppercase tracking-tight">Arena Barber</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic">Club & Lounge</p>
          </div>
        </div>
        
        <nav className="flex flex-row md:flex-col justify-around md:justify-start md:space-y-2 gap-1 w-full">
          <NavItem id="dashboard" icon={Compass} label="Início" />
          <NavItem id="agenda" icon={Calendar} label="Agenda" />
          <NavItem id="esportes" icon={Feather} label="Esportes" />
          <NavItem id="barberchat" icon={MessageSquare} label="Resenha" />
          <NavItem id="admin" icon={Settings} label="Admin" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="hidden md:flex sticky top-0 z-20 glass border-b border-white/5 px-8 py-4 items-center justify-between">
          <h2 className="font-classic text-2xl uppercase tracking-widest">
            {tab === "dashboard" && "Painel Geral"}
            {tab === "agenda" && "Agenda"}
            {tab === "esportes" && "Esportes"}
            {tab === "barberchat" && "IA Resenha"}
            {tab === "admin" && "Modo Barbeiro"}
          </h2>
          <div className="text-right">
            <p className="text-[10px] uppercase text-muted-foreground">Bem-vindo,</p>
            <p className="text-sm font-bold text-gold">Gabriel Rodrigues</p>
          </div>
        </header>

        <section className="p-4 md:p-8 max-w-4xl mx-auto">
          {tab === "dashboard" && (
            <div className="space-y-6">
              <div className="md:hidden mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Membro VIP</span>
                <h2 className="font-classic text-xl font-bold">Boa tarde, Gabriel</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {[
                  { label: "PONTOS", val: "120" },
                  { label: "ESTILO", val: "Fade" },
                  { label: "HORÁRIO", val: "14:30", full: true },
                ].map((s, i) => (
                  <div key={i} className={`glass p-4 md:p-6 rounded-2xl border border-white/5 ${s.full ? 'col-span-2 md:col-span-1' : ''}`}>
                    <p className="text-[9px] md:text-[10px] text-muted-foreground tracking-widest uppercase mb-1 md:mb-2">{s.label}</p>
                    <p className="font-classic text-lg md:text-2xl text-gold">{s.val}</p>
                  </div>
                ))}
              </div>

              <div className="glass p-5 md:p-8 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-classic text-lg md:text-xl">Sintonizador de Jogos</h3>
                  <div className="flex items-center gap-1 text-[10px] text-destructive animate-pulse font-bold">
                    <div className="h-1.5 w-1.5 bg-destructive rounded-full" /> AO VIVO
                  </div>
                </div>
                <div className="space-y-4">
                  {matches.map((m, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                      <div>
                        <p className="text-[9px] text-muted-foreground uppercase font-bold">{m.league}</p>
                        <p className="text-xs font-bold">{m.home} vs {m.away}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-bold text-sm">{m.scoreH} - {m.scoreA}</p>
                        <p className="text-[9px] text-muted-foreground italic">{m.min}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full gradient-gold py-4 rounded-2xl font-bold text-sm text-primary-foreground shadow-lg shadow-gold/20 flex items-center justify-center gap-2">
                <Calendar size={18} /> NOVO AGENDAMENTO
              </button>
            </div>
          )}

          {tab === "barberchat" && (
            <div className="flex flex-col h-[70vh] md:h-[600px] glass rounded-2xl border border-white/5 overflow-hidden">
              <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full gradient-gold flex items-center justify-center"><Sparkles size={14} className="text-black" /></div>
                  <span className="font-classic font-bold text-sm tracking-wide">RESENHA IA</span>
                </div>
                <span className="text-[9px] font-bold text-gold/50">GEMINI 1.5</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/5">
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 md:p-4 rounded-2xl max-w-[85%] text-xs leading-relaxed ${msg.role === 'user' ? 'bg-gold text-primary-foreground font-medium' : 'bg-secondary/80 border border-white/5'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/5 flex gap-2 glass">
                <input 
                  className="flex-1 bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 outline-none text-xs focus:border-gold/30 transition-all" 
                  value={resenha} onChange={(e) => setResenha(e.target.value)}
                  placeholder="Fale com a IA..."
                  onKeyDown={(e) => e.key === 'Enter' && handleResenha()}
                />
                <button onClick={handleResenha} className="bg-gold text-black p-3 rounded-xl shadow-lg shadow-gold/20"><MessageSquare size={18} /></button>
              </div>
            </div>
          )}

          {tab === "agenda" && (
            <div className="space-y-6">
              <h3 className="font-classic text-xl mb-4">Escolha seu Barbeiro</h3>
              <div className="grid grid-cols-1 gap-4">
                {barbers.map((b) => (
                  <div key={b.name} className="glass p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center font-bold text-black">{b.name[0]}</div>
                      <div>
                        <p className="font-bold text-sm">{b.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">{b.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold text-xs">{b.slot}</p>
                      <button className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">Reservar <ChevronRight size={12} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "admin" && (
            <div className="space-y-4">
              <h3 className="font-classic text-xl">Gestão Rápida</h3>
              <button onClick={() => alert("GOL!")} className="glass p-5 rounded-2xl text-gold border-gold/30 w-full text-left font-bold flex items-center gap-3">
                <Trophy size={20} /> SIMULAR GOL (NOTIFICAÇÃO)
              </button>
              <div className="glass p-5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-muted-foreground uppercase mb-4">Próximos Clientes</p>
                <div className="space-y-3">
                   <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                      <span>Gabriel R.</span>
                      <span className="text-gold">14:30</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span>Matheus S.</span>
                      <span className="text-muted-foreground">15:15</span>
                   </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}