import { Bot, Mail, MessageCircle, Clock, RefreshCw } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-12 bg-[#06070d] border-t border-[#f0b000]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#f0b000]/10 border border-[#f0b000]/30 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#f0b000]" />
              </div>
              <span className="font-bold font-mono text-[#f0b000] text-sm uppercase tracking-wider">Terminator Gold</span>
            </div>
            <p className="text-xs text-[#e0e2ef]/40 leading-relaxed">
              Автоматический скальпер для XAUUSD на M1. Торговая система с алгоритмической стратегией.
            </p>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold text-[#e0e2ef]/60 uppercase tracking-wider mb-4">Поддержка</h4>
            <ul className="space-y-3 text-xs text-[#e0e2ef]/40">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f0b000]" />
                Email / Telegram
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#f0b000]" />
                Ответ до 24 часов (рабочие дни)
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#f0b000]" />
                Обновления: бесплатно, пожизненно
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#f0b000]" />
                Возврат: не предусмотрен (цифровой товар)
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-[#e0e2ef]/60 uppercase tracking-wider mb-4">Навигация</h4>
            <nav className="space-y-2 text-xs">
              <a href="#features" className="block text-[#e0e2ef]/40 hover:text-[#f0b000] transition-colors">Возможности</a>
              <a href="#stats" className="block text-[#e0e2ef]/40 hover:text-[#f0b000] transition-colors">Результаты</a>
              <a href="#pricing" className="block text-[#e0e2ef]/40 hover:text-[#f0b000] transition-colors">Цена</a>
              <a href="#faq" className="block text-[#e0e2ef]/40 hover:text-[#f0b000] transition-colors">FAQ</a>
            </nav>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="text-center text-[10px] text-[#e0e2ef]/25 uppercase tracking-widest">
          © {new Date().getFullYear()} Terminator Gold · Все права защищены
        </div>
      </div>
    </footer>
  );
}
