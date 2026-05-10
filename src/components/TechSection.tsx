import { Monitor, BarChart3, Clock, Wallet, Server, Activity } from 'lucide-react';

const REQUIREMENTS = [
  { icon: <Monitor className="w-5 h-5" />, param: 'Терминал', value: 'MetaTrader 5 (Build 3000+)' },
  { icon: <BarChart3 className="w-5 h-5" />, param: 'Инструмент', value: 'XAUUSD (Gold)' },
  { icon: <Clock className="w-5 h-5" />, param: 'Таймфрейм', value: 'M1 (обязательно)' },
  { icon: <Activity className="w-5 h-5" />, param: 'Тип счёта', value: 'ECN/RAW (спред ≤15 пт)' },
  { icon: <Wallet className="w-5 h-5" />, param: 'Депозит', value: '$300 (Safe) / $500+ (Aggressive)' },
  { icon: <Server className="w-5 h-5" />, param: 'VPS', value: 'Рекомендуется (задержка <10 мс)' },
];

export function TechSection() {
  return (
    <section className="py-20 px-6 bg-[#0c0d16]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#00bcd4] tracking-widest uppercase">⚙️ Технические требования</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Что нужно <span className="text-[#f0b000]">для запуска</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REQUIREMENTS.map((r, i) => (
            <div key={i} className="bg-[#06070d] border border-[#f0b000]/10 rounded-xl p-5 flex items-start gap-4 hover:border-[#f0b000]/25 transition-colors">
              <div className="w-10 h-10 bg-[#00bcd4]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#00bcd4]">
                {r.icon}
              </div>
              <div>
                <div className="text-xs text-[#e0e2ef]/40 uppercase tracking-wider mb-1">{r.param}</div>
                <div className="text-sm font-mono text-[#e0e2ef]">{r.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
