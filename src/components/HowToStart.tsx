const STEPS = [
  { num: '01', text: 'Оплатите товар' },
  { num: '02', text: 'Получите архив мгновенно (бот/почта)' },
  { num: '03', text: 'Скопируйте .ex5 в папку MQL5/Experts' },
  { num: '04', text: 'Загрузите пресет Safe_Conservative.set' },
  { num: '05', text: 'Запустите на демо-счёте на 3–5 дней' },
  { num: '06', text: 'Переходите на реальный счёт' },
];

export function HowToStart() {
  return (
    <section className="py-20 px-6 bg-[#0c0d16]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#00bcd4] tracking-widest uppercase">🚀 Как начать работу</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            <span className="text-[#f0b000]">6 шагов</span> до автоторговли
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="bg-[#06070d] border border-[#00bcd4]/10 rounded-xl p-6 flex items-start gap-4 hover:border-[#00bcd4]/25 transition-colors"
            >
              <span className="text-2xl font-black font-mono text-[#00bcd4]/30">{step.num}</span>
              <span className="text-sm text-[#e0e2ef]/70 pt-1">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
