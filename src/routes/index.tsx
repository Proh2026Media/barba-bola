import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Bell, Calendar, Compass, Feather, MessageSquare, Settings, 
  ChevronRight, Sparkles, User, Trophy, Chair, CheckCircle, Clock
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
  const [notifications, setNotifications] = useState([{
    id: 1, title: "Reserva de Atendimento", text: "Seu horário com o Mestre Carlão está confirmado hoje às 18:30.", time: "Há 10 min"
  }]);

  const NavItem = ({ id, icon: Icon, label }: any) => (
    <button 
      onClick={() => setTab(id)}
      className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all flex-1 ${tab === id ? "text-gold" : "text-muted-foreground"}`}
    >
      <Icon className="h-5 w-5 mb-1" />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#121110] text-[#eae6e1] pb-20 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#121110]/95 backdrop-blur-md border-b border-white/[0.05] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] italic font-classic font-bold text-lg">A</div>
          <div>
            <h1 className="text-sm font-classic font-bold uppercase tracking-wider text-white">Arena Barber</h1>
            <p className="text-[9px] uppercase tracking-[0.1em] text-[#8e8984]">Club & Lounge</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setTab("notifications")} className="relative text-[#8e8984]">
            <Bell size={20} />
            {notifications.length > 0 && <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#c5a880] rounded-full" />}
          </button>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="p-4 max-w-xl mx-auto space-y-6">
        {tab === "dashboard" && (
          <div className="space-y-6">
            <section className="bg-[#161513] p-6 rounded-2xl border border-white/[0.04]">
              <h2 className="text-xl font-classic font-bold text-white uppercase mb-2 italic">Boa tarde, Gabriel</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1c1a18] p-4 rounded-xl border border-white/[0.03]">
                  <p className="text-[9px] text-[#8e8984] uppercase tracking-widest">Seus Pontos</p>
                  <p className="text-lg font-classic font-bold text-[#c5a880]">{points} PTS</p>
                </div>
                <div className="bg-[#1c1a18] p-4 rounded-xl border border-white/[0.03]">
                  <p className="text-[9px] text-[#8e8984] uppercase tracking-widest">Estilo</p>
                  <p className="text-lg font-classic font-bold text-white">Degradê</p>
                </div>
              </div>
            </section>

            <section className="bg-[#161513] p-6 rounded-2xl border border-white/[0.04]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-4 font-bold">Resumo Esportivo</h3>
              {matches.map(m => (
                <div key={m.id} className="flex justify-between items-center py-3 border-b border-white/[0.03] last:border-0 text-sm">
                  <div className="font-medium text-white">{m.home} <span className="text-[#8e8984]">vs</span> {m.away}</div>
                  <div className="font-bold text-[#c5a880]">{m.scoreH} - {m.scoreA}</div>
                </div>
              ))}
            </section>
          </div>
        )}

        {tab === "agenda" && (
          <div className="bg-[#161513] p-6 rounded-2xl border border-white/[0.04] space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-bold">Novo Atendimento</h3>
            <div className="space-y-4">
              <select className="w-full bg-[#1c1a18] p-3 rounded-lg border border-white/[0.05] text-xs">
                <option>Corte Tradicional</option>
                <option>Barboterapia</option>
                <option>Combo VIP</option>
              </select>
              <button className="w-full bg-[#c5a880] text-[#121110] py-3 rounded-lg font-bold text-xs uppercase tracking-widest">Confirmar Reserva</button>
            </div>
          </div>
        )}

        {tab === "barberchat" && (
          <div className="bg-[#161513] p-6 rounded-2xl border border-white/[0.04] h-[60vh] flex flex-col">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-bold mb-4">Resenha IA (GEMINI)</h3>
            <div className="flex-1 bg-[#121110] rounded-xl p-4 overflow-y-auto mb-4 text-xs italic text-[#8e8984]">
              Fala craque! Como foi o jogo do Mengão?
            </div>
            <input placeholder="Digite sua resenha..." className="bg-[#1c1a18] p-3 rounded-lg w-full text-xs" />
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#121110] border-t border-white/[0.05] p-2 flex justify-around z-40">
        <NavItem id="dashboard" icon={Compass} label="Início" />
        <NavItem id="agenda" icon={Calendar} label="Agenda" />
        <NavItem id="barberchat" icon={MessageSquare} label="Resenha" />
        <NavItem id="admin" icon={Settings} label="Admin" />
      </nav>
    </div>
  );
}
