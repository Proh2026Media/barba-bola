import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck, Trophy, Zap, Beer, Star, MessageSquare, Calendar, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/politica")({
  component: PoliticaSistemas,
});

function PoliticaSistemas() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-10">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-xl border-b border-border/50 p-4 flex items-center justify-between">
        <Link to="/" className="p-2.5 rounded-2xl bg-muted/30 text-muted-foreground hover:text-foreground transition-all border border-border/50">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-sm font-black uppercase tracking-widest text-foreground">Regras & Patentes</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-6 max-w-xl mx-auto space-y-10">
        {/* Intro */}
        <section className="text-center space-y-2">
          <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary border border-primary/20 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">Transparência Arena</h2>
          <p className="text-muted-foreground text-sm font-medium">Conheça o plano de carreira do cliente Arena e como cada nível te beneficia.</p>
        </section>

        {/* Hierarquia de Patentes */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">1. Hierarquia de Patentes</h3>
          </div>
          
          <div className="space-y-4">
            {/* Bronze */}
            <div className="bg-card border border-border rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-orange-600/10 border border-orange-600/20 rounded-full text-[9px] font-black text-orange-600 uppercase tracking-widest">Patente: Bronze</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">O Iniciante</h4>
                  <p className="text-xs text-muted-foreground mt-1">Nível de entrada para todos os novos membros.</p>
                </div>
                <Trophy size={24} className="text-orange-600/40" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Benefícios:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2"><CheckCircle size={12} className="text-primary" /> Agendamento via App</li>
                  <li className="text-xs flex items-center gap-2"><CheckCircle size={12} className="text-primary" /> Histórico de cortes</li>
                </ul>
              </div>
            </div>

            {/* Prata */}
            <div className="bg-card border border-border rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-slate-400/10 border border-slate-400/20 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Patente: Prata</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">O Titular</h4>
                  <p className="text-xs text-muted-foreground mt-1">Alcançado com 100 pontos acumulados.</p>
                </div>
                <Trophy size={24} className="text-slate-400/40" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Benefícios:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 font-bold"><CheckCircle size={12} className="text-primary" /> + Bronze</li>
                  <li className="text-xs flex items-center gap-2"><CheckCircle size={12} className="text-primary" /> 5% OFF em produtos do Lounge</li>
                  <li className="text-xs flex items-center gap-2"><CheckCircle size={12} className="text-primary" /> 1 Lavagem capilar gratuita por mês</li>
                </ul>
              </div>
            </div>

            {/* MVP */}
            <div className="bg-primary/5 border border-primary/20 rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-primary border border-primary/20 rounded-full text-[9px] font-black text-primary-foreground uppercase tracking-widest shadow-lg shadow-primary/20">Patente: MVP</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-xl uppercase tracking-tighter text-primary">Sócio Arena</h4>
                  <p className="text-xs text-primary/70 mt-1">O nível máximo. 500 pontos ou Assinatura.</p>
                </div>
                <Star size={28} fill="currentColor" className="text-primary" />
              </div>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Privilégios Exclusivos:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 font-black"><CheckCircle size={12} className="text-primary" /> Prioridade Total na Fila</li>
                  <li className="text-xs flex items-center gap-2 font-black"><CheckCircle size={12} className="text-primary" /> 1 Drink cortesia por atendimento</li>
                  <li className="text-xs flex items-center gap-2 font-black"><CheckCircle size={12} className="text-primary" /> IA Resenha Premium (Dicas Personalizadas)</li>
                  <li className="text-xs flex items-center gap-2 font-black italic"><CheckCircle size={12} className="text-primary" /> Acesso ao Lounge VIP (Eventos de Jogos)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diferença Assinatura vs Pontos */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">2. Pontos vs Assinatura</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-card border border-border p-5 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest mb-2">Acúmulo de Pontos (Fidelidade)</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                É o reconhecimento pela sua presença. Pontos são vitalícios e te fazem subir de patente organicamente. 
                <span className="block mt-2 font-bold text-foreground">R$ 1,00 = 1 Ponto.</span>
              </p>
            </div>
            <div className="bg-primary/10 border border-primary/20 p-5 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-primary">Assinatura Sócio Arena (MVP)</h5>
              <p className="text-xs text-primary/80 leading-relaxed">
                Para quem quer o máximo <span className="underline">agora</span>. A assinatura te coloca no topo da hierarquia instantaneamente e libera o 
                <span className="font-bold text-primary"> Plano de Cortes Ilimitados</span> (exclusivo para assinantes).
              </p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t border-border text-center">
          <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em]">Arena Barber · Club & Lounge</p>
          <p className="text-[10px] text-muted-foreground/60 mt-2">Última revisão: Junho 2026</p>
        </section>
      </main>
    </div>
  );
}
