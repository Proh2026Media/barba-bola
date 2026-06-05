import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Trophy, Star, Zap, MessageSquare, CheckCircle, Crown, Shield, CreditCard, Scissors, Armchair, BadgeCheck, Sparkle, Gem } from "lucide-react";

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
          <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary border border-primary/20 mb-4 shadow-xl">
            <Crown size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">O Padrão de Excelência</h2>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed italic">Conheça os níveis de exclusividade e como sua fidelidade é recompensada em cada passo.</p>
        </section>

        {/* Hierarquia de Status */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">1. Níveis de Status</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Classic */}
            <div className="bg-card/50 p-5 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-orange-400/10 rounded-2xl text-orange-400 border border-orange-400/20 shadow-inner group-hover:scale-110 transition-transform">
                  <Armchair size={20} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm text-orange-400">Nível Classic</h3>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">0 - 99 Pontos</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">O alicerce da Arena: Tradição e manutenção impecável do seu estilo com o padrão de qualidade que você merece.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-orange-400" /> Manutenção do visual com excelência
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-orange-400" /> Agendamento simplificado via App
                </div>
              </div>
            </div>

            {/* Select */}
            <div className="bg-card/50 p-5 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-slate-300/10 rounded-2xl text-slate-300 border border-slate-300/20 shadow-inner group-hover:scale-110 transition-transform">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm text-slate-300">Nível Select</h3>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">100 - 299 Pontos</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">Conveniência e agilidade: Prioridade na agenda e lugar cativo na Arena para quem valoriza seu tempo.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-slate-300" /> Flexibilidade extra em horários
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-slate-300" /> Atendimento prioritário no Lounge
                </div>
              </div>
            </div>

            {/* Privilege */}
            <div className="bg-card/50 p-5 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-cyan-400/10 rounded-2xl text-cyan-400 border border-cyan-400/20 shadow-inner group-hover:scale-110 transition-transform">
                  <Sparkle size={20} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm text-cyan-400">Nível Privilege</h3>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">300 - 499 Pontos</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">Um novo patamar de regalias: Descontos em produtos premium e atendimento regado a benefícios exclusivos.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-cyan-400" /> 10% OFF em produtos de cuidado pessoal
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-foreground/80">
                  <CheckCircle size={10} className="text-cyan-400" /> Bebida de cortesia em cada visita
                </div>
              </div>
            </div>

            {/* Exclusive */}
            <div className="bg-[#D4AF37]/5 p-6 rounded-[32px] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-lg relative overflow-hidden ring-1 ring-[#D4AF37]/20 group">
              <div className="absolute -right-4 -top-4 opacity-10 transition-transform group-hover:scale-110">
                <Gem size={80} fill="currentColor" className="text-[#D4AF37]" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-[#D4AF37]/20 rounded-2xl text-[#D4AF37] border border-[#D4AF37]/30 shadow-inner group-hover:scale-110 transition-transform">
                  <Gem size={20} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm text-[#D4AF37]">Nível Exclusive</h3>
                  <p className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">500+ Pontos ou Assinatura</p>
                </div>
              </div>
              <p className="text-xs text-foreground/90 font-medium leading-relaxed mb-5">O topo da experiência Arena Barber: Acesso total, prioridade absoluta e benefícios de elite.</p>
              <ul className="space-y-3">
                <li className="text-[10px] font-black flex items-center gap-3">
                  <div className="p-1 bg-[#D4AF37]/20 rounded-lg"><CheckCircle size={12} className="text-[#D4AF37]" /></div>
                  Cortes Ilimitados Mensais (Plano Exclusivo)
                </li>
                <li className="text-[10px] font-black flex items-center gap-3">
                  <div className="p-1 bg-[#D4AF37]/20 rounded-lg"><CheckCircle size={12} className="text-[#D4AF37]" /></div>
                  Acesso Irrestrito ao Lounge VIP Exclusive
                </li>
                <li className="text-[10px] font-black flex items-center gap-3">
                  <div className="p-1 bg-[#D4AF37]/20 rounded-lg"><CheckCircle size={12} className="text-[#D4AF37]" /></div>
                  Prioridade Máxima em todos os horários
                </li>
              </ul>
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
            <div className="bg-card/30 border border-border/50 p-6 rounded-[24px] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={16} className="text-primary" />
                <h5 className="text-[10px] font-black uppercase tracking-widest">Acúmulo Vitalício</h5>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reconhecimento pela sua presença contínua. Pontos são vitalícios e te fazem subir de nível organicamente. 
                <span className="block mt-2 font-black text-foreground bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 inline-block">R$ 1,00 = 1 Ponto</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 p-6 rounded-[24px] backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <Crown size={32} fill="currentColor" className="text-[#D4AF37]" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} fill="currentColor" className="text-[#D4AF37]" />
                <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Assinatura Exclusive</h5>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                O topo da hierarquia instantaneamente. Libera o <span className="font-black text-[#D4AF37]">Plano de Cortes Ilimitados</span> e acesso total ao Lounge VIP. Ideal para quem quer o melhor sem esperar.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-10 border-t border-border/50 text-center">
          <div className="flex justify-center gap-4 mb-4 grayscale opacity-30">
            <Scissors size={16} />
            <CreditCard size={16} />
            <Shield size={16} />
            <Crown size={16} />
          </div>
          <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.4em]">Classic · Select · Privilege · Exclusive</p>
          <p className="text-[10px] text-muted-foreground/40 mt-3 font-medium">Arena Barber Club & Lounge © 2026</p>
        </section>
      </main>
    </div>
  );
}

export default PoliticaSistemas;