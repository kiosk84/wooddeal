import { Check, X } from 'lucide-react';

export function AudienceSection() {
  const suitable = [
    'Хотите автоматизировать торговлю золотом',
    'Понимаете риски торговли на M1',
    'Готовы использовать VPS для стабильной работы',
    'Имеете ECN/RAW счёт с низким спредом',
  ];

  const notSuitable = [
    'Ищете «грааль» без просадок',
    'Не готовы контролировать работу робота',
    'Ожидаете 100% успешных сделок',
    'Торговать будете на счёте со спредом >20 пунктов',
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#f0b000] tracking-widest uppercase">🎯 Для кого этот робот</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Подходит ли <span className="text-[#f0b000]">вам</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Подходит */}
          <div className="bg-[#0c0d16] border border-[#00e676]/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00e676]/10 rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-[#00e676]">Вам подойдёт</h3>
            </div>
            <ul className="space-y-4">
              {suitable.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00e676] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#e0e2ef]/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Не подходит */}
          <div className="bg-[#0c0d16] border border-[#ff5252]/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#ff5252]/10 rounded-lg flex items-center justify-center">
                <X className="w-5 h-5 text-[#ff5252]" />
              </div>
              <h3 className="text-lg font-bold text-[#ff5252]">Не покупайте</h3>
            </div>
            <ul className="space-y-4">
              {notSuitable.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#ff5252] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#e0e2ef]/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
