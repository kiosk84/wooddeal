import { Cpu, Eye, Layers, Rocket } from 'lucide-react';

const FEATURES = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Автоматизация',
    desc: 'Робот торгует за вас круглосуточно (пн-пт). Без эмоций, без усталости, без пропущенных входов.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Прозрачность',
    desc: 'Вся логика на истории, никаких «чёрных ящиков». Каждая сделка видна и объяснима.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Два режима',
    desc: 'Безопасный для старта (DD ~18%) и агрессивный для опытных (DD ~43%).',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Быстрый старт',
    desc: 'Установка за 10 минут, первая сделка через час. Подробная инструкция + видеогайд.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#f0b000] tracking-widest uppercase">🔥 Почему это стоит вашего внимания</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Устали сидеть у монитора
            <br />
            <span className="text-[#f0b000]">и ловить движения золота?</span>
          </h2>
          <p className="text-[#e0e2ef]/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Terminator Gold автоматически открывает и закрывает сделки по строгой алгоритмической стратегии.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="bg-[#0c0d16] border border-[#f0b000]/10 rounded-xl p-6 hover:border-[#f0b000]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#f0b000]/10 rounded-lg flex items-center justify-center text-[#f0b000] mb-4 group-hover:bg-[#f0b000]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#e0e2ef]">{f.title}</h3>
              <p className="text-sm text-[#e0e2ef]/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
