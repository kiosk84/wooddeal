import { Zap, Gift, MessageSquare, RefreshCw, Users } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#f0b000] tracking-widest uppercase">💰 Стоимость</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Пилотная цена
          </h2>
        </div>

        {/* Pricing card */}
        <div className="bg-[#0c0d16] border border-[#f0b000]/20 rounded-2xl overflow-hidden glow-gold-strong">
          <div className="p-8 md:p-12 text-center">
            {/* Price */}
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-black text-[#f0b000] font-mono">
                1 490 ₽
              </div>
              <div className="text-[#e0e2ef]/40 text-sm mt-2">~$16 · Пилотная цена</div>
            </div>

            {/* Comparison */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-mono">
              <div className="bg-[#06070d] border border-[#e0e2ef]/10 rounded-lg px-4 py-2">
                <span className="text-[#e0e2ef]/40">После пилота:</span>{' '}
                <span className="text-[#e0e2ef]/60 line-through">2 990 ₽</span>
              </div>
              <div className="bg-[#06070d] border border-[#e0e2ef]/10 rounded-lg px-4 py-2">
                <span className="text-[#e0e2ef]/40">MQL5 Market:</span>{' '}
                <span className="text-[#e0e2ef]/60 line-through">$49–59</span>
              </div>
            </div>

            {/* Why cheap */}
            <p className="text-sm text-[#e0e2ef]/50 mb-8 max-w-md mx-auto leading-relaxed">
              Мы запускаем пилотную группу из <span className="text-[#f0b000] font-semibold">20–30 человек</span>, чтобы собрать отзывы и доработать продукт. После этого цена вырастет в 2 раза.
            </p>

            {/* CTA */}
            <a
                          href="https://t.me/ticktack_robot"
              className="inline-flex items-center gap-3 bg-[#f0b000] text-[#06070d] px-10 py-4 text-base font-bold uppercase tracking-wider rounded-lg pulse-gold hover:bg-[#ffd740] transition-colors"
            >
              <Zap className="w-5 h-5" />
              Купить за 1 490 ₽
            </a>

            <p className="text-xs text-[#e0e2ef]/30 mt-4">
              Пилотная цена действует до первых 30 продаж
            </p>
          </div>

          {/* What you get */}
          <div className="border-t border-[#f0b000]/10 bg-[#06070d]/50 p-8">
            <div className="text-xs text-[#e0e2ef]/40 uppercase tracking-wider mb-4 text-center">После покупки вы получите:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              {[
                { icon: <Gift className="w-4 h-4" />, text: 'Мгновенный доступ к файлам' },
                { icon: <Zap className="w-4 h-4" />, text: 'Пошаговую инструкцию' },
                { icon: <Users className="w-4 h-4" />, text: 'Закрытый чат покупателей' },
                { icon: <RefreshCw className="w-4 h-4" />, text: 'Бесплатные обновления' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#e0e2ef]/60">
                  <span className="text-[#f0b000]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
