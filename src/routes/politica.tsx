import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck, Trophy, Zap, Star, CheckCircle, Crown } from "lucide-react";

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
        <h1 className="text-sm font-black uppercase tracking-widest text-foreground">A Escala do Clube</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-6 max-w-xl mx-auto space-y-10">
        {/* Intro */}
        <section className="text-center space-y-2">
          <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary border border-primary/20 mb-4">
            <Crown size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">O Padrão de Excelência</h2>
          <p className="text-muted-foreground text-sm font-medium">Conheça os níveis de exclusividade e como sua fidelidade é recompensada em cada passo.</p>
        </section>

        {/* Hierarquia de Status */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">1. Níveis de Status</h3>
          </div>
          
          <div className="space-y-4">
            {/* Classic */}
            <div className="bg-card border border-border rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-orange-400/10 border border-orange-400/20 rounded-full text-[9px] font-black text-orange-400 uppercase tracking-widest">Nível: Classic</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">O Alicerce</h4>
                  <p className="text-xs text-muted-foreground mt-1">Onde a tradição encontra a qualidade.</p>
                </div>
                <Trophy size={24} className="text-orange-400/40" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">O que garante:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-orange-400" /> Manutenção de estilo com excelência</li>
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-orange-400" /> Agendamento simplificado via App</li>
                </ul>
              </div>
            </div>

            {/* Select */}
            <div className="bg-card border border-border rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-slate-300/10 border border-slate-300/20 rounded-full text-[9px] font-black text-slate-300 uppercase tracking-widest">Nível: Select</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">Primeiro Passo Exclusivo</h4>
                  <p className="text-xs text-muted-foreground mt-1">Alcançado com 100 pontos acumulados.</p>
                </div>
                <Trophy size={24} className="text-slate-300/40" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Diferenciais:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-slate-300" /> Flexibilidade extra em horários</li>
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-slate-300" /> Atendimento prioritário no Lounge</li>
                </ul>
              </div>
            </div>

            {/* Privilege */}
            <div className="bg-card border border-border rounded-[24px] p-6 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-[9px] font-black text-cyan-400 uppercase tracking-widest">Nível: Privilege</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-tight">Experiência Superior</h4>
                  <p className="text-xs text-muted-foreground mt-1">Alcançado com 300 pontos acumulados.</p>
                </div>
                <Trophy size={24} className="text-cyan-400/40" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Privilégios:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-cyan-400" /> 10% OFF em produtos de cuidado pessoal</li>
                  <li className="text-xs flex items-center gap-2 text-foreground/80"><CheckCircle size={12} className="text-cyan-400" /> Upgrade para Barbaterapia mensal</li>
                </ul>
              </div>
            </div>

            {/* Exclusive */}
            <div className="bg-gradient-to-br from-[#D4AF37]/10 via-background to-transparent border border-[#D4AF37]/30 rounded-[24px] p-6 relative shadow-lg shadow-[#D4AF37]/5">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-[9px] font-black text-black uppercase tracking-widest shadow-md">Nível: Exclusive</span>
              <div className="mt-2 flex justify-between items-start">
                <div>
                  <h4 className="font-black text-xl uppercase tracking-tighter text-[#D4AF37]">O Topo Absoluto</h4>
                  <p className="text-xs text-[#D4AF37]/80 mt-1">500 pontos ou Assinatura Exclusive.</p>
                </div>
                <Star size={28} fill="currentColor" className="text-[#D4AF37]" />
              </div>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Máximo Prestígio:</p>
                <ul className="mt-2 space-y-2">
                  <li className="text-xs flex items-center gap-2 font-black text-foreground"><CheckCircle size={12} className="text-[#D4AF37]" /> Prioridade Máxima em todos os horários</li>
                  <li className="text-xs flex items-center gap-2 font-black text-foreground"><CheckCircle size={12} className="text-[#D4AF37]" /> Acesso Irrestrito ao Lounge VIP Exclusive</li>
                  <li className="text-xs flex items-center gap-2 font-black text-foreground italic"><CheckCircle size={12} className="text-[#D4AF37]" /> Plano de Cortes Ilimitados Mensais</li>
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
                É o reconhecimento pela sua presença contínua. Pontos são vitalícios e te fazem subir de nível organicamente. 
                <span className="block mt-2 font-bold text-foreground">R$ 1,00 = 1 Ponto.</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 p-5 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-[#D4AF37]">Assinatura Exclusive</h5>
              <p className="text-xs text-[#D4AF37]/80 leading-relaxed">
                Para quem quer o máximo hoje. A assinatura te coloca no topo da hierarquia instantaneamente e libera o 
                <span className="font-bold text-[#D4AF37]"> Plano de Cortes Ilimitados</span>, garantindo que seu visual esteja sempre no auge.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t border-border text-center">
          <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em]">Classic · Select · Privilege · Exclusive</p>
          <p className="text-[10px] text-muted-foreground/60 mt-2">Última revisão: Junho 2026</p>
        </section>
      </main>
    </div>
  );
}

export default PoliticaSistemas;