import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <section className="py-16 px-6 bg-[#0c0d16]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#06070d] border border-[#ff5252]/15 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-[#ff5252]" />
            <h3 className="text-sm font-bold text-[#ff5252] uppercase tracking-wider">
              Отказ от ответственности
            </h3>
          </div>

          <div className="text-xs text-[#e0e2ef]/50 leading-relaxed space-y-3">
            <p>
              Торговля на финансовых рынках сопряжена с высоким риском потери капитала.
              Прошлые результаты не гарантируют будущую прибыль. Этот робот — инструмент
              автоматизации, а не «печатная машинка». Вы можете потерять часть или весь депозит.
            </p>
            <p>
              Всегда тестируйте на демо-счёте перед реальной торговлей.
              Используйте только те деньги, которые готовы потерять.
            </p>
            <p className="text-[#e0e2ef]/40 pt-2 border-t border-[#ff5252]/10">
              Покупая этот продукт, вы соглашаетесь с тем, что: понимаете риски торговли на форекс,
              имеете опыт работы с MetaTrader 5, самостоятельно несёте ответственность за свои
              торговые решения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
