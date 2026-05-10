import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Нужен ли мощный компьютер?',
    a: 'Нет, достаточно любого ПК или VPS за $5–10/мес.',
  },
  {
    q: 'Можно ли торговать на другом инструменте?',
    a: 'Робот оптимизирован под XAUUSD. Другие пары не тестировались.',
  },
  {
    q: 'Что если робот начнёт сливать?',
    a: 'Используйте Safe-пресет, контролируйте депозит, ставьте максимальную дневную просадку.',
  },
  {
    q: 'Есть ли гарантия прибыли?',
    a: 'Нет. Никто не может гарантировать прибыль на форекс.',
  },
  {
    q: 'Можно ли вернуть деньги?',
    a: 'Нет, так как это цифровой товар, который можно скопировать.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#f0b000] tracking-widest uppercase">❓ Частые вопросы</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">FAQ</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#0c0d16] border border-[#f0b000]/10 rounded-xl overflow-hidden hover:border-[#f0b000]/20 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#e0e2ef] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f0b000] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#e0e2ef]/60 leading-relaxed border-t border-[#f0b000]/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
