import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Scissors, 
  CreditCard, 
  Shield, 
  Crown, 
  ChevronLeft, 
  Search,
  CheckCircle,
  Star,
  Key,
  Wine,
  Gem,
  Compass,
  BadgeCheck,
  Armchair,
  Sparkle
} from "lucide-react";

export const Route = createFileRoute("/icon-preview")({
  component: IconPreviewPage,
});

function IconPreviewPage() {
  const iconSets = [
    {
      level: "1. Classic (Fundação & Tradição)",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
      options: [
        { icon: Scissors, label: "Navalha/Tesoura", desc: "Símbolo universal do corte e fino trato." },
        { icon: Search, label: "Pente/Lupa", desc: "Simples, utilitário e elegante." },
        { icon: Star, label: "Estrela Tradicional", desc: "O básico bem feito." }
      ]
    },
    {
      level: "2. Select (Acesso & Estágio)",
      color: "text-slate-300",
      bg: "bg-slate-300/10",
      border: "border-slate-300/20",
      options: [
        { icon: CreditCard, label: "Cartão de Acesso", desc: "Estilo cartão black minimalista." },
        { icon: BadgeCheck, label: "Selo (Badge)", desc: "Certificado de qualidade/garantia." },
        { icon: Armchair, label: "Cadeira de Barbeiro", desc: "Lugar cativo reservado." }
      ]
    },
    {
      level: "3. Privilege (Regalia & Conforto)",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      options: [
        { icon: Key, label: "Chave Clássica", desc: "Acesso a privilégios e portas abertas." },
        { icon: Wine, label: "Taça / Brinde", desc: "Conforto e atendimento diferenciado." },
        { icon: Shield, label: "Escudo (Shield)", desc: "Proteção e pertencimento ao clube." }
      ]
    },
    {
      level: "4. Exclusive (Topo & Luxo)",
      color: "text-[#D4AF37]",
      bg: "bg-[#D4AF37]/10",
      border: "border-[#D4AF37]/30",
      options: [
        { icon: Crown, label: "Coroa Geométrica", desc: "Três pontas, moderno e imponente." },
        { icon: Compass, label: "Bússola (Compass Star)", desc: "Estrela guia de alto luxo." },
        { icon: Gem, label: "Diamante Line Art", desc: "Representação universal do nível máximo." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-xl border-b border-border/50 p-4 flex items-center gap-4">
        <Link to="/" className="p-2.5 rounded-2xl bg-muted/30 text-muted-foreground hover:text-foreground transition-all border border-border/50">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-sm font-black uppercase tracking-widest">Aprovação de Ícones</h1>
      </header>

      <main className="p-6 max-w-2xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Galeria de Conceitos</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Visualize as opções de ícones para cada nível do sistema de fidelidade. 
            Todos seguem a estética <span className="text-primary font-bold">Liquid Glass Premium</span>.
          </p>
        </section>

        {iconSets.map((set, setIdx) => (
          <section key={setIdx} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`h-1 w-12 rounded-full ${set.color.replace('text-', 'bg-')}`}></div>
              <h3 className={`font-black uppercase tracking-[0.2em] text-xs ${set.color}`}>{set.level}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {set.options.map((opt, optIdx) => (
                <div 
                  key={optIdx} 
                  className="bg-card/50 backdrop-blur-lg border border-white/10 p-6 rounded-[32px] shadow-xl hover:bg-white/5 transition-all group flex flex-col items-center text-center"
                >
                  <div className={`p-4 rounded-2xl border ${set.bg} ${set.color} ${set.border} mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                    <opt.icon size={32} className="drop-shadow-[0_0_8px_currentColor]" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-2">{opt.label}</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="p-8 bg-primary/5 rounded-[40px] border border-primary/20 text-center space-y-4">
          <h3 className="font-black uppercase tracking-widest text-sm">Pronto para decidir?</h3>
          <p className="text-xs text-muted-foreground">Escolha um de cada nível ou sugira mudanças na espessura e estilo.</p>
          <Link to="/" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20">
            Voltar ao Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}

export default IconPreviewPage;