import { BarChart3, Layers, BookOpen, MessageCircle, RefreshCw } from 'lucide-react';

const PROTECTIONS = [
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Честные метрики', desc: 'Показываем реальную просадку, а не только прибыль' },
  { icon: <Layers className="w-5 h-5" />, title: 'Два пресета', desc: 'Начинайте с безопасного режима' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'Инструкция', desc: 'Подробно описали, как управлять рисками' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'Поддержка', desc: 'Отвечаем на вопросы в течение 24 часов' },
  { icon: <RefreshCw className="w-5 h-5" />, title: 'Обновления', desc: 'Бесплатные апдейты для покупателей' },
];

export function ProtectionSection() {
  return (
    <section className="py-20 px-6 bg-[#0c0d16]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#00e676] tracking-widest uppercase">🛡 Как мы защищаем вас от рисков</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Мы не обещаем <span className="text-[#f0b000]">«золотые горы»</span>
          </h2>
          <p className="text-[#e0e2ef]/60 mt-3">Вместо этого:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROTECTIONS.map((p, i) => (
            <div key={i} className="bg-[#06070d] border border-[#00e676]/10 rounded-xl p-5 text-center hover:border-[#00e676]/25 transition-colors">
              <div className="w-10 h-10 bg-[#00e676]/10 rounded-lg flex items-center justify-center text-[#00e676] mx-auto mb-3">
                {p.icon}
              </div>
              <h3 className="text-sm font-bold text-[#e0e2ef] mb-1">{p.title}</h3>
              <p className="text-xs text-[#e0e2ef]/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
