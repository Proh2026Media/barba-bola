import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, Bell, Trophy, Sparkles, MessageSquare, Calendar, ChevronRight, Settings, Heart, MapPin, Tv, User, CheckCheck, Flame } from "lucide-react";

export const Route = createFileRoute("/")({
  component: UnifiedArenaApp,
});

function UnifiedArenaApp() {
  const [tab, setTab] = useState<"clube" | "agenda" | "esportes" | "admin">("clube");
  const [points] = useState(120);
  const [resenha, setResenha] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Fala craque! No que posso ajudar hoje?' }
  ]);

  const handleResenha = () => {
    if (!resenha) return;
    setChatHistory([...chatHistory, { role: 'user', text: resenha }]);
    setResenha("");
  };

  return (
    <div className="bg-[#121110] text-[#eae6e1] min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;700&display=swap');
        .font-classic { font-family: 'Cormorant Garamond', serif; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 55s linear infinite; }
      `}} />

      {/* Header & Marquee */}
      <header className="sticky top-0 z-50 bg-[#121110]/95 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#c5a880] flex items-center justify-center rounded-sm rotate-45">
              <span className="text-[#121110] -rotate-45 font-classic text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="font-classic text-2xl tracking-tight leading-none text-white">ARENA BARBER</h1>
              <p className="text-[9px] tracking-[0.4em] text-[#c5a880] uppercase mt-1">Sports & Heritage</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-[#c5a880]">
            <button onClick={() => setTab("agenda")} className="hover:text-white transition">Agendamento</button>
            <button onClick={() => setTab("esportes")} className="hover:text-white transition">Resultados</button>
            <button onClick={() => setTab("clube")} className="hover:text-white transition">O Clube</button>
            <button onClick={() => setTab("admin")} className="hover:text-white transition">Painel</button>
          </nav>
        </div>

        <div className="bg-[#c5a880] py-1.5 overflow-hidden border-y border-[#c5a880]/20">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap text-[10px] font-bold text-[#121110] uppercase tracking-tighter">
            <span>• AO VIVO: FLAMENGO 2 X 1 PALMEIRAS (82')</span>
            <span>• NBA: CELTICS VENCEM LAKERS NO TD GARDEN</span>
            <span>• ESTILO: CORTE 'THE EXECUTIVE' É O MAIS PEDIDO</span>
            <span>• BOLETIM: SORTEIO CHAMPIONS LEAGUE AMANHÃ</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {tab === "clube" && (
          <section className="space-y-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1817] p-8 border border-[#c5a880]/10">
                <h4 className="font-classic text-2xl mb-4 text-white">Clube de Fidelidade</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-classic text-[#c5a880]">{points}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880]/50">PTS</span>
                </div>
                <div className="w-full h-1 bg-white/5"><div className="h-full bg-[#c5a880]" style={{ width: '60%' }} /></div>
              </div>

              <div className="bg-[#1a1817] p-8 border border-[#c5a880]/10">
                <h4 className="font-classic text-2xl mb-4 text-white">Favoritos</h4>
                <div className="flex gap-2">
                  <span className="border border-[#c5a880]/30 px-3 py-1 text-[10px] uppercase text-[#c5a880]">Flamengo</span>
                  <span className="border border-[#c5a880]/30 px-3 py-1 text-[10px] uppercase text-[#c5a880]">Celtics</span>
                </div>
              </div>

              <div className="bg-[#c5a880] p-8 text-[#121110]">
                <h4 className="font-classic text-2xl mb-4">IA Resenha</h4>
                <div className="h-24 overflow-y-auto mb-4 text-sm font-light italic">
                  {chatHistory.map((m, i) => <div key={i}>{m.text}</div>)}
                </div>
                <div className="flex gap-2">
                  <input className="w-full bg-[#121110]/10 p-2 text-xs" value={resenha} onChange={e => setResenha(e.target.value)} />
                  <button onClick={handleResenha}><MessageSquare size={16} /></button>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "admin" && (
          <section className="bg-[#1a1817] border border-[#c5a880]/20 p-12 text-center">
            <h2 className="font-classic text-5xl mb-8 text-white">Painel do Barbeiro</h2>
            <div className="grid grid-cols-4 gap-8">
              {[{l: "Fila", v: "3"}, {l: "Receita", v: "R$ 840"}, {l: "Cortes", v: "12"}, {l: "Leads", v: "8"}].map(s => (
                <div key={s.l} className="border border-white/5 p-6">
                  <div className="text-4xl text-[#c5a880]">{s.v}</div>
                  <div className="text-[10px] uppercase text-[#c5a880]/50 tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
