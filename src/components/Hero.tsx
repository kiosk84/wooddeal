import type { ReactNode } from 'react';
import { ArrowDown, TrendingUp, Shield, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-16 bg-grid">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f0b000]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00bcd4]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#f0b000]/10 border border-[#f0b000]/20 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-[#00e676] rounded-full animate-pulse" />
          <span className="text-xs font-mono text-[#f0b000] tracking-wider">ПИЛОТНАЯ ВЕРСИЯ · ОСТАЛОСЬ 30 МЕСТ</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#f0b000] text-glow-gold leading-[0.9] tracking-tight">
          TERMINATOR
          <br />
          <span className="text-[#e0e2ef]">GOLD</span>
        </h1>

        <p className="text-lg md:text-xl text-[#e0e2ef]/70 max-w-2xl leading-relaxed">
          Автоматический скальпер для <span className="text-[#f0b000] font-semibold">XAUUSD</span> на M1.
          Торговая система с <span className="text-[#00e676] font-semibold font-mono">73%</span> успешных сделок.
          Работает 24/5, пока вы занимаетесь своими делами.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-4">
          <MetricCard icon={<TrendingUp className="w-5 h-5" />} value="+5 266$" label="Чистая прибыль" color="green" />
          <MetricCard icon={<Shield className="w-5 h-5" />} value="72.9%" label="Успешных сделок" color="gold" />
          <MetricCard icon={<Clock className="w-5 h-5" />} value="24/5" label="Автоторговля" color="cyan" />
          <MetricCard icon={<TrendingUp className="w-5 h-5" />} value="1.26" label="Profit Factor" color="gold" />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="#pricing"
            className="bg-[#f0b000] text-[#06070d] px-8 py-4 text-sm font-bold uppercase tracking-wider rounded pulse-gold hover:bg-[#ffd740] transition-colors"
          >
            Купить за 1 490 ₽
          </a>
          <a
            href="#stats"
            className="flex items-center gap-2 border border-[#e0e2ef]/20 text-[#e0e2ef]/70 px-6 py-4 text-sm uppercase tracking-wider rounded hover:border-[#f0b000]/40 hover:text-[#f0b000] transition-colors"
          >
            Смотреть результаты
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Disclaimer mini */}
        <p className="text-[10px] text-[#e0e2ef]/30 max-w-md mt-2">
          ⚠️ Результаты на исторических данных. Реальная торговля может отличаться. Мы не гарантируем прибыль.
        </p>
      </div>
    </section>
  );
}

function MetricCard({ icon, value, label, color }: { icon: ReactNode; value: string; label: string; color: 'green' | 'gold' | 'cyan' }) {
  const colors = {
    green: { bg: 'bg-[#00e676]/10', border: 'border-[#00e676]/20', text: 'text-[#00e676]' },
    gold: { bg: 'bg-[#f0b000]/10', border: 'border-[#f0b000]/20', text: 'text-[#f0b000]' },
    cyan: { bg: 'bg-[#00bcd4]/10', border: 'border-[#00bcd4]/20', text: 'text-[#00bcd4]' },
  };
  const c = colors[color];

  return (
    <div className={`${c.bg} border ${c.border} rounded-lg p-4 flex flex-col items-center gap-2`}>
      <div className={c.text}>{icon}</div>
      <span className={`text-2xl font-bold font-mono ${c.text}`}>{value}</span>
      <span className="text-[11px] text-[#e0e2ef]/50 uppercase tracking-wider">{label}</span>
    </div>
  );
}
