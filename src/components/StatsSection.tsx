export function StatsSection() {
  const rows = [
    { label: 'Чистая прибыль', value: '+5 266$', sub: 'с 300$ депозита', positive: true },
    { label: 'Всего сделок', value: '3 672', sub: null, positive: null },
    { label: 'Успешных сделок', value: '72.9%', sub: null, positive: true },
    { label: 'Просадка (Safe)', value: '~18%', sub: null, positive: null },
    { label: 'Просадка (Aggressive)', value: '43%', sub: null, positive: null },
    { label: 'Profit Factor', value: '1.26', sub: null, positive: true },
    { label: 'Коэффициент Шарпа', value: '17.49', sub: null, positive: true },
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-[#0c0d16] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#00bcd4] tracking-widest uppercase">📊 Результаты тестирования</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            6 месяцев, <span className="text-[#f0b000]">99% качество</span> данных
          </h2>
        </div>

        <div className="bg-[#06070d] border border-[#f0b000]/10 rounded-xl overflow-hidden glow-gold">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th>Показатель</th>
                <th className="text-right">Значение</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#f0b000]/5 transition-colors">
                  <td className="text-[#e0e2ef]/70 !font-sans">{r.label}</td>
                  <td className="text-right">
                    <span className={
                      r.positive === true ? 'text-[#00e676]' :
                      r.positive === false ? 'text-[#ff5252]' :
                      'text-[#e0e2ef]'
                    }>
                      {r.value}
                    </span>
                    {r.sub && <span className="text-[#e0e2ef]/40 text-xs ml-2">({r.sub})</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[11px] text-[#e0e2ef]/30 mt-6">
          ⚠️ Важно: Это результаты на исторических данных. Реальная торговля может отличаться. Мы не гарантируем прибыль.
        </p>
      </div>
    </section>
  );
}
