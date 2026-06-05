import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Scissors, Bell, Calendar, MapPin, Star, Clock, Trophy, 
  ChevronRight, Sparkles, User, Settings, Heart, MessageSquare, 
  Compass, Feather, Info, ChevronLeft 
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

  const NavItem = ({ id, icon: Icon, label, sub }: any) => (
    <button 
      onClick={() => setTab(id)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${tab === id ? "bg-gold/10 text-gold border border-gold/20" : "text-muted-foreground hover:text-white hover:bg-white/5"}`}
    >
      <span className="flex items-center gap-3 font-medium text-sm"><Icon className="h-4 w-4" /> {label}</span>
      {sub && <span className="text-[10px] font-classic tracking-widest uppercase">{sub}</span>}
      {tab === id && <ChevronRight className="h-3 w-3" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar Nav */}
      <aside className="w-72 border-r border-white/5 bg-secondary/10 flex flex-col p-6 hidden md:flex">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center font-classic text-xl italic text-primary-foreground font-bold">A</div>
          <div>
            <h1 className="font-classic text-lg font-bold uppercase tracking-tight">Arena Barber</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic">Club & Lounge</p>
          </div>
        </div>
        
        <nav className="space-y-2 flex-grow">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest pl-3 mb-2">Seções</p>
          <NavItem id="dashboard" icon={Compass} label="Painel Geral" />
          <NavItem id="agenda" icon={Calendar} label="Agendar Atendimento" />
          <NavItem id="esportes" icon={Feather} label="Noticiário & Placares" />
          <NavItem id="barberchat" icon={MessageSquare} label="Resenha Cadeira IA" sub="GEMINI" />
          <NavItem id="alertas" icon={Bell} label="Alertas Recebidos" />
          <NavItem id="admin" icon={Settings} label="Painel Barbeiro" />
        </nav>

        <div className="border-t border-white/5 pt-6 text-xs text-muted-foreground font-classic italic">
          "Onde a tradição da navalha encontra o requinte esportivo."
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-20 glass border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <h2 className="font-classic text-2xl uppercase tracking-widest">
            {tab === "dashboard" && "Painel Geral"}
            {tab === "agenda" && "Agenda"}
            {tab === "esportes" && "Esportes"}
            {tab === "barberchat" && "IA Resenha"}
            {tab === "alertas" && "Alertas"}
            {tab === "admin" && "Modo Barbeiro"}
          </h2>
          <div className="text-right">
            <p className="text-[10px] uppercase text-muted-foreground">Bem-vindo,</p>
            <p className="text-sm font-bold text-gold">Gabriel Rodrigues</p>
          </div>
        </header>

        <section className="p-8">
          {tab === "dashboard" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "FIDELIDADE", val: "120 PTS" },
                  { label: "ESTILO", val: "Degradê" },
                  { label: "PRÓXIMO", val: "14:30" },
                ].map((s, i) => (
                  <div key={i} className="glass p-6 rounded-2xl">
                    <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-2">{s.label}</p>
                    <p className="font-classic text-2xl text-gold">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="glass p-8 rounded-2xl">
                <h3 className="font-classic text-xl mb-4">Sintonizador de Jogos</h3>
                {matches.map((m, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <span className="text-xs font-bold">{m.home} vs {m.away}</span>
                    <span className="text-gold font-bold">{m.scoreH} - {m.scoreA}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "barberchat" && (
            <div className="glass h-[600px] flex flex-col rounded-2xl">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-4 rounded-xl max-w-sm ${msg.role === 'user' ? 'bg-gold text-primary-foreground' : 'bg-secondary'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-white/5 flex gap-2">
                <input 
                  className="flex-1 bg-secondary rounded-lg px-4 py-2 outline-none" 
                  value={resenha} onChange={(e) => setResenha(e.target.value)}
                  placeholder="Pergunte à IA..."
                />
                <button onClick={handleResenha} className="bg-gold text-black p-2 rounded-lg"><MessageSquare size={18} /></button>
              </div>
            </div>
          )}

          {tab === "admin" && (
            <div className="space-y-6">
              <button onClick={() => alert("GOL!")} className="glass p-4 rounded-xl text-gold border-gold w-full text-left">⚽ Simular Gol</button>
            </div>
          )}
          
          {/* Add other tabs content here... */}
        </section>
      </main>
    </div>
  );
}