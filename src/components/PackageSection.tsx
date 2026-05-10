import { FileCode, Settings, Shield, BookOpen, Video } from 'lucide-react';

const ITEMS = [
  { icon: <FileCode className="w-5 h-5" />, name: 'TerminatorGold.ex5', desc: 'Скомпилированный робот для MT5' },
  { icon: <Shield className="w-5 h-5" />, name: 'Safe_Conservative.set', desc: 'Безопасный пресет (DD ~18%, для новичков)' },
  { icon: <Settings className="w-5 h-5" />, name: 'Aggressive_HighYield.set', desc: 'Агрессивный пресет (DD ~43%, для опытных)' },
  { icon: <BookOpen className="w-5 h-5" />, name: 'QuickStart.pdf', desc: 'Пошаговая инструкция по установке' },
  { icon: <Video className="w-5 h-5" />, name: 'VideoGuide.mp4', desc: 'Видеоурок «Запуск за 10 минут»' },
];

export function PackageSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#f0b000] tracking-widest uppercase">📦 Что внутри архива</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#e0e2ef]">
            Всё для <span className="text-[#f0b000]">быстрого старта</span>
          </h2>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-[#0c0d16] border border-[#f0b000]/10 rounded-xl p-5 flex items-center gap-5 hover:border-[#f0b000]/25 transition-colors"
            >
              <div className="w-11 h-11 bg-[#f0b000]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#f0b000]">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm text-[#f0b000] font-semibold">{item.name}</div>
                <div className="text-sm text-[#e0e2ef]/50 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
