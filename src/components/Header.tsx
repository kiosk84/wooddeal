import { Bot, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#06070d]/90 border-b border-[#f0b000]/10 backdrop-blur-md h-16">
      <div className="flex justify-between items-center w-full px-6 md:px-10 h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#f0b000]/10 border border-[#f0b000]/30 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#f0b000]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#f0b000] tracking-wide font-mono uppercase">
              Terminator Gold
            </span>
            <span className="text-[10px] text-[#e0e2ef]/40 tracking-wider uppercase hidden sm:block">
              XAUUSD Scalper · M1
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase text-[#e0e2ef]/60">
          <a href="#features" className="hover:text-[#f0b000] transition-colors">Возможности</a>
          <a href="#stats" className="hover:text-[#f0b000] transition-colors">Результаты</a>
          <a href="#pricing" className="hover:text-[#f0b000] transition-colors">Цена</a>
          <a href="#faq" className="hover:text-[#f0b000] transition-colors">FAQ</a>
        </nav>

        <a
          href="#pricing"
          className="flex items-center gap-2 bg-[#f0b000] text-[#06070d] px-4 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-[#ffd740] transition-colors"
        >
          <Zap className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Купить</span>
        </a>
      </div>
    </header>
  );
}
