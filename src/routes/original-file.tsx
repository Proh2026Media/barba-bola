import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/original-file")({
  component: OriginalFilePage,
});

function OriginalFilePage() {
  return (
    <div className="bg-[#121110] text-[#eae6e1] min-h-screen font-sans selection:bg-[#c5a880]/30 selection:text-white">
      {/* Estilos específicos do arquivo original embutidos */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-classic { font-family: 'Cormorant Garamond', serif; }
        .font-sans-original { font-family: 'Inter', sans-serif; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-original {
          display: flex;
          width: max-content;
          animation: marquee 55s linear infinite;
        }
      `}} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#121110]/95 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#c5a880] flex items-center justify-center rounded-sm rotate-45">
                <span className="text-[#121110] -rotate-45 font-classic text-xl font-bold">A</span>
              </div>
              <div>
                <h1 className="font-classic text-2xl tracking-tight leading-none">ARENA BARBER</h1>
                <p className="text-[9px] tracking-[0.4em] text-[#c5a880] uppercase mt-1">Sports & Heritage</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-widest font-medium text-[#c5a880]/70">
              <a href="#" className="hover:text-[#c5a880] transition-heritage">O Clube</a>
              <a href="#" className="hover:text-[#c5a880] transition-heritage">Agendamento</a>
              <a href="#" className="hover:text-[#c5a880] transition-heritage">Esportes</a>
              <a href="#" className="hover:text-[#c5a880] transition-heritage">Bar</a>
            </nav>

            <div className="flex items-center gap-6">
              <button className="relative text-[#c5a880]/80 hover:text-[#c5a880]">
                <i className="fa-regular fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c5a880] text-[#121110] text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
              </button>
              <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
              <button className="hidden sm:block text-[11px] uppercase tracking-[0.2em] font-bold border border-[#c5a880]/30 px-6 py-2.5 hover:bg-[#c5a880] hover:text-[#121110] transition-heritage">
                Membro Elite
              </button>
            </div>
          </div>
        </div>

        {/* Sports Marquee */}
        <div className="bg-[#c5a880] py-1.5 overflow-hidden border-y border-[#c5a880]/20">
          <div className="animate-marquee-original flex items-center gap-12 whitespace-nowrap text-[10px] font-bold text-[#121110] uppercase tracking-tighter">
            <span>• ÚLTIMA HORA: REAL MADRID CONFIRMA CHEGADA DE MBAPPÉ PARA A PRÓXIMA TEMPORADA</span>
            <span>• CHAMPIONS LEAGUE: SORTEIO DAS QUARTAS DE FINAL ACONTECE NESTA SEXTA EM NYON</span>
            <span>• NBA: CELTICS VENCEM LAKERS NO TD GARDEN COM 45 PONTOS DE TATUM</span>
            <span>• ESTILO: CORTE 'THE EXECUTIVE' É O MAIS PEDIDO DO MÊS NA ARENA</span>
            <span>• AVISO: RESERVAS PARA O DIA DA FINAL DA LIBERTADORES JÁ ESTÃO DISPONÍVEIS</span>
          </div>
        </div>
      </header>

      {/* Main Content (Simulando o arquivo original) */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div>
            <span className="text-[#c5a880] text-[11px] uppercase tracking-[0.5em] font-semibold mb-6 block">Desde 1924 · Tradição & Esporte</span>
            <h2 className="font-classic text-6xl md:text-8xl leading-[0.9] mb-8 italic">
              Onde a <span className="text-white not-italic font-medium">Navalha</span> encontra a <span className="text-white not-italic font-medium">Crônica</span>.
            </h2>
            <p className="text-[#c5a880]/60 text-lg max-w-lg font-light leading-relaxed mb-10">
              A Arena Barber & Sports Club não é apenas uma barbearia. É um santuário para o homem que aprecia a precisão do corte clássico e o fervor do debate esportivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#c5a880] text-[#121110] px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-heritage">
                Reservar Cadeira
              </button>
              <button className="border border-white/10 px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-heritage">
                Ver Placares
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#1a1817] border border-white/[0.05] p-2">
              <div className="w-full h-full border border-[#c5a880]/20 flex flex-col p-8">
                <div className="flex justify-between items-start mb-auto">
                  <div className="font-classic text-4xl text-[#c5a880]">Arena Journal</div>
                  <div className="text-[10px] text-right text-[#c5a880]/50 uppercase tracking-widest">
                    Edição N. 1.452<br />03 Junho 2026
                  </div>
                </div>
                
                <div className="my-10">
                  <span className="bg-[#c5a880]/10 text-[#c5a880] text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest mb-3 inline-block">Destaque do Dia</span>
                  <h3 className="font-classic text-4xl leading-tight mb-4 text-white">
                    "A elegância tática de Ancelotti: O segredo por trás da longevidade no topo."
                  </h3>
                  <p className="text-sm text-[#c5a880]/60 italic font-classic">
                    "Em uma era dominada por dados, o italiano prova que a gestão humana ainda é o maior diferencial do futebol europeu..."
                  </p>
                </div>

                <div className="pt-8 border-t border-[#c5a880]/10 flex justify-between items-center mt-auto">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-[#c5a880] font-classic text-2xl">2</div>
                      <div className="text-[8px] uppercase tracking-tighter text-[#c5a880]/50">Flamengo</div>
                    </div>
                    <div className="text-[#c5a880]/30 font-classic text-xl flex items-center">vs</div>
                    <div className="text-center">
                      <div className="text-[#c5a880] font-classic text-2xl">1</div>
                      <div className="text-[8px] uppercase tracking-tighter text-[#c5a880]/50">Palmeiras</div>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#c5a880]">Ler Crônica →</div>
                </div>
              </div>
            </div>
            {/* Decoração estilo moldura */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#c5a880]/30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#c5a880]/30 -z-10"></div>
          </div>
        </section>

        {/* Seção de Fidelidade Original */}
        <section className="py-24 border-t border-white/[0.05]">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1817] p-8 border border-[#c5a880]/10">
                <h4 className="font-classic text-2xl mb-4">Clube de Fidelidade</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-classic text-[#c5a880]">120</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880]/50">Pontos Acumulados</span>
                </div>
                <div className="w-full h-1 bg-white/5 mb-2">
                  <div className="h-full bg-[#c5a880]" style={{ width: '60%' }}></div>
                </div>
                <p className="text-[10px] text-[#c5a880]/40 italic">Troque 200 PTS por uma Barboterapia Premium</p>
              </div>

              <div className="bg-[#1a1817] p-8 border border-[#c5a880]/10">
                <h4 className="font-classic text-2xl mb-4">Favoritos do Clube</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="border border-[#c5a880]/30 px-3 py-1 text-[10px] uppercase tracking-widest">Flamengo</span>
                  <span className="border border-[#c5a880]/30 px-3 py-1 text-[10px] uppercase tracking-widest">Celtics</span>
                  <span className="border border-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-white/30">+ Adicionar</span>
                </div>
                <p className="text-[10px] text-[#c5a880]/40 italic">Receba notificações personalizadas de seus times.</p>
              </div>

              <div className="bg-[#c5a880] p-8 text-[#121110]">
                <h4 className="font-classic text-2xl mb-4">Assinatura de Estilo</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between border-b border-[#121110]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold">Corte</span>
                    <span className="text-sm font-classic">Executive Pompadour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] uppercase font-bold">Barbeiro</span>
                    <span className="text-sm font-classic">Mestre Carlos</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#121110] text-white text-[10px] uppercase tracking-widest font-bold">
                  Agendamento Rápido
                </button>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.05] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-classic text-xl mb-2">ARENA BARBER & SPORTS CLUB</h2>
            <p className="text-[10px] text-[#c5a880]/50 uppercase tracking-[0.3em]">Tradição impecável · Crônica audaz</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[#c5a880]/50 hover:text-[#c5a880] transition-heritage"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="text-[#c5a880]/50 hover:text-[#c5a880] transition-heritage"><i className="fa-brands fa-x-twitter text-xl"></i></a>
            <a href="#" className="text-[#c5a880]/50 hover:text-[#c5a880] transition-heritage"><i className="fa-brands fa-whatsapp text-xl"></i></a>
          </div>
          <div className="text-[10px] text-[#c5a880]/30 uppercase tracking-widest">
            © 2026 Arena Sports Club · All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
