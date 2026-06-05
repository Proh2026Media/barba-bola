import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck, Trophy, Zap, Beer, Star, MessageSquare, Calendar } from "lucide-react";

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
        <h1 className="text-sm font-black uppercase tracking-widest text-foreground">Regras & Política</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      <main className="p-6 max-w-xl mx-auto space-y-8">
        {/* Intro */}
        <section className="text-center space-y-2">
          <div className="h-16 w-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary border border-primary/20 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">Transparência Arena</h2>
          <p className="text-muted-foreground text-sm font-medium">Entenda como funcionam nossos sistemas de recompensa e convivência.</p>
        </section>

        {/* System 1: Points */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">1. Sistema de Pontuação</h3>
          </div>
          <div className="bg-card border border-border rounded-[24px] p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-xl text-primary mt-1">
                <Zap size={18} />
              </div>
              <div>
                <p className="font-bold text-sm">Gasto Direto</p>
                <p className="text-xs text-muted-foreground mt-1">R$ 1,00 gasto = 1 ponto acumulado. Válido para cortes, barba e produtos do lounge.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-4">
              <div className="p-2 bg-primary/10 rounded-xl text-primary mt-1">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="font-bold text-sm">Interação & Resenha</p>
                <p className="text-xs text-muted-foreground mt-1">Participar da Resenha IA ou chats da comunidade gera 5 pontos (limite de 1 vez ao dia).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-4">
              <div className="p-2 bg-primary/10 rounded-xl text-primary mt-1">
                <Calendar size={18} />
              </div>
              <div>
                <p className="font-bold text-sm">Check-in Presencial</p>
                <p className="text-xs text-muted-foreground mt-1">Check-in na Arena em dias de jogos oficiais (Brasileirão, Champions, etc) = 10 pontos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* System 2: VIP Status */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">2. Status VIP</h3>
          </div>
          <div className="bg-card border border-border rounded-[24px] p-5 space-y-4">
            <div className="bg-muted/30 p-4 rounded-2xl border border-border/50 text-xs font-medium leading-relaxed">
              O Status VIP é o nível máximo de fidelidade na Arena Barber. Existem duas formas de ingresso:
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs font-bold italic">
                <Trophy size={14} className="text-primary shrink-0" />
                Acúmulo de 500 pontos totais (vitalício)
              </li>
              <li className="flex items-center gap-3 text-xs font-bold italic">
                <Star size={14} className="text-primary shrink-0" />
                Assinatura do Plano "Sócio Arena" (mensal)
              </li>
            </ul>
          </div>
        </section>

        {/* System 3: Benefits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">3. Benefícios Exclusivos</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: Beer, title: "Open Bar Lounge", desc: "1 Cerveja ou Drink por atendimento." },
              { icon: Star, title: "Prioridade Total", desc: "Prioridade na fila de espera e horários nobres." },
              { icon: Trophy, title: "Eventos VIP", desc: "Acesso a workshops e transmissões de jogos exclusivas." },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-card border border-border p-4 rounded-2xl">
                <item.icon size={20} className="text-primary shrink-0" />
                <div>
                  <p className="font-black text-[10px] uppercase tracking-wider">{item.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="pt-6 border-t border-border">
          <p className="text-[10px] text-muted-foreground font-medium text-center leading-relaxed">
            A Arena Barber reserva-se o direito de alterar as regras de pontuação e benefícios a qualquer momento. 
            Pontos expiram após 12 meses de inatividade. O uso indevido do sistema pode resultar em suspensão do status VIP.
            <br /><br />
            Última atualização: 05 de Junho de 2026
          </p>
        </section>
      </main>
    </div>
  );
}
